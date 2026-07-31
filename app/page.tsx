import Ticket from './ui/ticket'

const worlds = [
    {
        href: '/about-me',
        rotate: 'rotate-[-2deg]',
        accent: '#5C99D6',
        badge: 'C',
        eyebrow: 'Developer',
        title: 'Portfolio',
        subtitle: 'Projects · code · contact',
    },
    {
        href: '/nagasaki',
        rotate: 'rotate-[1.5deg]',
        accent: '#D65C66',
        badge: 'N',
        eyebrow: 'Project',
        title: 'Nagasaki',
        subtitle: 'Modeling · music · design · more',
    },
    {
        href: '/sunny-sides',
        rotate: 'rotate-[-1.5deg]',
        accent: '#D6A95C',
        badge: 'S',
        eyebrow: 'Project',
        title: 'Sunny Sides',
        subtitle: 'Coming soon',
    },
    {
        href: 'https://onlymachines.band/',
        external: true,
        rotate: 'rotate-[2deg]',
        accent: '#C6D65C',
        badge: 'O',
        eyebrow: 'Band',
        title: 'Only Machines',
        subtitle: 'onlymachines.band',
    },
]

export default function HomePage(){
    return (
        <main className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#000000' }}>
            <div className="pointer-events-none absolute inset-0 bg-[image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:18px_18px]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.22),transparent_60%)]" />

            <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-14 px-6 py-20">
                <div className="text-center">
                    <p
                        className="font-mono text-[11px] uppercase tracking-[0.3em] text-indigo-400"
                        style={{ textShadow: '0 0 16px rgba(129,140,248,0.5)' }}
                    >
                        Portfolio hub
                    </p>
                    <h1
                        className="mt-4 text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl"
                        style={{ color: '#f3ede2', textShadow: '0 0 24px rgba(129,140,248,0.45)' }}
                    >
                        Catalina
                        <br />
                        Requena Ferrario
                    </h1>
                    <p className="mt-4 text-neutral-400">
                        Developer · Musician · Creator — pick a world to explore.
                    </p>
                </div>

                <nav className="grid w-full grid-cols-1 gap-x-10 gap-y-14 px-4 sm:grid-cols-2 sm:px-0">
                    {worlds.map((world) => (
                        <Ticket key={world.title} {...world} />
                    ))}
                </nav>

                <p className="font-mono text-xs text-neutral-600">
                    © {new Date().getFullYear()} Catalina Requena Ferrario
                </p>
            </div>
        </main>
    )
}
