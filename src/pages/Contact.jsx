import { CONTACT, SOCIALS } from "../data/site.js";

export default function Contact() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="h2">Contact</h1>
        <p className="p mt-2 max-w-2xl">
          Fast reply. Clear scope. Clean delivery.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <a className="card p-7 hover:bg-zinc-50 dark:hover:bg-white/10" href={`mailto:${CONTACT.email}`}>
          <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Email</div>
          <div className="mt-2 text-sm font-medium">{CONTACT.email}</div>
        </a>

        <a className="card p-7 hover:bg-zinc-50 dark:hover:bg-white/10" href={`tel:${CONTACT.phoneTel}`}>
          <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Phone</div>
          <div className="mt-2 text-sm font-medium">{CONTACT.phoneDisplay}</div>
        </a>

        <a className="card p-7 hover:bg-zinc-50 dark:hover:bg-white/10" href={CONTACT.mapsUrl} target="_blank" rel="noreferrer">
          <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Location</div>
          <div className="mt-2 text-sm font-medium">{CONTACT.address}</div>
        </a>
      </div>

      <div className="card p-8">
        <div className="text-lg font-semibold tracking-tight">Social</div>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {SOCIALS.map((s) => (
            <a key={s.name} className="link" href={s.href} target="_blank" rel="noreferrer">
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}