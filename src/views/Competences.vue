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
            v-bind:competenceType="c"
            v-bind:selected="checked(c.id)"
          />
        </div>
      </div>
    </article>

    <article class="row">
      <Competence
        v-for="c in competences.filter(c => checked(c.type))"
        :key="c.label"
        v-bind:competence="c"
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

const { competences } = require("@/translations/competences.en.json");
const { competenceTypes } = require("@/translations/competenceTypes.en.json");

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
    ...mapActions("competences", ["changeLanguage"])
  },
  computed: {
    ...mapGetters("competences", ["checked"])
  }
};
</script>