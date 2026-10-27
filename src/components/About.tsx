import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-flex glass px-4 py-1.5 rounded-full text-primary text-xs font-semibold tracking-wide uppercase">
            Professional Background
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            About <span className="text-primary">Me</span>
          </h2>
          
          <p className="text-lg text-foreground-muted leading-relaxed">
            I am a <strong>Full-Stack Developer</strong> based in <strong>Lagos, Nigeria</strong> with 3 years of hands-on experience developing modern web solutions. Detail-oriented and performance-focused, with a strong commitment to writing clean, maintainable code and delivering real user value.
          </p>

          <p className="text-foreground-muted leading-relaxed">
            My expertise bridges client-facing aesthetics and robust server logic — from translating complex Figma prototypes into pixel-perfect, accessible components to engineering RESTful API backends backed by MongoDB and Firebase.
          </p>
          
          {/* Education Highlight Card */}
          <div className="glass p-5 rounded-2xl border border-white/10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-5.25 6.557c0 1.66 2.35 3 5.25 3s5.25-1.34 5.25-3" />
              </svg>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">Education</div>
              <div className="text-lg font-bold text-foreground">Bachelor of Science (B.Sc.)</div>
              <div className="text-sm text-foreground-muted">Rigorous foundation in analytical problem-solving and systematic planning.</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="glass px-4 py-4 rounded-xl flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">3+</span>
              <span className="text-xs text-foreground-muted font-medium mt-1 text-center">Years Experience</span>
            </div>
            <div className="glass px-4 py-4 rounded-xl flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Full-Stack</span>
              <span className="text-xs text-foreground-muted font-medium mt-1 text-center">React & Node.js</span>
            </div>
            <div className="glass px-4 py-4 rounded-xl flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Lagos, NG</span>
              <span className="text-xs text-foreground-muted font-medium mt-1 text-center">Available Globally</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full relative">
          <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="aspect-square w-[80%] max-w-[400px] mx-auto relative glass rounded-3xl overflow-hidden border border-white/10 group shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="w-full h-full relative bg-neutral-800 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="/profile.png" 
                alt="ASALA TAIYE MIRACLE - Full-Stack Developer" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 80vw, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
