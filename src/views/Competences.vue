<template>
  <section class="container">
    <h2 class="col-12 section-title">{{ $t("title") }}</h2>

    <article class="row">
      <div class="col-12 box bg-box">
        <h3 class="text-center">{{ $t("filters") }}</h3>
        <hr />
        <div class="row">
          <CompetenceType
            v-for="id in list"
            :key="id"
            v-on:check="select(id)"
            :competenceTypeId="id"
            :selected="checked(id)"
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

export default {
  name: "competences",
  components: {
    Competence,
    CompetenceType
  },
  methods: {
    ...mapActions("competences", ["select"])
  },
  computed: {
    ...mapGetters("competences", ["checked", "list", "competences"])
  }
};
</script>

<i18n>
{
  "en": {
    "title": "Competences",
    "filters": "Filters"
  },
  "fr": {
    "title": "Compétences",
    "filters": "Filtres"
  }
}
</i18n>
