<template>
  <section class="container">
    <h1 class="col-12 section-title" v-t="'experiences'" />

    <article class="row">
      <Experience
        v-for="e in experiencesSorted"
        :key="e.location"
        :experience="e"
      />
    </article>
  </section>
</template>

<script setup lang="ts">
import { useExperiencesStore } from "./experiences.store";
import Experience from "@/experiences/components/experience.component.vue";
import { storeToRefs } from "pinia";

const experiencesStore = useExperiencesStore();
const { experiencesSorted } = storeToRefs(experiencesStore);

experiencesStore.loadExperiences();
</script>
