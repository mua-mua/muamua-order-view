module.exports = {
  baseUrl: '/',
  outputDir: './dist/static/',
  lintOnSave: true,
  configureWebpack: {
    output: {
      publicPath: '/'
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: '8000',
    https: false,
    proxy: {
      "/api": {
        target: "http://localhost:8080"
      }
    }
  }
}