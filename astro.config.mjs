import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import htmx from "astro-htmx";
import alpinejs from "@astrojs/alpinejs";
import db from "@astrojs/db";
import node from "@astrojs/node";
import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs(), htmx(), db(), clerk()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
