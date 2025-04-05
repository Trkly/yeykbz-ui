# Card 卡片组件

通用的内容容器组件，支持多种布局和交互效果。

## 基础卡片

::: demo
```vue
<template>
  <YCard>
    <template #header>用户信息</template>
    <div class="flex flex-col gap-2">
      <p>姓名：张三</p>
      <p>年龄：28</p>
      <p>城市：北京</p>
    </div>
    <template #footer>最后更新：2023-07-20</template>
  </YCard>
</template>
```
:::

## 带图片卡片
::: demo
```vue
<template>
  <YCard shadow="hover">
    <template #image>
      <img
          src="https://picsum.photos/600/200"
          class="w-full h-48 object-cover"
          alt="示例图片"
      />
    </template>
    <template #header>旅行日记</template>
    <p class="text-gray-600 dark:text-gray-400">
      美丽的风景总是让人流连忘返，这张照片拍摄于阿尔卑斯山脉...
    </p>
  </YCard>
</template>
```
:::

## 自定义样式卡片
::: demo
```vue
<template>
  <YCard 
    :body-style="{
      backgroundColor: '#f0fdf4',
      color: '#14532d',
      padding: '2rem'
    }"
  >
    <template #header>环保提示</template>
    <div class="space-y-2">
      <p>♻️ 请做好垃圾分类</p>
      <p>🌳 节约用纸保护森林</p>
      <p>💧 合理使用水资源</p>
    </div>
  </YCard>
</template>
```
:::

## 交互式阴影卡片
::: demo
```vue
<template>
  <div class="flex gap-4">
    <YCard shadow="always" class="w-1/3">
      <template #header>常驻阴影</template>
      <p>此卡片始终显示阴影效果</p>
    </YCard>

    <YCard shadow="hover" class="w-1/3">
      <template #header>悬停阴影</template>
      <p>鼠标悬停时显示阴影</p>
    </YCard>

    <YCard shadow="never" class="w-1/3">
      <template #header>无阴影模式</template>
      <p>始终不显示阴影</p>
    </YCard>
  </div>
</template>
```
:::

## 复杂布局卡片
::: demo
```vue
<template>
  <YCard>
    <template #image>
      <div class="bg-green-100 p-4 border-b">
        <div class="text-xl font-bold">项目进度</div>
      </div>
    </template>
    <div class="space-y-4">
      <div style="display: flex; justify-content: space-between; padding-left:30px;">
        <div class="font-bold" style="flex:1">完成率</div>
        <div class="text-green-500" style="flex:1">75%</div>
      </div>
      <div class="h-2 bg-gray-200 rounded-full">
        <div class="h-2 bg-green-500 rounded-full w-3/4"></div>
      </div>
      <div class="flex gap-2 mt-4">
        <YButton color="green">
          查看详情
        </YButton>
        <YButton color="gray">
          暂停项目
        </YButton>
      </div>
    </div>
    <template #footer>
      <div class="text-sm text-gray-500">
        下次同步时间：2小时后
      </div>
    </template>
  </YCard>
</template>
```
:::

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

