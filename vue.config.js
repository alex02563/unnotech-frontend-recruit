const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // overlay: {
    //   warnings: true,
    //   errors: true
    // },
    // proxy: {
    //   '/api': {
    //     target: 'https://fe-interview-api.unnotech.com',
    //     changeOrigin: true,
    //     ws: false,
    //     secure: true,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
  }
})
