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

const title = "Flavien PERIER - Projects";
const description = "Some of the projects Flavien PERIER has worked on.";

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
});

const projectsStore = useProjectsStore();
const { projectsSorted } = storeToRefs(projectsStore);

projectsStore.loadProjects();
</script>
