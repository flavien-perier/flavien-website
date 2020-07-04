<template>
  <div id="app">
    <Oculus />

    <Navbar />
    <Header />

    <router-view class="mt-5 mt-lg-0" />

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import Oculus from "@/components/Oculus.vue";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    Header,
    Oculus
  }
};
</script>

<style lang="scss" src="./assets/css/style.scss"></style>
