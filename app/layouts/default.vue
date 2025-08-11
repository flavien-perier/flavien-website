<template>
  <canvas id="bg-canvas" class="d-block mx-auto" height="450" width="800"></canvas>

  <AppNavbar />
  <AppHeader />

  <slot class="mt-5 mt-lg-0" />

  <AppFooter />
</template>
<script setup lang="ts">
import {loadWallpaper} from "~/scripts/wallpaper";

if (import.meta.client) {
  loadWallpaper();
}
</script>