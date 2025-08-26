<template>
  <NuxtLayout name="default">
    <section class="container">
      <h1 class="col-12 section-title">
        {{ error?.statusCode }}
      </h1>
      <article class="box container position-relative">
        {{ error?.message }}
      </article>
    </section>
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