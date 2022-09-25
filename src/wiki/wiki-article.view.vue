<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ title }}</h1>
    <article class="box bg-box text-article">
      <div class="row">
        <div class="col-12 col-lg-8">
          <h2 class="text-left text-lg-center">{{ $t("tableOfContents") }}</h2>
          <TableOfContents :htmlContent="content" class="box" />
        </div>

        <div class="col-12 col-lg-4">
          <h2 class="text-left text-lg-center">{{ $t("informations") }}</h2>
          <div class="box">
            <div>
              <strong>{{ $t("author") }}</strong
              >: {{ author }}
            </div>
            <div>
              <strong>{{ $t("date") }}</strong
              >: {{ date }}
            </div>
          </div>
        </div>
      </div>

      <div v-html="content"></div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import TableOfContents from "@/wiki/components/table-of-contents.component.vue";
import { useWikiArticleStore } from "@/wiki/wiki-article.store";
import { storeToRefs } from "pinia";

const route = useRoute();
const wikiArticleStore = useWikiArticleStore();
const { title, author, date, content } = storeToRefs(wikiArticleStore);

wikiArticleStore.loadArticle(route.params.fileName as string);
</script>
