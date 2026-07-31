import Link from 'next/link'
import { requireAdmin } from '../lib/admin-auth'
import { logout } from './actions'
import { disciplines } from '../nagasaki/disciplines'

export default async function AdminPage() {
    await requireAdmin()

    return (
        <main className="min-h-screen bg-black px-6 py-16 text-[#f3ede2]">
            <div className="mx-auto max-w-xl">
                <div className="flex items-center justify-between">
                    <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">Admin</p>
                    <form action={logout}>
                        <button
                            type="submit"
                            className="font-mono text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-neutral-300"
                        >
                            Salir
                        </button>
                    </form>
                </div>
                <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-tight">Editar Nagasaki</h1>
                <ul className="mt-8 flex flex-col gap-3">
                    {disciplines.map((discipline) => (
                        <li key={discipline.slug}>
                            <Link
                                href={`/admin/nagasaki/${discipline.slug}`}
                                className="flex items-center justify-between rounded-md border px-5 py-4 transition-colors hover:bg-white/5"
                                style={{ borderColor: `${discipline.accent}66` }}
                            >
                                <span style={{ color: discipline.accent }}>{discipline.title}</span>
                                <span className="text-neutral-600">→</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}
