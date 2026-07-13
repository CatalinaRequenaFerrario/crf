import "./globals.css";

import type { Metadata } from 'next';

export const metadata: Metadata = { 
    title: {
        template: '%s | Mi Portfolio',
        default: 'Mi Portfolio'
    }, 
    description: '...'}        


export default function RootLayout({ children }: { children : React.ReactNode}) {
    return (
        <html lang="es">
                <body>
                    {children}
                </body>
        </html>
    )
}
