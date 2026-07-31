import { notFound } from 'next/navigation'
import type { Data } from '@puckeditor/core'
import { requireAdmin } from '../../../lib/admin-auth'
import { loadDisciplineData } from '../../../lib/blob-content'
import { disciplines } from '../../../nagasaki/disciplines'
import PuckEditor from './puck-editor'

const emptyData: Data = { content: [], root: {} }

export default async function AdminDisciplinePage({ params }: { params: Promise<{ slug: string }> }) {
    await requireAdmin()

    const { slug } = await params
    const discipline = disciplines.find((d) => d.slug === slug)
    if (!discipline) notFound()

    const data = (await loadDisciplineData(slug)) ?? emptyData

    return <PuckEditor slug={slug} title={discipline.title} initialData={data} />
}
