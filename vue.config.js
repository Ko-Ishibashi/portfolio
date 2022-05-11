module.exports = {
  publicPath: "./",
  assetsDir: "",
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Portfolio',
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/styles/common/common.scss";'
      }
    }
  }
}
