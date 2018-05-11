---
order: 0
title: Axx Design of React
---

这里是 Axx Design 的 React 实现，开发和服务于爱学习后台产品。


<style>
.pic-plus > * {
  display: inline-block !important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
</style>

---

## 特性

- 提炼自企业级中后台产品的交互语言和视觉风格。
- 开箱即用的高质量 React 组件。
- 使用 TypeScript 构建，提供完整的类型定义文件。
- 全链路开发和设计工具体系。

## 支持环境

* 现代浏览器和 IE9 及以上。
* 支持服务端渲染。


## 版本

- 稳定版：[![npm package](https://img.shields.io/npm/v/axxd.svg?style=flat-square)](https://www.npmjs.com/package/axxd)



## 安装

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install axxd --save
```

```bash
$ yarn add axxd
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

### 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `axxd`。

我们在 npm 发布包内的 `axxd/dist` 目录下提供了 `axxd.js` `axxd.css` 以及 `axxd.min.js` `axxd.min.css`。

> **强烈不推荐使用已构建文件**，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。


## 示例

```jsx
import { DatePicker } from 'axxd';
ReactDOM.render(<DatePicker />, mountNode);
```

引入样式：

```jsx
import 'axxd/dist/axxd.css';  // or 'axxd/dist/axxd.less'
```

### 按需加载

下面两种方式都可以只加载用到的组件。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

   ```js
   // .babelrc or babel-loader option
   {
     "plugins": [
       ["import", { "libraryName": "axxd", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
     ]
   }
   ```

   > 注意：webpack 1 无需设置 `libraryDirectory`。

   然后只需从 axxd 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

   ```jsx
   // babel-plugin-import 会帮助你加载 JS 和 CSS
   import { DatePicker } from 'axxd';
   ```

- 手动引入

   ```jsx
   import DatePicker from 'axxd/lib/date-picker';  // 加载 JS
   import 'axxd/lib/date-picker/style/css';        // 加载 CSS
   // import 'axxd/lib/date-picker/style';         // 加载 LESS
   ```

## 链接

- [npm包](https://www.npmjs.com/settings/gaosi-fe/packages)
- [axx-design](https://github.com/gaosife/axx-design)
- [bisheng-plugin-axxd](https://github.com/gaosife/bisheng-plugin-axxd)

