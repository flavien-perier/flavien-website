module.exports = {
    publicPath: "/",
    filenameHashing: false,
    productionSourceMap: false,
    configureWebpack: {
        optimization: {
            splitChunks: false
        }
    },
    pluginOptions: {
        i18n: {
          locale: "fr",
          fallbackLocale: "fr",
          localeDir: "locales",
          enableInSFC: true
        }
      }
}
