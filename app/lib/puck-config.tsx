import type { Config } from '@puckeditor/core'
import ImageUploadField from '../admin/image-upload-field'

type Props = {
    Heading: { text: string }
    Text: { text: string }
    Photo: { src: string; caption: string }
    SpotifyTrack: { trackId: string }
    YouTubeVideo: { youtubeId: string; title: string }
    Poem: { title: string; body: string }
}

export const puckConfig: Config<Props> = {
    components: {
        Heading: {
            fields: {
                text: { type: 'text' },
            },
            defaultProps: { text: 'Título' },
            render: ({ text }) => (
                <h2 className="text-2xl font-extrabold uppercase tracking-tight text-[#f3ede2]">{text}</h2>
            ),
        },
        Text: {
            fields: {
                text: { type: 'textarea' },
            },
            defaultProps: { text: 'Texto...' },
            render: ({ text }) => <p className="max-w-xl whitespace-pre-line text-neutral-300">{text}</p>,
        },
        Photo: {
            fields: {
                src: {
                    type: 'custom',
                    render: ({ value, onChange }) => <ImageUploadField value={value} onChange={onChange} />,
                },
                caption: { type: 'text' },
            },
            defaultProps: { src: '', caption: '' },
            render: ({ src, caption }) => (
                <figure>
                    {src ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={src} alt={caption} className="w-full rounded-md object-cover" />
                    ) : (
                        <div className="aspect-[3/4] w-full rounded-md border border-dashed border-neutral-800" />
                    )}
                    {caption && <figcaption className="mt-2 font-mono text-xs text-neutral-500">{caption}</figcaption>}
                </figure>
            ),
        },
        SpotifyTrack: {
            fields: {
                trackId: { type: 'text' },
            },
            defaultProps: { trackId: '' },
            render: ({ trackId }) =>
                trackId ? (
                    <iframe
                        src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
                        width="100%"
                        height="152"
                        style={{ borderRadius: 12 }}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                ) : (
                    <div className="rounded-md border border-dashed border-neutral-800 p-5 text-sm text-neutral-600">
                        Pegá el ID de la canción de Spotify
                    </div>
                ),
        },
        YouTubeVideo: {
            fields: {
                youtubeId: { type: 'text' },
                title: { type: 'text' },
            },
            defaultProps: { youtubeId: '', title: '' },
            render: ({ youtubeId, title }) =>
                youtubeId ? (
                    <div className="aspect-video overflow-hidden rounded-md">
                        <iframe
                            src={`https://www.youtube.com/embed/${youtubeId}`}
                            title={title || 'Video'}
                            className="h-full w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                ) : (
                    <div className="aspect-video rounded-md border border-dashed border-neutral-800" />
                ),
        },
        Poem: {
            fields: {
                title: { type: 'text' },
                body: { type: 'textarea' },
            },
            defaultProps: { title: '', body: '' },
            render: ({ title, body }) => (
                <article>
                    {title && (
                        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">{title}</h2>
                    )}
                    <p className="mt-2 whitespace-pre-line text-neutral-300">{body}</p>
                </article>
            ),
        },
    },
}
