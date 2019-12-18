<template>
  <section class="container">
    <h2 class="col-12 section-title">{{ title() }}</h2>

    <article class="row">
      <Experience
        v-for="e in experiences"
        :key="e.location"
        v-bind:experience="e"
        v-bind:language="language"
      />
    </article>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import Experience from "@/components/Experience.vue";
import { Language } from "@/model/Language";

import titles from "@/translations/titles.json";
import { experiences } from "@/translations/experiences.json";

export default {
  name: "experiences",
  components: {
    Experience
  },
  data() {
    return {
      experiences: experiences
    };
  },
  methods: {
    title() {
      return this.$store.getters["language/language"] == Language.FRENCH ? titles.experiencesFr : titles.experiencesEn;
    }
  },
  computed: {
    ...mapGetters("language", ["language"])
  }
};
</script>