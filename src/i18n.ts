import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "fr",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "fr",
  messages: {
    fr: require("@/locales/fr.json"),
    en: require("@/locales/en.json")
  }
});
