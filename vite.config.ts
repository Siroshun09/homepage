import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin } from "vite";

const INCLUDE_PATTERN = /<!--\s*@include\s+(\S+)\s*-->/g;

/**
 * Replaces `<!-- @include path -->` in index.html with the contents of the file at `path`
 * (relative to the including file). Included files may include other files.
 */
const htmlInclude = (): Plugin => {
  const included = new Set<string>();

  const expand = (html: string, dir: string, stack: string[]): string =>
    html.replace(INCLUDE_PATTERN, (_, path: string) => {
      const file = resolve(dir, path);
      if (stack.includes(file)) {
        throw new Error(`Circular include: ${[...stack, file].join(" -> ")}`);
      }
      included.add(file);
      return expand(readFileSync(file, "utf8"), dirname(file), [...stack, file]);
    });

  return {
    name: "html-include",
    transformIndexHtml: {
      order: "pre",
      handler: (html, ctx) => expand(html, dirname(ctx.filename), [ctx.filename]),
    },
    handleHotUpdate: ({ file, server }) => {
      if (included.has(file)) {
        server.ws.send({ type: "full-reload" });
        return [];
      }
    },
  };
};

export default defineConfig({
  plugins: [htmlInclude(), tailwindcss()],
  build: {
    modulePreload: { polyfill: false },
    cssMinify: "lightningcss",
    chunkSizeWarningLimit: 600,
  },
});
