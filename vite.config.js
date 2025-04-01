import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        exercice1: resolve(__dirname, "index.html"),
        exercice2: resolve(__dirname, "index.html"),
        exercice3: resolve(__dirname, "index.html"),
        exercice4: resolve(__dirname, "index.html"),
        exercice5: resolve(__dirname, "index.html"),
        exercice6: resolve(__dirname, "index.html"),
        exercice7: resolve(__dirname, "index.html"),
        exercice8: resolve(__dirname, "index.html"),
        exercice9: resolve(__dirname, "index.html"),
        exercice10: resolve(__dirname, "index.html"),
      },
    },
  },
});
