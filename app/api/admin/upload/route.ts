import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { isAdminAuthenticated } from '../../../lib/admin-auth'

export async function POST(request: Request) {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file')

    if (!(file instanceof File)) {
        return NextResponse.json({ error: 'Falta el archivo' }, { status: 400 })
    }

    const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_')
    const blob = await put(`nagasaki/uploads/${Date.now()}-${safeName}`, file, {
        access: 'public',
        addRandomSuffix: true,
    })

    return NextResponse.json({ url: blob.url })
}
