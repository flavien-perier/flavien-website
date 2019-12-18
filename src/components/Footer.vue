<template>
  <footer class="bg-dark py-2 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-3 d-none d-lg-block my-auto">
          <h2 class="text-center text-light">{{ scanMe }} :</h2>
          <img id="qr-code" src="../assets/img/qr-code.png" alt="qr-code" />
        </div>
        <div class="list-group mx-auto col-12 col-lg-9">
          <div class="list-group-item list-group-item-dark">{{ contactMe }}:</div>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="mailto:perier@flavien.cc"
          >
            <i class="fas fa-envelope"></i> perier@flavien.cc
          </a>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="tel:+33695928250"
          >
            <i class="fas fa-phone"></i> +33 6 95 92 82 50
          </a>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="https://www.facebook.com/flavien.cc"
          >
            <i class="fab fa-facebook-square"></i> Facebook
          </a>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="https://twitter.com/flavien_perier"
          >
            <i class="fab fa-twitter-square"></i> Twitter
          </a>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="https://www.linkedin.com/in/flavien-perier"
          >
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="https://github.com/flavien-perier"
          >
            <i class="fab fa-github-square"></i> GitHub
          </a>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="https://wp.flavien.cc/"
          >
            <i class="fab fa-wordpress"></i> WordPress
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Language } from "@/model/Language";

const titles = require("@/translations/titles.json");

@Component
export default class Footer extends Vue {
  @Prop() private language!: Language;

  private get contactMe() {
    return this.language == Language.FRENCH ? titles.contactMeFr : titles.contactMeEn;
  }

  private get scanMe() {
    return this.language == Language.FRENCH ? titles.scanMeFr : titles.scanMeEn;
  }
}
</script>

<style scoped lang="scss">
#qr-code {
  background-color: #fff;
  width: 100%;
}
</style>