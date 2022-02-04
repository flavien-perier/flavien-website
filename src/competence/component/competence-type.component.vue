<template>
  <div class="mb-3 col-lg-4 col-md-6 col-sm-12" @click="check()">
    <div class="input-group">
      <div class="input-group-text">
        <input :checked="selected" type="checkbox"/>
      </div>
      <span :class="`input-group-text competence-title bg-competence-${competenceTypeId}`">
        {{ $t(competenceTypeId) }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class CompetenceType extends Vue {
  @Prop() private competenceTypeId!: string;
  @Prop() private selected!: string;

  private check() {
    this.$emit("check");
  }
}
</script>

<style lang="css" scoped>
.competence-title {
  min-width: 15rem;
  cursor: pointer;
}
</style>

<i18n locale="fr">
{
  "framework": "Framework",
  "language": "Langage",
  "ide": "EDI",
  "db": "Base de données",
  "bigData": "Big Data",
  "dataScience": "Science des données",
  "os": "Système d'exploitation",
  "infra": "Infrastructure",
  "network": "Réseau",
  "tool": "Outil",
  "management": "Management"
}
</i18n>

<i18n locale="en">
{
  "framework": "Framework",
  "language": "Language",
  "ide": "IDE",
  "db": "Data Base",
  "bigData": "Big Data",
  "dataScience": "Data Science",
  "os": "Operating System",
  "infra": "Infrastructure",
  "network": "Network",
  "tool": "Tool",
  "management": "Management"
}
</i18n>
