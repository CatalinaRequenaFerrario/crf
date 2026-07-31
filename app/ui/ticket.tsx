import Link from 'next/link'
import type { ReactNode } from 'react'
import ExternalPreview from './external-preview'

function liftTitle(hex: string, ratio: number) {
    const n = parseInt(hex.slice(1), 16)
    const channel = (shift: number) => Math.round(((n >> shift) & 255) * (1 - ratio) + 255 * ratio)
    return `#${[channel(16), channel(8), channel(0)].map((c) => c.toString(16).padStart(2, '0')).join('')}`
}

function Arrow({ accent }: { accent: string }) {
    return (
        <svg
            className="h-5 w-5 shrink-0 opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
            style={{ color: accent }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    )
}

function Perforation() {
    return (
        <div className="relative my-5">
            <div className="border-t border-dashed border-neutral-700" />
            <span className="absolute left-[-30px] top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border border-neutral-800" style={{ backgroundColor: '#000000' }} />
            <span className="absolute right-[-30px] top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border border-neutral-800" style={{ backgroundColor: '#000000' }} />
        </div>
    )
}

export default function Ticket({
    href,
    external,
    rotate,
    accent,
    badge,
    eyebrow,
    title,
    subtitle,
}: {
    href: string
    external?: boolean
    rotate: string
    accent: string
    badge: ReactNode
    eyebrow: string
    title: string
    subtitle: string
}) {
    const className = `group relative flex flex-col justify-between gap-2 overflow-visible rounded-md border px-7 py-6 shadow-lg transition-all duration-300 ${rotate} hover:rotate-0 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 motion-reduce:transition-none motion-reduce:rotate-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`

    const surface = {
        background: `radial-gradient(140% 120% at 20% 15%, ${accent}4d, ${accent}1a 50%, #0d0d0d 88%)`,
        borderColor: `${accent}66`,
        outlineColor: accent,
        boxShadow: `0 0 24px 2px ${accent}80, 0 0 80px 18px ${accent}40, 0 0 180px 50px ${accent}1f`,
    }

    const titleColor = liftTitle(accent, 0.35)

    const content = (
        <>
            <div className="flex items-center justify-between">
                <span
                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed text-sm font-bold font-mono"
                    style={{ borderColor: accent, color: accent }}
                >
                    {badge}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: accent, opacity: 0.6 }}>
                    {eyebrow}
                </span>
            </div>

            <Perforation />

            <div className="flex items-end justify-between">
                <div>
                    <p
                        className="text-2xl font-extrabold uppercase leading-none tracking-tight"
                        style={{ color: titleColor }}
                    >
                        {title}
                    </p>
                    <p className="mt-2 font-mono text-xs" style={{ color: accent, opacity: 0.65 }}>{subtitle}</p>
                </div>
                <Arrow accent={accent} />
            </div>
        </>
    )

    if (external) {
        return (
            <ExternalPreview href={href} accent={accent} className={className} style={surface}>
                {content}
            </ExternalPreview>
        )
    }

    return (
        <Link href={href} className={className} style={surface}>
            {content}
        </Link>
    )
}
