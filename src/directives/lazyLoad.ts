import { ref, onUnmounted, DirectiveBinding, Directive } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

// 定义 LazyImageBinding 接口，扩展 Vue 的 DirectiveBinding 类型
interface LazyImageBinding extends DirectiveBinding {
  value: string; // 图片的 URL
}

// 定义懒加载指令
const lazyImageDirective: Directive = {
  mounted(el: HTMLImageElement, binding: LazyImageBinding) {
    // 获取绑定值中的图片 URL
    const src = binding.value;

    // 设置 data-src 属性
    el.dataset.src = src;

    // 设置占位符图片（可选）
    el.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="; // 透明的 1x1 像素图片

    const element = ref(el);

    // 使用 useIntersectionObserver
    const { stop } = useIntersectionObserver(
      element,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          const imgEl = element.value;
          if (imgEl) {
            imgEl.src = imgEl.dataset.src || "";
            stop(); // 停止观察
          }
        }
      },
      {
        threshold: 0.1, // 配置选项，可根据需要调整
      }
    );

    // 组件销毁时停止观察
    onUnmounted(() => {
      stop();
    });
  },
};

export default lazyImageDirective; // 导出自定义指令
