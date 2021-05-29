<template>
  <div class="mb-3 col-lg-4 col-md-6 col-sm-12" @click="check()">
    <div class="input-group">
      <div class="input-group-text">
        <input type="checkbox" :checked="selected" />
      </div>
      <span :class="`input-group-text competence-title bg-competence-${competenceTypeId}`">
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

<style scoped lang="css">
.competence-title {
  min-width: 15rem;
  cursor: pointer; 
}
</style>

<i18n locale="fr">
{
  "framework": "Framework",
  "language": "Langage",
  "db": "Base de données",
  "bigData": "Big Data",
  "os": "Système d'exploitation",
  "network": "Réseau",
  "tool": "Outil",
  "management": "Management"
}
</i18n>

<i18n locale="en">
{
  "framework": "Framework",
  "language": "Language",
  "db": "Data Base",
  "bigData": "Big Data",
  "os": "Operating System",
  "network": "Network",
  "tool": "Tool",
  "management": "Management"
}
</i18n>
