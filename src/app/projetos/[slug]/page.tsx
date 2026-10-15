import Link from 'next/link';
import { notFound } from 'next/navigation';
import Media from '@/components/Media';
import { getProject, projects, PROJECT_LIMIT } from '@/data/projects';

export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main className="page">
      <section className="project-info">
        <dl>
          <dt>Client</dt><dd>{project.client}</dd>
          <dt>Services</dt><dd>{project.services.map((s) => <span key={s}>{s}</span>)}</dd>
        </dl>
        <div>
          <h1>{project.title}</h1>
          <p className="project-description">{project.description}</p>
          {project.sections?.map((section) => (
            <section className="project-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          {project.credits && (
            <dl className="project-credits">
              {project.credits.map((credit) => (
                <div key={credit.role}>
                  <dt>{credit.role}</dt>
                  <dd>{credit.href ? <a href={credit.href} target="_blank" rel="noreferrer">{credit.name}</a> : credit.name}</dd>
                </div>
              ))}
            </dl>
          )}
          {project.closing && <p className="project-closing">{project.closing}</p>}
        </div>
      </section>
      {project.media.slice(0, PROJECT_LIMIT).map((m, i) => <Media key={i} item={m} className="full" />)}
      <Link href={`/projetos/${next.slug}`} className="next">Próximo projeto → {next.title}</Link>
    </main>
  );
}
