

# Axx Design

## 安装

```bash
npm install axx-design --save
```

## 示例

```jsx
import { DatePicker } from 'axx-design';
ReactDOM.render(<DatePicker />, mountNode);
```

引入样式：

```jsx
import 'antd/dist/axx-design.css';  // or 'antd/dist/axx-design.less'
```


## 本地开发

```bash
$ git clone https://github.com/gaosife/axx-design.git
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