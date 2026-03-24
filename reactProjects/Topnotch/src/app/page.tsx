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
          <div className="inline-flex glass px-4 py-2 rounded-full text-foreground-muted text-sm font-medium mb-4">
            <span className="text-primary mr-2">✨</span> Available for new opportunities
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-foreground-muted pb-2">
            Hi, I'm Asala Taiye <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">Miracle.</span>
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl font-medium text-foreground-muted">
            Full-Stack Developer
          </h2>
          
          <p className="mt-6 text-lg sm:text-xl text-foreground-muted max-w-2xl">
            Full-Stack Developer with 3 years of hands-on experience creating responsive and scalable web applications using React, Node.js, Firebase, and MongoDB.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-background font-semibold hover:opacity-90 transition-opacity">
              View My Work
            </button>
            <button className="glass px-8 py-4 rounded-full text-foreground hover:bg-white/10 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Projects />
      <About />
      <Experience />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-foreground-muted text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Asala Taiye Miracle. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}

