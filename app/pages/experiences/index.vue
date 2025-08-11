<template>
  <section class="container">
    <h1 class="col-12 section-title" v-t="'experiences'" />

    <article class="row">
      <ExperiencesExperience
          v-for="e in experiencesSorted"
          :key="e.location"
          :experience="e"
      />
    </article>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useExperiencesStore } from "~/store/Experiences";

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

const experiencesStore = useExperiencesStore();
const { experiencesSorted } = storeToRefs(experiencesStore);

experiencesStore.loadExperiences();
</script>
