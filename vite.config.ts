// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/tanstack/vite";
import path from "node:path";
import type { Plugin, ResolvedConfig } from "vite";

// Compatibilidad Windows: el plugin MCP compara config.root (que Vite entrega
// normalizado con "/") contra rutas de path.resolve (que en Windows usan "\"),
// y aborta el dev server. Le pasamos el root con el separador nativo del SO.
// En Linux/macOS path.resolve es idempotente, así que no cambia nada.
function mcpPluginCrossPlatform(): Plugin {
  const plugin = mcpPlugin() as Plugin;
  // configResolved puede venir como función o como objeto { handler, order }.
  const hook = plugin.configResolved;
  const handler = typeof hook === "function" ? hook : hook?.handler;
  if (!handler) return plugin;

  plugin.configResolved = function (config: ResolvedConfig) {
    const conRootNativo = { ...config, root: path.resolve(config.root) } as ResolvedConfig;
    return handler.call(this, conRootNativo);
  };
  return plugin;
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [mcpPluginCrossPlatform()],
  },
});
