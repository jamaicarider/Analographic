import Link from 'next/link';

const navigation = [
  { href: '/', label: 'Início' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/estudio', label: 'Estúdio' },
  { href: '/contato', label: 'Contato' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div>
          <p className="footer-eyebrow">Tem um projeto em mente?</p>
          <h2>Vamos transformar boas ideias em algo <span>único.</span></h2>
        </div>
        <a className="footer-cta-link" href="mailto:contato@analographic.com">
          Fale com o estúdio <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="footer-grid">
        <Link href="/" className="footer-brand">Analographic</Link>
        <div>
          <p className="footer-eyebrow">Navegação</p>
          <nav className="footer-nav" aria-label="Navegação do rodapé">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </div>
        <div>
          <p className="footer-eyebrow">Contato</p>
          <a href="mailto:contato@analographic.com">contato@analographic.com</a>
        </div>
        <div>
          <p className="footer-eyebrow">Redes</p>
          <a href="https://www.instagram.com/analographic.co/" target="_blank" rel="noreferrer">
            Instagram ↗
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Analographic</span>
        <span>Design independente, feito no Brasil.</span>
      </div>
    </footer>
  );
}
