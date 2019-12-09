<template>
  <div class="jumbotron bg-parallax jumbotron-fluid d-none d-md-block">
    <div class="container">
      <h1 class="display-4">Flavien PERIER</h1>
      <p class="lead">Full stack developer</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Junbotron extends Vue {}
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
