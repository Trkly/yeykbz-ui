/* eslint-disable no-unused-vars */
import type { Directive, DirectiveBinding } from "vue";

// 定义 ThrottleBinding 接口，扩展 Vue 的 DirectiveBinding 类型
interface ThrottleBinding extends DirectiveBinding {
  value:
    | {
        handler: (...args: any[]) => void; // 节流函数的处理逻辑
        event?: string; // 触发事件类型，默认为 "click"
        delay?: number; // 节流延迟时间，默认为 1000ms
      }
    | ((...args: any[]) => void); // 或者直接传入一个函数作为处理逻辑
}

// 使用 Map 存储 DOM 元素与对应的事件和处理函数的映射关系
const eventHandlers = new Map<
  HTMLElement,
  { event: string; handler: (...args: any[]) => void }
>();

// 定义节流指令
const throttleDirective: Directive = {
  mounted(el: HTMLElement, binding: ThrottleBinding) {
    // 获取绑定值中的事件类型，默认为 "click"
    const { event = "click" } =
      typeof binding.value === "object" ? binding.value : {};
    // 获取绑定值中的延迟时间，默认为 1000ms
    const delay =
      typeof binding.value === "object" ? binding.value.delay || 1000 : 1000;

    let timer: ReturnType<typeof setTimeout> | null = null; // 定时器变量，用于节流控制

    // 根据绑定值的类型获取实际的处理函数
    const handler =
      typeof binding.value === "function"
        ? binding.value
        : binding.value.handler;

    // 定义节流处理函数
    const throttleHandler = (...args: any[]) => {
      if (!timer) {
        handler(...args); // 如果没有定时器，则执行处理函数
        timer = setTimeout(() => {
          timer = null; // 清除定时器以便下一次触发
        }, delay);
      }
    };

    // 将事件和处理函数存储到 Map 中
    eventHandlers.set(el, { event, handler: throttleHandler });

    // 在元素上绑定事件监听器
    el.addEventListener(event, throttleHandler);
  },
  beforeUnmount(el: HTMLElement) {
    // 从 Map 中获取当前元素的事件和处理函数
    const entry = eventHandlers.get(el);
    if (entry?.event && entry.handler) {
      // 移除事件监听器
      el.removeEventListener(entry.event, entry.handler);
    }
    // 从 Map 中删除该元素的记录
    eventHandlers.delete(el);
  },
};

export default throttleDirective; // 导出节流指令
