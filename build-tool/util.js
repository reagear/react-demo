const path = require('path');
const fs = require('fs');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const os = require('os');

// pages/name/index.js
function getEntry() {
    let entry = {};

    const entryFilePathList = glob.sync(path.resolve(__dirname, '../src/pages/*/index.js'));
    for (const path of entryFilePathList) {
        let htmlPath = path.replace('.js', '.html');
        if (fs.existsSync(htmlPath)) {
            const pageName = path.match(/src\/pages\/(.+)\/index.js/)[1];
            const relativePath = `${pageName}/index`;
            entry[relativePath] = path; // 输出js按照文件夹分开
        }
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

        let option = {
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
        };

        let jsPath = htmlFilepath.replace('.html', '.js');
        if (!fs.existsSync(jsPath)) {
            option.chunks = [];
        }

        return new HtmlWebpackPlugin(option);
    });
}

function getCssLoader(isDev, useCssModule) {
    let modules = false;

    if (useCssModule) {
        modules = {
            localIdentName: '[local]--[hash:base64:5]'
        };
    }

    let value = [
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1, // 当css文件中又有引入了其他的css的时候，需要设置一下importLoaders
                modules
            }
        },
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

    if (isDev) {
        value.unshift('style-loader');
    } else {
        value.unshift(MiniCssExtractPlugin.loader);
    }

    return value;
}

function getLessLoader(isDev, useCssModule) {
    let lessLoader = getCssLoader(isDev, useCssModule);
    lessLoader = lessLoader.concat(['less-loader']);
    return lessLoader;
}

function getCssRule(isDev) {
    const cssLoaderNoModule = getCssLoader(isDev);
    const cssLoaderWidthModule = getCssLoader(isDev, true);

    return {
        test: /\.css$/,
        oneOf: [
            {
                resourceQuery: /css_modules/, // foo.css?css_modules
                use: cssLoaderWidthModule
            },
            {
                use: cssLoaderNoModule
            }
        ]
    };
}

function getLessRule(isDev) {
    const lessLoaderNoModule = getLessLoader(isDev);
    const lessLoaderWithModule = getLessLoader(isDev, true);

    return {
        test: /\.less/,
        oneOf: [
            {
                resourceQuery: /css_modules/, // foo.css?css_modules
                use: lessLoaderWithModule
            },
            {
                use: lessLoaderNoModule
            }
        ]
    };
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
    // eslint-disable-next-line guard-for-in
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

// 逻辑核心
function getCpuCoreCount() {
    return os.cpus().length;
}

module.exports = {
    getEntry,
    getHtmlPlugins,
    getCssRule,
    getLessRule,
    getCssCacheGroups,
    getCpuCoreCount
};
