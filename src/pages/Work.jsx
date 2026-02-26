const CASES = [
  { title: "Internal Ops Platform", desc: "Reduced manual admin with role-based access and clean reporting.", tags: ["Web App", "RBAC", "Reporting"] },
  { title: "Education Tools", desc: "Digitised workflows and learning content with a fast, minimal UI.", tags: ["EdTech", "Content", "UX"] },
  { title: "Automation Layer", desc: "Connected systems and removed repetitive work with reliable integrations.", tags: ["Automation", "Integrations", "APIs"] },
];

export default function Work() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="h2">Work</h1>
        <p className="p mt-2 max-w-2xl">
          Case studies (you can replace these with real client/project names when ready).
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {CASES.map((c) => (
          <div key={c.title} className="card p-7">
            <div className="text-lg font-semibold tracking-tight">{c.title}</div>
            <p className="p mt-3">{c.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {c.tags.map((t) => (
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