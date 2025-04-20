import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import YCard from "../Card.vue";
import style from "../Card.module.css"; // 导入 CSS Modules
import { h } from "vue";

describe("YCard 组件测试", () => {
  // 基础渲染测试
  it("正确渲染默认状态", () => {
    const wrapper = mount(YCard, {
      slots: { default: "卡片内容" },
    });

    // 验证默认类名
    expect(wrapper.element.classList.contains(style.cardBase)).toBe(true);
    expect(wrapper.element.classList.contains(style.shadowAlways)).toBe(true);

    // 验证插槽内容
    expect(wrapper.text()).toContain("卡片内容");
  });

  // 1. Shadow Prop 测试
  describe("shadow 属性测试", () => {
    it("应用 always 阴影", () => {
      const wrapper = mount(YCard, { props: { shadow: "always" } });
      expect(wrapper.element.classList.contains(style.shadowAlways)).toBe(true);
      expect(wrapper.element.classList.contains(style.shadowHover)).toBe(false);
      expect(wrapper.element.classList.contains(style.shadowNever)).toBe(false);
    });

    it("应用 hover 阴影", () => {
      const wrapper = mount(YCard, { props: { shadow: "hover" } });
      expect(wrapper.element.classList.contains(style.shadowHover)).toBe(true);
      expect(wrapper.element.classList.contains(style.shadowAlways)).toBe(
        false,
      );
      expect(wrapper.element.classList.contains(style.shadowNever)).toBe(false);
    });

    it("应用 never 阴影", () => {
      const wrapper = mount(YCard, { props: { shadow: "never" } });
      expect(wrapper.element.classList.contains(style.shadowNever)).toBe(true);
      expect(wrapper.element.classList.contains(style.shadowAlways)).toBe(
        false,
      );
      expect(wrapper.element.classList.contains(style.shadowHover)).toBe(false);
    });
  });

  // 2. Body Style Prop 测试
  it("应用自定义 bodyStyle", () => {
    const wrapper = mount(YCard, {
      props: {
        bodyStyle: {
          backgroundColor: "#f0f0f0",
          color: "#333",
          padding: "20px",
        },
      },
      slots: { default: "自定义样式内容" },
    });

    // 验证自定义样式
    expect(wrapper.find(`.${style.contentBase}`).attributes("style")).toContain(
      "background-color: #f0f0f0;",
    );
    expect(wrapper.find(`.${style.contentBase}`).attributes("style")).toContain(
      "color: #333;",
    );
    expect(wrapper.find(`.${style.contentBase}`).attributes("style")).toContain(
      "padding: 20px;",
    );
  });

  // 3. 图片插槽测试
  it("渲染图片插槽", () => {
    const wrapper = mount(YCard, {
      slots: {
        image: () =>
          h("img", {
            src: "https://picsum.photos/600/200",
            alt: "示例图片",
            class: "w-full h-48 object-cover",
          }),
      },
    });

    const imageSlot = wrapper.find(
      `.${style.borderSection}.${style.flexCenter}`,
    );
    expect(imageSlot.exists()).toBe(true);
    expect(imageSlot.find("img").exists()).toBe(true);
    expect(imageSlot.find("img").attributes("src")).toBe(
      "https://picsum.photos/600/200",
    );
  });

  // 4. Header 插槽测试
  it("渲染 Header 插槽", () => {
    const wrapper = mount(YCard, {
      slots: {
        header: () => h("div", "卡片标题"),
      },
    });

    const headerSlot = wrapper.find(
      `.${style.borderSection}.${style.flexCenter}.border-b.p-4`,
    );
    expect(headerSlot.exists()).toBe(true);
    expect(headerSlot.text()).toContain("卡片标题");
  });

  // 5. Footer 插槽测试
  it("渲染 Footer 插槽", () => {
    const wrapper = mount(YCard, {
      slots: {
        footer: () => h("div", "卡片底部"),
      },
    });

    const footerSlot = wrapper.find(
      `.${style.borderSection}.${style.flexCenter}.border-t.p-4`,
    );
    expect(footerSlot.exists()).toBe(true);
    expect(footerSlot.text()).toContain("卡片底部");
  });

  // 6. 组合插槽测试
  it("渲染图片、Header、内容和 Footer 插槽", () => {
    const wrapper = mount(YCard, {
      slots: {
        image: () =>
          h("img", {
            src: "https://picsum.photos/600/200",
            alt: "示例图片",
            class: "w-full h-48 object-cover",
          }),
        header: () => h("div", "卡片标题"),
        default: () => h("div", "卡片内容"),
        footer: () => h("div", "卡片底部"),
      },
    });

    // 验证图片插槽
    const imageSlot = wrapper.find(
      `.${style.borderSection}.${style.flexCenter}`,
    );
    expect(imageSlot.exists()).toBe(true);
    expect(imageSlot.find("img").exists()).toBe(true);
    expect(imageSlot.find("img").attributes("src")).toBe(
      "https://picsum.photos/600/200",
    );

    // 验证 Header 插槽
    const headerSlot = wrapper.find(
      `.${style.borderSection}.${style.flexCenter}.border-b.p-4`,
    );
    expect(headerSlot.exists()).toBe(true);
    expect(headerSlot.text()).toContain("卡片标题");

    // 验证内容插槽
    const contentSlot = wrapper.find(`.${style.contentBase}`);
    expect(contentSlot.exists()).toBe(true);
    expect(contentSlot.text()).toContain("卡片内容");

    // 验证 Footer 插槽
    const footerSlot = wrapper.find(
      `.${style.borderSection}.${style.flexCenter}.border-t.p-4`,
    );
    expect(footerSlot.exists()).toBe(true);
    expect(footerSlot.text()).toContain("卡片底部");
  });

  // 7. 边界条件测试
  it("无插槽时不渲染内容", () => {
    const wrapper = mount(YCard);
    expect(wrapper.text()).toBe("");
  });
});
