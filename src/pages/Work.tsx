import { PageIntro } from "../components/PageIntro";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <>
      <PageIntro
        eyebrow="Selected work"
        title="A selection of things I’ve built and explored."
        intro="Projects across full-stack development, applied machine learning, cloud services, medical imaging and language technology. Each entry links to its public repository where available."
      />
      <div className="work-note"><span className="status-dot" /> Project descriptions are concise summaries; implementation details are available in the linked repositories.</div>
      <div className="project-grid project-grid-all">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </>
  );
}
