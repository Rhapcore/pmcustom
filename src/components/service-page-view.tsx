import type React from "react";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";

import type { ServicePage as ServiceData } from "@/lib/content";

export function ServicePageView({ service, extra }: { service: ServiceData; extra?: React.ReactNode }) {
  return (
    <SiteLayout>
      <section className="relative border-b border-[var(--p2-line)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="p2-eyebrow">Servicio</div>
            <h1 className="mt-4 p2-display text-4xl md:text-6xl text-[var(--p2-white)]">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-[var(--p2-white)]/80 leading-relaxed">{service.lead}</p>
            <p className="mt-4 text-base text-[var(--p2-white)]/70 leading-relaxed whitespace-pre-line">{service.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contacto" className="p2-btn">Evaluar mi proyecto →</Link>
              <Link to="/casos-exito" className="p2-btn-ghost">Ver casos de éxito</Link>
            </div>
          </div>
          <div className="p2-card overflow-hidden bg-[var(--p2-surface-2)]">
            <img src={service.image} alt={service.title} className="w-full h-auto object-contain" loading="lazy" />
          </div>
        </div>
      </section>


      {extra}

      <section className="py-20 md:py-24">

        <div className="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="p2-display text-3xl md:text-4xl text-[var(--p2-white)]">
            ¿Listo para conversar tu <span className="text-[var(--p2-green)]">proyecto</span>?
          </h2>
          <p className="mt-5 text-base text-[var(--p2-white)]/75">
            Cuéntanos tu desafío. Te respondemos en menos de 24 horas hábiles.
          </p>
          <Link to="/contacto" className="mt-8 inline-flex p2-btn">Solicitar evaluación →</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
