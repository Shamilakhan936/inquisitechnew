import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static"; 
// If you want SSR, use "@astrojs/vercel/server"

export default defineConfig({
  integrations: [tailwind()],
  output: "static", // keep static since you’re building a static site
  adapter: vercel(),
});
