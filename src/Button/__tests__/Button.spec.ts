import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import YButton from "../Button";
import styles from "../Button.module.css";

describe("YButton 组件测试", () => {
  // 基础渲染测试
  it("正确渲染默认状态", () => {
    const wrapper = mount(YButton, {
      slots: { default: "Click Me" },
    });

    // 验证默认类名
    expect(wrapper.element.getAttribute("class")).toContain(styles.base);
    expect(wrapper.element.getAttribute("class")).toContain(styles.medium);
    expect(wrapper.element.getAttribute("class")).toContain(styles.square);
    expect(wrapper.element.getAttribute("class")).toContain(
      styles["color-blue"]
    );
    expect(wrapper.element.getAttribute("class")).toContain(styles.hoverEffect);

    // 验证插槽内容
    expect(wrapper.text()).toContain("Click Me");
  });

  // 1. Size Prop 测试
  describe("size 属性测试", () => {
    it("应用 small 尺寸", () => {
      const wrapper = mount(YButton, { props: { size: "small" } });
      expect(wrapper.element.getAttribute("class")).toContain(styles.small);
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles.medium
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(styles.large);
    });

    it("应用 medium 尺寸", () => {
      const wrapper = mount(YButton, { props: { size: "medium" } });
      expect(wrapper.element.getAttribute("class")).toContain(styles.medium);
      expect(wrapper.element.getAttribute("class")).not.toContain(styles.small);
      expect(wrapper.element.getAttribute("class")).not.toContain(styles.large);
    });

    it("应用 large 尺寸", () => {
      const wrapper = mount(YButton, { props: { size: "large" } });
      expect(wrapper.element.getAttribute("class")).toContain(styles.large);
      expect(wrapper.element.getAttribute("class")).not.toContain(styles.small);
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles.medium
      );
    });
  });

  // 2. Color Prop 测试
  describe("color 属性测试", () => {
    it("应用黑色主题", () => {
      const wrapper = mount(YButton, { props: { color: "black" } });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["color-black"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-blue"]
      );
    });

    it("应用灰色主题", () => {
      const wrapper = mount(YButton, { props: { color: "gray" } });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["color-gray"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-blue"]
      );
    });

    it("应用红色主题", () => {
      const wrapper = mount(YButton, { props: { color: "red" } });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["color-red"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-blue"]
      );
    });

    it("应用黄色主题", () => {
      const wrapper = mount(YButton, { props: { color: "yellow" } });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["color-yellow"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-blue"]
      );
    });

    it("应用绿色主题", () => {
      const wrapper = mount(YButton, { props: { color: "green" } });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["color-green"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-blue"]
      );
    });

    it("应用蓝色主题", () => {
      const wrapper = mount(YButton, { props: { color: "blue" } });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["color-blue"]
      );
    });

    it("应用靛蓝色主题", () => {
      const wrapper = mount(YButton, { props: { color: "indigo" } });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["color-indigo"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-blue"]
      );
    });

    it("应用紫色主题", () => {
      const wrapper = mount(YButton, { props: { color: "purple" } });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["color-purple"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-blue"]
      );
    });

    it("应用粉色主题", () => {
      const wrapper = mount(YButton, { props: { color: "pink" } });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["color-pink"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-blue"]
      );
    });
  });

  // 3. Round Prop 测试
  it("应用完全圆角", () => {
    const wrapper = mount(YButton, { props: { round: true } });
    expect(wrapper.element.getAttribute("class")).toContain(styles.round);
    expect(wrapper.element.getAttribute("class")).not.toContain(styles.square);
  });

  // 4. Plain 模式测试
  describe("plain 属性测试", () => {
    it("切换为朴素模式（黑色）", () => {
      const wrapper = mount(YButton, {
        props: {
          plain: true,
          color: "black",
        },
      });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["plain-black"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-black"]
      );
    });

    it("切换为朴素模式（灰色）", () => {
      const wrapper = mount(YButton, {
        props: {
          plain: true,
          color: "gray",
        },
      });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["plain-gray"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-gray"]
      );
    });

    it("切换为朴素模式（红色）", () => {
      const wrapper = mount(YButton, {
        props: {
          plain: true,
          color: "red",
        },
      });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["plain-red"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-red"]
      );
    });

    it("切换为朴素模式（黄色）", () => {
      const wrapper = mount(YButton, {
        props: {
          plain: true,
          color: "yellow",
        },
      });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["plain-yellow"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-yellow"]
      );
    });

    it("切换为朴素模式（绿色）", () => {
      const wrapper = mount(YButton, {
        props: {
          plain: true,
          color: "green",
        },
      });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["plain-green"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-green"]
      );
    });

    it("切换为朴素模式（蓝色）", () => {
      const wrapper = mount(YButton, {
        props: {
          plain: true,
          color: "blue",
        },
      });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["plain-blue"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-blue"]
      );
    });

    it("切换为朴素模式（靛蓝色）", () => {
      const wrapper = mount(YButton, {
        props: {
          plain: true,
          color: "indigo",
        },
      });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["plain-indigo"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-indigo"]
      );
    });

    it("切换为朴素模式（紫色）", () => {
      const wrapper = mount(YButton, {
        props: {
          plain: true,
          color: "purple",
        },
      });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["plain-purple"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-purple"]
      );
    });

    it("切换为朴素模式（粉色）", () => {
      const wrapper = mount(YButton, {
        props: {
          plain: true,
          color: "pink",
        },
      });
      expect(wrapper.element.getAttribute("class")).toContain(
        styles["plain-pink"]
      );
      expect(wrapper.element.getAttribute("class")).not.toContain(
        styles["color-pink"]
      );
    });
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
    expect(icon.classes()).toContain(styles.icon);
    expect(wrapper.text()).toContain("Search"); // 同时渲染文本
  });

  // 6. 边界条件测试
  it("无插槽时不渲染内容", () => {
    const wrapper = mount(YButton);
    expect(wrapper.text()).toBe("");
  });
});
