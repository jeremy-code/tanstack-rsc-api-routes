import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import rsc from "@vitejs/plugin-rsc";

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      rsc: {
        enabled: true,
      },
    }),
    rsc(),
    viteReact(),
  ],
  logLevel: "info",
  environments: {
    rsc: {
      build: {
        rolldownOptions: {
          logLevel: "info",
          experimental: {
            attachDebugInfo: "simple",
            chunkImportMap: true,
          },
        },
      },
    },
  },
});

export default config;
