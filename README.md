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

## 贡献

当前类型还未编写完成，欢迎提交 issue 和 PR 共同完善本项目。

贡献流程建议：

1. 删除组件目录下的文件
2. 新建一个 index.vue 文件，并编写类型
3. 执行 `pnpm build` 编译类型文件
4. 在 global.d.ts 中添加组件类型声明

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
