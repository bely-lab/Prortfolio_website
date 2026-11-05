
import { PageIntro } from "../components/PageIntro";

const roles = [
  {
    period: "2026",
    role: "Research Intern",
    organisation: "Haqila Lab",
    description:
      "Contributed to early-stage research exploring multimodal data and AI approaches for infectious disease-related problems.",
    points: [
      "Exploring multimodal datasets for disease research",
      "Assessing data sources and their suitability for machine learning",
      "Investigating AI-based approaches to health-related challenges",
    ],
  },
  {
    period: "Nov 2022 — Oct 2024",
    role: "Web Developer",
    organisation: "Eyu-Ethiopia",
    description:
      "Worked on the development and maintenance of an organisation’s website and related web functionality.",
    points: [
      "Website development and maintenance",
      "Web technologies and database-backed functionality",
    ],
  },
  {
    period: "Academic experience",
    role: "Assistant Lecturer",
    organisation: "Bahir Dar University",
    description:
      "Contributed to university teaching in a software engineering and computing environment.",
    points: [
      "Teaching and supporting student learning",
      "Communicating technical concepts",
    ],
  },
  {
    period: "Four-month internship",
    role: "Software Development Intern",
    organisation: "Ethiopian Airlines",
    description:
      "Completed a four-month internship working with C# and .NET Core in an enterprise software environment.",
    points: [
      "C# and .NET Core",
      "Exposure to enterprise application development",
    ],
  },
];

export default function Experience() {
  return (
    <>
      <PageIntro
        eyebrow="Experience"
        title="Engineering, research and teaching."
        intro="My experience brings together software development, academic teaching and applied research, supported by postgraduate training in Brain and Data Science."
      />

      <div className="timeline">
        {roles.map((item, index) => (
          <article className="timeline-item" key={item.role}>
            <div className="timeline-period">{item.period}</div>

            <div className="timeline-content">
              <span className="timeline-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2>{item.role}</h2>
              <h3>{item.organisation}</h3>
              <p>{item.description}</p>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
