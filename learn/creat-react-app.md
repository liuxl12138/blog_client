# create-react-app创建一个react项目，默认会安装
- 依赖：
    react：react框架的核心
    react-dom: react视图渲染的核心，【基于react生成html页面】
    react-scripts: 脚手架对打包命令的一种封装，为了让项目目录看起来干净一些，吧webpack打包的规则和相关的loader/plugin都隐藏到node_modules/目录下
    web-vitals：性能检测工具
- eslintConfig
    对webpack中eslint词法检测的相关配置：
    - 词法错误的
    - 符合标准，但是不符合eslint的检测规范的
- browserslist
    - 浏览器的兼容情况
    1. postcss-loader + autoprefixer 会给css3设置相关前缀
    2. babel-loader 把es6转为es5



1. 为什么分为react、react-dom？
    react还有react-native，基于react生成native，虚拟dom可以生成多个平台的视图