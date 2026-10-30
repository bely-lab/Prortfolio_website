//import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { PageIntro } from "../components/PageIntro";

export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Open to thoughtful collaborations."
        intro="I’m interested in opportunities across software engineering, applied AI and machine learning, data science and research."
      />
      <div className="contact-layout">
        <div className="contact-main">
          <p className="eyebrow">Start a conversation</p>
          {/* <a className="email-link" href="mailto:tslatebely@gmail.com">tslatebely@gmail.com <ArrowUpRight size={22} /></a> */}
          <p className="contact-copy">For roles, research opportunities, collaborations or a conversation about a project, feel free to get in touch.</p>
        </div>
        {/* <div className="contact-details">
          <a href="https://github.com/bely-lab" target="_blank" rel="noreferrer"><Github size={18} /><span>GitHub</span><ArrowUpRight size={15} /></a>
          <a href="https://www.linkedin.com/in/belaynesh-m-kndie-207649220/" target="_blank" rel="noreferrer"><Linkedin size={18} /><span>LinkedIn</span><ArrowUpRight size={15} /></a>
          <a href="mailto:tslatebely@gmail.com"><Mail size={18} /><span>Email</span><ArrowUpRight size={15} /></a>
          <div className="contact-location"><span>Location</span><strong>Finland</strong></div>
        </div> */}
      </div>
    </>
  );
}
