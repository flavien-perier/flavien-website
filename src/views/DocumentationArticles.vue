<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ title }}</h1>
    <article class="box bg-box text-article">
      <div v-html="contentOftheArticle"></div>

      <div class="col-12 text-right">
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
