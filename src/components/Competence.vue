<template>
  <div class="col-12 col-md-6">
    <div :class="`row mx-auto box box-animation box-min-height bg-color-${competence.type}`">
      <div class="text-center col-12">
        <h4>{{ competence.label }}</h4>
        <hr />
      </div>

      <div class="d-none d-lg-block col-6">
        <h5 class="text-center">{{ commentsTitle }} :</h5>
        {{ description }}
      </div>

      <div class="d-none d-md-block col-md-12 col-lg-6">
        <h5 class="text-left text-lg-center">{{ enterprisesTitle }} :</h5>
        <ul>
          <li v-for="e in competence.experiences" :key="e">{{e}}</li>
        </ul>
      </div>

      <div class="col-12">
        <h5 class="text-left text-lg-center">{{ levelTitle }} :</h5>
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
import { Language } from "@/model/Language";

const titles = require("@/translations/titles.json");

@Component
export default class Competence extends Vue {
  @Prop() private competence!: CompetenceInterface;
  @Prop() private language!: Language;

  private get description() {
    return this.language == Language.FRENCH ? this.competence.descriptionFr : this.competence.descriptionEn;
  }

  private get commentsTitle() {
    return this.language == Language.FRENCH ? titles.commentsFr : titles.CommentsEn;
  }

  private get enterprisesTitle() {
    return this.language == Language.FRENCH ? titles.enterprisesFr : titles.enterprisesEn;
  }

  private get levelTitle() {
    return this.language == Language.FRENCH ? titles.levelFr : titles.levelEn;
  }
}
</script>

<style scoped lang="scss" src="../assets/css/progressBarAnimations.scss"></style>
