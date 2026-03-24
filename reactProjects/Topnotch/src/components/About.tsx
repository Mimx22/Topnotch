import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            I am a passionate Full-Stack Web Developer based in Lagos, Nigeria, holding a B.Sc. in Business Education. My journey in tech started with a profound curiosity about how the web works, which quickly evolved into a dedicated career making the web faster, prettier, and more accessible.
          </p>
          <p className="text-lg text-foreground-muted leading-relaxed">
            When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or learning the latest advancements in modern web frameworks like React and Next.js.
          </p>
          
          <div className="flex gap-4 pt-4">
            <div className="glass px-6 py-4 rounded-xl flex flex-col items-center flex-1">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">3+</span>
              <span className="text-sm text-foreground-muted font-medium mt-1">Years Exp.</span>
            </div>
            <div className="glass px-6 py-4 rounded-xl flex flex-col items-center flex-1">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">3+</span>
              <span className="text-sm text-foreground-muted font-medium mt-1">Projects</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full relative">
          <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="aspect-square w-[80%] max-w-[400px] mx-auto relative glass rounded-3xl overflow-hidden border border-white/10 group shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="/profile.png" 
                alt="Asala Taiye Miracle" 
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
