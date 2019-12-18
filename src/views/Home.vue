<template>
  <section class="container">
    <h2 class="col-12 section-title">{{ title() }}</h2>

    <article class="box bg-box">
      
    </article>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import { Language } from "@/model/Language";

import titles from "@/translations/titles.json";

export default {
  name: "home",
  methods: {
    title() {
      return this.$store.getters["language/language"] == Language.FRENCH ? titles.homeFr : titles.homeEn;
    }
  },
  computed: {
    ...mapGetters("language", ["language"])
  }
};
</script>
