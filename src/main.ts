import Vue from "vue";

//@ts-ignore
import BSN from "bootstrap.native/dist/bootstrap-native.js";
import "./genetic.js";

import store from "./store";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

console.log(`
 _______ _       _______        ________________ _       
(  ____ ( \\     (  ___  |\\     /\\__   __(  ____ ( (    /|
| (    \\| (     | (   ) | )   ( |  ) (  | (    \\|  \\  ( |
| (__   | |     | (___) | |   | |  | |  | (__   |   \\ | |
|  __)  | |     |  ___  ( (   ) )  | |  |  __)  | (\\ \\) |
| (     | |     | (   ) |\\ \\_/ /   | |  | (     | | \\   |
| )     | (____/| )   ( | \\   / ___) (__| (____/| )  \\  |
|/      (_______|/     \\|  \\_/  \\_______(_______|/    )_)
`);

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");

BSN.initCallback(document.body);
