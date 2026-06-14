import Image from "next/image";
import { FadeIn } from "./components/FadeIn";
import { ContactForm } from "./components/ContactForm";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-3 font-bold tracking-tight text-ink group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-base rounded-sm">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition-transform duration-500 group-hover:scale-110"
          >
            <rect
              x="2"
              y="4"
              width="6"
              height="4"
              className="fill-accent opacity-50 transition-opacity duration-500 group-hover:opacity-100"
            />
            <rect
              x="16"
              y="4"
              width="6"
              height="4"
              className="fill-accent opacity-50 transition-opacity duration-500 group-hover:opacity-100"
            />
            <rect x="10" y="4" width="4" height="16" className="fill-accent" />
          </svg>
          <span className="text-xl">TECHNOVA</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs font-mono text-muted">
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

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-8">
        <FadeIn className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-accent leading-none">
            <span className="h-px w-6 bg-accent -translate-y-[1px]"></span>
            <span>Technova Digital Studio</span>
          </div>
          <h1 className="mb-6 text-5xl font-semibold leading-[1.1] tracking-[-0.03em] md:text-7xl lg:text-[5.5rem]">
            SOFTWARE THAT <br /> SCALES BUSINESS.
          </h1>
          <p className="mb-10 max-w-lg text-lg text-muted">
            We engineer high-performance mobile apps and web platforms that
            drive revenue, streamline operations, and elevate your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative flex h-14 items-center justify-center gap-3 overflow-hidden border border-accent bg-transparent px-8 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-base active:scale-[0.98]">
              <span className="relative z-10">START YOUR PROJECT</span>
              <kbd className="relative z-10 hidden sm:inline-flex items-center justify-center h-5 w-5 rounded border border-accent/40 bg-accent/10 font-sans text-[10px] transition-colors group-hover:border-base/40 group-hover:bg-base/10">C</kbd>
              <div className="absolute inset-0 -z-10 bg-accent/20 blur-md opacity-0 transition-opacity group-hover:opacity-100"></div>
            </button>
            <button className="flex h-14 items-center justify-center px-8 text-sm font-medium text-muted transition-all hover:text-ink active:scale-[0.98]">
              VIEW CASE STUDIES
            </button>
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
          <div className="v-container relative h-[480px] w-full max-w-[480px] border border-white/10 bg-surface/30 backdrop-blur-sm p-8 flex flex-col font-mono text-xs overflow-hidden shadow-2xl shadow-black/50">
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
              <div className="v-container relative z-10 flex flex-col gap-4 text-white/60 overflow-hidden h-full font-mono text-[11px] mt-2">
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
  return (
    <section className="border-b border-white/10 py-12 bg-surface/5">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <p className="text-center font-mono text-[10px] text-muted uppercase tracking-widest mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 mix-blend-screen transition-opacity duration-500 hover:opacity-70">
            <div className="text-xl font-bold tracking-tighter">ACME CORP</div>
            <div className="text-xl font-bold tracking-tight">VANGUARD</div>
            <div className="text-xl font-bold tracking-widest">NEXUS</div>
            <div className="text-xl font-bold italic">Horizon</div>
            <div className="text-xl font-bold uppercase">Quantum</div>
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
              <div className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-12 border-b border-white/10 transition-colors hover:bg-surface/5 cursor-pointer px-6 -mx-6">
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

  return (
    <section
      id="portfolio"
      className="relative border-b border-white/10 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn className="mb-20 border-l-2 border-accent pl-6 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              FEATURED CASE STUDIES
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors mt-6 md:mt-0">
            VIEW ALL WORK
            <svg
              className="h-4 w-4"
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
          </button>
        </FadeIn>
        <div className="grid gap-12 md:grid-cols-2">
          {works.map((work, i) => {
            const isFeatured = i === 0 || i === works.length - 1;
            return (
              <FadeIn
                key={work.id}
                delay={i * 150}
                className={isFeatured ? "md:col-span-2" : ""}
              >
                <div className="group relative flex flex-col gap-6 cursor-pointer h-full">
                  <div
                    className={`relative w-full overflow-hidden border border-white/10 bg-surface/20 ${isFeatured ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3] md:aspect-[16/9]"}`}
                  >
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover mix-blend-luminosity opacity-80 transition-all duration-700 group-hover:mix-blend-normal group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-base/20 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>

                    {/* Metric Badge */}
                    <div className="absolute top-4 left-4 border border-white/20 bg-base/80 backdrop-blur-md px-4 py-2 font-mono text-xs font-semibold text-accent">
                      {work.metric}
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div>
                      <h3 className="text-lg font-medium tracking-tight">
                        {work.title}
                      </h3>
                      <p className="font-mono text-xs text-muted uppercase tracking-wider mt-1">
                        {work.type}
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center border border-white/10 transition-colors group-hover:border-accent group-hover:bg-accent/10">
                      <svg
                        className="h-4 w-4 text-white transition-colors group-hover:text-accent"
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
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="relative border-b border-white/10 py-24 md:py-32 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,255,0.03),transparent_50%)]"
    >
      <div className="mx-auto max-w-7xl px-6">
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
            <div className="grid grid-cols-2 w-full gap-x-8 gap-y-16">
              <div className="flex flex-col border-l border-white/20 pl-6">
                <span className="text-4xl font-semibold tracking-tighter">
                  99.9%
                </span>
                <span className="mt-3 font-mono text-[10px] text-muted uppercase tracking-widest">
                  UPTIME SLA
                </span>
              </div>
              <div className="flex flex-col border-l border-white/20 pl-6">
                <span className="text-4xl font-semibold tracking-tighter">
                  40%
                </span>
                <span className="mt-3 font-mono text-[10px] text-muted uppercase tracking-widest">
                  FASTER TO MARKET
                </span>
              </div>
              <div className="flex flex-col border-l border-white/20 pl-6">
                <span className="text-4xl font-semibold tracking-tighter">
                  $50M+
                </span>
                <span className="mt-3 font-mono text-[10px] text-muted uppercase tracking-widest">
                  REVENUE GENERATED
                </span>
              </div>
              <div className="flex flex-col border-l border-white/20 pl-6 relative">
                <div className="absolute -left-px top-0 bottom-0 w-px bg-gradient-to-b from-accent to-transparent"></div>
                <span className="text-4xl font-semibold tracking-tighter text-accent">
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

function Footer() {
  return (
    <footer id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid gap-20 lg:grid-cols-2">
        <FadeIn className="border-l-2 border-accent pl-6 flex flex-col justify-between">
          <div>
            <h2 className="mb-8 text-4xl font-semibold tracking-tight md:text-5xl">
              LET&apos;S BUILD SOMETHING EXCEPTIONAL.
            </h2>
            <p className="mb-12 max-w-md text-base leading-relaxed text-muted">
              Whether you are launching a new startup or scaling an enterprise
              platform, our engineering team is ready to execute your vision.
              Reach out to discuss your requirements.
            </p>
          </div>

          <div className="flex flex-col gap-3 font-mono text-[10px] text-muted uppercase tracking-widest">
            <div className="flex gap-4">
              <span className="text-white/40 w-8">LOC</span> EGYPT
            </div>
            <div className="flex gap-4">
              <span className="text-white/40 w-8">SYS</span> ONLINE
            </div>
            <div className="mt-12 text-white/20">
              © {new Date().getFullYear()} TECHNOVA DIGITAL STUDIO.
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <ContactForm />
        </FadeIn>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-accent selection:text-base bg-base text-ink font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Services />
        <Process />
        <Portfolio />
        <About />
      </main>
      <Footer />
    </div>
  );
}
