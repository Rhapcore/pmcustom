import { Link, useRouter } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import pmcustomLogo from "@/assets/pmcustom-logo.png";
import { Menu, X, ChevronDown, Linkedin } from "lucide-react";

type NavItem = {
  to: string;
  params?: Record<string, string>;
  href: string;
  label: string;
};

const navGroups: { label: string; items: NavItem[] }[] = [
  {
    label: "Productos",
    items: [
      {
        to: "/casos-exito/$slug",
        params: { slug: "nodo-riego-controlador" },
        href: "/casos-exito/nodo-riego-controlador",
        label: "Sistema de riego automatizado IoT",
      },
      {
        to: "/casos-exito/$slug",
        params: { slug: "data-logger" },
        href: "/casos-exito/data-logger",
        label: "Data Logger Inteligente",
      },
      { to: "/sistema-predictor-riego-ndvi", href: "/sistema-predictor-riego-ndvi", label: "Índice NDVI" },
    ],
  },
  {
    label: "Servicios",
    items: [
      { to: "/sistemas-embebidos", href: "/sistemas-embebidos", label: "Sistemas Embebidos" },
      { to: "/iot", href: "/iot", label: "Soluciones IoT" },
      { to: "/automatizacion-industrial", href: "/automatizacion-industrial", label: "Automatización Industrial" },
      { to: "/desarrollo-productos", href: "/desarrollo-productos", label: "Desarrollo de Productos" },
      { to: "/investigacion-desarrollo", href: "/investigacion-desarrollo", label: "I+D · CORFO" },
    ],
  },
];

const topLinks = [
  { to: "/casos-exito", label: "Casos de éxito" },
  { to: "/industrias", label: "Industrias" },
] as const;

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname.startsWith(to);
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const router = useRouter();
  const pathname = router.state.location.pathname;

  const toggle = (key: string) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <header className="sticky top-0 z-40 bg-[var(--p2-black)]/90 backdrop-blur border-b border-[var(--p2-line)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:items-center lg:justify-between">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img src={pmcustomLogo} alt="PM CUSTOM" className="h-10 w-auto shrink-0" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[var(--p2-white)]/85">
          {navGroups.map((g) => (
            <div key={g.label} className="relative group">
              <button type="button" aria-haspopup="true" className="flex items-center gap-1 py-2 hover:text-[var(--p2-green)] transition-colors">
                {g.label}
                <ChevronDown size={14} className="shrink-0 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                <div className="bg-[var(--p2-surface)] border border-[var(--p2-line)] rounded-xl shadow-xl p-3 min-w-[260px]">
                  {g.items.map((item) => (
                    <Link
                      key={item.href}
                      to={item.to}
                      params={item.params}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive(pathname, item.href)
                          ? "text-[var(--p2-green)] bg-[var(--p2-green)]/10"
                          : "text-[var(--p2-white)]/80 hover:text-[var(--p2-green)] hover:bg-[var(--p2-green)]/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {topLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`py-2 transition-colors ${
                isActive(pathname, l.to) ? "text-[var(--p2-green)]" : "hover:text-[var(--p2-green)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contacto" className="hidden md:inline-flex p2-btn !py-2 !px-4 !text-xs">
            Evaluar proyecto
          </Link>
          <button
            className="lg:hidden text-[var(--p2-white)]"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--p2-line)] bg-[var(--p2-black)]">
          <nav className="px-6 py-4 flex flex-col gap-1 text-sm">
            {navGroups.map((g) => (
              <div key={g.label} className="border-b border-[var(--p2-line)]/50 last:border-b-0">
                <button
                  onClick={() => toggle(g.label)}
                  className="w-full flex items-center justify-between py-3 text-[var(--p2-white)]/90 font-medium"
                >
                  {g.label}
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform ${expanded[g.label] ? "rotate-180" : ""}`}
                  />
                </button>
                {expanded[g.label] && (
                  <div className="pb-3 pl-2 flex flex-col gap-1">
                    {g.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.to}
                        params={item.params}
                        onClick={() => setOpen(false)}
                        className={`py-2 text-sm ${
                          isActive(pathname, item.href) ? "text-[var(--p2-green)]" : "text-[var(--p2-white)]/70 hover:text-[var(--p2-green)]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {topLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`py-3 border-b border-[var(--p2-line)]/50 last:border-b-0 font-medium ${
                  isActive(pathname, l.to) ? "text-[var(--p2-green)]" : "text-[var(--p2-white)]/90 hover:text-[var(--p2-green)]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[var(--p2-line)] bg-[var(--p2-surface)] mt-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <img src={pmcustomLogo} alt="PM CUSTOM" className="h-12 w-auto mb-4" />
          <p className="text-[var(--p2-muted)] leading-relaxed">
            Partner tecnológico en sistemas embebidos, IoT y automatización para industrias en Chile y Latinoamérica.
          </p>
          <div className="mt-6">
            <div className="p2-eyebrow mb-3">Síguenos</div>
            <a
              href="https://www.linkedin.com/company/pmcustom-spa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de PM CUSTOM"
              className="inline-flex items-center gap-2 text-[var(--p2-white)]/80 hover:text-[var(--p2-green)] transition-colors"
            >
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-[var(--p2-line)]">
                <Linkedin size={18} />
              </span>
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <div className="p2-eyebrow mb-4">Productos</div>
          <ul className="space-y-2">
            <li><Link to="/casos-exito/$slug" params={{ slug: "nodo-riego-controlador" }} className="hover:text-[var(--p2-green)]">Sistema de riego automatizado IoT</Link></li>
            <li><Link to="/casos-exito/$slug" params={{ slug: "data-logger" }} className="hover:text-[var(--p2-green)]">Data Logger Inteligente</Link></li>
            <li><Link to="/sistema-predictor-riego-ndvi" className="hover:text-[var(--p2-green)]">Predictor de Riego NDVI</Link></li>
          </ul>
        </div>
        <div>
          <div className="p2-eyebrow mb-4">Servicios</div>
          <ul className="space-y-2">
            <li><Link to="/sistemas-embebidos" className="hover:text-[var(--p2-green)]">Sistemas Embebidos</Link></li>
            <li><Link to="/iot" className="hover:text-[var(--p2-green)]">Soluciones IoT</Link></li>
            <li><Link to="/automatizacion-industrial" className="hover:text-[var(--p2-green)]">Automatización Industrial</Link></li>
            <li><Link to="/desarrollo-productos" className="hover:text-[var(--p2-green)]">Desarrollo de Productos</Link></li>
            <li><Link to="/investigacion-desarrollo" className="hover:text-[var(--p2-green)]">I+D · CORFO</Link></li>
          </ul>
        </div>
        <div>
          <div className="p2-eyebrow mb-4">Empresa</div>
          <ul className="space-y-2">
            <li><Link to="/casos-exito" className="hover:text-[var(--p2-green)]">Casos de éxito</Link></li>
            <li><Link to="/industrias" className="hover:text-[var(--p2-green)]">Industrias</Link></li>
            <li><Link to="/contacto" className="hover:text-[var(--p2-green)]">Contacto</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--p2-line)] py-5 text-center text-xs text-[var(--p2-muted)]">
        © {new Date().getFullYear()} PM CUSTOM · Sistemas Embebidos e IoT
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  const phone = "56921685636";
  const message = encodeURIComponent(
    "Hola PM Custom, me gustaría evaluar un proyecto.",
  );
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full shadow-lg shadow-black/20 transition-transform hover:scale-105 group"
      style={{ backgroundColor: "var(--p2-green)" }}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={0}
        aria-hidden="true"
      >
        <path
          fill="var(--p2-black)"
          d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02ZM12.04 20.13a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.66 4.23 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"
        />
      </svg>
      
    </a>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="theme-p2 min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
