<template>
  <section class="container">
    <h2 class="col-12 section-title">{{ $t("title") }}</h2>

    <article class="row">
      <Experience
        v-for="e in experiences"
        :key="e.location"
        :experience="e"
      />
    </article>
  </section>
</template>

<script>
import Experience from "@/components/Experience.vue";

import { experiences } from "@/data/experiences.json";

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

<i18n>
{
  "en": {
    "title": "Experiences"
  },
  "fr": {
    "title": "Expériences"
  }
}
</i18n>
