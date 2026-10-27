import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "DriveSense",
      role: "Frontend Developer & UI/UX Designer",
      badge: "Portfolio Project",
      description: "A driving analytics platform featuring simulated trip tracking, map visualization, and an interactive dashboard for visualizing driving behavior, driving scores, and risk event analysis.",
      achievements: [
        "Built interactive dashboards with driving scores and risk event analysis",
        "Created simulated trip tracking and map visualization",
        "Crafted a dark-mode SaaS UI translating Figma wireframes into high-performance code"
      ],
      tags: ["React", "JavaScript", "Tailwind CSS", "Data Visualization", "Figma-to-Code"],
      link: "https://drivesen.netlify.app/",
      ctaText: "View Live Site"
    },
    {
      title: "Jos Medical College Portal",
      role: "Backend Developer",
      badge: "Institutional Platform",
      description: "Developed backend services and portal functionality for Medical Career College of Health Science and Technology, Jos (Affiliated to Evangel University Akaeze). Supports multi-role access for students, faculty, and administrators alongside comprehensive academic and admissions workflows.",
      achievements: [
        "Architected backend endpoints & access control for student, staff, and admin portals",
        "Delivered academic program catalog (CHEW, Public Health, Dental Technology) and admissions services",
        "Ensured responsive design and secure API communication"
      ],
      tags: ["Node.js", "RESTful APIs", "MongoDB / Firebase", "Full-Stack Architecture"],
      link: "https://medicalcareeracademy.ng",
      ctaText: "View Live Site"
    },
    {
      title: "Chop Naija",
      role: "Full-Stack Developer",
      badge: "Culinary E-Commerce",
      description: "A full-stack food ordering platform celebrating Nigerian and African cuisine. Features rich browsable food menus, detailed dish views, dynamic pricing, and a smooth cart-to-checkout flow.",
      achievements: [
        "Engineered the full-stack user experience from responsive menu browsing to checkout",
        "Built modular component-based architecture using React and Tailwind CSS",
        "Integrated client-side state for real-time shopping cart and order summary management"
      ],
      tags: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "RESTful APIs", "E-Commerce"],
      link: "https://chopnaija-eta.vercel.app/",
      ctaText: "View Live Site"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex glass px-4 py-1.5 rounded-full text-primary text-xs font-semibold tracking-wide uppercase mb-3">
              Featured Work
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl">
              Real-world web applications and platforms demonstrating full-stack engineering, clean backend APIs, and pixel-perfect UI implementation.
            </p>
          </div>
          <Link 
            href="https://github.com/Mimx22" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium text-primary hover:text-primary-dark transition-colors whitespace-nowrap inline-flex items-center gap-1.5"
          >
            View GitHub Archive →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="glass rounded-2xl p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col justify-between border border-white/10 hover:border-primary/40 shadow-lg"
            >
              {/* Subtle hover glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                    {project.badge}
                  </span>
                  <span className="text-xs text-foreground-muted font-medium">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.achievements && (
                  <div className="mb-6 space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Key Highlights:</span>
                    <ul className="space-y-1.5 text-xs text-foreground-muted">
                      {project.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✦</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 text-foreground-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group-hover:translate-x-1 duration-200"
                >
                  {project.ctaText} 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
