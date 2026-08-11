import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { cases } from "@/lib/content";

const BASE_URL = "https://pmcustom.cl";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/sistemas-embebidos", changefreq: "monthly", priority: "0.8" },
          { path: "/iot", changefreq: "monthly", priority: "0.8" },
          { path: "/automatizacion-industrial", changefreq: "monthly", priority: "0.8" },
          { path: "/desarrollo-productos", changefreq: "monthly", priority: "0.8" },
          { path: "/investigacion-desarrollo", changefreq: "monthly", priority: "0.8" },
          { path: "/sistema-predictor-riego-ndvi", changefreq: "monthly", priority: "0.8" },
          { path: "/casos-exito", changefreq: "monthly", priority: "0.7" },
          ...cases.map((c) => ({ path: `/casos-exito/${c.slug}`, changefreq: "monthly" as const, priority: "0.6" })),
          { path: "/industrias", changefreq: "monthly", priority: "0.7" },
          { path: "/contacto", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/aplicaciones-iot-industrial", changefreq: "monthly", priority: "0.7" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
