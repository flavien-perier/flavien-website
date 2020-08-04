<template>
  <div class="col-12 col-md-6">
    <div :class="`row mx-auto box box-animation box-min-height bg-competence-${competence.type}`">
      <div class="text-center col-12">
        <h2>{{ competence.label }}</h2>
        <hr />
      </div>

      <div class="d-none d-lg-block col-6">
        <h3 class="text-center">{{ $t("comments") }}</h3>
        <p>{{ description }}</p>
      </div>

      <div class="d-none d-md-block col-md-12 col-lg-6">
        <h3 class="text-left text-lg-center">{{ $t("enterprises") }}</h3>
        <ul>
          <li v-for="e in competence.experiences" :key="e">{{ $t(e) }}</li>
        </ul>
      </div>

      <div class="col-12">
        <h3 class="text-left text-lg-center">{{ $t("level") }}</h3>
        <div class="progress">
          <div
            :class="`progress-bar progress-bar-animation-${competence.lvl}`"
            role="progressbar"
            :aria-valuenow="`${competence.lvl}%`"
            aria-valuemin="0"
            aria-valuemax="100"
          >{{ competence.lvl }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CompetenceInterface from "@/model/CompetenceInterface";

@Component
export default class Competence extends Vue {
  @Prop() private competence!: CompetenceInterface;

  private get description() {
    return this.$i18n.locale == "fr" ? this.competence.descriptionFr : this.competence.descriptionEn;
  }
}
</script>

<i18n>
{
  "en": {
    "comments": "Comments",
    "enterprises": "Enterprises",
    "level": "Level"
  },
  "fr": {
    "comments": "Commentaires",
    "enterprises": "Entreprises",
    "level": "Niveau"
  }
}
</i18n>
