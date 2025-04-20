# YRadio

单选框组件，支持双向绑定、禁用状态和自定义样式。

## 基本用法

<demo vue="./Radio_1.vue" />

## 禁用状态

使用 `disabled` 属性禁用单选框

<demo vue="./Radio_2.vue" />

## 组合使用

单选框组需要配合相同的 `name` 属性实现互斥：

<demo vue="./Radio_3.vue" />

## Props

| 属性名       | 说明                     | 类型               | 默认值   |
|--------------|--------------------------|--------------------|----------|
| modelValue   | 绑定值                   | string/number/boolean | null     |
| label        | 单选框的值               | string/number/boolean | ""       |
| name         | 原生name属性             | string             | ""       |
| disabled     | 是否禁用                 | boolean            | false    |

## Slots

| 名称    | 说明                     |
|---------|--------------------------|
| default | 自定义单选框标签内容     |

## 样式变量

可以通过覆盖以下 CSS 变量自定义样式：

```css
:root {
  --theme-primary-500: #409eff;  /* 主色 */
  --vk-primary-500: #409eff;     /* 备用主色 */
}
```

## 注意事项

1. `label` 属性需要与 `modelValue` 类型一致
2. 禁用状态下不会触发状态变更
3. 组合使用时需要保持相同的 `name` 属性
4. 自定义样式时建议通过覆盖 CSS 变量实现

## 类型定义

```ts
interface RadioProps {
  /** 绑定值 */
  modelValue?: string | number | boolean | null
  /** 单选框值 */
  label?: string | number | boolean
  /** 原生name属性 */
  name?: string
  /** 禁用状态 */
  disabled?: boolean
}
```