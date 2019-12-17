<template>
  <section class="container">
    <h2 class="col-12 section-title">Projects</h2>

    <article class="row">
      <Project
        v-for="e in projects"
        :key="e.location"
        v-bind:name="e.name"
        v-bind:description="e.description"
        v-bind:technos="e.technos"
        v-bind:experience="e.experience"
        v-bind:date="e.date"
      />
    </article>
  </section>
</template>

<script>
import Project from "@/components/Project.vue";

import { projects } from "@/model/projects.json";

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