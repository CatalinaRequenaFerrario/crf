import PageShell from '../ui/page-shell'
import BackHome from '../ui/back-home'

const accent = '#5C99D6'

export default function AboutPage() {
    return (
        <PageShell accent={accent}>
            <BackHome accent={accent} />

            <header>
                <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: accent, opacity: 0.7 }}>
                    Developer
                </p>
                <h1 className="mt-3 text-5xl font-extrabold uppercase leading-none tracking-tight text-[#f3ede2] md:text-6xl">
                    Portfolio
                </h1>
                <p className="mt-5 max-w-xl text-neutral-400">
                    {/* TODO: tu presentación — quién eres, qué haces, con qué stack trabajas */}
                    [Presentación pendiente]
                </p>
            </header>

            <section>
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">Proyectos</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {/* TODO: sustituir por tarjetas reales de proyectos, o enlazar a /projects */}
                    <div className="rounded-md border border-dashed border-neutral-800 p-5 text-sm text-neutral-600">
                        [Proyecto pendiente]
                    </div>
                    <div className="rounded-md border border-dashed border-neutral-800 p-5 text-sm text-neutral-600">
                        [Proyecto pendiente]
                    </div>
                </div>
            </section>

            <section>
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">Contacto</h2>
                <p className="mt-4 text-sm text-neutral-400">
                    {/* TODO: enlazar a /contact o al botón de copiar email */}
                    [Datos de contacto pendientes]
                </p>
            </section>
        </PageShell>
    )
}
