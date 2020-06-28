<template>
  <section class="container">
    <h2 class="col-12 section-title">{{ $t("title") }}</h2>

    <article class="row">
      <div class="col-12 box bg-box">
        <h3 class="text-center">{{ $t("titleFilter") }}</h3>
        <hr />
        <div class="row">
          <CompetenceType
            v-for="c in competenceTypes"
            :key="c.id"
            v-on:check="select(c.id)"
            :competenceType="c"
            :selected="checked(c.id)"
          />
        </div>
      </div>
    </article>

    <article class="row">
      <Competence
        v-for="c in competences.filter(c => checked(c.type))"
        :key="c.label"
        :competence="c"
      />
    </article>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Competence from "@/components/Competence.vue";
import CompetenceType from "@/components/CompetenceType.vue";

const { competences } = require("@/data/competences.json");
const { competenceTypes } = require("@/data/competenceTypes.json");

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

<i18n>
{
  "en": {
    "title": "Compétences",
    "titleFilter": "Filtre"
  },
  "fr": {
    "title": "Competences",
    "titleFilter": "Filter"
  }
}
</i18n>
