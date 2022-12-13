npm 【基于nrm切换源】
yarn
pnpm

# webpack
- mode打包模式：development、production
    获取环境变量：process.env.NODE_ENV
    production: 打包后的js会自动压缩, NODE_ENV = 'production'
    development: 代码不会压缩，NODE_ENV = 'development'
- entry（入口）：webpack从入口开始，根据commonjs/esmodule模块规范，分析模块之间的依赖，
- output（出口）
- loader（加载器）：一般用于实现代码编译
- plugin (插件)：
- resolve（解析器）：
- optimization（优化）
- devServer（web服务器）

# 模块规范
- webpack中，同时支持Commonjs、es6module规范
- 两种规范在webpack中可以混淆使用，（webpack内部做了处理）

# 零配置打包（不需要自己写任何配置规则，直接使用内置的默认规则进行打包）
1. 安装webpack在项目下
2. 在package.json中使用命令（前提是node_modules/.bin目录下，需要有与命令对应的文件，才可以使用）
3. 默认找src/index.js当作入口
4. 打包后输出到 dist/main.js

# 自定义打包规则
- htmlWebpackPlugin
1. 将打包后的js/css自动导入到页面中,（将js在head中引入了//）
2. 对html进行压缩处理
- webpack-dev-server，基于node在本地启动一个web服务
1. 项目打包【打包后的内容没有放在dist目录下，放在了虚拟内存中】
2. 热更新【代码修改后，实时进行打包编译，自动刷新浏览器】
- css解决方案
1. less/scss编译为css
2. css设置浏览器前缀,
3. 处理特殊语法 【@import】
4. 合并、压缩、打包
- js兼容性
1. es6+语法兼容
2. es6+内置api兼容 
    @babel/polyfill 并不是所有的api都重写了，比如fetch、reflect就没有重写
- 优化：压缩css/js
1. optimization: css-minimizer-webpack-plugin、terser-webpack-plugin
- 图片处理
1. base64为什么加载快？
    图片渲染：从服务器获取-编码-渲染
    base64: 直接渲染
2. 一定大小范围内的图片转为base64
- 别名处理
1. alias设置别名