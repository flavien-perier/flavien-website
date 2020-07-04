<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("title") }}</h1>

    <article class="row">
      <Project
        v-for="p in projects"
        :key="p.location"
        :project="p"
      />
    </article>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Project from "@/components/Project.vue";

export default {
  name: "projects",
  components: {
    Project
  },
  computed: {
    ...mapGetters("projects", ["projects"])
  }
};
</script>

<i18n>
{
  "en": {
    "title": "Projects"
  },
  "fr": {
    "title": "Projets"
  }
}
</i18n>
