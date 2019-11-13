const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    //文件导入
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    //压缩输出 ； "development" | "production" | "none"  开发|生产|无
    mode: 'production',
    //服务
    devServer: {
        contentBase: './dist',
        hot:true
    },
    // 文件输出
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    //loader
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ]
    },
    //插件
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: ' Output Management'
        })
    ]
}