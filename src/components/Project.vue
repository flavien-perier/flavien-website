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
        {{ project.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProjectInterface from "../model/ProjectInterface";

@Component
export default class Project extends Vue {
  @Prop() private project!: ProjectInterface;
}
</script>