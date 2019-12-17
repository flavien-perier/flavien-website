<template>
  <div class="col-12 col-lg-6">
    <div class="row mx-auto box box-animation box-min-height bg-box">
      <div class="text-center col-12">
        <a v-bind:href="url" class="text-dark"><h4>{{ location }}</h4></a>
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
          {{ city }}
          <br />
          <strong>Period:</strong>
          {{ start }} - {{ end }}
          <br />
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Experience extends Vue {
  @Prop() private location!: string;
  @Prop() private description!: string;
  @Prop() private url!: string;
  @Prop() private city!: string;
  @Prop() private start!: string;
  @Prop() private end!: string;
}
</script>