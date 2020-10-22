<template>
  <div id="app">
    <Navbar />
    <Header />

    <router-view class="mt-5 mt-lg-0" />

    <CookieInformation />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import CookieInformation from "@/components/CookieInformation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    CookieInformation,
    Header
  }
};
</script>

<style lang="scss" src="./assets/css/style.scss"></style>
