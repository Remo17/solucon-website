import { SERVICES } from "../data/site.js";

export default function Services() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="h2">Services</h1>
        <p className="p mt-2 max-w-2xl">
          Modern engineering, clean UX, and systems that don’t break under pressure.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {SERVICES.map((s) => (
          <div key={s.title} className="card p-8">
            <div className="text-xl font-semibold tracking-tight">{s.title}</div>
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
    </div>
  );
}