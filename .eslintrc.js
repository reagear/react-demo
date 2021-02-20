// eslint-config-alloy
module.exports = {
    extends: ['alloy', 'alloy/react'],
    env: {
        // 你的环境变量（包含多个预定义的全局变量）
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 你的全局变量（设置为 false 表示它不允许被重新赋值）
        //
        // myGlobal: false
    },
    rules: {
        // 自定义你的规则
        'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
        'react-hooks/exhaustive-deps': 'error' // 检查 effect 的依赖
    },
    plugins: ['react-hooks'],
    settings: {
        react: {
            version: 'detect'
        }
    }
};
