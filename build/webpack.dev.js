//开发环境配置
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
moduleexports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
})