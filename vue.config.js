// ## 把原本需要写在webpack.config.js中的配置代码, 写在这里, 会自动合并
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  // 公共路径
  publicPath: '/',
  assetsDir: 'static',
  // 不同的环境打不同包名
  // 一次配置，全局使用scss
  css: {
    loaderOptions: {
      // sass: {
      //   data: `
      //     @import "./src/assets/style/variable";
      //     @import "./src/assets/style/mixins";
      //   `
      // },
      // postcss: {
      //   plugins: [
      //     require('postcss-px-to-viewport')({
      //       unitToConvert: 'px',
      //       viewportWidth: 375,
      //       unitPrecision: 3,
      //       propList: [
      //         '*'
      //       ],
      //       viewportUnit: 'vw',
      //       fontViewportUnit: 'vw',
      //       selectorBlackList: [],
      //       minPixelValue: 1,
      //       mediaQuery: false,
      //       replace: true,
      //       exclude: /(\/|\\)(node_modules)(\/|\\)/
      //     })
      //   ]
      // }
    }
  },
  // 是否关闭eslint
  lintOnSave: process.env.VUE_APP_CURRENTMODE === 'DEVELOPMENT',
  // 打包时不要map文件
  productionSourceMap: false,
  // 打开压缩
  // productionGzip: false,
  // 配置解析别名
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  // 配置服务器
  devServer: {
    port: 3000,
    open: false,
    https: false,
    // // 代理模式
    // proxy: {
    //   '/mock': {
    //     target: 'http://localhost:3001', // 后台接口域名
    //     ws: true, // 如果要代理 websockets，配置这个参数
    //     secure: false, // 如果是https接口，需要配置这个参数
    //     changeOrigin: true, // 是否跨域
    //     pathRewrite: {
    //       '^/mock': '' // 实际不存在这个前缀暗号''去掉，有的话就不写
    //     }
    //   }
    // },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  configureWebpack: {
    // externals: {
      // 'core-js': 'coreJs',
      // 'vue': 'Vue',
      // 'vue-router': 'VueRouter',
      // 'vuex': 'Vuex',
      // 'axios': 'axios',
      // 'moment': 'moment',
      // 'muse-ui': 'MuseUI',
      // 'Cookies': 'Cookies'
    // }
  }
}
