<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("home") }}</h1>
    <div class="box bg-box text-article" v-html="content"></div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  created() {
    this.loadMarkdown();
  },
  methods: {
    ...mapActions("home", ["loadMarkdown"])
  },
  computed: {
    ...mapGetters("home", ["content"])
  }
};
</script>
