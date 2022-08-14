## 项目说明

该项目分为组件库、文档和Demo三部分。
Demo是对所有可用组件的大部分用法进行演示。
文档是对全部组件用法的讲解。

## 项目命令

#### 运行Demo

```text
npm run dev
```

#### 打包Demo

```text
npm run build
```

#### 打包组件库

```text
npm run build:com
```

#### 运行文档

```text
npm run docs:dev
```

#### 打包文档

```text
npm run docs:build
```

> 运行文档或打包文档需修改 docs/.vuepress/public/url.js 文件里的地址为Demo运行地址或部署地址

> 如果打包文档报错："./preload-helper" export in "vite" package。
则找到报错文件，搜索 vite/preload-helper 替换为\0vite/preload-helper 重新打包即可