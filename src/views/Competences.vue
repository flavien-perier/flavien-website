<template>
  <section class="container">
    <h2 class="col-12 section-title">{{ title() }}</h2>

    <article class="row">
      <div class="col-12 box bg-box">
        <h3 class="text-center">{{ titleFilter() }}</h3>
        <hr />
        <div class="row">
          <CompetenceType
            v-for="c in competenceTypes"
            :key="c.id"
            v-on:check="select(c.id)"
            v-bind:competenceType="c"
            v-bind:language="language"
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
        v-bind:language="language"
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
import { Language } from '../model/Language';

import titles from "@/translations/titles.json";
const { competences } = require("@/translations/competences.json");
const { competenceTypes } = require("@/translations/competenceTypes.json");

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
    title() {
      return this.$store.getters["language/language"] == Language.FRENCH ? titles.competencesFr : titles.competencesEn;
    },
    titleFilter() {
      return this.$store.getters["language/language"] == Language.FRENCH ? titles.filterFr : titles.filterEn;
    },
    ...mapActions("competences", ["select"])
  },
  computed: {
    ...mapGetters("competences", ["checked"]),
    ...mapGetters("language", ["language"])
  }
};
</script>