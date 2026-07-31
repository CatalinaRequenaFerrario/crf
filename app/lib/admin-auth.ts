import 'server-only'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const ADMIN_COOKIE = 'nagasaki_admin'

async function sha256(text: string) {
    const data = new TextEncoder().encode(text)
    const hash = await crypto.subtle.digest('SHA-256', data)
    return Array.from(new Uint8Array(hash))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('')
}

function requiredEnv(name: string) {
    const value = process.env[name]
    if (!value) throw new Error(`Falta la variable de entorno ${name}`)
    return value
}

async function expectedToken() {
    const password = requiredEnv('ADMIN_PASSWORD')
    const secret = requiredEnv('ADMIN_COOKIE_SECRET')
    return sha256(`${password}:${secret}`)
}

export function checkPassword(password: string) {
    return password === process.env.ADMIN_PASSWORD
}

export async function createAdminSession() {
    const token = await expectedToken()
    const store = await cookies()
    store.set(ADMIN_COOKIE, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
    })
}

export async function clearAdminSession() {
    const store = await cookies()
    store.delete(ADMIN_COOKIE)
}

export async function isAdminAuthenticated() {
    const store = await cookies()
    const cookie = store.get(ADMIN_COOKIE)?.value
    if (!cookie) return false
    return cookie === (await expectedToken())
}

export async function requireAdmin() {
    if (!(await isAdminAuthenticated())) {
        redirect('/admin/login')
    }
}
