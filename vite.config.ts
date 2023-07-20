import { defineConfig } from "vite";

export default defineConfig({
  mode: "production",
  build: {
    lib: {
      entry: "src/main.ts",
      formats: ["es", "cjs", "umd"],
      name: "main",
    },
    outDir: "lib",
    minify: true,
    copyPublicDir: false,
    sourcemap: true,
  },
});
