'use client'

import { Puck } from '@puckeditor/core'
import '@puckeditor/core/puck.css'
import type { Data } from '@puckeditor/core'
import { puckConfig } from '../../../lib/puck-config'

export default function PuckEditor({
    slug,
    title,
    initialData,
}: {
    slug: string
    title: string
    initialData: Data
}) {
    async function handlePublish(data: Data) {
        await fetch(`/api/admin/nagasaki/${slug}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
    }

    return (
        <Puck
            config={puckConfig}
            data={initialData}
            onPublish={handlePublish}
            headerTitle={title}
            headerPath={`/nagasaki/${slug}`}
        />
    )
}
