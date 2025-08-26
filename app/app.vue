<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout name="default">
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup lang="ts">
import "~/assets/scss/index.scss";
import {useI18n} from "vue-i18n";
import type {Graph} from "schema-dts";

const { t, locale } = useI18n();

const title = "Flavien PERIER";
const author = "Flavien PERIER";
const description = t("home.description");

const siteUrl = "https://www.flavien.io";
const siteUrlLocal = `https://www.flavien.io${locale.value === "fr" ? "" : "/en"}`;
const lang = locale.value === "fr" ? "fr-FR" : "en-US";

const jsonld: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: author,
      url: siteUrl,
      email: "mailto:contact@flavien.io",
    },
    {
      "@type": "SiteNavigationElement",
      name: t("home"),
      url: siteUrlLocal,
      inLanguage: lang,
    },
    {
      "@type": "SiteNavigationElement",
      name: t("competences"),
      url: `${siteUrlLocal}/competences`,
      inLanguage: lang,
    },
    {
      "@type": "SiteNavigationElement",
      name: t("projects"),
      url: `${siteUrlLocal}/projects`,
      inLanguage: lang,
    },
    {
      "@type": "SiteNavigationElement",
      name: t("wiki"),
      url: `${siteUrlLocal}/wiki`,
      inLanguage: lang,
    },
  ],
};

useSeoMeta({
  title: title,
  description: description,
  author: author,
  publisher: author,

  ogType: "website",
  ogTitle: title,
  ogDescription: description,
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/og.webp`,
  ogLocale: lang,

  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `${siteUrl}/og.webp`,

  robots: "all",
  themeColor: "#5C95CF",
});

useHead({
  meta: [
    { name: "reply-to", content: "contact@flavien.io" },
    { name: "category", content: "cv, developer, documentation, linux" },
    {
      name: "keywords",
      content: "cv, developer, documentation, linux, privacy, java, docker, kotlin, spring, javaScript, typeScript, angular, vuejs, french"
    },
    { name: "identifier-url", content: "www.flavien.io" },

    { name: "geo.region", content: "FR-69" },
    { name: "geo.placename", content: "Lyon" },
    { name: "geo.position", content: "45.7584;4.8213" },
    { name: "ICBM", content: "45.7584, 4.8213" },

    { name: "viewport", content: "width=device-width,initial-scale=1.0" },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
  script: [
    {
      type: "application/ld+json",
      textContent: JSON.stringify(jsonld),
    },
  ]
});
</script>