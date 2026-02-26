import { TEAM } from "../data/site.js";

export default function About() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="h2">About</h1>
        <p className="p mt-2 max-w-2xl">
          Solucon is a South African software startup focused on building clean, reliable systems for business and education.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="card p-8">
          <div className="text-lg font-semibold tracking-tight">Principles</div>
          <ul className="mt-4 space-y-2 text-[15px] leading-7 text-zinc-600 dark:text-zinc-300">
            <li>• Minimal UI, maximum clarity</li>
            <li>• Engineering that scales</li>
            <li>• Performance & reliability first</li>
            <li>• Clean delivery, no chaos</li>
          </ul>
        </div>

        <div className="card p-8">
          <div className="text-lg font-semibold tracking-tight">Leadership</div>
          <div className="mt-4 space-y-3">
            {TEAM.map((m) => (
              <div key={m.name} className="card p-5">
                <div className="text-sm font-medium">{m.name}</div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}