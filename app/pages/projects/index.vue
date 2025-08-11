<template>
  <section class="container">
    <h1 class="col-12 section-title" v-t="'projects'" />

    <article>
      <ProjectsProject v-for="p in projectsSorted" :key="p.name" :project="p" />
    </article>
  </section>
</template>

<script setup lang="ts">
import { useProjectsStore } from "~/store/Projects";
import { storeToRefs } from "pinia";

const projectsStore = useProjectsStore();
const { projectsSorted } = storeToRefs(projectsStore);

projectsStore.loadProjects();
</script>
