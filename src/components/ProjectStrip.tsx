'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Media from './Media';
import { STRIP_LIMIT, type Project } from '@/data/projects';

export default function ProjectStrip({ project }: { project: Project }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  // Faixa corre da direita para a esquerda conforme o bloco passa pela tela
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      const w = wrap.current, t = track.current;
      if (!w || !t) return;
      const r = w.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight - r.top) / (innerHeight + r.height)));
      t.style.transform = `translateX(${-p * Math.max(0, t.scrollWidth - w.clientWidth)}px)`;
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    return () => { cancelAnimationFrame(raf); removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); };
  }, []);

  const href = `/projetos/${project.slug}`;
  return (
    <article className="strip">
      <div ref={wrap} className="strip-wrap">
        <Link href={href} className="strip-link" aria-label={project.title}>
          <div ref={track} className="track">
            {project.media.slice(0, STRIP_LIMIT).map((m, i) => <Media key={i} item={m} className="cell" />)}
          </div>
        </Link>
      </div>
      <div className="legend">
        <div className="legend-left">
          <span className="label">Project</span>
          <div><strong>{project.client}</strong><br /><span className="muted">{project.serviceLine}</span></div>
        </div>
        <div className="legend-right">
          <p>{project.summary}</p>
          <Link href={href} className="more">See Project →</Link>
        </div>
      </div>
    </article>
  );
}
