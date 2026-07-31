import 'server-only'
import { put, get } from '@vercel/blob'
import type { Data } from '@puckeditor/core'

const DATA_PREFIX = 'nagasaki/data/'

export async function loadDisciplineData(slug: string): Promise<Data | null> {
    const result = await get(`${DATA_PREFIX}${slug}.json`, { access: 'public', useCache: false })
    if (!result) return null
    const text = await new Response(result.stream).text()
    return JSON.parse(text) as Data
}

export async function saveDisciplineData(slug: string, data: Data) {
    await put(`${DATA_PREFIX}${slug}.json`, JSON.stringify(data), {
        access: 'public',
        contentType: 'application/json',
        addRandomSuffix: false,
        allowOverwrite: true,
    })
}
