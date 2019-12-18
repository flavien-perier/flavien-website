<template>
  <div class="jumbotron jumbotron-fluid d-none d-lg-block bg-parallax">
    <div class="container">
      <h1 class="display-4">Flavien PERIER</h1>
      <p class="lead">{{ fullStackDeveloper }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Language } from "@/model/Language";

const titles = require("@/translations/titles.json");

@Component
export default class Junbotron extends Vue {
  @Prop() private language!: Language;

  private get fullStackDeveloper() {
    return this.language == Language.FRENCH ? titles.fullStackDeveloperFr : titles.fullStackDeveloperEn;
  }
}
</script>

<style scoped lang="scss">
h1 {
  color: #eeeeee;
}
p {
  color: #aaaaaa;
}
.jumbotron {
  min-height: 50vh;
  padding-top: 15vh;
}
</style>
