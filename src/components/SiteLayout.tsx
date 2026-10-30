import { NavLink, Outlet, Link } from "react-router-dom";
//

const links = [
  { to: "/", label: "Overview", end: true },
  { to: "/about", label: "About" },
  { to: "/work", label: "Selected work" },
  { to: "/research", label: "Research" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link to="/" className="wordmark" aria-label="Belaynesh Kndie home">
          <span className="wordmark-mark">BK</span>
          <span>Belaynesh Kndie</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <a className="header-contact" href="mailto:tslatebely@gmail.com">
          Get in touch <a/>
        </a>
      </header>

      <main className="page-container">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <span className="footer-name">Belaynesh Kndie</span>
          <span className="footer-note">AI · Software · Brain & Data Science</span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/bely-lab" target="_blank" rel="noreferrer">
  GitHub
</a>
         <a href="https://www.linkedin.com/in/belaynesh-m-kndie-207649220/" target="_blank" rel="noreferrer">
  LinkedIn
</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}
