# Table 表格
一个轻量级的数据表格组件，支持边框和斑马纹样式。

## 基本用法

通过 `data` 和 `columns` 属性配置表格数据：

<demo vue="./Table_1.vue" />

## 斑马纹表格

通过 `stripe` 属性添加斑马纹样式：

<demo vue="./Table_2.vue" />

## 带边框表格

通过 `border` 属性添加表格边框：
<demo vue="./Table_3.vue" />

## Props

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| data   | 表格数据 | `Array<object>` | `[]` |
| columns | 表格列配置 | `Array<{title: string, dataIndex: string, key: string}>` | `[]` |
| border | 是否显示边框 | `boolean` | `false` |
| stripe | 是否显示斑马纹 | `boolean` | `false` |

## 数据结构说明

### data 数据格式
```ts
interface TableData {
  key: string;      // 唯一标识
  [key: string]: any // 其他数据字段
}
```

### columns 列配置
```ts
interface TableColumn {
  title: string;     // 列标题
  dataIndex: string; // 对应 data 中的字段名
  key: string;       // 唯一键值
}
```

## 注意事项
1. 确保每个数据项的 `key` 值唯一
2. `columns.dataIndex` 需要与 `data` 中的字段名匹配
3. 组件不包含内置样式，需要自行添加表格样式（如间距、颜色等）