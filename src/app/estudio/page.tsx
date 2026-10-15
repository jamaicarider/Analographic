const services = [
  'Estratégia de Marca',
  'Identidade de Marca',
  'Ilustração',
  'Desenvolvimento de Produtos',
  'Direção de Arte',
];

const clients = [
  'AllGlory', 'Birden', 'Beatnik', 'Bolovo', 'Bcrew', 'Cutterman', 'C&A', 'DoD', 'OUS',
  'Jovem Dionisio', 'Lagum', 'Lost', 'Paterson', 'S.A.L', 'Welcome Sunny garments',
  'NFL', 'Tropicalients',
];

export default function Estudio() {
  return (
    <main className="page info-page">
      <div className="banner-placeholder" role="img" aria-label="Espaço reservado para imagem de banner do estúdio" />
      <div className="narrow">
        <h1>Estúdio</h1>
        <div className="studio-copy">
          <p>O estúdio independente de design gráfico foi fundado por Rob Abreu, designer com mais de 12 anos de experiência profissional.</p>
          <p>O estúdio desenvolve projetos de identidade visual, direção de arte, ilustração, design de superfície e desenvolvimento de produtos, principalmente para marcas ligadas à moda e a diferentes culturas desse universo.</p>
          <p>A abordagem combina design gráfico, desenho, tipografia e processos mais artesanais, buscando construir uma linguagem visual própria e que faça sentido para cada trabalho.</p>
          <p>Ao longo dos anos, Rob trabalhou com diferentes marcas de vestuário e em projetos diversos, desenvolvendo identidades, gráficos, coleções e produtos.</p>
          <p>Hoje, o estúdio segue de forma independente, mantendo uma relação próxima com os clientes e com todo o processo de criação. O objetivo é construir identidades visuais com personalidade, contexto e longevidade.</p>
        </div>
        <h2>Serviços</h2>
        <ul>{services.map((service) => <li key={service}>{service}</li>)}</ul>
        <h2>Clientes</h2>
        <ul className="client-list">{clients.map((client) => <li key={client}>{client}</li>)}</ul>
      </div>
    </main>
  );
}
