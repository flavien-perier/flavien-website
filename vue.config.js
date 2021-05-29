const TerserPlugin = require("terser-webpack-plugin");
const DeadCodePlugin = require("webpack-deadcode-plugin");

module.exports = {
  publicPath: "/",
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      removeAvailableModules: true,
      removeEmptyChunks: true,
      splitChunks: false,
      runtimeChunk: false,
      mergeDuplicateChunks: true,
      namedChunks: false,
      namedModules: false,
      concatenateModules: true,
      usedExports: true,
      minimize: true,
      minimizer: [new TerserPlugin({
        parallel: true,
        terserOptions: {
          cache: true,
          output: {
            comments: false
          }
        }
      })],
    },
    plugins: [
      new DeadCodePlugin({
        patterns: [
          "src/**/*.(js|ts|vue|scss|css)",
        ],
        exclude: [
          "**/*.(stories|test|spec).(js|ts)",
        ],
      })
    ],
  },
  pluginOptions: {
    i18n: {
      locale: "fr",
      fallbackLocale: "fr",
      localeDir: "locales",
      enableInSFC: true,
    }
  }
}
