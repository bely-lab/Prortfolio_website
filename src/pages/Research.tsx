import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { thesis } from "../data/projects";

export default function Research() {
  return (
    <>
      <PageIntro
        eyebrow="Research"
        title="Using data to study complex systems."
        intro="My research interests sit at the intersection of machine learning, neuroscience, physiological data and human behaviour."
      />
      <article className="thesis-panel">
        <div className="thesis-meta"><span>Master’s thesis</span><span>Brain and Data Science · 2026</span></div>
        <h2>{thesis.title}</h2>
        <p className="large-copy">{thesis.description}</p>
        <div className="method-list">
          <p className="eyebrow">Research components</p>
          {thesis.methods.map((method, i) => <div key={method}><span>{String(i + 1).padStart(2, "0")}</span>{method}</div>)}
        </div>
        <p className="research-caveat">The thesis examines classification across experimentally defined conditions. The portfolio summary will be expanded with the final abstract, methodology and verified results when the thesis document is added.</p>
      </article>
      <section className="section-block">
        <p className="eyebrow">Related interests</p>
        <div className="interest-list">
          {["Multimodal machine learning", "Neural signal processing and MEG", "Cardiac and physiological features", "Eye-tracking and language processing", "Brain–computer interfaces"].map((item, i) => (
            <div className="interest-row" key={item}><span>{String(i + 1).padStart(2, "0")}</span><h3>{item}</h3></div>
          ))}
        </div>
      </section>
    </>
  );
}
