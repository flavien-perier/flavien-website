import Vue from "vue";

import {config, library} from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faCode,
  faDatabase,
  faEnvelope,
  faFile,
  faFlag,
  faGraduationCap,
  faHome,
  faList,
  faMapMarkerAlt,
  faMicrochip,
  faPhone,
  faProjectDiagram,
  faServer,
  faTerminal
} from "@fortawesome/free-solid-svg-icons";
import {
  faAngular,
  faDiscord,
  faDocker,
  faFacebookSquare,
  faGitAlt,
  faGithub,
  faGithubSquare,
  faGitlab,
  faJava,
  faJs,
  faLinkedin,
  faLinux,
  faMastodon,
  faNpm,
  faPhp,
  faPython,
  faVuejs,
  faWindows
} from "@fortawesome/free-brands-svg-icons";
import {
  faAntlr,
  faIntellij,
  faKafka,
  faKotlin,
  faKubernetes,
  faNeo4j,
  faNginx,
  faScrum,
  faSpring,
  faSwagger,
  faTs,
  faVscode
} from "@/icon";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import store from "./store";
import App from "./application/application.view.vue";
import router from "./router";
import i18n from "./i18n";
import BSN from "./bootstrap";

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

config.autoAddCss = false;

library.add(faHome, faList, faGraduationCap, faProjectDiagram, faBook, faMicrochip, faDatabase, faServer, faEnvelope, faPhone, faMapMarkerAlt, faFlag, faTerminal, faCode, faFile,
    faLinkedin, faFacebookSquare, faMastodon, faDiscord, faAngular, faVuejs, faPython, faJs, faNpm, faJava, faPhp, faLinux, faWindows, faGitAlt, faGithub, faGithubSquare, faGitlab, faDocker,
    //@ts-ignore
    faSpring, faTs, faKotlin, faNginx, faVscode, faAntlr, faKubernetes, faSwagger, faKafka, faIntellij, faNeo4j, faScrum);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    store,
    i18n,
    router,
    render: h => h(App)
}).$mount("#app");

BSN.initCallback(document.body);
