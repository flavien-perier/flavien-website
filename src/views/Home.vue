<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("home") }}</h1>
    <MarkdownViewer class="box bg-box text-article" :markdown="markdownContent" />
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import MarkdownViewer from "@/components/MarkdownViewer.vue";

export default {
  name: "home",
  components: {
    MarkdownViewer
  },
  created() {
    this.loadMarkdown();
  },
  methods: {
    ...mapActions("home", ["loadMarkdown"])
  },
  computed: {
    ...mapGetters("home", ["markdownContent"])
  }
};
</script>
