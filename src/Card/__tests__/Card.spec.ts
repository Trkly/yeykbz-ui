import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import YCard from "../Card";

describe("YCard 组件测试（Happy DOM 环境）", () => {
  // 基础渲染测试
  it("正确渲染基础卡片结构", async () => {
    const wrapper = mount(YCard, {
      slots: { default: "内容区文本" },
    });

    // Happy DOM 需要异步更新（部分 API 行为差异）
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(wrapper.classes()).toContain("rounded");
    expect(wrapper.find(".text-gray-700").text()).toBe("内容区文本");
  });

  // 测试插槽渲染
  it("渲染 Header 插槽", async () => {
    const wrapper = mount(YCard, {
      slots: { header: "<h2>标题</h2>" },
    });
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(wrapper.find("h2").text()).toBe("标题");
  });

  // 暗黑模式测试（需模拟 class 绑定）
  it("暗黑模式类名生效", async () => {
    const wrapper = mount(YCard, {
      global: {
        // 通过 data 属性模拟暗黑模式
        provide: { darkMode: true },
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(wrapper.classes()).toContain("dark:bg-gray-800");
  });
});
