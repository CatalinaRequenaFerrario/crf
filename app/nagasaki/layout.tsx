import type { ReactNode } from 'react'
import NagasakiShell from './nagasaki-shell'

export default function NagasakiLayout({ children }: { children: ReactNode }) {
    return <NagasakiShell>{children}</NagasakiShell>
}
