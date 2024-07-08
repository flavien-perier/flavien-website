<template>
  <section class="container">
    <h1 class="col-12 section-title" v-t="'wiki'" />

    <article class="row">
      <ArticleLink v-for="h in headers" :key="h.date" :header="h" />
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
import { useWikiStore } from "@/wiki/wiki.store";
import { storeToRefs } from "pinia";
import ArticleLink from "@/wiki/components/article-link.component.vue";

const wikiStore = useWikiStore();
const { headers, page, numberOfPages } = storeToRefs(wikiStore);

wikiStore.loadArticles(1);
</script>
