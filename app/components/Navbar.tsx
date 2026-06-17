"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-base rounded-sm" onClick={() => setIsMenuOpen(false)}>
          <Image src="/logo.png" alt="Technova Logo" width={1258} height={879} className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105" priority />
        </a>
        
        <nav className="flex items-center gap-4 md:gap-10 text-[10px] md:text-xs font-mono text-muted">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="px-2 py-2 hover:text-ink transition-colors uppercase tracking-widest block">
              Services
            </a>
            <a href="#process" className="px-2 py-2 hover:text-ink transition-colors uppercase tracking-widest block">
              Process
            </a>
            <a href="#portfolio" className="px-2 py-2 hover:text-ink transition-colors uppercase tracking-widest block">
              Portfolio
            </a>
            <a href="#about" className="px-2 py-2 hover:text-ink transition-colors uppercase tracking-widest block">
              About
            </a>
          </div>
          
          <a href="#contact" className="flex items-center gap-2 px-2 py-2 hover:text-accent transition-colors uppercase tracking-widest text-ink group relative z-50" onClick={() => setIsMenuOpen(false)}>
            <span>Contact</span>
            <kbd className="hidden lg:inline-flex items-center justify-center h-5 w-5 rounded border border-white/20 bg-white/5 font-sans text-[9px] text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
              C
            </kbd>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 text-white hover:text-accent transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-base/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center justify-center gap-8 font-mono text-xs uppercase tracking-widest text-muted">
          <a href="#services" className="p-4 hover:text-accent transition-colors w-full text-center" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="#process" className="p-4 hover:text-accent transition-colors w-full text-center" onClick={() => setIsMenuOpen(false)}>
            Process
          </a>
          <a href="#portfolio" className="p-4 hover:text-accent transition-colors w-full text-center" onClick={() => setIsMenuOpen(false)}>
            Portfolio
          </a>
          <a href="#about" className="p-4 hover:text-accent transition-colors w-full text-center" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
        </div>
      )}
    </header>
  );
}
