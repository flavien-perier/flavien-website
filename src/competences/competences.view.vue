<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("competences") }}</h1>

    <article class="box bg-box container position-relative">
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
        <CompetenceType
          v-for="id in competencesTypes"
          :key="id"
          :competenceTypeId="id"
          :selected="competenceIsChecked(id)"
          @check="competencesStore.selectCompetence(id)"
        />
      </div>
    </article>

    <article class="row">
      <Competence
        v-for="c in competences.filter((c) => competenceIsChecked(c.type))"
        :key="c.label"
        :competence="c"
      />
    </article>
  </section>
</template>

<script setup lang="ts">
import { useCompetencesStore } from "@/competences/competences.store";
import CompetenceType from "@/competences/components/competence-type.component.vue";
import Competence from "@/competences/components/competence.component.vue";
import { storeToRefs } from "pinia";

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
  left: 1.4rem;
  top: 1.2rem;

  input {
    margin-right: 0.5rem;
  }
}
</style>
