"use client";

import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Award,
  BriefcaseBusiness,
  Check,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Research", "research"],
  ["Education", "education"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
] as const;

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["Python", "Java", "C"],
  },
  {
    title: "Core Computer Science",
    icon: Sparkles,
    items: [
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
      "Exception Handling",
      "File Handling",
      "Debugging",
    ],
  },
  {
    title: "Software Development",
    icon: BriefcaseBusiness,
    items: [
      "Backend Development",
      "Application Development",
      "REST API Fundamentals",
      "CRUD Operations",
      "Functional Validation",
      "SDLC Fundamentals",
    ],
  },
  {
    title: "Database",
    icon: Code2,
    items: [
      "SQL",
      "MySQL",
      "Relational Databases",
      "Joins",
      "Aggregations",
      "Data Validation",
    ],
  },
  {
    title: "AI / ML & Data",
    icon: Sparkles,
    items: [
      "NumPy",
      "Pandas",
      "OpenCV",
      "Machine Learning Fundamentals",
      "Data Preprocessing",
      "Data Analysis",
    ],
  },
  {
    title: "Professional Skills",
    icon: Award,
    items: [
      "Analytical Problem Solving",
      "Technical Documentation",
      "Communication",
      "Team Collaboration",
      "Requirement Understanding",
      "Attention to Detail",
    ],
  },
];

const projects = [
  {
    title: "VidStyler",
    category: "AI / ML · Image & video",
    featured: true,
    description:
      "Developed an interactive Python and Gradio-based AI application for image and video editing.",
    features: [
      "Neural style transfer",
      "Object removal",
      "Video and image processing",
      "Input and output validation",
      "Runtime and performance debugging",
    ],
    technologies: [
      "Python",
      "Gradio",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Machine Learning",
    ],
    visual: "visual-art",
  },
  {
    title: "Energy Consumption and Conservation Analysis",
    category: "Data analysis",
    description:
      "Analyzed energy consumption data using Python and SQL to identify patterns, inconsistencies, and useful insights.",
    features: [
      "Data preprocessing and validation",
      "SQL queries and aggregations",
      "Missing-value and data-quality analysis",
      "Analytical reporting",
      "Energy conservation insights",
    ],
    technologies: ["Python", "SQL", "Data Analysis", "Data Preprocessing"],
    visual: "visual-data",
  },
  {
    title: "Student Expense Tracker",
    category: "Web development · Database",
    description:
      "Developed a web-based expense tracking application with SQL-based backend data management.",
    features: [
      "Expense entry and database storage",
      "Input validation",
      "CRUD operations",
      "Data integrity validation",
      "Functional workflow validation",
      "SQL record verification",
    ],
    technologies: ["Web Development", "SQL", "Database Management"],
    visual: "visual-ledger",
  },
];

const education = [
  {
    title: "Bachelor of Engineering",
    subtitle: "Computer Science Engineering",
    place: "Cambridge Institute of Technology, Bengaluru",
    dates: "2022 – 2026",
    result: "8.5 CGPA",
  },
  {
    title: "Pre-University Course (PUC)",
    subtitle: "",
    place: "Sri Chaitanya PU College, Bengaluru",
    dates: "2020 – 2022",
    result: "76%",
  },
  {
    title: "SSLC",
    subtitle: "",
    place: "Sri Chaitanya Techno School, Bengaluru",
    dates: "2020",
    result: "73%",
  },
];

const certifications = [
  ["The Joy of Computing Using Python", "NPTEL"],
  ["Python Foundation Certification", "Infosys Springboard"],
  ["Machine Learning Foundation Certification", "Infosys Springboard"],
  ["Java Foundation Certification", "Infosys Springboard"],
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="section-title"
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );

    navItems.forEach(([, id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormMessage(
      "This form is a frontend demo and is not connected to an email service.",
    );
    event.currentTarget.reset();
  }

  const animationProps = reduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.12 },
        variants: reveal,
        transition: { duration: 0.5 },
      };

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      <header className={`nav-wrap ${scrolled ? "nav-scrolled" : ""}`}>
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="K Prathyusha home">
            K<span>.</span>P
          </a>
          <div className="desktop-links">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? "nav-link active" : "nav-link"}
              >
                {label}
              </a>
            ))}
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <main>
        <section id="home" className="hero shell">
          <div className="hero-grid" aria-hidden="true" />
          <motion.div
            className="hero-content"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="status">
              <span className="status-dot" />
              Open to Software Development Opportunities
            </div>
            <p className="hero-kicker">K PRATHYUSHA</p>
            <h1>
              Computer Science Engineer
              <span className="hero-line">
                <span className="green">|</span> Software Developer
              </span>
            </h1>
            <p className="hero-copy">
              Building reliable applications with Java, Python, SQL, backend
              development and modern software engineering.
            </p>
            <p className="hero-secondary">
              Interested in backend development, scalable software, cloud
              technologies, DevOps, data analysis and AI/ML.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View My Projects <ArrowRight size={16} />
              </a>
              <a
                className="button button-secondary"
                href="/resume/K-Prathyusha-Resume.pdf"
                download
              >
                Download Resume <ArrowDown size={16} />
              </a>
              <a className="text-link" href="#contact">
                Contact Me
              </a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Bangalore, India</span>
              <span><Code2 size={15} /> Software development · AI/ML · Data</span>
            </div>
          </motion.div>
          <motion.div
            className="hero-card"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            aria-label="Decorative code illustration"
          >
            <div className="code-window">
              <div className="window-dots"><i /><i /><i /></div>
              <div className="code-body">
                <p><span className="code-muted">01</span> <span className="code-purple">class</span> <span className="code-green">Developer</span>:</p>
                <p><span className="code-muted">02</span> &nbsp; name = <span className="code-yellow">&quot;Prathyusha&quot;</span></p>
                <p><span className="code-muted">03</span> &nbsp; focus = [</p>
                <p><span className="code-muted">04</span> &nbsp;&nbsp; <span className="code-yellow">&quot;backend&quot;</span>,</p>
                <p><span className="code-muted">05</span> &nbsp;&nbsp; <span className="code-yellow">&quot;AI / ML&quot;</span>,</p>
                <p><span className="code-muted">06</span> &nbsp;&nbsp; <span className="code-yellow">&quot;reliable software&quot;</span></p>
                <p><span className="code-muted">07</span> &nbsp; ]</p>
                <p className="code-cursor"><span className="code-muted">08</span> &nbsp; <span className="green">ready_to_build()</span></p>
              </div>
              <div className="code-foot"><span className="status-dot" /> Open to meaningful work</div>
            </div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section id="about" className="section shell">
          <SectionTitle eyebrow="A little about me" title="About Me" />
          <div className="about-grid">
            <motion.div className="about-copy" {...animationProps}>
              <p>
                I am a Computer Science Engineering graduate with strong
                foundations in Java, Python, SQL, Object-Oriented Programming,
                backend development, REST APIs, and database management.
              </p>
              <p>
                I have hands-on experience building applications, implementing
                CRUD operations, validating application workflows, debugging
                software, and working with application and database workflows.
              </p>
              <p>
                I am interested in contributing to scalable enterprise software
                development while building expertise in cloud technologies,
                DevOps, and modern backend engineering.
              </p>
            </motion.div>
            <motion.div className="about-panel" {...animationProps}>
              <span className="panel-icon"><Code2 size={22} /></span>
              <span className="eyebrow">MY APPROACH</span>
              <h3>Thoughtful engineering.<br />Reliable software.</h3>
              <p>
                Curious by nature, detail-oriented in practice, and always
                learning through building.
              </p>
              <div className="panel-rule" />
              <span className="panel-foot">COMPUTER SCIENCE · SOFTWARE DEVELOPMENT</span>
            </motion.div>
          </div>
          <div className="highlights">
            {[
              ["8.5", "CGPA"],
              ["Computer Science", "Engineering"],
              ["Full Stack", "Development Internship"],
              ["AI / ML", "Project Experience"],
            ].map(([title, subtitle]) => (
              <motion.div className="highlight-card" key={title} {...animationProps}>
                <strong>{title}</strong><span>{subtitle}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="section section-dim">
          <div className="shell">
            <SectionTitle
              eyebrow="Tools & foundations"
              title="Technical Skills"
              text="A practical toolkit across programming, application development, data, and collaboration."
            />
            <div className="skill-grid">
              {skillGroups.map(({ title, icon: Icon, items }) => (
                <motion.article
                  className="skill-card"
                  key={title}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  {...animationProps}
                >
                  <div className="skill-heading"><span><Icon size={18} /></span><h3>{title}</h3></div>
                  <div className="chips">{items.map((item) => <span className="chip" key={item}>{item}</span>)}</div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section shell">
          <SectionTitle eyebrow="Where I’ve contributed" title="Experience" />
          <motion.article className="experience-card" {...animationProps}>
            <div className="timeline-marker"><BriefcaseBusiness size={18} /></div>
            <div className="experience-top">
              <div>
                <span className="eyebrow">INTERNSHIP</span>
                <h3>Full Stack Development Intern</h3>
                <p className="company">VrishankSoft (OPC) PVT LTD</p>
              </div>
              <span className="date-pill">February 2026 – May 2026</span>
            </div>
            <ul className="check-list">
              {[
                "Developed web application features using frontend and backend technologies.",
                "Contributed to application functionality and workflows.",
                "Used Python and SQL for application logic, database operations, and data handling.",
                "Implemented input validation and CRUD functionality.",
                "Maintained data integrity and application reliability.",
                "Performed debugging and functional validation.",
                "Identified issues and verified application workflows.",
                "Worked with application and database workflows to identify inconsistencies and support effective problem resolution.",
              ].map((item) => <li key={item}><Check size={15} />{item}</li>)}
            </ul>
          </motion.article>
        </section>

        <section id="projects" className="section section-dim">
          <div className="shell">
            <SectionTitle
              eyebrow="Selected work"
              title="Projects"
              text="Application and analysis work built around practical problem-solving."
            />
            <div className="project-grid">
              {projects.map((project, index) => (
                <motion.article
                  className={`project-card ${project.featured ? "project-featured" : ""}`}
                  key={project.title}
                  {...animationProps}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                >
                  <div className={`project-visual ${project.visual}`}>
                    {project.featured ? (
                      <div className="art-frame">
                        <div className="art-orb" />
                        <div className="art-lines" />
                        <span className="art-caption">IMAGE · VIDEO · AI</span>
                      </div>
                    ) : project.visual === "visual-data" ? (
                      <div className="chart-art" aria-hidden="true">
                        {[32, 58, 42, 76, 53, 89, 66].map((height, i) => <span key={i} style={{ height: `${height}%` }} />)}
                      </div>
                    ) : (
                      <div className="ledger-art" aria-hidden="true">
                        <span /><span /><span /><span />
                      </div>
                    )}
                    {project.featured && <span className="featured-badge"><Sparkles size={13} /> Featured Project</span>}
                    <span className="project-number">0{index + 1}</span>
                  </div>
                  <div className="project-content">
                    <span className="eyebrow">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <h4>Key features</h4>
                    <ul className="feature-list">
                      {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <div className="chips project-chips">
                      {project.technologies.map((tech) => <span className="chip" key={tech}>{tech}</span>)}
                    </div>
                    <div className="project-links">
                      <a href="#" aria-label={`Code2 for ${project.title}`}><Code2 size={15} /> Code2 <ExternalLink size={13} /></a>
                      <a href="#" aria-label={`Live demo for ${project.title}`}><ArrowRight size={15} /> Live Demo</a>
                      <a href="#" aria-label={`Details for ${project.title}`}>View Details <ArrowRight size={14} /></a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="section shell">
          <SectionTitle eyebrow="Exploring ideas" title="Research & Publications" />
          <motion.article className="research-card" {...animationProps}>
            <div className="research-symbol"><Sparkles size={27} /></div>
            <div className="research-content">
              <span className="eyebrow">RESEARCH PAPER · AI / ML</span>
              <h3>AI Powered Image and Video Editing</h3>
              <p className="research-subtitle">Research Paper – VidStyler</p>
              <p>
                Research work focused on AI-powered image and video editing,
                including neural style transfer, object removal and video processing.
              </p>
              <div className="chips">
                {["AI/ML", "Image Processing", "Video Processing", "Python", "OpenCV", "Gradio"].map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </div>
            <a className="button button-secondary" href="#" aria-label="View research paper">
              View Research Paper <ExternalLink size={15} />
            </a>
          </motion.article>
        </section>

        <section id="education" className="section section-dim">
          <div className="shell">
            <SectionTitle eyebrow="Learning journey" title="Education" />
            <div className="education-list">
              {education.map((item, index) => (
                <motion.article className="education-card" key={item.title} {...animationProps}>
                  <div className="education-icon"><GraduationCap size={19} /></div>
                  <div className="education-main">
                    <span className="eyebrow">0{index + 1} / EDUCATION</span>
                    <h3>{item.title}</h3>
                    {item.subtitle && <p className="education-subtitle">{item.subtitle}</p>}
                    <p>{item.place}</p>
                  </div>
                  <div className="education-meta"><span>{item.dates}</span><strong>{item.result}</strong></div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section shell">
          <SectionTitle eyebrow="Continued learning" title="Certifications" />
          <div className="cert-grid">
            {certifications.map(([title, issuer]) => (
              <motion.article className="cert-card" key={title} {...animationProps}>
                <span className="cert-icon"><Award size={19} /></span>
                <div><h3>{title}</h3><p>{issuer}</p></div>
                <a href="#" aria-label={`View certificate: ${title}`} className="cert-link">View Certificate <ArrowRight size={14} /></a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section-dim">
          <div className="shell">
            <SectionTitle
              eyebrow="Have an opportunity?"
              title="Let’s Build Something Together"
              text="I'm interested in software development, backend engineering, data, AI/ML and opportunities where I can continue learning and contribute to meaningful technology solutions."
            />
            <div className="contact-grid">
              <div className="contact-info">
                <a href="mailto:kprathyusha0704@gmail.com"><span><Mail size={18} /></span><div><small>EMAIL</small><strong>kprathyusha0704@gmail.com</strong></div></a>
                <a href="tel:7411032825"><span><Phone size={18} /></span><div><small>PHONE</small><strong>7411032825</strong></div></a>
                <div className="contact-static"><span><MapPin size={18} /></span><div><small>LOCATION</small><strong>Bangalore, India</strong></div></div>
                <div className="social-row">
                  <a href="#" aria-label="Code2 profile"><Code2 size={17} /> Code2</a>
                  <a href="#" aria-label="LinkedIn profile"><ExternalLink size={17} /> LinkedIn</a>
                  <a href="mailto:kprathyusha0704@gmail.com" aria-label="Send email"><Mail size={17} /> Email</a>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>Name<input name="name" autoComplete="name" required /></label>
                  <label>Email<input name="email" type="email" autoComplete="email" required /></label>
                </div>
                <label>Subject<input name="subject" required /></label>
                <label>Message<textarea name="message" rows={5} required /></label>
                <button className="button button-primary" type="submit">Send Message <Send size={15} /></button>
                {formMessage && <p className="form-message" role="status">{formMessage}</p>}
                <p className="form-note">Frontend demo only — this form does not send messages.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <div className="footer-main">
          <a className="brand" href="#home">K<span>.</span>P</a>
          <div><strong>K Prathyusha</strong><p>Computer Science Engineer | Software Developer</p></div>
          <div className="footer-social">
            <a href="#" aria-label="Code2 profile"><Code2 size={17} /></a>
            <a href="#" aria-label="LinkedIn profile"><ExternalLink size={17} /></a>
            <a href="mailto:kprathyusha0704@gmail.com" aria-label="Email"><Mail size={17} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 K Prathyusha. All rights reserved.</span>
          <div>{(["home", "about", "projects", "contact"] as const).map((id) => <a href={`#${id}`} key={id}>{id[0].toUpperCase() + id.slice(1)}</a>)}</div>
        </div>
      </footer>

      <a className={`back-top ${scrolled ? "back-top-visible" : ""}`} href="#home" aria-label="Back to top">
        <ArrowUp size={18} />
      </a>
    </>
  );
}
