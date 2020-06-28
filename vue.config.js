module.exports = {
    publicPath: "/",
    filenameHashing: false,
    productionSourceMap: false,
    configureWebpack: {
        optimization: {
            splitChunks: false
        }
    }
}
