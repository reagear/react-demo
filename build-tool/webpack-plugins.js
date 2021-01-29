const glob = require('glob');
const path = require('path');

function logPageLinks(port) {
    const htmlPathList = glob.sync(path.resolve(__dirname, '../src/pages/*/index.html'));

    htmlPathList.forEach((htmlPath, index) => {
        const pageName = htmlPath.match(/src\/pages\/(.+)\/index.html/)[1];
        console.log(`page[${index}]: http://localhost:${port}/pages/${pageName}.html`);
    });
}

class PageLinkPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        compiler.hooks.done.tapAsync('pageLinkPlugin', (args, callback) => {
            logPageLinks(global.devserverort);
            callback();
        });
    }
}

module.exports = {
    PageLinkPlugin
};
