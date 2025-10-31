/** @type {import("prettier").Config} */
module.exports = {
  "semi": true, // 每行末尾自动添加分号
  "printWidth": 100, // 每行最大长度（超过自动换行）
  "singleQuote": false, // 是否使用单引号（false = 双引号）
  "jsxSingleQuote": false, // JSX 内是否使用单引号（false = 双引号）
  "trailingComma": "all", // 对象或数组的最后一个元素后面加逗号（方便增删）
  "tabWidth": 2, // 每个缩进的空格数
  "bracketSpacing": true, // 大括号与内容之间保留空格： { foo: bar }
  "bracketSameLine": false, // JSX 标签的闭合尖括号是否换行（false = 与最后属性同一行）
  "arrowParens": "always",// 箭头函数只有一个参数时是否省略括号
  "endOfLine": "lf" // 文件末尾强制加一个换行
}
