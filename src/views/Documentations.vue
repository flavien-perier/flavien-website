<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("documentations") }}</h1>

    <article class="row">
      <ArticleLink
        v-for="h in headers"
        :key="h.date"
        :header="h"
      />
    </article>

    <div class="container">
      <p class="col-12 section-title">
        <span class="cursor-link" v-if="page > 1" @click="loadPage(page - 1)">{{ $t("previous") }} -</span>
        {{ $t("page") }}: {{ page }}/{{ numberOfPages }}
        <span class="cursor-link" v-if="page < numberOfPages" @click="loadPage(page + 1)">- {{ $t("next") }}</span>
      </p>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ArticleLink from "@/components/ArticleLink.vue";

export default {
  name: "documentations",
  components: {
    ArticleLink
  },
  created() {
    this.loadPage(1);
  },
  methods: {
    ...mapActions("documentations", ["loadPage"]),
  },
  computed: {
    ...mapGetters("documentations", ["headers", "page", "numberOfPages"])
  }
};
</script>

<i18n>
{
  "en": {
    "page": "Page",
    "next": "Next",
    "previous": "Previous"
  },
  "fr": {
    "page": "Page",
    "next": "Next",
    "previous": "Précédent"
  }
}
</i18n>