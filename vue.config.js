const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Book-Lists'
        return args
      })
  },
  devServer: {
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
