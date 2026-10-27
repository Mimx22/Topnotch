export default function Experience() {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Personal and Freelance Projects",
      period: "2022 – Present",
      bullets: [
        "Developed and maintained responsive web applications using React and modern CSS frameworks, ensuring cross-browser and mobile compatibility.",
        "Built and consumed RESTful APIs to securely connect frontend interfaces with backend services.",
        "Implemented data storage and retrieval using Firebase and MongoDB to support dynamic application content.",
        "Translated Figma designs into clean, pixel-accurate, and functional user interfaces.",
        "Managed version control, code history, and collaboration using Git and GitHub."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex glass px-4 py-1.5 rounded-full text-primary text-xs font-semibold tracking-wide uppercase mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Work <span className="text-primary">Experience</span>
          </h2>
        </div>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              <div className="absolute w-4 h-4 rounded-full bg-primary left-[-8.5px] top-6 blur-[2px]" />
              <div className="absolute w-2 h-2 rounded-full bg-white left-[-4.5px] top-7" />
              
              <div className="glass p-8 rounded-2xl relative group hover:-translate-y-1 transition-all border border-white/10 hover:border-primary/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-flex glass px-4 py-1.5 rounded-full text-foreground-muted text-sm whitespace-nowrap self-start md:self-auto border border-white/5">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-foreground-muted leading-relaxed">
                      <span className="text-primary mt-1 font-bold">›</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
