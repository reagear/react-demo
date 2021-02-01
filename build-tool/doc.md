## 脚手架说明

### TODO

-   src pages 下面只有 html 文件没有 js 文件 [0]
-   dev server 开启后输出 html 的 http 链接 [0]
-   图片资源 [0]
-   字体资源 [o]
-   html-webpack-plugin 可以用插件处理 [0]
-   eslint webstorm 不通 [0] 升级 node 版本
-   mock 服务
-   动态加载的组件 css 怎么提取？
-   output.crossOriginLoading 无效 因为 dev 模式没跨域？
-   入口只能是 js 文件,不能是 jsx
-   react 组件 HMR [0] [react-hot-loader文档](https://github.com/gaearon/react-hot-loader)
-   代码写一半报错 [0]
-   CSS module [0]
    -   根据引入 css 的方式决定是否开启 参考 https://github.com/umijs/umi/issues/1417
    -   同一个文件被 import 两次，分别是`import "a.less"`和`import style from "a.less"`打包出来的文件包含2份，一个用了cssModule一个没用

- css 不用style-loader， 提取成整个文件，用类似 HMR 方式？
