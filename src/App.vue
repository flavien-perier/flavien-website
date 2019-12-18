<template>
  <div id="app">
    <Oculus />

    <Navbar v-bind:language="language" v-on:changeLanguage="changeLanguage()" />
    <Junbotron v-bind:language="language" />

    <router-view class="mt-5 mt-lg-0" />

    <Footer v-bind:language="language" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import Junbotron from "@/components/Junbotron.vue";
import Oculus from "@/components/Oculus.vue";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    Junbotron,
    Oculus
  },
  methods: {
    ...mapActions("language", ["changeLanguage"])
  },
  computed: {
    ...mapGetters("language", ["language"])
  }
};
</script>

<style lang="scss" src="./assets/css/style.scss"></style>
