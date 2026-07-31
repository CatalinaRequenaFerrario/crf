import type { ReactNode } from 'react'

function Icon({ children }: { children: ReactNode }) {
    return (
        <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {children}
        </svg>
    )
}

export const disciplineIcons: Record<string, ReactNode> = {
    modeling: (
        <Icon>
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7l1.5-2h5L16 7" />
            <circle cx="12" cy="13.5" r="3.5" />
        </Icon>
    ),
    music: (
        <Icon>
            <path d="M9 18V5l10-2v13" />
            <circle cx="7" cy="18" r="2.5" />
            <circle cx="17" cy="16" r="2.5" />
        </Icon>
    ),
    clothing: (
        <Icon>
            <path d="M8 4 4 7l3 3v10h10V10l3-3-4-3-4 2z" />
        </Icon>
    ),
    design: (
        <Icon>
            <path d="M4 20l3-1 10-10-2-2L5 17z" />
            <path d="M15 6l3 3" />
        </Icon>
    ),
    video: (
        <Icon>
            <path d="M3 8l1.5-4h3L6 8" />
            <path d="M8 4h3L9.5 8" />
            <path d="M13 4h3L14.5 8" />
            <rect x="3" y="8" width="18" height="12" rx="1.5" />
        </Icon>
    ),
    writing: (
        <Icon>
            <path d="M20 4c-6 0-14 4-14 12 0 2 1 4 3 4 8 0 12-8 12-14 0-1 0-1.5-1-2z" />
            <path d="M9 15l9-9" />
        </Icon>
    ),
}
