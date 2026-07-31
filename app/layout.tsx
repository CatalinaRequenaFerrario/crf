import "./globals.css";

import type { Metadata } from 'next';
import GlobalBackButton from './ui/global-back-button';

export const metadata: Metadata = { 
    title: {
        template: '%s | Mi Portfolio',
        default: 'Mi Portfolio'
    }, 
    description: '...'}        


export default function RootLayout({ children }: { children : React.ReactNode}) {
    return (
        <html lang="es">
                <body className="antialiased">
                    {children}
                    <GlobalBackButton />
                </body>
        </html>
    )
}
