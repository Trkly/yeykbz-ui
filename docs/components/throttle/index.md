# v-throttle 节流指令

用于控制高频事件触发频率的指令，支持自定义事件类型和间隔时间。

## 基本用法

<demo vue="./Throttle_1.vue" />

## 自定义配置

### 设置滚动节流
<demo vue="./Throttle_2.vue" />

### 组合使用配置
<demo vue="./Throttle_3.vue" />

## 配置项说明

### 指令值格式
```ts
type DirectiveValue = 
  | ((...args: any[]) => void)                  // 直接传入处理函数
  | { 
      handler: (...args: any[]) => void        // 事件处理函数
      event?: string                           // 事件类型 (默认: 'click')
      delay?: number                           // 间隔时间 (默认: 1000ms)
    }
```

### 参数说明
| 参数    | 说明                     | 类型       | 默认值     |
|---------|--------------------------|------------|------------|
| handler | 事件处理函数             | Function   | -          |
| event   | 监听的事件类型           | string     | 'click'    |
| delay   | 事件间隔时间（毫秒）     | number     | 1000       |

## 特性说明

1. **高频事件控制**  
   确保在指定时间间隔内只执行一次：
   ```vue
   <!-- 鼠标移动节流 -->
   <div v-throttle="{ handler: trackMouse, event: 'mousemove', delay: 100 }"></div>
   ```

2. **首触发立即执行**  
   首次事件会立即触发，后续事件按间隔执行

3. **自动资源回收**  
   组件卸载时自动移除事件监听和定时器

## 最佳实践

### 合理设置间隔时间
```vue
<template>
  <!-- 按钮点击建议 1000-2000ms -->
  <button v-throttle="handleClick">重要操作</button>
  
  <!-- 滚动事件建议 200-500ms -->
  <div v-throttle="{ handler: onScroll, delay: 300 }"></div>
  
  <!-- 高频监听建议 50-100ms -->
  <canvas v-throttle="{ handler: draw, event: 'mousemove' }"></canvas>
</template>
```


## 注意事项

1. **与防抖的区别**  
   | 场景         | 节流                     | 防抖                     |
   |-------------|--------------------------|--------------------------|
   | 按钮连续点击 | 每秒触发1次              | 最后一次点击后触发       |
   | 窗口resize  | 间隔触发                 | 停止调整后触发           |
   | 搜索建议     | 不适用                   | 输入停止后触发           |

2. **异步操作处理**  
   ```vue
   <template>
     <button 
       v-throttle="fetchData" 
       :disabled="isLoading"
     >
       {{ isLoading ? '加载中...' : '获取数据' }}
     </button>
   </template>

   <script setup>
   const isLoading = ref(false)
   
   const fetchData = async () => {
     isLoading.value = true
     await api.getData()
     isLoading.value = false
   }
   </script>
   ```

3. **不要与原生事件混用**  
   ```vue
   <!-- 错误示例 -->
   <button 
     v-throttle="handleClick"
     @click="handleClick"
   ></button>
   ```

## 类型定义
```typescript
interface ThrottleOptions {
  /** 事件处理函数 */
  handler: (...args: any[]) => void
  /** 事件类型 (默认: 'click') */
  event?: string
  /** 事件间隔时间 (默认: 1000ms) */
  delay?: number
}

type ThrottleBinding = ThrottleOptions | ((...args: any[]) => void)
```