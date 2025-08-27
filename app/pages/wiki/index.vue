<template>
  <h1>{{ $t("wiki") }}</h1>

  <div class="row">
    <WikiArticleLink v-for="h in headers" :key="h.date" :header="h" />
  </div>

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
</template>

<script setup lang="ts">
import { useWikiStore } from "~/store/Wiki";
import { storeToRefs } from "pinia";

const { t } = useI18n();

const title = `Flavien PERIER - ${t("wiki")}`;
const description = t("wiki.description");

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

<style lang="scss" scoped>
.page-indicator {
  color: #fff;
  text-shadow: 0 0 .5rem #000;
  text-align: center;
}
</style>