const path = require('path'); // eslint-disable-line

module.exports = {
  runtimeCompiler: true,

  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
    output: { // 输出重构  打包编译后的 文件名称
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[name].[hash].js'
    }
  },

  devServer: {
    disableHostCheck: true,
    port: 5010,
    host: '0.0.0.0'
  }
}
