<template>
  <div>
    <iframe id="bot-chat" v-if="showBotChat" loading="lazy" src="https://oculus.flavien.cc/presentation/chat?token=nHWn8JHsVX2d4QRKTmyAtmmYaNqHsCyFxMVDv5hyuo5EM5YjwuzkWPnbFyXR&useSsl=true"></iframe>
    <img @click="displayOrHide()" class="d-none d-md-block" src="../assets/img/logo.svg" id="chat-button" alt="chat-button" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Oculus extends Vue {
  private showBotChat: boolean = false;

  private displayOrHide() {
    this.showBotChat = !this.showBotChat;
  }
}
</script>