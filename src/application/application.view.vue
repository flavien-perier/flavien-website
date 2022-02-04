<template>
  <div id="app">
    <Navbar/>
    <Header/>

    <router-view class="mt-5 mt-lg-0"/>

    <Footer/>
  </div>
</template>

<script>
import Navbar from "./component/navbar.component";
import Header from "./component/header.component";
import Footer from "./component/footer.component";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    Header
  }
};
</script>

<style lang="scss" src="../assets/css/style.scss"></style>
