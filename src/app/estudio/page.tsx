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

function ImagePlaceholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`about-image-placeholder ${className}`} role="img" aria-label={`Espaço reservado para ${label}`}>
      <span>{label}</span>
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
        <ImagePlaceholder label="imagem do estúdio e processo criativo" className="about-hero-image" />
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

      <section className="about-image-pair" aria-label="Espaços reservados para imagens do estúdio">
        <ImagePlaceholder label="detalhe de projeto ou material impresso" className="about-image-tall" />
        <ImagePlaceholder label="mesa de trabalho e referências visuais" className="about-image-small" />
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
        <ImagePlaceholder label="imagem de projeto ou campanha" className="about-closing-image" />
        <p className="about-eyebrow">Vamos criar algo com significado?</p>
        <a href="/contato">Conte sua ideia <span aria-hidden="true">↗</span></a>
      </section>
    </main>
  );
}
