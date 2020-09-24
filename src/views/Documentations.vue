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
    ...mapActions("documentations", ["loadPage"])
  },
  computed: {
    ...mapGetters("documentations", ["headers", "page"])
  }
};
</script>
