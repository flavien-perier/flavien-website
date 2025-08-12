<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("wiki") }}</h1>

    <article class="row">
      <WikiArticleLink v-for="h in headers" :key="h.date" :header="h" />
    </article>

    <div class="container">
      <p class="col-12 page-indicator">
        <span
            v-if="page > 1"
            class="cursor-pointer"
            @click="wikiStore.loadArticles(page - 1)"
        >
          {{ $t("previous") }} -
        </span>
        {{ $t("page") }}: {{ page }}/{{ numberOfPages }}
        <span
            v-if="page < numberOfPages"
            class="cursor-pointer"
            @click="wikiStore.loadArticles(page + 1)"
        >
          - {{ $t("next") }}
        </span>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useWikiStore } from "~/store/Wiki";
import { storeToRefs } from "pinia";

const title = "Flavien PERIER - Wiki";
const description = "French wiki articles about Linux, Privacy and Security";

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
});

const wikiStore = useWikiStore();
const { headers, page, numberOfPages } = storeToRefs(wikiStore);

wikiStore.loadArticles(1);
</script>
