import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import YButton from "../Button";

describe("YButton 组件测试", () => {
  // 基础渲染测试
  it("正确渲染默认状态", () => {
    const wrapper = mount(YButton, {
      slots: { default: "Click Me" },
    });

    // 验证默认类名
    expect(wrapper.element.getAttribute("class")).toContain("bg-blue-500");
    expect(wrapper.element.getAttribute("class")).toContain("text-white-500");
    expect(wrapper.element.getAttribute("class")).toContain("rounded-lg");
    expect(wrapper.element.getAttribute("class")).toContain("px-2");
    expect(wrapper.element.getAttribute("class")).toContain("py-2");

    // 验证插槽内容
    expect(wrapper.text()).toContain("Click Me");
  });

  // 1. Size Prop 测试
  describe("size 属性测试", () => {
    it("应用 small 尺寸", () => {
      const wrapper = mount(YButton, { props: { size: "small" } });
      expect(wrapper.element.getAttribute("class")).toContain("px-1");
      expect(wrapper.element.getAttribute("class")).toContain("py-1");
      expect(wrapper.element.getAttribute("class")).toContain("text-sm");
    });

    it("应用 large 尺寸", () => {
      const wrapper = mount(YButton, { props: { size: "large" } });
      expect(wrapper.element.getAttribute("class")).toContain("px-3");
      expect(wrapper.element.getAttribute("class")).toContain("py-2");
      expect(wrapper.element.getAttribute("class")).toContain("text-lg");
    });
  });

  // 2. Color Prop 测试
  it("应用红色主题", () => {
    const wrapper = mount(YButton, { props: { color: "red" } });
    expect(wrapper.element.getAttribute("class")).toContain("bg-red-500");
    expect(wrapper.element.getAttribute("class")).toContain("border-red-500");
  });

  // 3. Round Prop 测试
  it("应用完全圆角", () => {
    const wrapper = mount(YButton, { props: { round: true } });
    expect(wrapper.element.getAttribute("class")).toContain("rounded-full");
    expect(wrapper.element.getAttribute("class")).not.toContain("rounded-lg");
  });

  // 4. Plain 模式测试
  it("切换为朴素模式", () => {
    const wrapper = mount(YButton, {
      props: {
        plain: true,
        color: "green",
      },
    });
    expect(wrapper.element.getAttribute("class")).toContain("bg-green-100");
    expect(wrapper.element.getAttribute("class")).toContain("text-green-500");
  });

  // 5. Icon 插槽测试
  it("渲染图标", () => {
    const wrapper = mount(YButton, {
      props: { icon: "search" },
      slots: { default: "Search" },
    });

    const icon = wrapper.find("i");
    expect(icon.exists()).toBe(true);
    expect(icon.classes()).toContain("i-ic-baseline-search");
    expect(wrapper.text()).toContain("Search"); // 同时渲染文本
  });

  // 6. 边界条件测试
  it("无插槽时不渲染内容", () => {
    const wrapper = mount(YButton);
    expect(wrapper.text()).toBe("");
  });
});
