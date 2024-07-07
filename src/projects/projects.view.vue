<template>
  <section class="container">
    <h1 class="col-12 section-title" v-t="'projects'" />

    <article class="row px-2">
      <Project v-for="p in projectsSorted" :key="p.name" :project="p" />
    </article>
  </section>
</template>

<script setup lang="ts">
import Project from "@/projects/components/project.component.vue";
import { useProjectsStore } from "@/projects/projects.store";
import { storeToRefs } from "pinia";

const projectsStore = useProjectsStore();
const { projectsSorted } = storeToRefs(projectsStore);

projectsStore.loadProjects();
</script>
