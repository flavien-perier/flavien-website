<template>
  <section class="container">
    <h2 class="col-12 section-title">Competences</h2>

    <article class="row">
      <div class="col-12 box bg-box">
        <h3 class="text-center">Filter</h3>
        <hr />
        <div class="row">
          <CompetenceType
            v-for="c in competenceTypes"
            :key="c.id"
            v-on:check="select(c.id)"
            v-bind:id="c.id"
            v-bind:message="c.message"
            v-bind:selected="checked(c.id)"
          />
        </div>
      </div>
    </article>

    <article class="row">
      <Competence
        v-for="c in competences"
        :key="c.label"
        v-if="checked(c.type)"
        v-bind:type="c.type"
        v-bind:label="c.label"
        v-bind:commentary="c.commentary"
        v-bind:experiences="c.experiences"
        v-bind:lvl="c.lvl"
      />
    </article>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Competence from "@/components/Competence.vue";
import CompetenceType from "@/components/CompetenceType.vue";
import CompetenceInterface from "@/model/CompetenceInterface";
import CompetenceTypeInterface from "@/model/CompetenceTypeInterface";

const { competences } = require("@/model/competences.json");
const { competenceTypes } = require("@/model/competenceTypes.json");

export default {
  name: "competences",
  components: {
    Competence,
    CompetenceType
  },
  data() {
    return {
      competenceTypes: competenceTypes,
      competences: competences
    };
  },
  methods: {
    ...mapActions("competences", ["select"])
  },
  computed: {
    ...mapGetters("competences", ["checked"])
  }
};
</script>