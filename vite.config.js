import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./src", 
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"), 
        about: resolve(__dirname, "src/about.html"),
        work: resolve(__dirname, "src/work.html"), 
        contact: resolve(__dirname, "src/contact.html"), 
      },
    },
    outDir: "../docs",
  },
  base: "./", 
});
