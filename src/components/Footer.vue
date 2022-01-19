<template>
  <footer class="bg-dark py-2 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-3 d-none d-lg-block my-auto">
          <h2 class="text-center text-light">{{ $t("scanMe") }}</h2>
          <img id="qr-code" alt="qr-code" src="../assets/img/qr-code.png"/>
        </div>
        <div class="list-group mx-auto col-12 col-lg-6">
          <strong class="list-group-item list-group-item-dark">{{ $t("contactMe") }}</strong>
          <a
              class="list-group-item list-group-item-secondary list-group-item-action"
              href="mailto:perier@flavien.io"
          >
            <font-awesome-icon icon="envelope"/>
            perier@flavien.io</a>
          <a
              class="list-group-item list-group-item-secondary list-group-item-action"
              href="tel:+33695928250"
          >
            <font-awesome-icon icon="phone"/>
            +33 6 95 92 82 50</a>
          <a
              class="list-group-item list-group-item-secondary list-group-item-action"
              href="https://www.openstreetmap.org/relation/114172#map=12/45.8562/1.2500"
          >
            <font-awesome-icon icon="map-marker-alt"/>
            Limoges (France)</a>
          <a
              class="list-group-item list-group-item-secondary list-group-item-action"
              href="https://www.linkedin.com/in/flavien-perier"
          >
            <font-awesome-icon :icon="['fab', 'linkedin']"/>
            Flavien PERIER</a>
          <a
              class="list-group-item list-group-item-secondary list-group-item-action"
              href="https://www.facebook.com/flavien.io"
          >
            <font-awesome-icon :icon="['fab', 'facebook-square']"/>
            Flavien PERIER</a>
          <a
              class="list-group-item list-group-item-secondary list-group-item-action"
              href="https://mastodon.social/@flavien_perier"
          >
            <font-awesome-icon :icon="['fab', 'mastodon']"/>
            @flavien_perier@mastodon.social</a>
          <a
              class="list-group-item list-group-item-secondary list-group-item-action"
              href="https://www.discord.com"
          >
            <font-awesome-icon :icon="['fab', 'discord']"/>
            F|_4\/13/\/#4113</a>
        </div>
        <div class="list-group mx-auto col-12 col-lg-3">
          <strong class="list-group-item list-group-item-dark">{{ $t("followMe") }}</strong>
          <a
              class="list-group-item list-group-item-secondary list-group-item-action"
              href="https://github.com/flavien-perier"
          >
            <font-awesome-icon :icon="['fab', 'github-square']"/>
            flavien-perier</a>
          <a
              class="list-group-item list-group-item-secondary list-group-item-action"
              href="https://hub.docker.com/u/flavienperier"
          >
            <font-awesome-icon :icon="['fab', 'docker']"/>
            flavienperier</a>
          <a
              class="list-group-item list-group-item-secondary list-group-item-action"
              href="https://www.npmjs.com/~flavien-perier"
          >
            <font-awesome-icon :icon="['fab', 'npm']"/>
            flavien-perier</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Footer extends Vue {
}
</script>

<style lang="css" scoped>
#qr-code {
  width: 100%;
}
</style>

<i18n locale="fr">
{
  "contactMe": "Contactez-moi",
  "followMe": "Suivez-moi",
  "scanMe": "Scannez-moi"
}
</i18n>

<i18n locale="en">
{
  "contactMe": "Contact me",
  "followMe": "Follow me",
  "scanMe": "Scan me"
}
</i18n>
