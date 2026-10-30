import { PageIntro } from "../components/PageIntro";

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A software engineer with a research perspective."
        intro="My background spans software engineering, applied machine learning and brain data science. I’m interested in building useful systems and understanding the data behind complex human and technical problems."
      />
      <div className="content-two-col">
        <div className="content-main">
          <h2>Connecting engineering and analysis</h2>
          <p>I began with a foundation in Software Engineering, developing an interest in how well-designed software can support real operational needs. My professional experience includes web development for an organisation and university-level teaching.</p>
          <p>My subsequent Erasmus Mundus Master’s studies in Brain and Data Science broadened that perspective into machine learning, neural data, biomedical signals and computational approaches to human behaviour.</p>
          <p>I enjoy working between disciplines: understanding a problem, selecting appropriate methods, implementing a solution and evaluating what the results actually show.</p>
        </div>
        <aside className="facts-panel">
          <div><span>01 / Education</span><strong>MSc Brain and Data Science</strong><small>University of Jyväskylä · Bar-Ilan University</small></div>
          <div><span>02 / Foundation</span><strong>BSc Software Engineering</strong><small>Bahir Dar University</small></div>
          <div><span>03 / Based in</span><strong>Finland</strong><small>Available for international collaboration</small></div>
        </aside>
      </div>
      <section className="section-block">
        <p className="eyebrow">Areas of interest</p>
        <div className="interest-list">
          {["Applied machine learning and data science", "Software and backend engineering", "Neural and physiological data analysis", "Multimodal learning and health technology", "Neurotechnology and brain–computer interfaces"].map((item, i) => (
            <div className="interest-row" key={item}><span>{String(i + 1).padStart(2, "0")}</span><h3>{item}</h3></div>
          ))}
        </div>
      </section>
    </>
  );
}
