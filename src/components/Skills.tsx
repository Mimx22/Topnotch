export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      description: "Building responsive, modern, and accessible user interfaces",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "SCSS", "Responsive Web Design", "Figma-to-Code"]
    },
    {
      category: "Backend & Data",
      description: "Developing scalable server APIs and handling persistence",
      skills: ["Node.js", "RESTful APIs", "Firebase", "MongoDB", "Component-Based Architecture"]
    },
    {
      category: "Tools & Workflow",
      description: "Version control, tooling, and development environment",
      skills: ["Git", "GitHub", "Vite", "VS Code", "Netlify", "Vercel"]
    }
  ];

  const coreCompetencies = [
    "Full-Stack Web Development (React.js & Node.js)",
    "Component-Based Architecture",
    "REST API Integration",
    "Responsive, Mobile-First Design",
    "Figma-to-Code UI Implementation",
    "Firebase & MongoDB Integration",
    "Git & GitHub Workflow"
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-24 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex glass px-4 py-1.5 rounded-full text-primary text-xs font-semibold tracking-wide uppercase mb-3">
            Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical Skills & <span className="text-primary">Competencies</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            A comprehensive overview of my technical stack, development tools, and full-stack capabilities.
          </p>
        </div>

        {/* Core Competencies Badges */}
        <div className="glass p-6 md:p-8 rounded-2xl border border-white/10 mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
            <span>⚡</span> Core Competencies
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {coreCompetencies.map((comp, idx) => (
              <span 
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-foreground font-medium hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {cat.category}
                </h3>
                <p className="text-xs text-foreground-muted mb-6 leading-relaxed">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 rounded-md bg-white/5 text-xs text-foreground-muted font-medium border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
