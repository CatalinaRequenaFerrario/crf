import Ticket from '../ui/ticket'
import { disciplines, hubAccent } from './disciplines'
import { disciplineIcons } from './discipline-icons'

const rotations = [
    'rotate-[-2deg]',
    'rotate-[1.5deg]',
    'rotate-[-1.5deg]',
    'rotate-[2deg]',
    'rotate-[-1deg]',
    'rotate-[1deg]',
]

export default function NagasakiPage() {
    return (
        <>
            <header>
                <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: hubAccent, opacity: 0.7 }}>
                    Hub
                </p>
                <h1 className="mt-2 text-4xl font-extrabold uppercase leading-none tracking-tight text-[#f3ede2] md:text-5xl">
                    Nagasaki
                </h1>
                <p className="mt-3 max-w-xl text-neutral-400">
                    Seis disciplinas, un mismo nombre: modelaje, música, ropa, diseño, video y palabras.
                </p>
            </header>

            <nav className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {disciplines.map((discipline, index) => (
                    <Ticket
                        key={discipline.slug}
                        href={`/nagasaki/${discipline.slug}`}
                        rotate={rotations[index % rotations.length]}
                        accent={discipline.accent}
                        badge={disciplineIcons[discipline.slug]}
                        eyebrow={discipline.eyebrow}
                        title={discipline.title}
                        subtitle={discipline.subtitle}
                    />
                ))}
            </nav>
        </>
    )
}
