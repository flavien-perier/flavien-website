<template>
  <div v-bind:class="'col-12 col-md-6 col-lg-6 type-' + type">
    <div v-bind:class="'row mx-auto box box-animation box-min-height bg-color-' + type">
      <h4 class="text-left text-md-center text-lg-center col-5 col-md-12 col-lg-12">
        {{ label }}
        <hr class="d-none d-md-block d-lg-block" />
      </h4>

      <div class="d-none d-md-block d-lg-block col-6">
        <h5 class="text-center">Comments :</h5>
        {{ commentary }}
      </div>

      <div class="col-7 col-md-6 col-lg-6">
        <h5 class="text-center">Enterprises :</h5>
        <ul>
          <li v-for="e in experiences" :key="e">{{e}}</li>
        </ul>
      </div>

      <div class="col-12">
        <h5 class="text-center">Level :</h5>
        <div class="progress">
          <div
            v-bind:class="'progress-bar progress-bar-animation-' + lvl"
            role="progressbar"
            v-bind:aria-valuenow="lvl + '%'"
            aria-valuemin="0"
            aria-valuemax="100"
          >{{ lvl }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Competence extends Vue {
  @Prop() private type!: string;
  @Prop() private label!: string;
  @Prop() private commentary!: string;
  @Prop() private experiences!: string[];
  @Prop() private lvl!: number;
}
</script>

<style scoped lang="scss" src="../assets/css/progressBarAnimations.scss"></style>
