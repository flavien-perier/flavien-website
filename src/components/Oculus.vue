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

<style scoped lang="scss">
#chat-button {
  position: fixed;
  z-index: 1000;
  right: 1rem;
  bottom: 1rem;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  background-color: #fff;
  border-radius: 2rem;
}

#bot-chat {
  position: fixed;
  z-index: 10000;
  right: 1rem;
  bottom: 6rem;
  height: 35vw;
  width: 22.5vw;
}
</style>