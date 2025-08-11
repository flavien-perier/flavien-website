<template>
  <section class="container">
    <h1 class="col-12 section-title" v-t="'competences'" />

    <article class="box container position-relative">
      <div
          id="select-all"
          class="custom-control custom-checkbox"
          @click="competencesStore.selectAllCompetences()"
      >
        <input
            :checked="allCompetencesIsChecked"
            class="custom-control-input"
            type="checkbox"
        />
        <span class="custom-control-label select-all-text d-none d-sm-inline">
          {{ allCompetencesIsChecked ? $t("unselectAll") : $t("selectAll") }}
        </span>
      </div>
      <h2 class="text-center">{{ $t("filters") }}</h2>
      <hr />

      <div class="row">
        <CompetencesCompetenceType
            v-for="id in competencesTypes"
            :key="id"
            :competenceTypeId="id"
            :selected="competenceIsChecked(id) || true"
            @check="competencesStore.selectCompetence(id)"
        />
      </div>
    </article>

    <article class="row">
      <CompetencesCompetence
          v-for="c in competences.filter((c) => competenceIsChecked(c.type))"
          :key="c.label"
          :competence="c"
      />
    </article>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCompetencesStore } from "~/store/Competences";

const competencesStore = useCompetencesStore();

const {
  competences,
  allCompetencesIsChecked,
  competencesTypes,
  competenceIsChecked,
} = storeToRefs(competencesStore);

competencesStore.loadCompetences();
</script>

<style lang="scss" scoped>
#select-all {
  position: absolute;
  cursor: pointer;
  left: 1.6rem;
  top: 1.2rem;

  input {
    margin-right: 0.5rem;
  }
}
</style>
