import {purgeCssConfiguration} from "./purgecss.config";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {enabled: false},
  modules: ["@nuxt/content", "@pinia/nuxt", "@nuxtjs/i18n", "@nuxtjs/sitemap"],

  site: {
    url: "https://www.flavien.io/",
    name: "Flavien PERIER",
  },

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/favicon.svg" },
      ],
    },
  },

  runtimeConfig: {
    public: {
      WIKI_BASE_PATH: "https://articles.flavien.io/",
    },
  },

  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },

  i18n: {
    defaultLocale: "fr",
    strategy: "prefix_except_default",
    locales: [
      {code: "fr", name: "French", file: "fr.json"},
      {code: "en", name: "English", file: "en.json"},
    ],
  },

  sitemap: {
    cacheMaxAgeSeconds: 3600,
    sources: [
      "/api/__sitemap__/urls",
    ],
  },

  postcss: {
    plugins: {
      "@fullhuman/postcss-purgecss": purgeCssConfiguration,
      "cssnano": {},
    },
  },
});