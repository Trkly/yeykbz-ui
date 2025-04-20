# v-debounce 防抖指令

用于防止高频事件触发的指令，支持自定义事件类型和延迟时间。

## 基本用法

<demo vue="./Debounce_1.vue" />

## 自定义配置

### 设置输入框防抖
<demo vue="./Debounce_2.vue" />

### 组合使用配置
<demo vue="./Debounce_3.vue" />

## 配置项说明

### 指令值格式
```ts
type DirectiveValue = 
  | ((...args: any[]) => void)                  // 直接传入处理函数
  | { 
      handler: (...args: any[]) => void        // 事件处理函数
      event?: string                           // 事件类型 (默认: 'click')
      delay?: number                           // 延迟时间 (默认: 1000ms)
    }
```

### 参数说明
| 参数    | 说明                     | 类型       | 默认值     |
|---------|--------------------------|------------|------------|
| handler | 事件处理函数             | Function   | -          |
| event   | 监听的事件类型           | string     | 'click'    |
| delay   | 防抖延迟时间（毫秒）     | number     | 1000       |

## 特性说明

1. **自动事件清理**  
   组件卸载时会自动移除事件监听，无需手动处理

2. **多事件支持**  
   支持任意 DOM 事件类型：
   ```vue
   <!-- 滚动事件防抖 -->
   <div v-debounce="{ handler: handleScroll, event: 'scroll' }"></div>
   
   <!-- 鼠标移动事件防抖 -->
   <div v-debounce="{ handler: handleMouseMove, event: 'mousemove' }"></div>
   ```

3. **参数传递**  
   支持原生事件参数传递：
   ```vue
   <input v-debounce="handleInput">
   
   <script setup>
   // 会自动接收 event 参数
   const handleInput = (e) => {
     console.log(e.target.value)
   }
   </script>
   ```

## 最佳实践

### 合理设置延迟时间
```vue
<template>
  <!-- 按钮操作建议 1000-2000ms -->
  <button v-debounce="{ handler: submit, delay: 1500 }">提交</button>
  
  <!-- 输入建议 300-500ms -->
  <input v-debounce="{ handler: search, event: 'input', delay: 400 }">
  
  <!-- 高频事件建议 100-200ms -->
  <div v-debounce="{ handler: trackMouse, event: 'mousemove', delay: 150 }"></div>
</template>
```