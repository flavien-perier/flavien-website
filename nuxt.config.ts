import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@pinia/nuxt", "@nuxtjs/i18n", "@nuxtjs/sitemap"],
  css: [resolve("./app/assets/scss/index.scss")],

  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }]
    }
  },

  i18n: {
    defaultLocale: "fr",
    locales: [
      { code: "fr", name: "French", file: "fr.json" },
      { code: "en", name: "English", file: "en.json" },
    ]
  }
})