'use client'

import { useRef } from 'react'
import type { CSSProperties, ReactNode } from 'react'

export default function ExternalPreview({
    href,
    accent,
    className,
    style,
    children,
}: {
    href: string
    accent: string
    className: string
    style?: CSSProperties
    children: ReactNode
}) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    return (
        <>
            <button type="button" onClick={() => dialogRef.current?.showModal()} className={className} style={style}>
                {children}
            </button>

            <dialog
                ref={dialogRef}
                className="m-auto h-[96vh] w-[96vw] max-w-none overflow-visible rounded-xl bg-black p-0 backdrop:backdrop-blur-md backdrop:bg-black/85"
                style={{ border: `2px solid ${accent}`, boxShadow: `0 0 0 1px #000, 0 25px 80px -20px ${accent}80, 0 0 60px 4px ${accent}40` }}
                onClick={(event) => {
                    if (event.target === dialogRef.current) dialogRef.current?.close()
                }}
            >
                <div className="flex h-full flex-col">
                    <div
                        className="flex items-center justify-between gap-3 rounded-t-[10px] px-4 py-3"
                        style={{ backgroundColor: accent, color: '#0d0d0d' }}
                    >
                        <button
                            type="button"
                            onClick={() => dialogRef.current?.close()}
                            className="flex items-center gap-1.5 rounded-full bg-black/15 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wide hover:bg-black/25"
                        >
                            ← Volver
                        </button>
                        <span className="hidden truncate font-mono text-xs font-bold uppercase tracking-widest opacity-70 sm:block">
                            {href.replace(/^https?:\/\//, '')}
                        </span>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 rounded-full bg-black/15 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wide hover:bg-black/25"
                        >
                            Nueva pestaña ↗
                        </a>
                    </div>
                    <iframe src={href} title={href} className="h-full w-full flex-1 border-0" />
                </div>
            </dialog>
        </>
    )
}
