<template>
  <section class="container">
    <h1 class="col-12 section-title">{{ $t("competences") }}</h1>

    <article class="box container position-relative">
      <div
          id="select-all"
          class="custom-control custom-checkbox"
          @click="competencesStore.selectAllCompetences()"
      >
        <input
            id="select-all"
            :checked="allCompetencesIsChecked"
            class="custom-control-input"
            type="checkbox"
        />
        <label for="select-all" class="custom-control-label select-all-text d-none d-sm-inline">
          {{ allCompetencesIsChecked ? $t("unselectAll") : $t("selectAll") }}
        </label>
      </div>
      <h2 class="text-center">{{ $t("filters") }}</h2>
      <hr />

      <div class="row">
        <CompetencesCompetenceType
            v-for="id in competencesTypes"
            :key="id"
            :competenceTypeId="id"
            :selected="competenceIsChecked(id)"
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
import type Competence from "~/model/competences/Competence";

const { t } = useI18n();

const title = `Flavien PERIER - ${t("competences")}`;
const description = t("competences.description");

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
});

const { data: fetchedCompetences } = await useAsyncData(
  "competences",
  () =>
    queryCollection("competences")
      .order("lvl", "DESC")
      .all() as Promise<Competence[]>
);

const competencesStore = useCompetencesStore();

if (fetchedCompetences.value) {
  competencesStore.initialize(fetchedCompetences.value);
}

const {
  competences,
  allCompetencesIsChecked,
  competencesTypes,
  competenceIsChecked,
} = storeToRefs(competencesStore);
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
