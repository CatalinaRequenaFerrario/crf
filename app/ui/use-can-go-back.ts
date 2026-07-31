'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

// Módulo compartido: recuerda si hubo navegación interna en esta sesión del
// tab, sin importar qué componente lo consulte primero. Se resetea solo con
// una recarga completa de página (nueva ejecución del bundle de JS).
let firstPathname: string | null = null
let hasNavigatedInternally = false

export function useCanGoBack() {
    const pathname = usePathname()
    const [canGoBack, setCanGoBack] = useState(hasNavigatedInternally)

    useEffect(() => {
        if (firstPathname === null) {
            firstPathname = pathname
            return
        }
        if (pathname !== firstPathname) {
            hasNavigatedInternally = true
            setCanGoBack(true)
        }
    }, [pathname])

    return canGoBack
}
