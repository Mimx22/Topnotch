import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "DriveSense App",
      description: "A highly polished SaaS dashboard UI featuring advanced data visualization, modern interactive elements, and a premium dark-themed interface.",
      tags: ["React", "Tailwind CSS", "Dashboard", "UI/UX"],
      link: "https://mimx22-drivesense-app.netlify.app/",
      ctaText: "View Live Site"
    },
    {
      title: "Jos Medical College Portal",
      description: "A robust full-stack admissions portal featuring secure student authentication, custom ID formatting, and automated email workflows.",
      tags: ["Full-Stack", "React", "Node.js", "Authentication"],
      link: "https://health-college-websites.vercel.app/",
      ctaText: "View Live Site"
    },
    {
      title: "Rexolute Therapy Web App",
      description: "A comprehensive multi-page application with a dashboard-style user interface built with customized, reusable React components.",
      tags: ["React", "Component-Driven", "Vite", "RESTful APIs"],
      link: "https://rexolute-webapp.vercel.app/contact-us",
      ctaText: "View Live Site"
    },
    {
      title: "To-Do Application",
      description: "A highly responsive task management application featuring full CRUD functionality and real-time database synchronization via Firebase.",
      tags: ["JavaScript", "React", "Firebase", "State Management"],
      link: "https://github.com/mimx22",
      ctaText: "View Code"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl">
              A selection of my recent work, highlighting my expertise in full-stack development, UI/UX design, and complex problem solving.
            </p>
          </div>
          <Link href="https://github.com" target="_blank" className="font-medium text-primary hover:text-primary-dark transition-colors whitespace-nowrap">
            View full archive →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass rounded-2xl p-8 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              {/* Subtle hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-foreground-muted mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-foreground-muted">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                {project.ctaText} 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
