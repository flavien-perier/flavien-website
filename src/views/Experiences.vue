<template>
  <article class="row">
    <span class="col-12">
      <h2 class="text-center article-title">Experiences</h2>
    </span>
    <div class="row">
      <Experience 
        v-for="e in experiences" :key="e.location"
        v-bind:location="e.location"
        v-bind:description="e.description"
        v-bind:city="e.city"
        v-bind:start="e.start"
        v-bind:end="e.end"
      />
    </div>
  </article>
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