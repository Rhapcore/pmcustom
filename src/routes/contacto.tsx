import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ContactForm } from "@/components/contact-form";
import { Mail, Clock, Zap, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | PM CUSTOM — Evalúa tu proyecto tecnológico" },
      {
        name: "description",
        content:
          "Contacta a PM CUSTOM para evaluar tu proyecto de sistemas embebidos, IoT o automatización. Te respondemos en menos de 24 horas hábiles.",
      },
      { property: "og:title", content: "Contacto | PM CUSTOM" },
      {
        property: "og:description",
        content: "Cuéntanos tu desafío tecnológico. Evaluación gratuita.",
      },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contacto PM CUSTOM",
          url: "/contacto",
          about: {
            "@type": "Organization",
            name: "PM CUSTOM",
            areaServed: "CL",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="py-20 md:py-28 border-b border-[var(--p2-line)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14">
          <div>
            <div className="p2-eyebrow">Contacto</div>
            <h1 className="mt-4 p2-display text-4xl md:text-6xl text-[var(--p2-white)]">
              ¿Tienes un desafío tecnológico que aún no encuentra{" "}
              <span className="text-[var(--p2-green)]">solución</span>?
            </h1>
            <p className="mt-6 text-lg text-[var(--p2-white)]/80 leading-relaxed">
              En PM CUSTOM diseñamos tecnología adaptada a la realidad de tu empresa. Desde sensores inteligentes y plataformas IoT hasta productos tecnológicos completamente personalizados.
            </p>
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <Clock size={22} className="text-[var(--p2-green)] mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-[var(--p2-white)]">Respuesta rápida</div>
                  <div className="text-sm text-[var(--p2-white)]/70">Te contactamos en menos de 24 horas hábiles.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Zap size={22} className="text-[var(--p2-green)] mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-[var(--p2-white)]">Evaluación sin costo</div>
                  <div className="text-sm text-[var(--p2-white)]/70">Revisamos tu desafío y proponemos un camino técnico viable.</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={22} className="text-[var(--p2-green)] mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-[var(--p2-white)]">Conversación directa</div>
                  <div className="text-sm text-[var(--p2-white)]/70">Hablas con quienes desarrollan, no con un call center.</div>
                </div>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/company/pmcustom-spa/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--p2-white)]/80 hover:text-[var(--p2-green)] transition-colors"
            >
              <Linkedin size={20} className="text-[var(--p2-green)]" />
              Síguenos en LinkedIn
            </a>
          </div>
          <div className="p2-card p-8 md:p-10">
            <h2 className="p2-display text-2xl text-[var(--p2-white)]">Cuéntanos sobre tu proyecto</h2>
            <p className="mt-2 text-sm text-[var(--p2-white)]/65">Completa el formulario y te contactamos pronto.</p>
            <div className="mt-7">
              <ContactForm variant="p2" />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
