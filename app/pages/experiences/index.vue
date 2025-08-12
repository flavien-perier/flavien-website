<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("experiences") }}</h1>

    <article class="row">
      <ExperiencesExperience
          v-for="e in experiences"
          :key="e.location"
          :experience="e"
      />
    </article>
  </section>
</template>

<script setup lang="ts">
import type Experience from "~/model/experiences/Experience";

const title = "Flavien PERIER - Experiences";
const description = "Flavien PERIER's working experiences.";

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
});

const { data: experiences } = await useAsyncData("experiences", () =>
  queryCollection("experiences")
    .order("end", "DESC")
    .order("start", "DESC")
    .all() as Promise<Experience[]>
);
</script>
