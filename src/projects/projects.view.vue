<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("projects") }}</h1>

    <article class="row">
      <Project
          v-for="p in projects"
          :key="p.location"
          :project="p"
      />
    </article>
  </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Project from "./components/project.component";

export default {
  name: "project",
  components: {
    Project
  },
  created() {
    this.loadProjects();
  },
  methods: {
    ...mapActions("projects", ["loadProjects"])
  },
  computed: {
    ...mapGetters("projects", ["projects"])
  }
};
</script>
