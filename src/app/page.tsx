import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-24 overflow-hidden relative">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-dark/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="z-10 text-center max-w-4xl flex flex-col items-center gap-6 mt-16">
          <div className="inline-flex glass px-4 py-2 rounded-full text-foreground-muted text-sm font-medium mb-2">
            <span className="text-primary mr-2">📍</span> Lagos, Nigeria • Available for New Opportunities
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-foreground-muted pb-2">
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
              ASALA TAIYE MIRACLE
            </span>
          </h1>
          
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-lg sm:text-xl font-semibold tracking-wide uppercase">
            Full-Stack Developer
          </div>
          
          <p className="mt-4 text-lg sm:text-xl text-foreground-muted max-w-3xl leading-relaxed">
            Full-Stack Developer with <strong>3 years</strong> of hands-on experience building scalable and responsive web applications using <strong>React, JavaScript, Node.js, Firebase, and MongoDB</strong>. Strong ability to translate UI/UX designs into functional, high-quality user interfaces and integrate frontend applications with backend services through RESTful APIs.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-background font-semibold hover:opacity-90 hover:scale-105 transition-all text-center shadow-lg shadow-primary/20"
            >
              Explore Featured Projects
            </a>
            <a 
              href="#contact" 
              className="glass px-8 py-4 rounded-full text-foreground hover:bg-white/10 hover:border-primary/40 transition-all text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <Projects />

      {/* About & Education */}
      <About />

      {/* Work Experience */}
      <Experience />

      {/* Technical Skills & Competencies */}
      <Skills />

      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-foreground-muted text-sm border-t border-white/5 bg-background">
        <p>© {new Date().getFullYear()} ASALA TAIYE MIRACLE. All rights reserved.</p>
        <p className="mt-1 text-xs text-foreground-muted/60">Lagos, Nigeria • glittercost@gmail.com • +234 906 649 8487</p>
      </footer>
    </main>
  );
}
