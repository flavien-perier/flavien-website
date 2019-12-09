<template>
  <div id="app">
    <Oculus />

    <Navbar />
    <Junbotron />

    <section class="container">
      <router-view />
    </section>

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
