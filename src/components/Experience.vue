<template>
  <div class="col-12 col-lg-6">
    <div class="row mx-auto box box-animation box-min-height bg-box">
      <h4 class="text-center col-12">
        {{ location }}
        <hr />
      </h4>

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
  @Prop() private city!: string;
  @Prop() private start!: string;
  @Prop() private end!: string;
}
</script>