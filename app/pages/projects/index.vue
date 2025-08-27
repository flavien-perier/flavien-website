<template>
  <h1>{{ $t("projects") }}</h1>

  <ProjectsProject v-for="p in projects" :key="p.name" :project="p" />
</template>

<script setup lang="ts">
import type Project from "~/model/projects/Project";

const { t } = useI18n();

const title = `Flavien PERIER - ${t("projects")}`;
const description = t("projects.description");

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
