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
> 则找到报错文件，搜索 vite/preload-helper 替换为 \0vite/preload-helper 重新打包即可