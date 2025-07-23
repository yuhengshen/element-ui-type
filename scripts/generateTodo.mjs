import fs from 'fs';
import path from 'path';

// 获取packages和types目录
const packagesDir = path.resolve('packages');
const typesDir = path.resolve('types');
const globalDtsPath = path.resolve('global.d.ts');
const todoMdPath = path.resolve('todo.md');

// 读取packages下所有目录
const packageDirs = fs.readdirSync(packagesDir).filter(name => {
  const fullPath = path.join(packagesDir, name);
  return fs.statSync(fullPath).isDirectory();
});

// 读取global.d.ts内容
const globalDts = fs.readFileSync(globalDtsPath, 'utf-8');

// 判断每个package目录是否在global.d.ts中有类型声明
function hasTypeInGlobalDts(pkg) {
  // 约定类型名为 ElXxx: typeof import("./types/xxx/index.vue")
  // 组件名转为大写驼峰
  const camelName = 'El' + pkg.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^([a-z])/, (_, c) => c.toUpperCase());
  const typeImport = `El${camelName.slice(2)}: typeof import(\"./types/${pkg}/index.vue\")`;
  return globalDts.includes(typeImport);
}

// 生成todo内容
let output = '# 组件类型覆盖进度\n\n';
output += '| 组件名 | 类型声明 |\n';
output += '| ------ | -------- |\n';

for (const pkg of packageDirs) {
  const checked = hasTypeInGlobalDts(pkg) ? '✅ 已完成' : '❌ TODO';
  output += `| ${pkg} | ${checked} |\n`;
}

fs.writeFileSync(todoMdPath, output, 'utf-8');

console.log('已生成 todo.md');
