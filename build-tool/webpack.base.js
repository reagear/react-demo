const path = require('path');
const util = require('./util');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const entry = util.getEntry();

module.exports = {
    entry: entry,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
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
        new FriendlyErrorsWebpackPlugin()
    ],
    stats: {
        assets: true,
        colors: true,
        errors: true,
        errorDetails: true,
        warnings: true,
        version: false,
        moduleTrace: false,
        modules: false,
        hash: false,
        timings: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less']
    }
};
