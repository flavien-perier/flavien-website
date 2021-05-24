<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ title }}</h1>
    <article class="box bg-box text-article">

      <div class="row">
        <div class="col-12 col-lg-8">
          <h2 class="text-left text-lg-center">{{ $t("tableOfContents") }}</h2>
          <TableOfContents class="box" :htmlContent="content" />
        </div>

        <div class="col-12 col-lg-4">
          <h2 class="text-left text-lg-center">{{ $t("informations") }}</h2>
          <div class="box">
            <strong>{{ $t("author") }}</strong>: {{ author }} <br/>
            <strong>{{ $t("date") }}</strong>: {{ date }}
          </div>
        </div>
      </div>

      <div v-html="content"></div>
    </article>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import TableOfContents from "@/components/TableOfContents.vue";
export default {
  name: "wikiArticle",
  components: {
    TableOfContents
  },
  data() {
    return {
      fileName: this.$route.params.fileName
    };
  },
  created() {
    this.loadArticle(this.fileName);
  },
  methods: {
    ...mapActions("wikiArticle", ["loadArticle"])
  },
  computed: {
    ...mapGetters("wikiArticle", ["content", "title", "author", "date"])
  }
};
</script>

<i18n locale="fr">
{
  "tableOfContents": "Table des matières",
  "informations": "Informations",
  "author": "Auteur",
  "date": "Date"
}
</i18n>

<i18n locale="en">
{
  "tableOfContents": "Table of contents",
  "informations": "Informations",
  "author": "Author",
  "date": "Date"
}
</i18n>
