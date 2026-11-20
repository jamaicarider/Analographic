export default function Contato() {
  return (
    <main className="page contact-page">
      <section className="contact-hero">
        <p className="about-eyebrow">Contato / Vamos conversar</p>
        <div className="contact-heading">
          <h1>Boas ideias começam em <span>conversa.</span></h1>
          <p>
            Tem uma marca, produto ou projeto visual em mente? Conte um pouco sobre a sua ideia.
            Vamos pensar juntos nos próximos passos.
          </p>
        </div>
        <a className="contact-email-panel" href="mailto:contato@analographic.com">
          <span className="contact-email-label">Projetos e parcerias</span>
          <span className="contact-email">contato@analographic.com</span>
          <span className="contact-email-arrow" aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="contact-details" aria-label="Outras formas de contato">
        <div className="contact-detail">
          <p className="about-eyebrow">Redes sociais</p>
          <a href="https://www.instagram.com/analographic.co/" target="_blank" rel="noreferrer">
            @analographic.co <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-detail">
          <p className="about-eyebrow">Disponibilidade</p>
          <p>Segunda a sexta<br />9h às 18h</p>
        </div>
        <div className="contact-detail">
          <p className="about-eyebrow">O que fazemos</p>
          <p>Estratégia, identidade visual, direção de arte e design.</p>
        </div>
      </section>
    </main>
  );
}
