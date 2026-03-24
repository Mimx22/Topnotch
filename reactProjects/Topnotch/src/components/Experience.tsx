export default function Experience() {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Personal & Freelance Projects",
      period: "2022 – Present",
      description: "Developed responsive web applications using React and modern CSS frameworks. Built and consumed RESTful APIs to connect frontend with backend services. Managed data using Firebase and MongoDB. Translated Figma designs into pixel-perfect, functional user interfaces. Maintained version control and collaboration using Git & GitHub.",
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              <div className="absolute w-4 h-4 rounded-full bg-primary left-[-8.5px] top-6 blur-[2px]" />
              <div className="absolute w-2 h-2 rounded-full bg-white left-[-4.5px] top-7" />
              
              <div className="glass p-8 rounded-2xl relative group hover:-translate-y-1 transition-transform">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-lg text-primary">{exp.company}</p>
                  </div>
                  <span className="inline-flex glass px-4 py-1.5 rounded-full text-foreground-muted text-sm whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-foreground-muted leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
