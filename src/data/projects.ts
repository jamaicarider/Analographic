export type MediaItem = { type: 'image' | 'video'; src?: string; poster?: string };

export type Project = {
  slug: string;
  title: string;
  client: string;
  services: string[];
  serviceLine: string;
  summary: string;
  description: string;
  media: MediaItem[]; // home: usa as 5 primeiras | página interna: até 15
  sections?: { title: string; paragraphs: string[] }[];
  credits?: { role: string; name: string; href?: string }[];
  closing?: string;
};

// Sem "src" = bloco cinza de placeholder. Para usar mídia real: { type: 'image', src: '/projetos/x/1.jpg' }
const ph = (n: number): MediaItem[] => Array.from({ length: n }, () => ({ type: 'image' as const }));

export const STRIP_LIMIT = 5;
export const PROJECT_LIMIT = 15;

const placeholderProjects: Project[] = [1, 2, 3, 4].map((n) => ({
  slug: `projeto-${n}`,
  title: `Projeto ${n}`,
  client: `@cliente${n}`,
  services: ['Branding', 'Web', 'Strategy'],
  serviceLine: 'Digital Rebrand & User Experience',
  summary: 'Resumo curto do projeto exibido na home. Substituir pelo texto real do cliente.',
  description:
    'Descrição completa do projeto, exibida na página interna. Substituir pelo texto real, com contexto, desafio e entrega.',
  media: ph(8),
}));

export const projects: Project[] = [
  {
    slug: 'sal-garopaba',
    title: 'Oceane-se',
    client: 'S.A.L Garopaba',
    services: ['Graphic Design', 'Illustration', 'Creative Copy'],
    serviceLine: 'Graphic Design, Illustration & Creative Copy',
    summary: 'Onde o rio encontra o mar, novas paisagens e possibilidades surgem.',
    description:
      'Foi a partir dessa ideia que desenvolvemos a coleção para a SAL Garopaba. Guiado pelo conceito “Oceane-se”, o projeto é um convite à transformação: abraçar a própria natureza, acolher o desconhecido e permitir-se transbordar.\n\nCom mais de 12 anos de trajetória, a marca já faz parte da identidade de Garopaba. Nossa proposta foi traduzir essa essência em uma coleção de estampas que conecta mar, memória e natureza por meio de uma linguagem gráfica contemporânea.',
    sections: [
      {
        title: 'Linguagem Visual',
        paragraphs: [
          'A coleção foi construída por meio da combinação de diferentes técnicas gráficas, buscando criar uma linguagem visual orgânica e autoral. Ilustrações, lettering, colagens e experimentações com scanner foram utilizadas para explorar texturas, formas e imperfeições que remetem ao encontro entre o rio e o mar.',
          'Cada elemento foi desenvolvido para ampliar o conceito da coleção, transformando referências naturais em composições gráficas que equilibram expressão manual e refinamento visual.',
        ],
      },
    ],
    credits: [
      { role: 'Designed by', name: 'analographic.co', href: 'https://www.instagram.com/analographic.co/' },
      { role: 'Graphic Design', name: 'Rob Abreu' },
      { role: 'Illustration & Creative Copy', name: 'Rob Abreu' },
      { role: 'Photography / Videos', name: 'Studio Enredo' },
    ],
    closing: 'Thank you!',
    media: [
      { type: 'image', src: '/projetos/sal/capa_1.jpg' },
      ...Array.from({ length: 13 }, (_, i) => ({
        type: 'image' as const,
        src: `/projetos/sal/CAPA_${String(i + 1).padStart(2, '0')}.png`,
      })),
      { type: 'image', src: '/projetos/sal/behance-sal.gif' },
    ],
  },
  ...placeholderProjects,
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
