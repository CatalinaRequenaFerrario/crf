'use server'

import { redirect } from 'next/navigation'
import { checkPassword, createAdminSession, clearAdminSession } from '../lib/admin-auth'

export type LoginState = { error?: string } | undefined

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
    const password = String(formData.get('password') ?? '')

    if (!checkPassword(password)) {
        return { error: 'Contraseña incorrecta' }
    }

    await createAdminSession()
    redirect('/admin')
}

export async function logout() {
    await clearAdminSession()
    redirect('/admin/login')
}
