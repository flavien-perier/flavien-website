<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("competences") }}</h1>

    <article class="box bg-box">
      <h2 class="text-center">{{ $t("filters") }}</h2>
      <hr />
      <div class="row">
        <CompetenceType
          v-for="id in competencesTypes"
          :key="id"
          v-on:check="selectCompetence(id)"
          :competenceTypeId="id"
          :selected="competenceIsChecked(id)"
        />
      </div>
    </article>

    <article class="row">
      <Competence
        v-for="c in competences.filter(c => competenceIsChecked(c.type))"
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

export default {
  name: "competences",
  components: {
    Competence,
    CompetenceType
  },
  created() {
    this.loadCompetences();
  },
  methods: {
    ...mapActions("competences", ["loadCompetences", "selectCompetence"])
  },
  computed: {
    ...mapGetters("competences", ["competences", "competencesTypes", "competenceIsChecked"])
  }
};
</script>

<i18n>
{
  "en": {
    "filters": "Filters"
  },
  "fr": {
    "filters": "Filtres"
  }
}
</i18n>
