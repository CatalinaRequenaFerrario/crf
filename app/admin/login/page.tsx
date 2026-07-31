'use client'

import { useActionState } from 'react'
import { login } from '../actions'

export default function AdminLoginPage() {
    const [state, formAction, pending] = useActionState(login, undefined)

    return (
        <main className="flex min-h-screen items-center justify-center bg-black px-6">
            <form action={formAction} className="w-full max-w-sm rounded-md border border-neutral-800 p-8">
                <h1 className="font-mono text-sm uppercase tracking-widest text-neutral-400">Admin</h1>
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    autoFocus
                    required
                    className="mt-6 w-full rounded-md border border-neutral-700 bg-black px-4 py-3 text-[#f3ede2] outline-none focus:border-white"
                />
                {state?.error && <p className="mt-2 text-sm text-red-400">{state.error}</p>}
                <button
                    type="submit"
                    disabled={pending}
                    className="mt-4 w-full rounded-md bg-[#f3ede2] py-3 font-mono text-xs uppercase tracking-widest text-black transition-opacity disabled:opacity-50"
                >
                    {pending ? 'Entrando…' : 'Entrar'}
                </button>
            </form>
        </main>
    )
}
