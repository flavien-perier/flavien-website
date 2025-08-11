<template>
  <NuxtLoadingIndicator/>

  <canvas id="bg-canvas" class="d-block mx-auto" height="450" width="800"></canvas>

  <NuxtLayout :name="layout">
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup lang="ts">
const layout = "default";

const title = "Flavien PERIER";
const author = "Flavien PERIER";
const description = "Flavien PERIER, french full stack developer. This website contains my CV and technical documentation on different subjects (Linux, Privacy...)";

useSeoMeta({
  title: title,
  description: description,
  author: author,
  publisher: author,

  ogType: "website",
  ogTitle: title,
  ogDescription: description,
  ogUrl: "https://www.flavien.io",
  ogImage: "/og.webp",

  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: "/og.webp",

  robots: "all",
  themeColor: "#5C95CF",
});

useHead({
  meta: [
    {name: "reply-to", content: "contact@flavien.io"},
    {name: "category", content: "cv, developer, documentation, linux"},
    {
      name: "keywords",
      content: "cv, developer, documentation, linux, privacy, java, docker, kotlin, spring, javaScript, typeScript, angular, vuejs, french"
    },
    {name: "identifier-url", content: "www.flavien.io"},

    {name: "geo.region", content: "FR-69"},
    {name: "geo.placename", content: "Lyon"},
    {name: "geo.position", content: "45.7584;4.8213"},
    {name: "ICBM", content: "45.7584, 4.8213"},

    {name: "viewport", content: "width=device-width,initial-scale=1.0"},
  ],
  script: [{src: "./js/wallpapers/genetic.js", defer: true}]
});
</script>