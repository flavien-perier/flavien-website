<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("home") }}</h1>
    <MarkdownViewer class="box bg-box text-article" :markdown="markdownContent" />
  </section>
</template>

<script>
import axios from "axios";
import MarkdownViewer from "@/components/MarkdownViewer.vue";

export default {
  name: "home",
  components: {
    MarkdownViewer
  },
  data() {
    return {
      markdownContent: ""
    }
  },
  created() {
    axios.get(process.env["VUE_APP_MARKDOWN_BACKEND"] + "home.md")
      .then(markdownContent => {
        this.markdownContent = markdownContent.data;
      });
  }
};
</script>
