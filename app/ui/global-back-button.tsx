'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useCanGoBack } from './use-can-go-back'

export default function GlobalBackButton() {
    const pathname = usePathname()
    const router = useRouter()
    const canGoBack = useCanGoBack()

    if (pathname === '/' || !canGoBack) return null

    return (
        <button
            type="button"
            onClick={() => router.back()}
            aria-label="Volver"
            className="fixed right-4 top-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#f3ede2] text-black shadow-[0_0_4px_1px_rgba(0,0,0,0.35),0_0_24px_6px_rgba(129,140,248,0.55)] transition-transform hover:scale-110 sm:right-8 sm:top-8 sm:h-16 sm:w-16"
        >
            <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
        </button>
    )
}
