const path = require('path'); // eslint-disable-line

module.exports = {
    runtimeCompiler: true,

    pages: {
        index: {
            entry: path.resolve(__dirname, './src/main.ts'),
            template: path.resolve(__dirname, '.public/index.html')
        }
    },

    configureWebpack: {
        devtool: 'source-map',
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
};
