<template>
  <div class="col-12 box bg-box">
    <div class="text-center col-12">
      <h2>{{ project.name }}</h2>
      <hr/>
    </div>

    <div class="col-12">
      <h3 class="text-left">{{ $t("technos") }}</h3>
      <ul>
        <li v-for="t in project.technos" :key="t">{{ t }}</li>
      </ul>
    </div>

    <div class="col-12">
      <div>
        <h3 class="text-left d-inline-block">{{ $t("description") }} </h3>
        ({{ $t(project.experience) }} {{ $t("in") }} {{ project.start }} - {{ project.end || "*" }})
      </div>
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import ProjectInterface from "@/model/ProjectInterface";

@Component
export default class Project extends Vue {
  @Prop() private project!: ProjectInterface;

  private get description() {
    return this.$i18n.locale == "fr" ? this.project.descriptionFr : this.project.descriptionEn;
  }
}
</script>

<i18n locale="fr">
{
  "technos": "Technologies",
  "description": "Description",
  "in": "en"
}
</i18n>

<i18n locale="en">
{
  "technos": "Technologies",
  "description": "Description",
  "in": "in"
}
</i18n>