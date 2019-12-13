<template>
  <section class="container">
    <h2 class="col-12 section-title">Experiences</h2>

    <article class="row">
      <Experience
        v-for="e in experiences"
        :key="e.location"
        v-bind:location="e.location"
        v-bind:description="e.description"
        v-bind:city="e.city"
        v-bind:start="e.start"
        v-bind:end="e.end"
      />
    </article>
  </section>
</template>

<script>
import Experience from "@/components/Experience.vue";

import { experiences } from "@/model/experiences.json";

export default {
  name: "experiences",
  components: {
    Experience
  },
  data() {
    return {
      experiences: experiences
    };
  }
};
</script>