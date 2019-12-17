<template>
  <section class="container">
    <h2 class="col-12 section-title">Projects</h2>

    <article class="row">
      <Project
        v-for="p in projects"
        :key="p.location"
        v-bind:project="p"
      />
    </article>
  </section>
</template>

<script>
import Project from "@/components/Project.vue";

import { projects } from "@/translations/projects.en.json";

export default {
  name: "projects",
  components: {
    Project
  },
  data() {
    return {
      projects: projects.sort((p1, p2) => p1.date < p2.date)
    };
  }
};
</script>