<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("home") }}</h1>
    <article class="box bg-box text-article" v-html="content"></article>
  </section>
</template>

<script>
import marked from "marked";
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      content: ""
    }
  },
  created() {
    axios.get(process.env["VUE_APP_MARKDOWN_BACKEND"] + "home.md")
      .then(file => {
        const patternMatching = /^---.*---(.*)$/s.exec(file.data);
        console.log(patternMatching)
        this.content = marked(patternMatching[1]);
      });
  }
};
</script>
