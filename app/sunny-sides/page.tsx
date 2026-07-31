import PageShell from '../ui/page-shell'
import BackHome from '../ui/back-home'

const accent = '#D6A95C'

export default function SunnySidesPage() {
    return (
        <PageShell accent={accent}>
            <BackHome accent={accent} />

            <header>
                <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: accent, opacity: 0.7 }}>
                    Project
                </p>
                <h1 className="mt-3 text-5xl font-extrabold uppercase leading-none tracking-tight text-[#f3ede2] md:text-6xl">
                    Sunny Sides
                </h1>
                <span
                    className="mt-4 inline-block rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-widest"
                    style={{ borderColor: accent, color: accent }}
                >
                    Coming soon
                </span>
            </header>

            <section>
                <p className="max-w-xl text-neutral-400">
                    {/* TODO: descripción del proyecto — de qué trata, en qué punto está */}
                    [Descripción pendiente]
                </p>
            </section>
        </PageShell>
    )
}
