export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-24 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex glass px-4 py-1.5 rounded-full text-primary text-xs font-semibold tracking-wide uppercase mb-6">
          Connect With Me
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        <p className="text-lg md:text-xl text-foreground-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Based in <strong>Lagos, Nigeria</strong> and open to full-time roles, contract opportunities, and freelance projects worldwide. Whether you have an inquiry, project proposal, or collaboration in mind, reach out directly.
        </p>
        
        {/* Contact Methods Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
          <a 
            href="mailto:glittercost@gmail.com" 
            className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all flex flex-col items-center group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-wider text-foreground-muted font-semibold mb-1">Email</span>
            <span className="text-foreground font-semibold group-hover:text-primary transition-colors text-sm sm:text-base break-all">
              glittercost@gmail.com
            </span>
          </a>

          <a 
            href="tel:+2349066498487" 
            className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all flex flex-col items-center group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-wider text-foreground-muted font-semibold mb-1">Phone / WhatsApp</span>
            <span className="text-foreground font-semibold group-hover:text-primary transition-colors text-sm sm:text-base">
              +234 906 649 8487
            </span>
          </a>
        </div>
        
        <div className="flex justify-center gap-6 mt-8">
          {/* GitHub */}
          <a 
            href="https://github.com/Mimx22" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 glass rounded-full flex items-center justify-center text-foreground-muted hover:text-primary hover:scale-110 hover:border-primary/50 transition-all"
            aria-label="GitHub Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          
          {/* Portfolio */}
          <a 
            href="https://topnotcs.netlify.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 glass rounded-full flex items-center justify-center text-foreground-muted hover:text-primary hover:scale-110 hover:border-primary/50 transition-all"
            aria-label="Portfolio Website"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
