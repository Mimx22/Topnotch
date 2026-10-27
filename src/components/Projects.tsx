import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "DriveSense App",
      description: "A highly polished SaaS dashboard UI featuring advanced data visualization, modern interactive elements, and a premium dark-themed interface.",
      tags: ["React", "Tailwind CSS", "Dashboard", "UI/UX"],
      link: "https://drivesen.netlify.app/",
      ctaText: "View Live Site"
    },
    {
      title: "Health College Website",
      description: "Official modern website for Medical Career College of Health Science and Technology, Jos — featuring comprehensive admissions, programs, and academic information.",
      tags: ["HTML5", "Modern CSS", "Responsive Design", "Web Application"],
      link: "https://medicalcareeracademy.ng",
      ctaText: "View Live Site"
    },
    {
      title: "Chopnaija",
      description: "A dynamic African culinary ordering and food showcase platform delivering a smooth, authentic browsing experience and responsive UI.",
      tags: ["JavaScript", "React", "Tailwind CSS", "E-Commerce"],
      link: "https://chopnaija-eta.vercel.app/",
      ctaText: "View Live Site"
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
              A selection of my recent work, highlighting my expertise in full-stack development, UI/UX design, and modern web applications.
            </p>
          </div>
          <Link href="https://github.com/Mimx22" target="_blank" className="font-medium text-primary hover:text-primary-dark transition-colors whitespace-nowrap">
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
