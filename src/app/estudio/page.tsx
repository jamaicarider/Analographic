import Image from 'next/image';

const principles = [
  {
    title: 'Olhar autoral',
    copy: 'Cada projeto começa com escuta, pesquisa e curiosidade. Criamos linguagens visuais que traduzem a essência de cada marca.',
  },
  {
    title: 'Parceria próxima',
    copy: 'Trabalhamos lado a lado com nossos clientes, construindo caminhos com troca aberta e decisões compartilhadas.',
  },
  {
    title: 'Processo vivo',
    copy: 'Do primeiro traço à entrega final, combinamos pensamento estratégico, experimentação gráfica e atenção aos detalhes.',
  },
  {
    title: 'Feito para durar',
    copy: 'Buscamos ideias consistentes e cheias de personalidade, preparadas para crescer junto com as marcas.',
  },
];

const services = [
  'Estratégia de marca',
  'Identidade visual',
  'Direção de arte',
  'Ilustração',
  'Design gráfico',
  'Desenvolvimento de produtos',
];

const logos = Array.from({ length: 17 }, (_, index) => `/logos/cliente-${String(index + 1).padStart(2, '0')}.png`);

function StudioImage({ src, alt, className = '', sizes = '100vw' }: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`about-studio-image ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="about-studio-photo" />
    </div>
  );
}

export default function Estudio() {
  return (
    <main className="page about-page">
      <section className="about-hero">
        <p className="about-eyebrow">Analographic · Estúdio independente</p>
        <h1>Desenhamos marcas para <span>deixar marcas.</span></h1>
        <p className="about-lead">
          Design, imagem e ideias para marcas que querem ocupar seu próprio espaço no mundo.
        </p>
        <StudioImage
          src="/imagesstudio/ROB%20FOR%20BIRDEN-6.jpg"
          alt="Rob trabalhando à mesa no estúdio, cercado por projetos e referências."
          className="about-hero-image"
        />
      </section>

      <section className="about-difference">
        <div className="about-section-heading">
          <p className="about-eyebrow">01 / Nossa abordagem</p>
          <h2>Identidade com intenção. Feita em conjunto.</h2>
        </div>
        <div className="about-principles">
          {principles.map((principle, index) => (
            <article key={principle.title} className="about-principle">
              <span className="about-principle-number">0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-image-pair" aria-label="Fotos do estúdio e processo criativo">
        <StudioImage
          src="/imagesstudio/ROB%20FOR%20BIRDEN-24.jpg"
          alt="Mão desenhando em um caderno ao lado de materiais de trabalho."
          className="about-image-tall"
          sizes="(max-width: 700px) 55vw, 60vw"
        />
        <StudioImage
          src="/imagesstudio/ROB%20FOR%20BIRDEN-23.jpg"
          alt="Vista do artista trabalhando à mesa no estúdio."
          className="about-image-small"
          sizes="(max-width: 700px) 40vw, 45vw"
        />
      </section>

      <section className="about-clients">
        <p className="about-eyebrow">02 / Em boa companhia</p>
        <h2>
          Acreditamos em relações criativas que fazem boas ideias crescerem — e em marcas que encontram
          um jeito próprio de se conectar com as pessoas.
        </h2>
        <p className="about-client-label">Marcas e parceiros</p>
        <div className="logo-marquee" aria-label="Logos de marcas e parceiros">
          <div className="logo-marquee-track">
            {[...logos, ...logos].map((logo, index) => (
              <div className="logo-marquee-item" key={`${logo}-${index}`} aria-hidden={index >= logos.length}>
                <img src={logo} alt={index < logos.length ? `Logo de cliente ${index + 1}` : ''} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-services">
        <div className="about-section-heading">
          <p className="about-eyebrow">03 / O que fazemos</p>
          <h2>Da primeira conversa ao último detalhe.</h2>
        </div>
        <ul className="about-service-list">
          {services.map((service, index) => (
            <li key={service}>
              <span>0{index + 1}</span>
              {service}
            </li>
          ))}
        </ul>
      </section>

      <section className="about-closing">
        <StudioImage
          src="/imagesstudio/ROB%20FOR%20BIRDEN-26.jpg"
          alt="Rob sentado no estúdio, com materiais de trabalho ao redor."
          className="about-closing-image"
        />
        <p className="about-eyebrow">Vamos criar algo com significado?</p>
        <a href="/contato">Conte sua ideia <span aria-hidden="true">↗</span></a>
      </section>
    </main>
  );
}
