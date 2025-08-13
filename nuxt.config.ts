import {purgeCssConfiguration} from "./purgecss.config";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {enabled: true},
  modules: ["@nuxt/content", "@pinia/nuxt", "@nuxtjs/i18n", "@nuxtjs/sitemap"],

  site: {
    url: "https://www.flavien.io/",
    name: "Flavien PERIER"
  },

  app: {
    head: {
      link: [{rel: "icon", type: "image/x-icon", href: "/favicon.svg"}]
    }
  },

  runtimeConfig: {
    public: {
      WIKI_BASE_PATH: "https://articles.flavien.io/",
    },
  },

  i18n: {
    defaultLocale: "fr",
    strategy: "prefix_except_default",
    locales: [
      {code: "fr", name: "French", file: "fr.json"},
      {code: "en", name: "English", file: "en.json"},
    ]
  },

  sitemap: {
    cacheMaxAgeSeconds: 3600,
    sources: [
      "/api/__sitemap__/urls",
    ]
  },

  postcss: {
    plugins: {
      "@fullhuman/postcss-purgecss": purgeCssConfiguration,
      "cssnano": {},
    }
  }
})