<template>
  <section class="container">
    <h2 class="col-12 section-title">{{ title() }}</h2>

    <article class="row">
      <Project
        v-for="p in projects"
        :key="p.location"
        :project="p"
        :language="language"
      />
    </article>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import Project from "@/components/Project.vue";
import { Language } from "@/model/Language";

import titles from "@/translations/titles.json";
import { projects } from "@/translations/projects.json";

export default {
  name: "projects",
  components: {
    Project
  },
  data() {
    return {
      projects: projects.sort((p1, p2) => p1.date < p2.date)
    };
  },
  methods: {
    title() {
      return this.$store.getters["language/language"] == Language.FRENCH ? titles.projectsFr : titles.projectsEn;
    }
  },
  computed: {
    ...mapGetters("language", ["language"])
  }
};
</script>