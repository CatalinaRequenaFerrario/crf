export type Discipline = {
    slug: string
    title: string
    eyebrow: string
    subtitle: string
    accent: string
}

// Acento de "Nagasaki" como marca general (usado en la landing y cuando no hay
// ninguna disciplina activa). Coincide con el color que ya tenía la tarjeta
// "Nagasaki" en la home.
export const hubAccent = '#D65C66'

export const disciplines: Discipline[] = [
    {
        slug: 'modeling',
        title: 'Modeling',
        eyebrow: 'Fotografía',
        subtitle: 'Portfolio de modelaje — castings, editoriales, backstage.',
        accent: '#685CD6',
    },
    {
        slug: 'music',
        title: 'Music',
        eyebrow: 'Sonido',
        subtitle: 'Canciones en Spotify — temas propios y colaboraciones.',
        accent: '#B25CD6',
    },
    {
        slug: 'clothing',
        title: 'Clothing',
        eyebrow: 'Textil',
        subtitle: 'Prendas hechas a mano — piezas y procesos.',
        accent: '#D65CB2',
    },
    {
        slug: 'design',
        title: 'Design',
        eyebrow: 'Visual',
        subtitle: 'Diseño gráfico y piezas digitales.',
        accent: '#5CD6CC',
    },
    {
        slug: 'video',
        title: 'Video',
        eyebrow: 'Audiovisual',
        subtitle: 'Videoclips, cortos y animación.',
        accent: '#5CD683',
    },
    {
        slug: 'writing',
        title: 'Writing',
        eyebrow: 'Palabras',
        subtitle: 'Poemas y otros textos.',
        accent: '#7CD65C',
    },
]
