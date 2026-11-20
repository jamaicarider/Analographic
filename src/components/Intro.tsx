'use client';

import dynamic from 'next/dynamic';

const Logo3D = dynamic(() => import('@/components/Logo3D'), { ssr: false });

export default function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="logo-wrap" role="img" aria-label="Logo tridimensional cromada do Analographic">
        <Logo3D className="logo-3d" />
      </div>
      <nav className="intro-nav">
        <span className="shop" aria-disabled="true" />
        <a href="#projetos">Projetos</a>
      </nav>
    </section>
  );
}
