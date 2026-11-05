import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-topline">
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tag-list">
        {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
      </div>
      <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
        View repository <ArrowUpRight size={15} />
      </a>
    </article>
  );
}
