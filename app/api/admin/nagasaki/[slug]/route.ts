import { NextResponse } from 'next/server'
import { isAdminAuthenticated } from '../../../../lib/admin-auth'
import { loadDisciplineData, saveDisciplineData } from '../../../../lib/blob-content'
import { disciplines } from '../../../../nagasaki/disciplines'

function isValidSlug(slug: string) {
    return disciplines.some((d) => d.slug === slug)
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    if (!isValidSlug(slug)) {
        return NextResponse.json({ error: 'Disciplina inválida' }, { status: 404 })
    }

    const data = await loadDisciplineData(slug)
    return NextResponse.json({ data })
}

export async function POST(request: Request, { params }: { params: Promise<{ slug: string }> }) {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { slug } = await params
    if (!isValidSlug(slug)) {
        return NextResponse.json({ error: 'Disciplina inválida' }, { status: 404 })
    }

    const data = await request.json()
    await saveDisciplineData(slug, data)

    return NextResponse.json({ ok: true })
}
