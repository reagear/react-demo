const { extname } = require('path');
const CSS_EXT_NAMES = ['.css', '.scss', '.sass', '.less'];
module.exports = () => {
    return {
        visitor: {
            ImportDeclaration(path) {
                const { specifiers, source } = path.node;
                const { value } = source;
                if (specifiers.length > 0 && CSS_EXT_NAMES.includes(extname(value))) {
                    source.value = `${value}?css_modules`; // 在路径末尾加上 css_modules 用于 webpack 匹配该文件，如 import Test from './test.less'; 变成 import Test from './test.less?css_modules';
                }
            }
        }
    };
};
