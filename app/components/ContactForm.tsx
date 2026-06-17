"use client";

import { useState, useRef, useEffect } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{name?: string; email?: string; scope?: string}>({});
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Global shortcut to focus form (Press 'C')
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is already typing in an input
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }
      
      if (e.key.toLowerCase() === "c") {
        e.preventDefault();
        nameInputRef.current?.focus();
        nameInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const scope = formData.get("scope") as string;
    
    const newErrors: typeof errors = {};
    if (!name || name.trim().length < 2) newErrors.name = "Please provide your name or organization.";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Please provide a valid email address.";
    if (!scope || scope.trim().length < 10) newErrors.scope = "Please briefly describe your requirements (min 10 chars).";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 bg-surface/10 p-10 border border-white/10 backdrop-blur-sm h-full text-center" aria-live="polite">
        <div className="h-16 w-16 border border-accent flex items-center justify-center text-accent mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-ink">TRANSMISSION SECURE</h3>
        <p className="text-muted text-sm max-w-xs leading-relaxed">
          Your requirements have been logged. Our engineering leads will review your brief and coordinate next steps.
        </p>
        <div className="mt-4 font-mono text-[10px] text-accent uppercase tracking-widest flex items-center gap-2">
          <span className="h-2 w-2 bg-accent animate-pulse"></span>
          Awaiting Response
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8 bg-surface/10 p-10 border border-white/10 backdrop-blur-sm h-full relative overflow-hidden">
      {/* Loading overlay */}
      {isSubmitting && (
        <div className="absolute inset-0 z-10 bg-base/80 backdrop-blur-md flex flex-col items-center justify-center border border-accent/20">
          <div className="flex gap-1 mb-6">
            <div className="h-2 w-2 bg-accent animate-pulse" style={{ animationDelay: '0ms' }}></div>
            <div className="h-2 w-2 bg-accent animate-pulse" style={{ animationDelay: '150ms' }}></div>
            <div className="h-2 w-2 bg-accent animate-pulse" style={{ animationDelay: '300ms' }}></div>
          </div>
          <div className="font-mono text-[10px] text-accent uppercase tracking-widest">
            Establishing Connection...
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3 group">
        <div className="flex justify-between items-end">
          <label className="font-mono text-[10px] text-muted uppercase tracking-widest group-focus-within:text-ink transition-colors" htmlFor="name">
            NAME / ORGANIZATION
          </label>
          {errors.name && <span className="text-[10px] text-red-400 font-mono" role="alert">{errors.name}</span>}
        </div>
        <input
          id="name"
          name="name"
          type="text"
          required
          ref={nameInputRef}
          autoComplete="name"
          className={`h-12 border bg-white/5 px-4 text-ink placeholder:text-white/20 focus:bg-transparent focus:outline-none focus-visible:ring-1 transition-all ${errors.name ? 'border-red-400/50 focus:border-red-400 focus-visible:ring-red-400' : 'border-white/10 focus:border-accent focus-visible:ring-accent'}`}
          placeholder="Your name or company"
          aria-invalid={!!errors.name}
          disabled={isSubmitting}
        />
      </div>
      <div className="flex flex-col gap-3 group">
        <div className="flex justify-between items-end">
          <label className="font-mono text-[10px] text-muted uppercase tracking-widest group-focus-within:text-ink transition-colors" htmlFor="email">
            CONTACT EMAIL
          </label>
          {errors.email && <span className="text-[10px] text-red-400 font-mono" role="alert">{errors.email}</span>}
        </div>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={`h-12 border bg-white/5 px-4 text-ink placeholder:text-white/20 focus:bg-transparent focus:outline-none focus-visible:ring-1 transition-all ${errors.email ? 'border-red-400/50 focus:border-red-400 focus-visible:ring-red-400' : 'border-white/10 focus:border-accent focus-visible:ring-accent'}`}
          placeholder="hello@company.com"
          aria-invalid={!!errors.email}
          disabled={isSubmitting}
        />
      </div>
      <div className="flex flex-col gap-3 group">
        <div className="flex justify-between items-end">
          <label className="font-mono text-[10px] text-muted uppercase tracking-widest group-focus-within:text-ink transition-colors" htmlFor="scope">
            BUSINESS GOALS & SCOPE
          </label>
          {errors.scope && <span className="text-[10px] text-red-400 font-mono" role="alert">{errors.scope}</span>}
        </div>
        <textarea
          id="scope"
          name="scope"
          rows={4}
          required
          minLength={10}
          className={`border bg-white/5 px-4 py-4 text-ink placeholder:text-white/20 focus:bg-transparent focus:outline-none focus-visible:ring-1 transition-all resize-y min-h-[120px] max-h-[400px] font-sans text-base ${errors.scope ? 'border-red-400/50 focus:border-red-400 focus-visible:ring-red-400' : 'border-white/10 focus:border-accent focus-visible:ring-accent'}`}
          placeholder="Briefly describe what you're looking to build..."
          aria-invalid={!!errors.scope}
          disabled={isSubmitting}
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 relative overflow-hidden h-14 w-full border border-accent bg-transparent px-8 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-base active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-3 group"
      >
        <div className="absolute inset-0 w-[200%] -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100 motion-safe:group-hover:animate-[gleam_1.5s_ease-in-out_infinite] skew-x-[-20deg]"></div>
        <span className="relative z-10">REQUEST CONSULTATION</span>
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  );
}
