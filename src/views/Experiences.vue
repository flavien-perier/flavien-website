<template>
  <article class="row" id="experiences">
    <span class="col-12">
      <h2 class="text-center article-title">Experiences</h2>
    </span>
    <div class="row" id="experiences-view">
      <!--View integration-->
      <Experience 
        v-for="e in experiences" :key="e.placement"
        v-bind:placement="e.placement"
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