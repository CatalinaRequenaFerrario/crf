'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import type { ReactNode } from 'react'
import BackHome from '../ui/back-home'
import { useCanGoBack } from '../ui/use-can-go-back'
import { disciplines, hubAccent } from './disciplines'

export default function NagasakiShell({ children }: { children: ReactNode }) {
    const segment = useSelectedLayoutSegment()
    const active = disciplines.find((d) => d.slug === segment)
    const accent = active?.accent ?? hubAccent
    const canGoBack = useCanGoBack()

    return (
        <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#000000' }}>
            <div className="pointer-events-none absolute inset-0 bg-[image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:18px_18px]" />
            <div
                className="pointer-events-none absolute inset-0 transition-[background] duration-500"
                style={{ background: `radial-gradient(circle at 50% 0%, ${accent}38, transparent 60%)` }}
            />

            <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col gap-6 px-6 py-10">
                {canGoBack && <BackHome accent={accent} />}

                <nav className="flex flex-wrap items-center gap-2">
                    <Link
                        href="/nagasaki"
                        className="rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-100"
                        style={{ borderColor: hubAccent, color: hubAccent, opacity: segment === null ? 1 : 0.5 }}
                    >
                        Nagasaki
                    </Link>
                    {disciplines.map((d) => (
                        <Link
                            key={d.slug}
                            href={`/nagasaki/${d.slug}`}
                            className="rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-100"
                            style={{ borderColor: d.accent, color: d.accent, opacity: d.slug === segment ? 1 : 0.5 }}
                        >
                            {d.title}
                        </Link>
                    ))}
                </nav>

                {children}
            </div>
        </main>
    )
}
