import Image from "next/image";
import { FadeIn } from "./components/FadeIn";
import { ContactForm } from "./components/ContactForm";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-base rounded-sm">
          <Image src="/logo.png" alt="Technova Logo" width={400} height={400} className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
        </a>
        <nav className="flex items-center gap-6 md:gap-10 text-[10px] md:text-xs font-mono text-muted">
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#services"
              className="hover:text-ink transition-colors uppercase tracking-widest"
            >
              Services
            </a>
            <a
              href="#process"
              className="hover:text-ink transition-colors uppercase tracking-widest"
            >
              Process
            </a>
            <a
              href="#portfolio"
              className="hover:text-ink transition-colors uppercase tracking-widest"
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="hover:text-ink transition-colors uppercase tracking-widest"
            >
              About
            </a>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 hover:text-accent transition-colors uppercase tracking-widest text-ink group"
          >
            <span>Contact</span>
            <kbd className="hidden lg:inline-flex items-center justify-center h-5 w-5 rounded border border-white/20 bg-white/5 font-sans text-[9px] text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
              C
            </kbd>
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-24 pb-32">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-blueprint pointer-events-none"></div>
      
      {/* Ambient Glow */}
      <div className="ambient-glow w-[600px] h-[600px] top-0 right-0 -translate-y-1/2 translate-x-1/3"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-8">
        <FadeIn className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-accent leading-none">
            <span className="h-px w-6 bg-accent -translate-y-[1px]"></span>
            <span>Technova Digital Studio</span>
          </div>
          <h1 className="mb-6 text-4xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-5xl md:text-7xl lg:text-[5.5rem]">
            SOFTWARE THAT <br className="hidden sm:block" /> SCALES BUSINESS.
          </h1>
          <p className="mb-10 max-w-lg text-lg text-muted">
            We engineer high-performance mobile apps and web platforms that
            drive revenue, streamline operations, and elevate your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group relative flex h-14 items-center justify-center gap-3 overflow-hidden border border-accent bg-transparent px-8 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-base active:scale-[0.98]">
              <span className="relative z-10">START YOUR PROJECT</span>
              <kbd className="relative z-10 hidden sm:inline-flex items-center justify-center h-5 w-5 rounded border border-accent/40 bg-accent/10 font-sans text-[10px] transition-colors group-hover:border-base/40 group-hover:bg-base/10">C</kbd>
              <div className="absolute inset-0 -z-10 bg-accent/20 blur-md opacity-0 transition-opacity group-hover:opacity-100"></div>
            </a>
            <a href="#portfolio" className="flex h-14 items-center justify-center px-8 text-sm font-medium text-muted transition-all hover:text-ink active:scale-[0.98]">
              VIEW CASE STUDIES
            </a>
          </div>

          <div className="mt-24 border-t border-white/10 pt-6">
            <h3 className="mb-4 font-mono text-[10px] text-muted uppercase tracking-widest">
              Our Commitment
            </h3>
            <ul className="flex flex-col gap-3 font-mono text-xs uppercase tracking-wider">
              <li className="flex items-center gap-4">
                <span className="text-white/20">01</span> Fast Time-to-Market
              </li>
              <li className="flex items-center gap-4">
                <span className="text-white/20">02</span> Enterprise-Grade
                Security
              </li>
              <li className="flex items-center gap-4">
                <span className="text-white/20">03</span> Conversion-Optimized
                UX
              </li>
            </ul>
          </div>
        </FadeIn>

        {/* Schematic Graphic */}
        <FadeIn
          delay={200}
          className="relative flex items-center justify-center lg:items-start lg:justify-end lg:pt-8"
        >
          <div className="v-container relative h-[380px] sm:h-[480px] w-full max-w-[480px] border border-white/10 bg-surface/30 backdrop-blur-sm p-6 sm:p-8 flex flex-col font-mono text-xs overflow-hidden shadow-2xl shadow-black/50">
            <div
              className="absolute inset-0 bg-accent transition-opacity duration-300"
              style={{ opacity: 0.3 }}
            />
            <div className="absolute inset-0 bg-base/90 mix-blend-multiply" />

            {/* Edge Decorators */}
            <div className="absolute -left-px -top-px h-3 w-3 border-l border-t border-accent z-20"></div>
            <div className="absolute -right-px -top-px h-3 w-3 border-r border-t border-accent z-20"></div>
            <div className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-accent z-20"></div>
            <div className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-accent z-20"></div>

            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-muted">
              <span>~/technova/deploy.sh</span>
              <span className="text-accent flex items-center gap-2">
                <span className="h-2 w-2 bg-accent rounded-full animate-pulse"></span>{" "}
                RUNNING
              </span>
            </div>

            <>
              <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
              <div className="v-container relative z-10 flex flex-col gap-4 text-white/60 overflow-hidden h-full font-mono text-[9px] sm:text-[11px] mt-2">
                <div className="opacity-40">
                  &gt; Analyzing business requirements...{" "}
                  <span className="text-accent ml-2">DONE</span>
                </div>
                <div className="opacity-60">
                  &gt; Designing conversion funnels...{" "}
                  <span className="text-accent ml-2">DONE</span>
                </div>
                <div className="opacity-80">
                  &gt; Building scalable infrastructure...{" "}
                  <span className="text-accent ml-2">DONE</span>
                </div>
                <div className="text-white/90">
                  &gt; Deploying high-performance frontend...
                </div>
                <div className="text-white mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
                  <span className="text-accent">&gt;</span> Optimizing for
                  growth{" "}
                  <span
                    className="w-1.5 h-3.5 bg-accent inline-block align-middle ml-1"
                    style={{ animation: "blink 0.5s infinite" }}
                  ></span>
                </div>
              </div>
            </>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TrustedBy() {
  const brands = [
    <span key="1" className="text-xl font-bold tracking-tighter">ACME CORP</span>,
    <span key="2" className="text-xl font-bold tracking-tight">VANGUARD</span>,
    <span key="3" className="text-xl font-bold tracking-widest">NEXUS</span>,
    <span key="4" className="text-xl font-bold italic">Horizon</span>,
    <span key="5" className="text-xl font-bold uppercase">Quantum</span>,
  ];

  return (
    <section className="border-b border-white/10 py-12 bg-surface/5 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="text-center font-mono text-[10px] text-muted uppercase tracking-widest mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex overflow-hidden opacity-40 mix-blend-screen transition-opacity duration-500 hover:opacity-70 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex animate-marquee gap-12 sm:gap-24 pr-12 sm:pr-24 min-w-max items-center">
              {brands}
            </div>
            <div className="flex animate-marquee gap-12 sm:gap-24 pr-12 sm:pr-24 min-w-max items-center" aria-hidden="true">
              {brands}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      id: "01",
      title: "Mobile Apps",
      desc: "Native iOS and Android applications designed to engage users, build brand loyalty, and maximize retention.",
    },
    {
      id: "02",
      title: "Web Platforms",
      desc: "Scalable SaaS platforms, e-commerce architectures, and enterprise web applications that drive your core business.",
    },
    {
      id: "03",
      title: "UI/UX Design",
      desc: "Intuitive, beautiful interfaces rooted in user psychology that reliably convert visitors into customers.",
    },
  ];

  return (
    <section
      id="services"
      className="relative border-b border-white/10 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between border-l-2 border-accent pl-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              CORE SERVICES
            </h2>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:mt-0">
            We partner with ambitious businesses to engineer custom digital
            solutions that solve real problems and unlock new revenue streams.
          </p>
        </FadeIn>

        <div className="flex flex-col border-t border-white/10 mt-8">
          {services.map((srv, i) => (
            <FadeIn key={srv.id} delay={i * 100}>
              <div className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 md:py-12 border-b border-white/10 transition-colors hover:bg-surface/5 cursor-pointer px-6 -mx-6">
                <div className="font-mono text-sm text-white/30 w-12 shrink-0 group-hover:text-accent transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-ink md:w-1/2 group-hover:translate-x-4 transition-transform duration-500">
                  {srv.title}
                </h3>
                <p className="text-base leading-relaxed text-muted md:w-1/2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {srv.desc}
                </p>
                <div className="hidden md:block opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 text-accent">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                    />
                  </svg>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      num: "01",
      name: "Discovery & Strategy",
      detail:
        "We align with your business goals, target audience, and market positioning to build the right roadmap.",
    },
    {
      num: "02",
      name: "Architecture & Design",
      detail:
        "We blueprint the system for scale and craft a premium user experience that sets your brand apart.",
    },
    {
      num: "03",
      name: "Engineering & QA",
      detail:
        "Flawless execution. Our senior developers write robust code, backed by rigorous testing protocols.",
    },
    {
      num: "04",
      name: "Launch & Growth",
      detail:
        "We deploy smoothly to production and continuously iterate based on real user data and feedback.",
    },
  ];

  return (
    <section
      id="process"
      className="relative border-b border-white/10 py-24 md:py-32 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02))]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mb-20 border-l-2 border-accent pl-6">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            THE PROCESS
          </h2>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="flex flex-col group h-full">
                <div className="mb-6 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-transparent font-mono text-muted transition-colors group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent">
                    {step.num}
                  </div>
                  <div className="h-px flex-1 bg-white/10 transition-colors group-hover:bg-accent/50"></div>
                </div>
                <h3 className="mb-3 text-lg font-medium">{step.name}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const works = [
    {
      id: 1,
      title: "Fintech Growth Platform",
      type: "Web Application",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      metric: "+240% User Acquisition",
    },
    {
      id: 2,
      title: "Supply Chain AI",
      type: "Enterprise Software",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      metric: "$2M Cost Reduction",
    },
    {
      id: 3,
      title: "Next-Gen E-Commerce",
      type: "Mobile App",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      metric: "4.9 App Store Rating",
    },
    {
      id: 4,
      title: "Threat Visualization",
      type: "SaaS Dashboard",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      metric: "Global Deployment",
    },
  ];

  // Helper function to render a single work card
  const renderWorkCard = (work: typeof works[0], aspectClass: string) => (
    <div className="group relative flex flex-col gap-6 cursor-pointer h-full">
      <div className={`relative w-full overflow-hidden border border-white/10 bg-surface/20 transition-all duration-700 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] ${aspectClass}`}>
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover mix-blend-luminosity opacity-80 transition-all duration-700 group-hover:mix-blend-normal group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-base/20 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>

        {/* Metric Badge */}
        <div className="absolute top-4 left-4 border border-white/20 bg-base/80 backdrop-blur-md px-4 py-2 font-mono text-xs font-semibold text-accent transition-colors duration-500 group-hover:border-accent/50 group-hover:bg-base/90">
          {work.metric}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 pt-4 transition-colors duration-500 group-hover:border-accent/30">
        <div>
          <h3 className="text-lg font-medium tracking-tight group-hover:text-white transition-colors duration-300">
            {work.title}
          </h3>
          <p className="font-mono text-xs text-muted uppercase tracking-wider mt-1">
            {work.type}
          </p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center border border-white/10 transition-colors duration-500 group-hover:border-accent group-hover:bg-accent/10">
          <svg
            className="h-4 w-4 text-white transition-colors duration-500 group-hover:text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth={1.5}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="portfolio"
      className="relative border-b border-white/10 py-24 md:py-32 overflow-hidden"
    >
      {/* Deep Atmospheric Glow */}
      <div className="ambient-glow w-[800px] h-[800px] top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <FadeIn className="mb-20 border-l-2 border-accent pl-6 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              FEATURED CASE STUDIES
            </h2>
          </div>
          <a href="#portfolio" className="hidden md:flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors mt-6 md:mt-0 group">
            <span className="relative">
              VIEW ALL WORK
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
            </span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </FadeIn>
        
        {/* Asymmetric Scattered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-12 items-center">
          {/* Work 0: Massive Feature (Spans 8 cols) */}
          <FadeIn delay={0} className="md:col-span-8">
            {renderWorkCard(works[0], "aspect-[4/3] md:aspect-[21/9]")}
          </FadeIn>

          {/* Work 1: Portrait Offset (Spans 4 cols) */}
          <FadeIn delay={150} className="md:col-span-4">
            {renderWorkCard(works[1], "aspect-[4/3] md:aspect-[3/4]")}
          </FadeIn>

          {/* Work 2: Square/Landscape (Spans 5 cols) */}
          <FadeIn delay={300} className="md:col-span-5">
            {renderWorkCard(works[2], "aspect-[4/3] md:aspect-square")}
          </FadeIn>

          {/* Work 3: Wide Layout (Spans 7 cols) */}
          <FadeIn delay={450} className="md:col-span-7">
            {renderWorkCard(works[3], "aspect-[4/3] md:aspect-[16/9]")}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="relative border-b border-white/10 py-24 md:py-32 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,255,0.03),transparent_50%)] overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="ambient-glow w-[500px] h-[500px] bottom-0 right-0 translate-y-1/3 translate-x-1/3 opacity-20"></div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-20 lg:grid-cols-2">
          <FadeIn className="flex flex-col justify-center border-l-2 border-accent pl-6">
            <h2 className="mb-8 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              BUILT FOR GROWTH.
              <br />
              ENGINEERED FOR SCALE.
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted">
              We operate at the intersection of business strategy and rigorous
              engineering. We don&apos;t just write code; we build digital
              assets that create measurable value for your company.
            </p>
            <p className="text-base leading-relaxed text-muted">
              By treating every project as a mission-critical investment, we
              ensure that the digital products we ship are not only beautiful,
              but structurally sound, secure, and ready to scale with your user
              base.
            </p>
          </FadeIn>
          <FadeIn
            delay={200}
            className="flex items-center justify-center p-8 border border-white/10 bg-surface/10 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-x-8 gap-y-12 sm:gap-y-16">
              <div className="flex flex-col border-l border-white/20 pl-6">
                <span className="text-3xl sm:text-4xl font-semibold tracking-tighter">
                  99.9%
                </span>
                <span className="mt-3 font-mono text-[10px] text-muted uppercase tracking-widest">
                  UPTIME SLA
                </span>
              </div>
              <div className="flex flex-col border-l border-white/20 pl-6">
                <span className="text-3xl sm:text-4xl font-semibold tracking-tighter">
                  40%
                </span>
                <span className="mt-3 font-mono text-[10px] text-muted uppercase tracking-widest">
                  FASTER TO MARKET
                </span>
              </div>
              <div className="flex flex-col border-l border-white/20 pl-6">
                <span className="text-3xl sm:text-4xl font-semibold tracking-tighter">
                  $50M+
                </span>
                <span className="mt-3 font-mono text-[10px] text-muted uppercase tracking-widest">
                  REVENUE GENERATED
                </span>
              </div>
              <div className="flex flex-col border-l border-white/20 pl-6 relative">
                <div className="absolute -left-px top-0 bottom-0 w-px bg-gradient-to-b from-accent to-transparent"></div>
                <span className="text-3xl sm:text-4xl font-semibold tracking-tighter text-accent">
                  100+
                </span>
                <span className="mt-3 font-mono text-[10px] text-muted uppercase tracking-widest">
                  PROJECTS SHIPPED
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2">
        <FadeIn className="border-l-2 border-accent pl-6 flex flex-col justify-center">
          <div>
            <h2 className="mb-8 text-4xl font-semibold tracking-tight md:text-5xl">
              LET&apos;S BUILD SOMETHING EXCEPTIONAL.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted">
              Whether you are launching a new startup or scaling an enterprise
              platform, our engineering team is ready to execute your vision.
              Reach out to discuss your requirements.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-8 bg-base/50">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Technova Logo" width={300} height={300} className="h-10 w-auto object-contain grayscale contrast-200 brightness-200 opacity-90" />
        </div>
        
        <div className="flex items-center gap-6 font-mono text-[10px] text-muted uppercase tracking-widest">
          <div className="flex items-center gap-4 border-r border-white/10 pr-6 hidden sm:flex">
            <span className="text-white/40">LOC</span> EGYPT
          </div>
          <div className="flex items-center gap-4 border-r border-white/10 pr-6 hidden sm:flex">
            <span className="text-white/40">SYS</span> ONLINE
          </div>
          <div className="text-white/20">
            © {new Date().getFullYear()} TECHNOVA.
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-muted hover:text-accent transition-colors active:scale-[0.98]" aria-label="LinkedIn">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href="#" className="text-muted hover:text-accent transition-colors active:scale-[0.98]" aria-label="X (Twitter)">
            <svg className="h-[15px] w-[15px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className="text-muted hover:text-accent transition-colors active:scale-[0.98]" aria-label="Facebook">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-accent selection:text-base bg-base text-ink font-sans">
      <svg className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.04] mix-blend-overlay">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <TrustedBy />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
