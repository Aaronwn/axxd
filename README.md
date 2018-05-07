

# Axx Ant-Design

一套企业级的 UI 设计语言和 React 实现。


## 特性

- 基于ant design二次开发的UI组件库，适用于中后台管理系统。
- 开箱即用的高质量 React 组件。
- 使用 TypeScript 构建，提供完整的类型定义文件。

## 支持环境

* 现代浏览器和 IE9 及以上。

## 安装

```bash
npm install axxantd --save
```

## 示例

```jsx
import { DatePicker } from 'axxantd';
ReactDOM.render(<DatePicker />, mountNode);
```

引入样式：

```jsx
import 'antd/dist/axxantd.css';  // or 'antd/dist/axxantd.less'
```

你也可以[按需加载组件](https://ant.design/docs/react/getting-started-cn#按需加载)。

## 本地开发

```bash
$ git clone https://github.com/gaosife/axxantd.git
$ cd ant-design
$ npm install
$ npm start
```

打开浏览器访问 http://127.0.0.1:8001 

## Test Case and Lint

### Run all test cases
``` bash
$ npm test
```

### Run test cases for one file
```bash
$ npm test -- components/button/__tests__/index.test.js
```

### Update snapshot files
```bash
$ npm test -- -u
```

## Publish site to gh-pages
```bash
$ npm update && npm run deploy
```