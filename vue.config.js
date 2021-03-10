const path = require('path')

module.exports = {
  publicPath: './',  // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径
  outputDir: "vpf",  // 打包时生成的生产环境构建文件的目录
  assetsDir: 'static',  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  productionSourceMap: false,
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-px-to-viewport')({
  //           unitToConvert: 'px', // 需要转换的单位，默认为"px"
  //           viewportWidth: 1920,
  //           viewportHeight: 1080,// 视窗的高度，对应的是我们设计稿的高度
  //           unitPrecision: 5, // 单位转换后保留的精度
  //           propList: ['*'], // 能转化为vw的属性列表
  //           viewportUnit: 'vw', // 希望使用的视口单位
  //           fontViewportUnit: 'vw', // 字体使用的视口单位
  //           selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
  //           minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
  //           mediaQuery: false, // 媒体查询里的单位是否需要转换单位
  //           replace: true, // 是否直接更换属性值，而不添加备用属性
  //           exclude: /([/\\])(node_modules)([/\\])/, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
  //         })
  //       ]
  //     }
  //   }
  // },
  configureWebpack: (config) => {
    //配置资源别名
    config['resolve'].alias = {
      "@": path.resolve(__dirname, "src")
    }
    // 判断为生产模式下，开发模式保存console
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer.map((arg) => {
        const option = arg.options.terserOptions.compress
        // 打开忽略console开关
        option.drop_console = true
        return arg
      })
    }
  },
  // chainWebpack: config => {
  //   //设置全局文件的引入
  //   const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
  //   types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  // }
}

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

// function addStyleResource(rule) {
//   rule.use('style-resource')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [
//         resolve('src/assets/css/stylus/mixins.styl')
//       ],
//     })
// }
