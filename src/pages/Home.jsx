import { NavLink } from "react-router-dom";
import { SERVICES } from "../data/site.js";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <h1 className="h1">
            Sleek software. <br className="hidden md:block" />
            Serious systems.
          </h1>
          <p className="p mt-5 max-w-xl">
            Solucon builds modern web apps, enterprise platforms, and scalable architecture —
            with clean UX and engineering that holds up in production.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <NavLink className="btn btnPrimary" to="/contact">
              Start a project
            </NavLink>
            <NavLink className="btn btnGhost" to="/work">
              View work
            </NavLink>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="card p-7">
            <div className="text-sm font-medium">Built for clarity.</div>
            <p className="p mt-3">
              Minimal UI, perfect spacing, performance-first builds, and a delivery process that ships.
            </p>
            <div className="mt-6 grid gap-3">
              <div className="card p-4">
                <div className="text-sm font-medium">Fast builds</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">Vite + clean structure</div>
              </div>
              <div className="card p-4">
                <div className="text-sm font-medium">Stable delivery</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">Firebase hosting + CI-ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="space-y-6">
        <div>
          <h2 className="h2">What we build</h2>
          <p className="p mt-2 max-w-2xl">
            Focused services, not fluff. Simple deliverables, measurable outcomes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="card p-7">
              <div className="text-lg font-semibold tracking-tight">{s.title}</div>
              <p className="p mt-3">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-zinc-200/80 px-3 py-1 text-xs text-zinc-600 dark:border-white/10 dark:text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <NavLink className="link inline-flex items-center gap-2 text-sm font-medium" to="/services">
          Explore all services →
        </NavLink>
      </section>
    </div>
  );
}