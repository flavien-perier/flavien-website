<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ title }}</h1>
    <article class="box bg-box text-article">
      <div v-html="contentOftheArticle"></div>

      <div>
        {{ author }} - {{ date }}
      </div>
    </article>
  </section>
</template>

<script>
import marked from "marked";

import axios from "axios";

export default {
  name: "documentationArticles",
  data() {
    return {
      fileName: this.$route.params.fileName,
      title: "",
      author: "",
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
        this.date = /^date: ?(.*)$/m.exec(header)[1];
        this.contentOftheArticle = marked(patternMatching[2]);
      });
  }
};
</script>
