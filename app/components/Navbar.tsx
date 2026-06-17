"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on escape, handle scroll state, and lock body scroll when menu is open
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("keydown", handleEsc);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    handleScroll(); // Init
    return () => {
      window.removeEventListener("keydown", handleEsc);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Body scroll lock effect
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
        {/* Floating Pill Container */}
        <div 
          className={`
            pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 md:px-6 py-3 
            rounded-full border transition-all duration-500 ease-out
            ${isScrolled 
              ? "bg-base/80 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]" 
              : "bg-transparent border-transparent"
            }
          `}
        >
          {/* Logo Container - Carefully scaled and cropped to avoid layout stretching */}
          <a 
            href="#" 
            className="group relative flex h-8 w-28 md:w-32 items-center justify-center overflow-hidden rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Technova Home"
          >
            <Image 
              src="/logo.png" 
              alt="Technova Logo" 
              width={1258} 
              height={879} 
              className="absolute max-w-none w-[180px] md:w-[200px] h-auto object-contain transition-transform duration-500 group-hover:scale-105" 
              priority 
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-muted">
            <a href="#services" className="px-4 py-2 rounded-full hover:text-ink hover:bg-white/5 transition-colors">
              Services
            </a>
            <a href="#process" className="px-4 py-2 rounded-full hover:text-ink hover:bg-white/5 transition-colors">
              Process
            </a>
            <a href="#portfolio" className="px-4 py-2 rounded-full hover:text-ink hover:bg-white/5 transition-colors">
              Portfolio
            </a>
            <a href="#about" className="px-4 py-2 rounded-full hover:text-ink hover:bg-white/5 transition-colors">
              About
            </a>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a 
              href="#contact" 
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 transition-all text-[11px] font-mono uppercase tracking-widest text-ink group"
            >
              <span>Contact</span>
              <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            </a>

            {/* Mobile Hamburger */}
            <button 
              className="md:hidden p-3 -mr-2 text-muted hover:text-ink transition-colors focus:outline-none rounded-full hover:bg-white/5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-base/98 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center gap-8 font-mono text-sm uppercase tracking-widest text-muted"
        >
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
          <a href="#contact" className="mt-8 px-8 py-4 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Get in touch
          </a>
        </div>
      )}
    </>
  );
}
