<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("competences") }}</h1>

    <article class="box bg-box container position-relative">
      <div id="select-all" class="custom-control custom-checkbox" @click="selectAllCompetences()">
        <input :checked="allCompetencesIsChecked" class="custom-control-input" type="checkbox"/>
        <span class="custom-control-label select-all-text d-none d-sm-inline">
          {{ allCompetencesIsChecked ? $t("unselectAll") : $t("selectAll") }}
        </span>
      </div>
      <h2 class="text-center">{{ $t("filters") }}</h2>
      <hr/>

      <div class="row">
        <CompetenceType
            v-for="id in competencesTypes"
            :key="id"
            :competenceTypeId="id"
            :selected="competenceIsChecked(id)"
            v-on:check="selectCompetence(id)"
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
import {mapActions, mapGetters} from "vuex";

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
    ...mapActions("competences", ["loadCompetences", "selectCompetence", "selectAllCompetences"])
  },
  computed: {
    ...mapGetters("competences", ["competences", "competencesTypes", "competenceIsChecked", "allCompetencesIsChecked"])
  }
};
</script>

<style lang="css" scoped>
#select-all {
  position: absolute;
  cursor: pointer;
  left: 1.4rem;
  top: 1.2rem;
}
</style>

<i18n locale="fr">
{
  "filters": "Filtres",
  "selectAll": "Sélectionner tout",
  "unselectAll": "Désélectionner tout"
}
</i18n>

<i18n locale="en">
{
  "filters": "Filters",
  "selectAll": "Select all",
  "unselectAll": "Unselect all"
}
</i18n>