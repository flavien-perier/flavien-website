<template>
  <h1>{{ title }}</h1>
  <article>
    <div class="row">
      <div class="col-12 col-lg-8">
        <h2 class="text-left text-lg-center">{{ $t("tableOfContents") }}</h2>
        <WikiTableOfContents :htmlContent="content" />
      </div>

      <div class="col-12 col-lg-4">
        <h2 class="text-left text-lg-center">{{ $t("information") }}</h2>
        <WikiArticleInformation :author="author" :date="date" />
      </div>
    </div>

    <div v-html="content"></div>
  </article>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useWikiArticleStore } from "~/store/WikiArticle";

const route = useRoute();
const wikiArticleStore = useWikiArticleStore();
const { title, author, date, content, description } = storeToRefs(wikiArticleStore);

await wikiArticleStore.loadArticle(route.params.filename as string);

const pageTitle = `Flavien PERIER - ${title.value}`

useSeoMeta({
  title: pageTitle,
  description: description.value,
  author: author.value,

  ogTitle: pageTitle,
  ogDescription: description.value,

  twitterTitle: pageTitle,
  twitterDescription: description.value,
});
</script>
