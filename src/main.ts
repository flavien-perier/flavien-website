import Vue from "vue";

//@ts-ignore
import BSN from "bootstrap.native/dist/bootstrap-native.js";
import "./genetic.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSpring, faTs, faKotlin, faNginx, faVscode, faAntlr, faKubernetes, faSwagger, faKafka, faIntellij, faNeo4j } from "@/icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

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

//@ts-ignore
library.add(fas, fab, faSpring, faTs, faKotlin, faNginx, faVscode, faAntlr, faKubernetes, faSwagger, faKafka, faIntellij, faNeo4j);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");

BSN.initCallback(document.body);
