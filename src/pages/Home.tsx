import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, thesis } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export default function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Based in Finland · Open to opportunities</p>
          <h2>Engineering software.<br /><em>Exploring intelligence.</em></h2>
          <p className="hero-lede">
            I’m Belaynesh, an AI and software engineer with a background in Brain and Data Science.
            I work across software development, machine learning and data-driven research.
          </p>
          <div className="hero-actions">
            <Link to="/work" className="button button-dark">Explore selected work <ArrowUpRight size={16} /></Link>
            <Link to="/about" className="button button-light">More about me <ArrowDownRight size={16} /></Link>
          </div>
          <div className="hero-meta">
            <span>Software engineering</span><span>Applied AI / ML</span><span>Brain data research</span>
          </div>
        </div>
        <aside className="hero-aside">
          <div className="aside-rule" />
          <p className="aside-label">A multidisciplinary perspective</p>
          <p className="aside-statement">
            From building web applications to analysing neural and physiological signals, I’m interested in technology that helps make complex problems more understandable and useful.
          </p>
          <div className="aside-bottom">
            <span>Jyväskylä, Finland</span>
            <span>01 / 06</span>
          </div>
        </aside>
      </section>

      <section className="intro-strip">
        <p className="eyebrow">Profile</p>
        <p>
          My work brings together practical software development and analytical methods.
          I hold a BSc in Software Engineering and an Erasmus Mundus MSc in Brain and Data Science
          from the University of Jyväskylä and Bar-Ilan University.
        </p>
        <Link to="/about" className="round-link" aria-label="Read about me"><ArrowUpRight size={19} /></Link>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2>Projects across disciplines</h2></div>
          <Link to="/work" className="text-link">All projects <ArrowUpRight size={15} /></Link>
        </div>
        <div className="project-grid">
          {featured.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </section>

      <section className="research-feature">
        <div className="research-feature-label">
          <p className="eyebrow">Master’s thesis · 2026</p>
          <span className="feature-number">01</span>
        </div>
        <div className="research-feature-content">
          <h2>{thesis.title}</h2>
          <p>{thesis.description}</p>
          <Link to="/research" className="text-link text-link-light">Explore research <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="closing-cta">
        <p className="eyebrow">Have a project or opportunity in mind?</p>
        <div className="closing-row">
          <h2>Let’s make<br /><em>something meaningful.</em></h2>
          <Link to="/contact" className="button button-dark">Start a conversation <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
