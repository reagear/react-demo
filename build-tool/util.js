const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// pages/name/index.js
function getEntry() {
    let entry = {};

    const entryFilePathList = glob.sync(path.resolve(__dirname, '../src/pages/*/index.js'));
    for (const path of entryFilePathList) {
        const pageName = path.match(/src\/pages\/(.+)\/index.js/)[1];
        const relativePath = `${pageName}/index`;
        entry[relativePath] = path; // 输出js按照文件夹分开
    }

    return entry;
}

// pages/name/index.html
function getHtmlPlugins(isDev) {
    const htmlPathList = glob.sync(path.resolve(__dirname, '../src/pages/*/index.html'));

    return htmlPathList.map((htmlFilepath) => {
        const pageName = htmlFilepath.match(/src\/pages\/(.+)\/index.html/)[1];
        let fileName = `../pages/${pageName}.html`;
        if (isDev) {
            fileName = `./pages/${pageName}.html`;
        }

        return new HtmlWebpackPlugin({
            template: path.resolve(__dirname, `../src/pages/${pageName}/index.html`),
            filename: fileName, // filename 相对的都是output.path
            chunks: [`${pageName}/index`], // 把哪些js用script引入
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        });
    });
}

function getCssLoader(isDev) {
    if (isDev) {
        return ['style-loader', 'css-loader'];
    } else {
        return [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        autoprefixer({
                            overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
                        })
                    ]
                }
            }
        ];
    }
}

function getLessLoader(isDev) {
    let lessLoader = getCssLoader(isDev);
    lessLoader = lessLoader.concat(['less-loader']);
    return lessLoader;
}

function recursiveIssuer(m) {
    if (m.issuer) {
        return recursiveIssuer(m.issuer);
    } else if (m.name) {
        return m.name;
    } else {
        return false;
    }
}

function getCssCacheGroups() {
    let value = {};
    let entry = getEntry();
    for (const entryName in entry) {
        const pageName = entryName.split(/[\\/]/)[0];
        value[pageName] = {
            name: pageName,
            test: (m, c, entry = entryName) =>
                m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
            chunks: 'all',
            enforce: true
        };
    }
    return value;
}

module.exports = {
    getEntry,
    getHtmlPlugins,
    getCssLoader,
    getLessLoader,
    getCssCacheGroups
};
