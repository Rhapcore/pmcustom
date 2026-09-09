import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { cases } from "@/lib/content";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/casos-exito/$slug")({
  loader: ({ params }) => {
    const c = cases.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Caso no encontrado | PM CUSTOM" }] };
    return {
      meta: [
        { title: `${loaderData.title} | Caso de éxito PM CUSTOM` },
        { name: "description", content: loaderData.short },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.short },
        { property: "og:url", content: `/casos-exito/${params.slug}` },
        { property: "og:type", content: "article" },
        { property: "og:image", content: loaderData.image },
      ],
      links: [{ rel: "canonical", href: `/casos-exito/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.short,
            image: loaderData.image,
            articleBody: loaderData.description,
            author: { "@type": "Organization", name: "PM CUSTOM" },
            publisher: { "@type": "Organization", name: "PM CUSTOM" },
            mainEntityOfPage: `/casos-exito/${params.slug}`,
          }),
        },
      ],
    };
  },
  component: CaseDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="max-w-[900px] mx-auto px-6 py-32 text-center">
        <h1 className="p2-display text-5xl text-[var(--p2-white)]">Caso no encontrado</h1>
        <Link to="/casos-exito" className="mt-8 inline-flex p2-btn">Ver todos los casos</Link>
      </div>
    </SiteLayout>
  ),
});

function CaseDetail() {
  const c = Route.useLoaderData();
  return (
    <SiteLayout>
      <section className="border-b border-[var(--p2-line)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Link to="/casos-exito" className="text-xs font-semibold text-[var(--p2-green)] hover:underline">
              ← Volver a casos
            </Link>
            <h1 className="mt-5 p2-display text-4xl md:text-6xl text-[var(--p2-white)]">{c.title}</h1>
            <p className="mt-6 text-lg text-[var(--p2-white)]/80 leading-relaxed">{c.description}</p>
            <Link to="/contacto" className="mt-8 inline-flex p2-btn">Quiero algo similar →</Link>
          </div>
          <div className="p2-card overflow-hidden bg-[var(--p2-surface-2)]">
            <img src={c.image} alt={c.title} className="w-full h-auto object-contain" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[var(--p2-surface)]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="p2-eyebrow">Beneficios</div>
          <h2 className="mt-3 p2-display text-3xl md:text-4xl text-[var(--p2-white)]">
            Resultados <span className="text-[var(--p2-green)]">concretos</span> en terreno.
          </h2>
          <ul className="mt-10 grid sm:grid-cols-2 gap-4">
            {c.benefits.map((b: string) => (
              <li key={b} className="p2-card p-5 flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[var(--p2-green)] shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--p2-white)] leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}
