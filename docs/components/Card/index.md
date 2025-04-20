# Card 卡片组件

通用的内容容器组件，支持多种布局和交互效果。

## 基础卡片

<demo vue="./Card_1.vue" />

## 带图片卡片

<demo vue="./Card_2.vue" />
## 自定义样式卡片
<demo vue="./Card_3.vue" />

## 交互式阴影卡片
<demo vue="./Card_4.vue" />

## 复杂布局卡片
<demo vue="./Card_5.vue" />

## 组件特性说明
- 阴影模式：通过 `shadow` 属性控制阴影显示逻辑
- 灵活插槽：支持 `image`/`header`/`default`/`footer` 四个插槽
- 暗色模式：自动适配黑暗主题 (`dark`: 前缀样式)
- 响应式布局：默认使用 `flex` 布局

```vue
<!-- 基本结构示例 -->
<YCard shadow="hover">
  <template #image>...</template>
  <template #header>...</template>
  <!-- 默认内容 -->
  <template #footer>...</template>
</YCard>
```
