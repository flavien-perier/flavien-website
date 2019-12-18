<template>
  <section class="container">
    <h2 class="col-12 section-title">{{ title() }}</h2>

    <article class="box bg-box text-article" v-html="text()"></article>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import { Language } from "@/model/Language";

import home from "@/translations/home.json";
import titles from "@/translations/titles.json";

export default {
  name: "home",
  methods: {
    title() {
      return this.$store.getters["language/language"] == Language.FRENCH ? titles.homeFr : titles.homeEn;
    },
    text() {
      return this.$store.getters["language/language"] == Language.FRENCH ? home.textFr : home.textEn;
    }
  },
  computed: {
    ...mapGetters("language", ["language"])
  }
};
</script>
