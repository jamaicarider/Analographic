'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/estudio', label: 'Estúdio' },
  { href: '/contato', label: 'Contato' },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [introVisible, setIntroVisible] = useState(isHome);

  useEffect(() => {
    if (!isHome) return setIntroVisible(false);
    const intro = document.getElementById('intro');
    if (!intro) return;
    const io = new IntersectionObserver(([e]) => setIntroVisible(e.intersectionRatio > 0.6), { threshold: [0, 0.6, 1] });
    io.observe(intro);
    return () => io.disconnect();
  }, [isHome]);

  return (
    <header className={`header ${introVisible ? 'hidden' : ''}`}>
      <Link href="/" className="brand">Analographic</Link>
      <nav>{links.map((l) => <Link key={l.label} href={l.href}>{l.label}</Link>)}</nav>
    </header>
  );
}
