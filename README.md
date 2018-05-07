

# Axx Ant-Design

基于ant design二次开发的UI组件库，适用于企业级中后台管理系统。

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
$ npm run start
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