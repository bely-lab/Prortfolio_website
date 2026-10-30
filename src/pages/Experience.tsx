import { PageIntro } from "../components/PageIntro";

const roles = [
  {
    period: "Nov 2022 — Oct 2024",
    role: "Web Developer",
    organisation: "Eyu-Ethiopia",
    description: "Worked on the development and maintenance of an organisation’s website and related web functionality.",
    points: ["Website development and maintenance", "Web technologies and database-backed functionality"],
  },
  {
    period: "Academic experience",
    role: "Assistant Lecturer",
    organisation: "Bahir Dar University",
    description: "Contributed to university teaching in a software engineering and computing environment.",
    points: ["Teaching and supporting student learning", "Communicating technical concepts"],
  },
  {
    period: "Internship",
    role: "Software Development Intern",
    organisation: "Ethiopian Airlines",
    description: "Completed a four-month internship working with C# and .NET Core in an enterprise software environment.",
    points: ["C# and .NET Core", "Exposure to enterprise application development"],
  },
];

export default function Experience() {
  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="Engineering, teaching and continuous learning."
        intro="My experience combines practical web development, academic teaching and software development training, supported by postgraduate work in data science and machine learning."
      />
      <div className="timeline">
        {roles.map((item, index) => (
          <article className="timeline-item" key={item.role}>
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-content">
              <span className="timeline-index">0{index + 1}</span>
              <h2>{item.role}</h2>
              <h3>{item.organisation}</h3>
              <p>{item.description}</p>
              <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
      <p className="editorial-note">This page is an initial profile draft. Dates, responsibilities and project outcomes will be checked against your CVs before publication.</p>
    </>
  );
}
