const path = require('path');
const util = require('./util');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin-fixed-hashbug');

const entry = util.getEntry();

module.exports = {
    entry: entry,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: util.getCpuCoreCount() - 1
                        }
                    },
                    'babel-loader'
                ],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]_[hash:8][ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            // 默认清空的是output.path
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, '../build/**/*')]
        }),
        new FriendlyErrorsWebpackPlugin(),
        // html同步引入的js带上标签
        new ScriptExtHtmlWebpackPlugin({
            custom: {
                test: /\.js$/,
                attribute: 'crossorigin',
                value: 'anonymous'
            }
        }),
        new HardSourceWebpackPlugin({})
    ],
    stats: {
        assets: true,
        children:false,
        colors: true,
        entrypoints:false,
        errors: true,
        errorDetails: true,
        warnings: true,
        version: false,
        moduleTrace: false,
        modules: false,
        hash: false,
        timings: true
    },
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less']
    }
};
