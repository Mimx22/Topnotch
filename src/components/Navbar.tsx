"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
          MiMx
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-foreground-muted">
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-white/5 transition-colors"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-6 space-y-4 border-t border-white/5 bg-background/95 backdrop-blur-xl">
          <Link 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-foreground-muted hover:text-primary font-medium transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-foreground-muted hover:text-primary font-medium transition-colors"
          >
            About
          </Link>
          <Link 
            href="#experience" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-foreground-muted hover:text-primary font-medium transition-colors"
          >
            Experience
          </Link>
          <Link 
            href="#skills" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-foreground-muted hover:text-primary font-medium transition-colors"
          >
            Skills
          </Link>
          <Link 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-foreground-muted hover:text-primary font-medium transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
