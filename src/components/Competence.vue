<template>
  <a :href="competence.url" class="col-12 col-md-6" style="color: inherit; text-decoration: inherit">
    <div :class="`row mx-auto box box-animation bg-competence-${competence.type}`">
      <div class="text-center col-12">
        <h2><font-awesome-icon :icon="competence.faIcon.split(' ')" /> {{ competence.label }}</h2>
        <hr />
      </div>

      <div class="col-md-12 col-lg-6">
        <h3 class="text-center">{{ $t("description") }}</h3>
        <p class="description">{{ description }}</p>
      </div>

      <div class="d-none d-lg-block col-6">
        <h3 class="text-left text-lg-center">{{ $t("enterprises") }}</h3>
        <ul class="description">
          <li v-for="e in competence.experiences" :key="e">{{ $t(e) }}</li>
        </ul>
      </div>

      <div class="col-12 mb-2">
        <h3 class="text-left text-lg-center">{{ $t("level") }}</h3>
        <div class="progress">
          <div :class="`progress-bar progress-bar-animation-${competence.lvl}`">{{ competence.lvl }}%</div>
        </div>
      </div>
    </div>
  </a>
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
    "description": "Description",
    "enterprises": "Enterprises",
    "level": "Level"
  },
  "fr": {
    "description": "Description",
    "enterprises": "Entreprises",
    "level": "Niveau"
  }
}
</i18n>

<style scoped>
.description {
  height: 6em;
  overflow: hidden;
}
</style>
