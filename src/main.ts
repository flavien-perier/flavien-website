import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import "@/assets/scss/index.scss";

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
  faTerminal,
  faLock,
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
  faWindows,
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
  faVscode,
} from "@/icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";

import App from "./application/application.view.vue";
import i18n from "./i18n";
import router from "./router";

config.autoAddCss = false;

library.add(
  faHome,
  faList,
  faGraduationCap,
  faProjectDiagram,
  faBook,
  faMicrochip,
  faDatabase,
  faServer,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faFlag,
  faTerminal,
  faCode,
  faFile,
  faLinkedin,
  faFacebookSquare,
  faMastodon,
  faDiscord,
  faAngular,
  faVuejs,
  faPython,
  faJs,
  faNpm,
  faJava,
  faPhp,
  faLinux,
  faWindows,
  faGitAlt,
  faGithub,
  faGithubSquare,
  faGitlab,
  faDocker,
  faLock,
  //@ts-ignore
  faSpring,
  faTs,
  faKotlin,
  faNginx,
  faVscode,
  faAntlr,
  faKubernetes,
  faSwagger,
  faKafka,
  faIntellij,
  faNeo4j,
  faScrum
);

const pinia = createPinia();
pinia.use(({ store }) => {
  store.$router = markRaw(router);
  store.$i18n = i18n.global;
});

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(pinia)
  .use(router)
  .use(i18n)
  .mount("#app");
