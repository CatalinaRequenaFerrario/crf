'use client'

import { useState } from 'react'

export default function ImageUploadField({
    value,
    onChange,
}: {
    value: string
    onChange: (value: string) => void
}) {
    const [uploading, setUploading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function handleFile(file: File) {
        setUploading(true)
        setError(null)
        try {
            const formData = new FormData()
            formData.append('file', file)
            const res = await fetch('/api/admin/upload', { method: 'POST', body: formData })
            if (!res.ok) throw new Error('No se pudo subir el archivo')
            const data = await res.json()
            onChange(data.url)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error al subir')
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className="flex flex-col gap-2">
            {value && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={value} alt="" className="max-h-40 rounded border border-neutral-700 object-cover" />
            )}
            <input
                type="file"
                accept="image/*"
                disabled={uploading}
                onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) handleFile(file)
                }}
            />
            {uploading && <p className="text-xs text-neutral-500">Subiendo…</p>}
            {error && <p className="text-xs text-red-400">{error}</p>}
        </div>
    )
}
