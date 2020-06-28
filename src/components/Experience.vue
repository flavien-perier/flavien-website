<template>
  <div class="col-12 col-lg-6">
    <div class="row mx-auto box box-animation box-min-height bg-box">
      <div class="text-center col-12">
        <a :href="experience.url" class="text-dark">
          <h4>{{ experience.location }}</h4>
        </a>
        <hr />
      </div>

      <div class="col-12 col-lg-6">
        <h5 class="text-left text-lg-center">Description :</h5>
        {{ description }}
      </div>

      <div class="col-12 col-lg-6">
        <h5 class="text-left text-lg-center">Informations :</h5>
        <p>
          <strong>City:</strong>
          {{ experience.city }}
          <br />
          <strong>Period:</strong>
          {{ experience.start }} - {{ experience.end }}
          <br />
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ExperienceInterface from "@/model/ExperienceInterface";

@Component
export default class Experience extends Vue {
  @Prop() private experience!: ExperienceInterface;

  private get description() {
    return this.$i18n.locale == "fr" ? this.experience.descriptionFr : this.experience.descriptionEn;
  }
}
</script>