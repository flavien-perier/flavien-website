<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("experiences") }}</h1>

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
import { mapGetters, mapActions } from "vuex";

import Experience from "@/components/Experience.vue";

export default {
  name: "experiences",
  components: {
    Experience
  },
  created() {
    this.loadExperiences();
  },
  methods: {
    ...mapActions("experiences", ["loadExperiences"])
  },
  computed: {
    ...mapGetters("experiences", ["experiences"])
  }
};
</script>
