
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group flex min-h-[320px] flex-col border border-[#dcded6] bg-white/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#bfc8bc] hover:bg-white sm:p-8">
      {/* Project number and category */}
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-xs tracking-wider text-[#898e85]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="text-right text-xs font-medium uppercase tracking-wider text-[#72766f]">
          {project.category}
        </span>
      </div>

      {/* Project title */}
      <h3 className="mb-3 mt-9 max-w-lg text-xl font-medium leading-snug tracking-tight text-[#20231f] sm:text-2xl">
        {project.title}
      </h3>

      {/* Description */}
      <p className="max-w-xl text-base leading-7 text-[#656a62]">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mb-7 mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            className="border border-[#dcded6] px-3 py-1.5 text-xs font-medium text-[#62675f]"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Repository link */}
      <a
        className="mt-auto inline-flex w-fit items-center gap-2 border-b border-[#aeb5aa] pb-1.5 text-sm font-semibold text-[#20231f] transition-colors hover:text-[#536b62]"
        href={project.href}
        target="_blank"
        rel="noreferrer"
      >
        View repository
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </article>
  );
}
