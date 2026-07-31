import Link from 'next/link'

export default function BackHome({ accent }: { accent: string }) {
    return (
        <Link
            href="/"
            className="group inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] opacity-75 transition-opacity hover:opacity-100"
            style={{ color: accent }}
        >
            <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Volver
        </Link>
    )
}
