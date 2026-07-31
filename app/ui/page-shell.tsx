import type { ReactNode } from 'react'

export default function PageShell({ accent, children }: { accent: string; children: ReactNode }) {
    return (
        <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#000000' }}>
            <div className="pointer-events-none absolute inset-0 bg-[image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:18px_18px]" />
            <div
                className="pointer-events-none absolute inset-0"
                style={{ background: `radial-gradient(circle at 50% 0%, ${accent}38, transparent 60%)` }}
            />
            <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 py-16">
                {children}
            </div>
        </main>
    )
}
