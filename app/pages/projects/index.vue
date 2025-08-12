<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("projects") }}</h1>

    <article>
      <ProjectsProject v-for="p in projects" :key="p.name" :project="p" />
    </article>
  </section>
</template>

<script setup lang="ts">
import type Project from "~/model/projects/Project";

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

const { data: projects } = await useAsyncData("projects", () =>
    queryCollection("projects")
        .order("end", "DESC")
        .order("start", "DESC")
        .all() as Promise<Project[]>
);
</script>
