import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
import { CONTACT, SOCIALS } from "../data/site.js";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        [
          "text-sm font-medium transition",
          isActive
            ? "text-zinc-950 dark:text-white"
            : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-zinc-950/60">
        <div className="containerX flex h-16 items-center justify-between">
          <NavLink to="/" className="text-sm font-semibold tracking-tight">
            Solucon
          </NavLink>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <NavItem key={n.to} {...n} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="containerX py-14 md:py-20">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-200/70 py-14 dark:border-white/10">
        <div className="containerX">
          <div className="card p-8 md:p-10">
            <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Got an idea? Let’s build it.
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <a className="card p-5 hover:bg-zinc-50 dark:hover:bg-white/10" href={`mailto:${CONTACT.email}`}>
                <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Email</div>
                <div className="mt-1 text-sm font-medium">{CONTACT.email}</div>
              </a>

              <a className="card p-5 hover:bg-zinc-50 dark:hover:bg-white/10" href={`tel:${CONTACT.phoneTel}`}>
                <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Phone</div>
                <div className="mt-1 text-sm font-medium">{CONTACT.phoneDisplay}</div>
              </a>

              <a className="card p-5 hover:bg-zinc-50 dark:hover:bg-white/10" href={CONTACT.mapsUrl} target="_blank" rel="noreferrer">
                <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Location</div>
                <div className="mt-1 text-sm font-medium">{CONTACT.address}</div>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {SOCIALS.map((s) => (
                  <a key={s.name} className="link" href={s.href} target="_blank" rel="noreferrer">
                    {s.name}
                  </a>
                ))}
              </div>
              <div>© {new Date().getFullYear()} Solucon</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile nav (simple + clean) */}
      <div className="fixed bottom-4 left-1/2 z-50 w-[92%] -translate-x-1/2 md:hidden">
        <div className="card flex items-center justify-between px-5 py-3">
          <div className="flex gap-4">
            <NavLink className="link text-sm" to="/">Home</NavLink>
            <NavLink className="link text-sm" to="/services">Services</NavLink>
            <NavLink className="link text-sm" to="/contact">Contact</NavLink>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}