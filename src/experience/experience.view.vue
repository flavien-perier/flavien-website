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
import {mapActions, mapGetters} from "vuex";

import Experience from "./component/experience.component";

export default {
  name: "experience",
  components: {
    Experience
  },
  created() {
    this.loadExperiences();
  },
  methods: {
    ...mapActions("experience", ["loadExperiences"])
  },
  computed: {
    ...mapGetters("experience", ["experiences"])
  }
};
</script>
