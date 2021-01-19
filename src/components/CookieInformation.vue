<template>
  <div id="cookie-alert" v-if="display" class="fixed-bottom alert alert-info container">
    <span class="close cursor-link" @click="display = false">&times;</span>
    <p v-html="$t('cookieMessage')"></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CookieInformation extends Vue {
  private display = true;
}
</script>

<i18n>
{
  "en": {
    "cookieMessage": "This website uses cookies in order to measure its audience. These cookies are and will never be shared or resold to third parties.<br/>If you do not wish to be tracked, I invite you to activate the option \"do not track\" in your browser.",
    "ok": "OK"
  },
  "fr": {
    "cookieMessage": "Ce site utilise des cookies dans le but de mesurer son audience. Ces derniers ne sont et ne seront jamais, ni partagés, ni revendus à de tierces entités.<br/>Si vous ne souhaitez pas être suivi, je vous invite à activer l'option \"ne pas suivre\" dans votre navigateur.",
    "ok": "ok"
  }
}
</i18n>