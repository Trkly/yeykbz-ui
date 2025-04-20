import type { Directive, DirectiveBinding } from "vue";

// 定义 LazyImageBinding 接口，扩展 Vue 的 DirectiveBinding 类型
interface LazyImageBinding extends DirectiveBinding {
  value: string; // 图片的 URL
}

// 使用 IntersectionObserver 监听元素进入视口
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target as HTMLImageElement;
      const src = el.dataset.src;
      if (src) {
        el.src = src; // 设置图片的 src 属性
        observer.unobserve(el); // 停止观察该元素
      }
    }
  });
});

// 定义懒加载指令
const lazyImageDirective: Directive = {
  mounted(el: HTMLImageElement, binding: LazyImageBinding) {
    // 获取绑定值中的图片 URL
    const src = binding.value;
    // 仅在浏览器环境执行
    if (typeof window === "undefined") return;
    // 设置 data-src 属性
    el.dataset.src = src;

    // 设置占位符图片（可选）
    el.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="; // 透明的 1x1 像素图片

    // 开始观察该元素
    observer.observe(el);
  },
  beforeUnmount(el: HTMLImageElement) {
    // 停止观察该元素
    observer.unobserve(el);
  },
};

export default lazyImageDirective; // 导出自定义指令
