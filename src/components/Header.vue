<template>
  <header class="jumbotron jumbotron-fluid d-none d-lg-block bg-parallax">
    <div class="container">
      <h1 class="display-4">Flavien PERIER</h1>
      <p class="lead">{{ $t("fullStackDeveloper") }}</p>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Junbotron extends Vue {}
</script>

<i18n>
{
  "en": {
    "fullStackDeveloper": "Full stack developer"
  },
  "fr": {
    "fullStackDeveloper": "Développeur full stack"
  }
}
</i18n>

<style scoped lang="css">
h1 {
  color: #eee;
}
p {
  color: #bbb;
}
.jumbotron {
  position: relative;
  min-height: 50vh;
  padding-top: 15vh;
}
</style>
