# v-lazyLoad 图片懒加载指令

用于实现图片的视口懒加载，优化页面加载性能。

## 基本用法

<demo vue="./Lazyload_1.vue" />

## 自定义配置

### 自定义占位符
<demo vue="./Lazyload_2.vue" />

## 参数说明

| 参数  | 说明               | 类型   | 必需  |
|-------|--------------------|--------|-------|
| value | 图片实际加载地址   | string | 是    |

## 实现特性

1. **智能加载**
   - 使用 `IntersectionObserver` API 实现
   - 自动处理滚动容器检测
   - 支持任何包含滚动容器的布局

2. **性能优化**
   - 默认使用 1x1 透明占位图
   - 加载完成后自动解除观察
   - 组件卸载自动清理资源

3. **视觉过渡**
   ```css
   /* 推荐添加加载过渡效果 */
   img {
     transition: opacity 0.3s ease;
     opacity: 0;
   }
   img[src] {
     opacity: 1;
   }
   ```

## 最佳实践


### 响应式图片处理
```vue
<template>
  <picture>
    <source 
      v-lazyLoad="`/images/hero-1600.jpg`"
      media="(min-width: 1200px)"
    >
    <source
      v-lazyLoad="`/images/hero-800.jpg`"
      media="(min-width: 800px)"
    >
    <img 
      v-lazyLoad="`/images/hero-400.jpg`"
      alt="响应式图片"
    >
  </picture>
</template>
```

## 注意事项

1. **浏览器兼容性**
   - 需要 [IntersectionObserver](https://caniuse.com/intersectionobserver) 支持
   - 对旧版浏览器需添加 polyfill：
     ```bash
     npm install intersection-observer
     ```
     ```js
     // main.js
     import 'intersection-observer'
     ```

2. **性能调优**
   ```js
   // 可全局调整 IntersectionObserver 参数
   const observer = new IntersectionObserver(callback, {
     rootMargin: '0px 0px 200px 0px', // 提前200px加载
     threshold: 0.01
   })
   ```

3. **SEO 优化**
   - 建议配合 `<noscript>` 使用：
     ```vue
     <template>
       <img v-lazyLoad="imageUrl">
       <noscript>
         <img :src="imageUrl" alt="备用图片">
       </noscript>
     </template>
     ```

## 类型定义
```typescript
interface LazyImageBinding extends DirectiveBinding {
  value: string
}
```

## 扩展配置（修改源码）

可通过修改指令源码实现以下扩展：
```typescript
// 1. 自定义默认占位图
const DEFAULT_PLACEHOLDER = '你的默认占位图地址'

// 2. 添加加载失败处理
el.onerror = () => {
  el.src = '/path/to/error-image.png'
}

// 3. 添加加载完成回调
const loadHandler = () => {
  el.classList.add('loaded')
}
el.addEventListener('load', loadHandler)
```