const CONTACT = {
  email: "tjiaremo@gmail.com",
  phoneDisplay: "+27 831 1449",
  phoneTel: "+278311449", // If your full number has more digits, update this tel: value.
  address: "178 Kerk Street, Modimolle, South Africa",
};

const TECH_TAGS = ["React", "Node.js", "MS SQL Server", "Firebase", "Vite"];

const SERVICES = [
  {
    title: "Enterprise Systems",
    desc: "Custom internal platforms that replace spreadsheets, reduce admin, and scale with your operations.",
    stats: ["99.9% Uptime", "Role-Based Access", "Audit-Friendly"],
  },
  {
    title: "Web & Mobile Platforms",
    desc: "Fast, modern experiences built for real users — from landing pages to full product platforms.",
    stats: ["< 2s Load", "Responsive UI", "Conversion-Focused"],
  },
  {
    title: "Automation & Integrations",
    desc: "Connect tools, remove manual work, and automate the boring parts — reliably.",
    stats: ["Fewer Errors", "Faster Workflows", "Clean Reporting"],
  },
];

const TEAM = [
  { name: "Willie", role: "Chief Executive Officer & Founder" },
  { name: "Remo", role: "Co-Founder & Lead Software Engineer" },
];

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white/5 px-3 py-1 text-xs font-semibold text-muted">
      {children}
    </span>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl border border-line bg-white/5" />
            <div className="leading-tight">
              <div className="font-display text-sm font-extrabold tracking-widest text-paper">
                SOLUCON
              </div>
              <div className="text-xs font-semibold text-dim">
                SOFTWARE • SYSTEMS • CONSULTING
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm font-semibold text-muted hover:text-paper" href="#build">
              What We Build
            </a>
            <a className="text-sm font-semibold text-muted hover:text-paper" href="#team">
              Leadership
            </a>
            <a className="text-sm font-semibold text-muted hover:text-paper" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl border border-line bg-white/5 px-4 py-2 text-sm font-extrabold tracking-wide hover:bg-white/10"
          >
            START A PROJECT
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:pb-16 md:pt-20">
        <div className="grid items-start gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-1 text-xs font-bold tracking-wide text-muted">
              SOUTH AFRICA • MODIMOLLE • ENGINEERING
            </div>

            <h1 className="mt-5 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
              Engineering the Future of{" "}
              <span className="text-white">African Tech</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base font-semibold leading-relaxed text-muted">
              We build custom web apps, mobile platforms, and enterprise systems —
              clean UX, solid architecture, and delivery that actually ships.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {TECH_TAGS.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-extrabold tracking-wide text-ink hover:opacity-90"
              >
                GOT AN IDEA? LET’S BUILD IT.
              </a>
              <a
                href="#build"
                className="rounded-2xl border border-line bg-white/5 px-5 py-3 text-sm font-extrabold tracking-wide text-paper hover:bg-white/10"
              >
                VIEW SERVICES
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="framer-glass-card rounded-3xl p-6">
              <div className="text-xs font-extrabold tracking-widest text-muted">
                DELIVERY SNAPSHOT
              </div>

              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-line bg-white/5 p-4">
                  <div className="text-sm font-extrabold">Fast execution</div>
                  <div className="mt-1 text-sm font-semibold text-muted">
                    Tight scope • clean UI • stable builds
                  </div>
                </div>

                <div className="rounded-2xl border border-line bg-white/5 p-4">
                  <div className="text-sm font-extrabold">Systems thinking</div>
                  <div className="mt-1 text-sm font-semibold text-muted">
                    Architecture first • scale-ready
                  </div>
                </div>

                <div className="rounded-2xl border border-line bg-white/5 p-4">
                  <div className="text-sm font-extrabold">Based in Modimolle</div>
                  <div className="mt-1 text-sm font-semibold text-muted">
                    {CONTACT.address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="build" className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-black uppercase tracking-tight md:text-4xl">
              SOFTWARE & SYSTEMS
            </h2>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-relaxed text-muted">
              Big outcomes, simple experiences. Glass cards, brutal clarity.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="framer-glass-card rounded-3xl p-6">
              <div className="text-xs font-extrabold tracking-widest text-muted">
                WHAT WE BUILD
              </div>
              <h3 className="mt-3 font-display text-xl font-black uppercase tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-muted">
                {s.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {s.stats.map((st) => (
                  <span
                    key={st}
                    className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs font-extrabold tracking-wide text-paper"
                  >
                    {st}
                  </span>
                ))}
              </div>

              <div className="mt-5 h-px w-full bg-line" />

              <div className="mt-5 flex flex-wrap gap-2">
                {TECH_TAGS.slice(0, 3).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <h2 className="font-display text-3xl font-black uppercase tracking-tight md:text-4xl">
          Leadership
        </h2>
        <p className="mt-2 text-sm font-semibold text-muted">
          Strict hierarchy: Willie first, Remo directly underneath.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {/* Willie (Top) */}
          <div className="framer-glass-card rounded-3xl p-7">
            <div className="text-xs font-extrabold tracking-widest text-muted">
              TOP POSITION
            </div>
            <div className="mt-3 font-display text-2xl font-black uppercase tracking-tight">
              {TEAM[0].name}
            </div>
            <div className="mt-2 text-sm font-semibold text-muted">
              {TEAM[0].role}
            </div>
          </div>

          {/* Remo (Directly under Willie) */}
          <div className="framer-glass-card rounded-3xl p-7">
            <div className="text-xs font-extrabold tracking-widest text-muted">
              DIRECTLY UNDER WILLIE
            </div>
            <div className="mt-3 font-display text-2xl font-black uppercase tracking-tight">
              {TEAM[1].name}
            </div>
            <div className="mt-2 text-sm font-semibold text-muted">
              {TEAM[1].role}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <div className="framer-glass-card rounded-3xl p-8 md:p-10">
            <div className="font-display text-3xl font-black uppercase tracking-tight md:text-5xl">
              GOT AN IDEA? <br className="hidden md:block" />
              LET’S BUILD IT.
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <a
                className="rounded-2xl border border-line bg-white/5 p-5 hover:bg-white/10"
                href={`mailto:${CONTACT.email}`}
              >
                <div className="text-xs font-extrabold tracking-widest text-muted">
                  EMAIL
                </div>
                <div className="mt-2 text-sm font-extrabold">{CONTACT.email}</div>
              </a>

              <a
                className="rounded-2xl border border-line bg-white/5 p-5 hover:bg-white/10"
                href={`tel:${CONTACT.phoneTel}`}
              >
                <div className="text-xs font-extrabold tracking-widest text-muted">
                  PHONE
                </div>
                <div className="mt-2 text-sm font-extrabold">
                  {CONTACT.phoneDisplay}
                </div>
              </a>

              <div className="rounded-2xl border border-line bg-white/5 p-5">
                <div className="text-xs font-extrabold tracking-widest text-muted">
                  LOCATION
                </div>
                <div className="mt-2 text-sm font-extrabold">
                  {CONTACT.address}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-dim">
              <span>© {new Date().getFullYear()} Solucon</span>
              <span>Modimolle • South Africa</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;