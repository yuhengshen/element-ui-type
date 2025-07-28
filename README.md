[![npm version](https://img.shields.io/npm/v/element-ui-type.svg?style=flat)](https://www.npmjs.com/package/element-ui-type)

# element-ui-type

基于 Element UI 的 全局组件类型声明库，适配 vue language tools@3。

支持文档中的 Props、Events、Slot 及 Exposed Methods。

## 安装

```bash
npm install element-ui-type -D
# 或
yarn add element-ui-type -D
# 或
pnpm add element-ui-type -D
```

## 使用方法

在 TypeScript 项目中指定 global types 文件

```json
{
  "compilerOptions": {
    "types": ["element-ui-type"]
  }
}
```

## 目录结构

- `packages/` 组件源码
- `types/` 编译输出的类型文件

## FAQ

### 如何处理 ref 引用类型？

由于项目没有重写 `element-ui` 类型，请直接引用 GlobalComponents 类型，并使用 InstanceType 获取组件实例类型

```ts
import { GlobalComponents, ref } from 'vue';

const r = ref<InstanceType<GlobalComponents['ElForm']>>();

r.value.validate()
```

## 许可证

MIT
