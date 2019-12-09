<template>
  <div class="jumbotron jumbotron-fluid d-none d-md-block">
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
.jumbotron {
  background-image: url("../assets/img/wallpaper-header.jpeg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  color: #eeeeee;
}
p {
  color: #aaaaaa;
}
</style>
