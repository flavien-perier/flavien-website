<template>
  <div class="col-12">
    <div class="row mx-auto box bg-box">
      <h4 class="text-center col-12">
        {{ name }}
        <hr />
      </h4>

      <div class="col-12">
        <h5 class="text-left">Technos :</h5>
        <ul>
          <li v-for="t in technos" :key="t">{{t}}</li>
        </ul>
      </div>

      <div class="col-12">
        <h5 class="text-left">Description :</h5>
        {{ experience }} in {{ date }} <br />
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Project extends Vue {
  @Prop() private name!: string;
  @Prop() private description!: string;
  @Prop() private technos!: string[];
  @Prop() private experience!: string;
  @Prop() private date!: string;
}
</script>