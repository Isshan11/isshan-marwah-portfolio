import type { LucideIcon } from 'lucide-react';
import { Box, FolderSearch, Gamepad2, GitBranch, Mail, MapPin, Sparkles } from 'lucide-react';

type FeaturedProject = {
  category: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
  platform: string;
  accent: 'lime' | 'cyan' | 'amber';
  image?: string;
  icon?: LucideIcon;
};

const technicalProjects: FeaturedProject[] = [
  {
    category: 'Technical Art / Unreal Engine',
    title: 'Artist-Facing Asset Cleanup Tool',
    summary: 'Scans selected Content Browser folders against the open level, surfaces unused assets, and supports multi-select deletion and recursive empty-folder cleanup.',
    tags: ['Editor Utility Widget', 'Blueprint', 'Asset Management'],
    href: 'https://www.artstation.com/artwork/dLyBk3',
    platform: 'ArtStation',
    accent: 'amber',
    icon: FolderSearch,
  },
  {
    category: 'Technical Art / PCG',
    title: 'Procedural Ecosystem Generator',
    summary: 'An artist-controlled biome system for trees, grass, and rocks with terrain rules, weighted variation, paint masks, and spline exclusions.',
    tags: ['Unreal Engine', 'PCG', 'Procedural Workflows'],
    href: 'https://www.artstation.com/artwork/AoZQXW',
    platform: 'ArtStation',
    accent: 'lime',
    icon: Sparkles,
  },
  {
    category: 'Game Development / Unity',
    title: 'Vector of Fear',
    summary: 'Created the models, textures, animation, shaders, VFX, and Unity implementation for an award-recognized sci-fi survival-horror game.',
    tags: ['Unity', 'C#', '3D Art & Animation'],
    href: 'https://seraphstudios.itch.io/vector-of-fear',
    platform: 'Itch.io',
    accent: 'lime',
    icon: Gamepad2,
  },
  {
    category: 'Automation / Website QA',
    title: 'Selenium UI Automation Suite',
    summary: 'A Python and Selenium test suite for page-by-page content, navigation, load-time, screenshot, CSV, and Jira Xray reporting checks.',
    tags: ['Python', 'Selenium', 'Page Objects'],
    href: 'https://github.com/Isshan11/selenium-ui-automation-portfolio',
    platform: 'GitHub',
    accent: 'amber',
    icon: GitBranch,
  },
];

const artProjects: FeaturedProject[] = [
  {
    category: 'Low-Poly Prop',
    title: '8BitDo Ultimate 2C — Low-Poly Controller',
    summary: 'A 6.1k-triangle recreation modeled and UV unwrapped in Blender, textured in Substance 3D Painter, and rendered in Iray with 2K textures.',
    tags: ['Blender', 'Substance 3D Painter', 'Iray'],
    href: 'https://www.artstation.com/artwork/9BB2gN',
    platform: 'ArtStation',
    accent: 'cyan',
    image: '/media/8bitdo-controller.jpg',
  },
  {
    category: 'Sci-Fi Environment',
    title: 'Storage Room Environment — Vector of Fear',
    summary: 'A dark storage and maintenance room built for the Vector of Fear spaceship, using modular architecture and prop storytelling. Modeled in 3ds Max, textured in Substance 3D Painter, and lit in Unity.',
    tags: ['3ds Max', 'Substance 3D Painter', 'Unity'],
    href: 'https://isshan11.artstation.com/projects/lGAYRY',
    platform: 'ArtStation',
    accent: 'cyan',
    image: '/media/storage-room.webp',
  },
  {
    category: 'Weapon Prop',
    title: 'Tactical Knife — Hard-Surface 3D Model',
    summary: 'A detailed folding knife exploring mechanical forms, clean topology, and a high-to-low-poly workflow, including UV and topology breakdowns.',
    tags: ['3ds Max', 'High & Low Poly', 'UV Unwrapping'],
    href: 'https://isshan11.artstation.com/projects/XJADoL',
    platform: 'ArtStation',
    accent: 'cyan',
    image: '/media/tactical-knife.webp',
  },
  {
    category: 'Industrial Prop',
    title: 'Industrial Generator — Hard-Surface 3D Model',
    summary: 'A high-poly industrial generator study focused on mechanical construction, layered panels, functional details, and clean hard-surface presentation.',
    tags: ['3ds Max', 'High Poly', 'Hard Surface'],
    href: 'https://isshan11.artstation.com/projects/EzA952',
    platform: 'ArtStation',
    accent: 'cyan',
    image: '/media/industrial-generator.webp',
  },
];

const moreTechnicalProjects = [
  { title: "End of the Stickin' World — programming and implementation", href: 'https://takospec.itch.io/end-of-the-stickin-world' },
  { title: 'More games on Itch.io', href: 'https://isshan-marwah.itch.io' },
];

const moreArtProjects = [
  { title: 'Rock Golem', href: 'https://isshan11.artstation.com/projects/WdmZYQ' },
  { title: 'Space Harbor & Docking Bay', href: 'https://isshan11.artstation.com/projects/RKAVXO' },
  { title: 'Cryopod Chamber', href: 'https://isshan11.artstation.com/projects/L4AVr5' },
  { title: 'Flamethrower', href: 'https://isshan11.artstation.com/projects/lEDr9o' },
];

const skillGroups = [
  {
    title: 'Software & Platforms',
    tools: ['Unreal Engine 5', 'Unity', 'Blender', '3ds Max', 'Substance 3D Painter', 'Photoshop', 'Selenium', 'Git / GitLab'],
  },
  {
    title: 'Programming & Technical',
    tools: ['C++', 'C#', 'Python', 'Blueprints', 'PCG', 'Editor Utility Widgets', 'API Validation', 'MySQL'],
  },
];

const experience = [
  {
    company: 'Lakshya Digital',
    role: 'Game Art Intern — Unreal Engine / Technical Art',
    dates: 'May 2026 – Aug 2026',
    location: 'India',
    points: [
      'Developed production-style Unreal Engine gameplay, AI, procedural, and editor-tool prototypes.',
      'Built an artist-controlled PCG ecosystem and asset-management workflows.',
      'Integrated animation, IK, VFX, and Chaos destruction into working real-time systems.',
    ],
    tags: ['Unreal Engine 5', 'C++', 'Blueprints', 'PCG'],
  },
  {
    company: 'Virgin Mobile UAE',
    role: 'Technical / Automation Intern',
    dates: '3-month internship',
    location: 'Dubai, UAE',
    points: [
      'Built Python and Selenium automation for website content, navigation, and load-time checks.',
      'Worked across API validation, GitLab workflows, evidence capture, and technical reporting.',
    ],
    tags: ['Python', 'Selenium', 'QA Automation', 'API Validation'],
  },
];

function ProjectCard({ project }: { project: FeaturedProject }) {
  const Icon = project.icon ?? Box;

  return (
    <a className={`recruiter-project accent-${project.accent}`} href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on ${project.platform}`}>
      <div className={`project-preview${project.image ? ' project-preview-image' : ''}`}>
        {project.image ? <img src={project.image} alt="" /> : <Icon aria-hidden="true" />}
      </div>
      <div className="project-card-body">
        <div className="project-meta"><span>{project.category}</span><span>{project.platform}</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="compact-tags" aria-label={`${project.title} skills`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <span className="project-cta">View project</span>
      </div>
    </a>
  );
}

function ArtProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <a className="art-project" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on ${project.platform}`}>
      <div className="art-project-image"><img src={project.image} alt="" /></div>
      <div className="art-project-body">
        <div className="project-meta"><span>{project.category}</span><span>{project.platform}</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="compact-tags" aria-label={`${project.title} skills`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="recruiter-header">
        <a className="recruiter-brand" href="#top" aria-label="Isshan Marwah, home">
          <span className="brand-mark">IM</span>
          <span><strong>Isshan Marwah</strong><small>Portfolio</small></span>
        </a>
        <nav className="recruiter-nav" aria-label="Main navigation">
          <a href="#technical">Technical Work</a>
          <a href="#art">3D Art</a>
          <a href="#about">About Me</a>
          <a href="#experience">Experience</a>
        </nav>
        <div className="header-actions">
          <a className="header-link" href="https://www.artstation.com/isshan11" target="_blank" rel="noreferrer">ArtStation</a>
          <a className="header-link header-link-primary" href="/Isshan-Marwah-Technical-Artist-Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </header>

      <section className="recruiter-hero" id="top">
        <div className="recruiter-hero-copy">
          <p className="recruiter-kicker">Game Development &amp; Interactive Media</p>
          <h1>Isshan<br /><em>Marwah.</em></h1>
          <p className="hero-lead">I work across programming, automation, technical tools, 3D art, and interactive projects.</p>
          <p className="hero-support">I&apos;m an Ontario Tech University student who enjoys learning new workflows and solving unfamiliar problems through hands-on work.</p>
          <div className="hero-actions-simple">
            <a className="simple-button simple-button-primary" href="#technical">View technical work</a>
            <a className="simple-button" href="#art">View 3D art</a>
            <a className="simple-button" href="mailto:isshanmarwah@gmail.com">Email me</a>
          </div>
        </div>
        <div className="recruiter-portrait">
          <img src="/media/isshan-marwah-niagara.png" alt="Isshan Marwah at Niagara Falls" />
          <div className="portrait-caption">
            <span><MapPin size={15} /> Ontario, Canada</span>
            <span>Ontario Tech University</span>
          </div>
        </div>
      </section>

      <section className="recruiter-section technical-section" id="technical">
        <div className="recruiter-section-heading">
          <div><p className="recruiter-kicker">Technical work</p><h2>Tools, systems,<br />and implementation.</h2></div>
          <p>Focused examples of technical art, automation, and game-development work.</p>
        </div>
        <div className="recruiter-project-grid technical-project-grid">
          {technicalProjects.map((project) => <ProjectCard project={project} key={project.title} />)}
        </div>
        <details className="more-projects">
          <summary><span>More technical and game work</span><span aria-hidden="true">+</span></summary>
          <div className="more-projects-grid single-group">
            <div><ul>{moreTechnicalProjects.map((project) => <li key={project.title}><a href={project.href} target="_blank" rel="noreferrer">{project.title}</a></li>)}</ul></div>
          </div>
        </details>
      </section>

      <section className="recruiter-section art-section" id="art">
        <div className="recruiter-section-heading">
          <div><p className="recruiter-kicker">3D art</p><h2>Props, environments,<br />and real-time presentation.</h2></div>
          <p>A focused selection of hard-surface props, environments, and real-time presentation work.</p>
        </div>
        <div className="art-project-grid">
          {artProjects.map((project) => <ArtProjectCard project={project} key={project.title} />)}
        </div>
        <details className="more-projects">
          <summary><span>More 3D art</span><span aria-hidden="true">+</span></summary>
          <div className="more-projects-grid single-group">
            <div><ul>{moreArtProjects.map((project) => <li key={project.title}><a href={project.href} target="_blank" rel="noreferrer">{project.title}</a></li>)}</ul></div>
          </div>
        </details>
        <a className="section-profile-link" href="https://www.artstation.com/isshan11" target="_blank" rel="noreferrer">View full ArtStation profile</a>
      </section>

      <section className="compact-about" id="about">
        <div className="about-intro">
          <div className="compact-section-label"><span>About me</span><p>Creative and technical work, connected by curiosity.</p></div>
          <p>I&apos;m a Game Development and Interactive Media student at Ontario Tech University, working across programming, automation, technical tools, and 3D art. I enjoy learning new tools, improving workflows, and solving unfamiliar problems—especially when a project pushes me beyond what I already know.</p>
        </div>
        <div className="compact-skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h2>{group.title}</h2>
              <ul>{group.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="recruiter-section experience-draft" id="experience">
        <div className="recruiter-section-heading">
          <div><p className="recruiter-kicker">Experience</p><h2>Work that built<br />practical range.</h2></div>
          <p>Key responsibilities are visible immediately, without another click.</p>
        </div>
        <div className="experience-timeline">
          {experience.map((item) => (
            <article className="experience-row" key={item.company}>
              <div className="experience-when"><strong>{item.company}</strong><span>{item.dates}</span><span>{item.location}</span></div>
              <div className="experience-main">
                <h3>{item.role}</h3>
                <ul className="experience-points">{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <ul className="compact-tags" aria-label={`${item.company} skills`}>{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="recruiter-footer" id="contact">
        <div>
          <p className="recruiter-kicker">Contact</p>
          <h2>Let&apos;s talk about<br />the next project.</h2>
          <p>Ontario, Canada · Available for opportunities</p>
        </div>
        <div className="footer-actions">
          <a href="mailto:isshanmarwah@gmail.com"><Mail size={16} /> Email</a>
          <a href="https://www.artstation.com/isshan11" target="_blank" rel="noreferrer">ArtStation</a>
          <a href="https://isshan-marwah.itch.io" target="_blank" rel="noreferrer">Itch.io</a>
          <a href="/Isshan-Marwah-Technical-Artist-Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
        <div className="footer-bottom"><span>© 2026 Isshan Marwah</span><span>Programming · Automation · 3D Art · Interactive Work</span></div>
      </footer>
    </main>
  );
}
