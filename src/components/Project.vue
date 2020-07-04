<template>
  <div class="col-12">
    <div class="row mx-auto box bg-box">
      <h2 class="text-center col-12">
        {{ project.name }}
        <hr />
      </h2>

      <div class="col-12">
        <h3 class="text-left">{{ $t("technos") }} :</h3>
        <ul>
          <li v-for="t in project.technos" :key="t">{{t}}</li>
        </ul>
      </div>

      <div class="col-12">
        <h3 class="text-left">{{ $t("description") }} :</h3>
        {{ project.experience }} {{ $t("in") }} {{ project.date }} <br />
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProjectInterface from "@/model/ProjectInterface";

@Component
export default class Project extends Vue {
  @Prop() private project!: ProjectInterface;

  private get description() {
    return this.$i18n.locale == "fr" ? this.project.descriptionFr : this.project.descriptionEn;
  }
}
</script>

<i18n>
{
  "en": {
    "technos": "Technologies",
    "description": "Description",
    "in": "in"
  },
  "fr": {
    "technos": "Technologies",
    "description": "Description",
    "in": "en"
  }
}
</i18n>
