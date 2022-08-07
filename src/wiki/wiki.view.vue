<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("wiki") }}</h1>

    <article class="row">
      <ArticleLink
          v-for="h in headers"
          :key="h.date"
          :header="h"
      />
    </article>

    <div class="container">
      <p class="col-12 page-indicator">
        <span v-if="page > 1" class="cursor-link" @click="loadArticles(page - 1)">{{ $t("previous") }} -</span>
        {{ $t("page") }}: {{ page }}/{{ numberOfPages }}
        <span v-if="page < numberOfPages" class="cursor-link" @click="loadArticles(page + 1)">- {{ $t("next") }}</span>
      </p>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

import ArticleLink from "./components/article-link.component";

export default {
  name: "wiki",
  components: {
    ArticleLink
  },
  created() {
    this.loadArticles(1);
  },
  methods: {
    ...mapActions("wiki", ["loadArticles"])
  },
  computed: {
    ...mapGetters("wiki", ["headers", "page", "numberOfPages"])
  }
};
</script>

<i18n locale="fr">
{
  "page": "Page",
  "next": "Suivant",
  "previous": "Précédent"
}
</i18n>

<i18n locale="en">
{
  "page": "Page",
  "next": "Next",
  "previous": "Previous"
}
</i18n>