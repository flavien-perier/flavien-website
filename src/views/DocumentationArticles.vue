<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ title }}</h1>
    <article class="box bg-box text-article">

      <div class="row">
        <div class="col-12 col-lg-8">
          <h2 class="text-left text-lg-center">{{ $t("tableOfContents") }}</h2>
          <TableOfContents class="box" :htmlContent="contentOftheArticle" />
        </div>

        <div class="col-12 col-lg-4">
          <h2 class="text-left text-lg-center">{{ $t("informations") }}</h2>
          <div class="box">
            <strong>{{ $t("author") }}</strong>: {{ author }} <br/>
            <strong>{{ $t("date") }}</strong>: {{ date }}
          </div>
        </div>
      </div>

      <div v-html="contentOftheArticle"></div>
    </article>
  </section>
</template>

<script>
import marked from "marked";
import axios from "axios";

import TableOfContents from "@/components/TableOfContents.vue";

export default {
  name: "documentationArticles",
  components: {
    TableOfContents
  },
  data() {
    return {
      fileName: this.$route.params.fileName,
      title: "",
      author: "",
      description: "",
      date: "",
      contentOftheArticle: ""
    };
  },
  created() {
    axios.get(process.env["VUE_APP_MARKDOWN_BACKEND"] + this.fileName)
      .then(file => {
        const patternMatching = /^---(.*)---(.*)$/s.exec(file.data);
        const header = patternMatching[1];

        this.title = /^title: ?(.*)$/m.exec(header)[1];
        this.author = /^author: ?(.*)$/m.exec(header)[1];
        this.description = /^description: ?(.*)$/m.exec(header)[1];
        this.date = /^date: ?(.*)$/m.exec(header)[1];
        this.contentOftheArticle = marked(patternMatching[2]);

        document.title = `Flavien PERIER - ${this.title}`;
        document.querySelector("meta[name=\"description\"]").setAttribute("content", this.description);
        document.querySelector("meta[name=\"author\"]").setAttribute("content", this.author);
      });
  }
};
</script>

<i18n>
{
  "en": {
    "tableOfContents": "Table of contents",
    "informations": "Informations",
    "author": "Author",
    "date": "Date"
  },
  "fr": {
    "tableOfContents": "Table des matières",
    "informations": "Informations",
    "author": "Auteur",
    "date": "Date"
  }
}
</i18n>