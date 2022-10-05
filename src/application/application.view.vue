<template>
  <Navbar />
  <Header />

  <RouterView class="mt-5 mt-lg-0" />

  <Footer />
</template>

<script setup lang="ts">
import Navbar from "@/application/components/navbar.component.vue";
import Header from "@/application/components/header.component.vue";
import Footer from "@/application/components/footer.component.vue";

import { RouterView } from "vue-router";
</script>
