const path = require('path');
const util = require('./util');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const webpack = require('webpack');

const cssLoader = util.getCssLoader(true);
const lessLoader = util.getLessLoader(true);
const htmlPlugins = util.getHtmlPlugins(true);

const devConfig = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../build/'),
        filename: '[name]_[hash:8].js',
        publicPath: '../', // 资源filename 和html文件的关系,dev-server自动处理好关系，其他模式需要配置http链接
        crossOriginLoading: 'anonymous'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoader
            },
            {
                test: /\.less/,
                use: lessLoader
            }
        ]
    },
    plugins: [...htmlPlugins],
    devServer: {
        publicPath: '/',
        contentBase: './build', // 静态文件(非webpack输出)目录,相对项目根目录
        hot: true,
        stats: 'errors-only',
        disableHostCheck: true
    },
    devtool: 'eval-source-map'
};

const finalConfig = merge(baseConfig, devConfig);

module.exports = finalConfig;
