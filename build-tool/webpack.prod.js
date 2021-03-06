const path = require('path');
const util = require('./util');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const cssRule = util.getCssRule(false);
const lessRule = util.getLessRule(false);
const htmlPlugins = util.getHtmlPlugins(false);

const prodConfig = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../build/static/'),
        filename: '[name].js',
        publicPath: '../static/',
        crossOriginLoading: 'anonymous'
    },
    module: {
        rules: [
            cssRule,
            lessRule
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        ...htmlPlugins
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                extractComments: false,
                parallel: true // 并行压缩
            }),
            new OptimizeCSSAssetsPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                ...util.getCssCacheGroups(),// TODO: 可以去掉？
                lib: {
                    // 框架 库
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/].+jsx?$/,
                    name: 'lib',
                    chunks: 'all',
                    priority: 3
                },
                commons: {
                    test: /\.jsx?/,
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2
                    // minSize:0  //默认值不是0
                }
            }
        }
    },
    devtool: 'source-map'
};

const finalConfig = merge(baseConfig, prodConfig);

module.exports = finalConfig;
