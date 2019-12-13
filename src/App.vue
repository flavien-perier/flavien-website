<template>
  <div id="app">
    <Oculus />

    <Navbar />
    <Junbotron />

    <router-view class="mt-5 mt-lg-0" />

    <Footer />
  </div>
</template>

<script>
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
  }
};
</script>

<style lang="scss" src="./assets/css/style.scss"></style>
