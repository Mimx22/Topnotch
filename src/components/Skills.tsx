export default function Skills() {
  const skills = [
    { name: "React.js / JavaScript (ES6+)", level: 95 },
    { name: "HTML5 / CSS3 / SCSS", level: 95 },
    { name: "Tailwind CSS / Figma", level: 90 },
    { name: "Node.js / RESTful APIs", level: 85 },
    { name: "Firebase / MongoDB", level: 80 },
    { name: "Git / GitHub / Vite", level: 85 },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-24 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            My <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            I specialize in a wide range of modern web technologies designed to build robust, scalable, and beautifully designed applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <span className="text-lg font-medium">{skill.name}</span>
                <span className="text-sm text-foreground-muted">{skill.level}%</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
