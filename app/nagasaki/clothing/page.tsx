import { Render } from '@puckeditor/core'
import { disciplines } from '../disciplines'
import { loadDisciplineData } from '../../lib/blob-content'
import { puckConfig } from '../../lib/puck-config'

export const dynamic = 'force-dynamic'

const discipline = disciplines.find((d) => d.slug === 'clothing')!

export default async function ClothingPage() {
    const data = await loadDisciplineData('clothing')

    return (
        <>
            <header>
                <p className="font-mono text-xs uppercase tracking-[0.3em]" style={{ color: discipline.accent, opacity: 0.7 }}>
                    {discipline.eyebrow}
                </p>
                <h1 className="mt-3 text-5xl font-extrabold uppercase leading-none tracking-tight text-[#f3ede2] md:text-6xl">
                    {discipline.title}
                </h1>
                <p className="mt-4 max-w-xl text-neutral-400">{discipline.subtitle}</p>
            </header>

            <section className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {data && data.content.length > 0 ? (
                    <Render config={puckConfig} data={data} />
                ) : (
                    <div className="col-span-full rounded-md border border-dashed border-neutral-800 p-5 text-sm text-neutral-600">
                        [Contenido pendiente — cargalo desde /admin]
                    </div>
                )}
            </section>
        </>
    )
}
