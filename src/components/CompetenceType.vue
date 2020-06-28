<template>
  <div class="input-group mb-3 col-lg-4 col-md-6 col-sm-12" @click="check()">
    <div class="input-group-prepend">
      <div class="input-group-text">
        <input type="checkbox" :checked="selected" />
      </div>
    </div>
    <div class="input-group-append">
      <span :class="`competence-title input-group-text bg-color-${competenceTypeId}`">
        {{ $t(competenceTypeId) }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CompetenceType extends Vue {
  @Prop() private competenceTypeId!: string;
  @Prop() private selected!: string;

  private check() {
    this.$emit("check");
  }
}
</script>

<style scoped lang="scss">
.competence-title {
  min-width: 250px;
  cursor: pointer; 
}
</style>