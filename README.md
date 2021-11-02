# 文档

组件库 Antdv-V3: https://next.antdv.com/components/overview-cn

构建配置vite: https://cn.vitejs.dev/config/

## 开始

```shell
npm install -g yarn
```

### 开发 SDK

执行 sdk dev 构建脚本

```shell
yarn dev:sdk
```

打开 '/index_sdk.html' 页面，文件变更自动更新

### 开发frame

执行 frame 构建脚本

```shell
yarn dev:frame
```

打开 '/index_frame.html' 页面，文件变更自动更新

### 模拟业务方环境

1、执行 sdk build watch 脚本，该脚本在文件变更后自动打包生成文件：`./dist-sdk/notifysdk.js` 文件，及相关静态文件

```shell
yarn dev:sdk-gen-js
```

2、执行frame构建命令

```shell
yarn dev
```

打开 '/index_mock.html' 页面，即可同时调试 sdk & frame

## 构建

### 构建 sdk

```shell
yarn build:sdk
```

### 构建 frame

```
yarn build:frame
```

TODO:
1. sdk api 服务
2. frame 与外层通信

