import Intro from '@/components/Intro';
import ProjectStrip from '@/components/ProjectStrip';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      <Intro />
      <section id="projetos" className="projects">
        {projects.map((p) => <ProjectStrip key={p.slug} project={p} />)}
      </section>
    </>
  );
}
