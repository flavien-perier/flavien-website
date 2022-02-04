<template>
  <a :href="experience.url" class="col-12 col-lg-6" style="color: inherit; text-decoration: inherit">
    <div class="row mx-auto box box-animation bg-box">
      <div class="text-center col-12">
        <h2>{{ experience.location }}</h2>
        <hr/>
      </div>

      <div class="col-12 col-lg-6">
        <h3 class="text-left text-lg-center">{{ $t("description") }}</h3>
        {{ description }}
      </div>

      <div class="col-12 col-lg-6">
        <h3 class="text-left text-lg-center">{{ $t("informations") }}</h3>
        <p>
          <strong>{{ $t("city") }} :</strong>
          {{ experience.city }}
          <br/>
          <strong>{{ $t("period") }} :</strong>
          {{ experience.start }} - {{ experience.end || "*" }}
          <br/>
        </p>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import ExperienceModel from "@/experience/model/experience.model";

@Component
export default class Experience extends Vue {
  @Prop() private experience!: ExperienceModel;

  private get description() {
    return this.$i18n.locale == "fr" ? this.experience.descriptionFr : this.experience.descriptionEn;
  }
}
</script>

<style scoped>
.box {
  height: 17em;
  overflow: hidden;
}
</style>

<i18n locale="fr">
{
  "description": "Description",
  "informations": "Informations",
  "city": "Ville",
  "period": "Période"
}
</i18n>

<i18n locale="en">
{
  "description": "Description",
  "informations": "Informations",
  "city": "City",
  "period": "Period"
}
</i18n>
