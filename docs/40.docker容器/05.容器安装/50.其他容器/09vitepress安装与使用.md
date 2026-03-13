---
date: 2026-03-13 21:09:54
title: vitepress安装与使用
categories:
  - 折腾不止
  - docker容器
coverImg: https://img.onedayxyy.cn/images/Teek/TeekCover/1.webp
permalink: /container/b2xse
---
# vitepress安装与使用
## 一、安装

### 前置准备

- [Node.js](https://nodejs.org/) 20 及以上版本。
- 通过命令行界面 (CLI) 访问 VitePress 的终端。
- 支持 [Markdown](https://en.wikipedia.org/wiki/Markdown) 语法的编辑器。
- 推荐 [VSCode](https://code.visualstudio.com/) 及其[官方 Vue 扩展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)。

VitePress 可以单独使用，也可以安装到现有项目中。在这两种情况下，都可以使用以下方式安装它：

npm

```
npm add -D vitepress@next
```

pnpm

```
pnpm add -D vitepress@next
```

yarn

```
yarn add -D vitepress@next vue
```

bun

```
bun add -D vitepress@next
```

> 注意:
> VitePress 是仅 ESM 的软件包。不要使用 `require()` 导入它，并确保最新的 `package.json` 包含 `"type": "module"`，或者更改相关文件的文件扩展名，例如 `.vitepress/config.js` 到 `.mjs`/`.mts`。更多详情请参考 [Vite 故障排除指南](http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only)。此外，在异步 CJS 上下文中，可以使用 `await import('vitepress')` 代替。

### 安装向导

VitePress 附带一个命令行设置向导，可以帮助你构建一个基本项目。安装后，通过运行以下命令启动向导：

npm

```
npx vitepress init
```

pnpm

```
pnpm vitepress init
```

yarn

```
yarn vitepress init
```

bun

```
bun vitepress init
```

将需要回答几个简单的问题：

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Where should VitePress look for your markdown files?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
◇  Add a prefix for VitePress npm scripts?
│  Yes
│
◇  Prefix for VitePress npm scripts:
│  docs
│
└  Done! Now run pnpm run docs:dev and start writing.
```

## 二、基础介绍

### 1.文件结构

如果正在构建一个独立的 VitePress 站点，可以在当前目录 (`./`) 中搭建站点。但是，如果在现有项目中与其他源代码一起安装 VitePress，建议将站点搭建在嵌套目录 (例如 `./docs`) 中，以便它与项目的其余部分分开。

假设选择在 `./docs` 中搭建 VitePress 项目，生成的文件结构应该是这样的：

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

`docs` 目录作为 VitePress 站点的项目**根目录**。`.vitepress` 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置。

>TIP
>
>默认情况下，VitePress 将其开发服务器缓存存储在 `.vitepress/cache` 中，并将生产构建输出存储在 `.vitepress/dist` 中。如果使用 Git，应该将它们添加到 `.gitignore` 文件中。也可以手动[配置](https://vitepress.dev/zh/reference/site-config#outdir)这些位置。

### 2.配置文件
配置文件 (.vitepress/config.js) 让你能够自定义 VitePress 站点的各个方面，最基本的选项是站点的标题和描述：

#### .vitepress/config.js

```
export default {
  // 站点级选项
  title: 'VitePress',
  description: 'Just playing around.',

  themeConfig: {
    // 主题级选项
  }
}
```

还可以通过 `themeConfig` 选项配置主题的行为。有关所有配置选项的完整详细信息，请参见[配置参考](https://vitepress.dev/zh/reference/site-config)。

### 3.源文件

`.vitepress` 目录之外的 Markdown 文件被视为**源文件**。

VitePress 使用 **基于文件的路由**：每个 `.md` 文件将在相同的路径被编译成为 `.html` 文件。例如，`index.md` 将会被编译成 `index.html`，可以在生成的 VitePress 站点的根路径 `/` 进行访问。

VitePress 还提供了生成简洁 URL、重写路径和动态生成页面的能力。这些将在[路由指南](https://vitepress.dev/zh/guide/routing)中进行介绍。

## 三、启动并运行

该工具还应该将以下 npm 脚本注入到 package.json 中：
#### package.json
```
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```

`docs:dev` 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：

npm

```
npm run docs:dev
```

pnpm

```
pnpm run docs:dev
```

yarn

```
yarn docs:dev
```

bun

```
bun run docs:dev
```

除了 npm 脚本，还可以直接调用 VitePress：

npm

```
npx vitepress dev docs
```

pnpm

```
pnpm vitepress dev docs
```

yarn

```
yarn vitepress dev docs
```

bun

```
bun vitepress dev docs
```

更多的命令行用法请参见 [CLI 参考](https://vitepress.dev/zh/reference/cli)。

开发服务应该会运行在 `http://localhost:5173` 上。在浏览器中访问 URL 以查看新站点的运行情况吧！