<template>
  <NuxtLayout name="default">
    <div class="container">
      <h1>{{ error?.statusCode }}</h1>
      <article class="position-relative">
        {{ error?.message }}
      </article>
    </div>
  </NuxtLayout>

</template>
<script setup lang="ts">
import type { NuxtError } from '#app'
import type {PropType} from "vue";

const { error } = defineProps({
  error: { type: Object as PropType<NuxtError>, required: true },
});

useSeoMeta({
  title: String(error?.statusCode || ""),
  robots: "noindex, nofollow",
});
</script>