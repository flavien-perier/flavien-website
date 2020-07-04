<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("title") }}</h1>

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
import { mapGetters } from "vuex";

import Experience from "@/components/Experience.vue";

export default {
  name: "experiences",
  components: {
    Experience
  },
  computed: {
    ...mapGetters("experiences", ["experiences"])
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
