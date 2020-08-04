<template>
  <footer class="bg-dark py-2 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-3 d-none d-lg-block my-auto">
          <h2 class="text-center text-light">{{ $t("scanMe") }}</h2>
          <img id="qr-code" src="../assets/img/qr-code.png" alt="qr-code" />
        </div>
        <div class="list-group mx-auto col-12 col-lg-9">
          <strong class="list-group-item list-group-item-dark">{{ $t("contactMe") }}</strong>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="mailto:perier@flavien.io"
          >
            <i class="fas fa-envelope"></i> perier@flavien.io
          </a>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="tel:+33695928250"
          >
            <i class="fas fa-phone"></i> +33 6 95 92 82 50
          </a>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="https://www.openstreetmap.org/#map=12/45.8340/1.2346"
          >
            <i class="fas fa-map"></i> Limoges (France)
          </a>
          <a
            class="list-group-item list-group-item-secondary list-group-item-action"
            href="https://www.facebook.com/flavien.io"
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
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<i18n>
{
  "en": {
    "contactMe": "Contact me",
    "scanMe": "Scan me"
  },
  "fr": {
    "contactMe": "Contactez-moi",
    "scanMe": "Scannez-moi"
  }
}
</i18n>

<style scoped lang="css">
#qr-code {
  background-color: #fff;
  width: 100%;
}
</style>