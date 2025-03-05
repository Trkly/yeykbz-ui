# Button 按钮
常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

```vue
<template>
 <div style="margin-bottom:20px;">
  <YButton color="blue">主要按钮</YButton>
  <YButton color="green">绿色按钮</YButton>
  <YButton color="gray">灰色按钮</YButton>
  <YButton color="yellow">黄色按钮</YButton>
  <YButton color="red">红色按钮</YButton>
 </div>
 <div style="margin-bottom:20px;"
 >
  <YButton color="blue" plain>朴素按钮</YButton>
  <YButton color="green" plain>绿色按钮</YButton>
  <YButton color="gray" plain>灰色按钮</YButton>
  <YButton color="yellow" plain>黄色按钮</YButton>
  <YButton color="red" plain>红色按钮</YButton>
 </div>
 <div style="margin-bottom:20px;">
  <YButton size="small" plain>小按钮</YButton>
  <YButton size="medium" plain>中按钮</YButton>
  <YButton size="large" plain>大按钮</YButton>
 </div>
 <div style="margin-bottom:20px;">
  <YButton color="blue" round plain icon="search">搜索按钮</YButton>
  <YButton color="green" round plain icon="edit">编辑按钮</YButton>
  <YButton color="gray" round plain icon="check">成功按钮</YButton>
  <YButton color="yellow" round plain icon="message">提示按钮</YButton>
  <YButton color="red" round plain icon="delete">删除按钮</YButton>
 </div>
 <div style="margin-bottom:20px;">
  <YButton color="blue" round plain icon="search"></YButton>
  <YButton color="green" round plain icon="edit"></YButton>
  <YButton color="gray" round plain icon="check"></YButton>
  <YButton color="yellow" round plain icon="message"></YButton>
  <YButton color="red" round plain icon="delete"></YButton>
 </div>
</template>
```
:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
 <div class="flex flex-row">
  <YButton icon="edit" plain></YButton>
  <YButton icon="delete" plain></YButton>
  <YButton icon="share" plain></YButton>
  <YButton round plain icon="search">搜索</YButton>
 </div>
</template>
```