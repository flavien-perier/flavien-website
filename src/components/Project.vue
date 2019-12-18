<template>
  <div class="col-12">
    <div class="row mx-auto box bg-box">
      <h4 class="text-center col-12">
        {{ project.name }}
        <hr />
      </h4>

      <div class="col-12">
        <h5 class="text-left">Technos :</h5>
        <ul>
          <li v-for="t in project.technos" :key="t">{{t}}</li>
        </ul>
      </div>

      <div class="col-12">
        <h5 class="text-left">Description :</h5>
        {{ project.experience }} in {{ project.date }} <br />
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProjectInterface from "@/model/ProjectInterface";
import { Language } from "@/model/Language";

@Component
export default class Project extends Vue {
  @Prop() private project!: ProjectInterface;
  @Prop() private language!: Language;

  private get description() {
    if (this.language == Language.FRENCH) {
      return this.project.descriptionFr;
    }
    return this.project.descriptionEn;
  }
}
</script>