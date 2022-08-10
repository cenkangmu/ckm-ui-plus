[[toc]]
## 介绍
ckm-ui-plus 是由 ckm 个人研发的一款基于 Vue3 的 UI框架，包含了很多常用的移动端组件。
## 快速上手
本文会帮助你将ckm-ui-plus引入到项目中

### npm下载安装
在项目根目录下打开终端，运行以下代码进行安装
```
npm i ckm-ui-plus
```

### 引入到项目中
在main.js中引入即可使用

```javascript
import ckmUI from 'ckm-ui-plus'
import 'ckm-ui-plus/style.css'

createApp(App).use(router).use(ckmUI).mount('#app')
```
