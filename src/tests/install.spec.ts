import { createApp } from "vue";
import { install, YeykbzUI } from "../install";
import { YButton, YCard } from "../index";
import { beforeEach, describe, expect, it } from "vitest";

describe("install.ts 测试", () => {
  let app: ReturnType<typeof createApp>;

  beforeEach(() => {
    app = createApp({});
  });

  // 测试全局安装函数
  describe("install 函数", () => {
    it("应该正确注册 YButton 组件", () => {
      // @ts-ignore
      install(app);
      expect(app.component("YButton")).toBe(YButton);
    });

    it("应该正确注册 YCard 组件", () => {
      // @ts-ignore
      install(app);
      expect(app.component("YCard")).toBe(YCard);
    });
  });

  // 测试默认导出对象
  describe("YeykbzUI 对象", () => {
    it("应该包含 install 方法", () => {
      expect(YeykbzUI.install).toBe(install);
    });

    it("应该包含 version 属性", () => {
      expect(YeykbzUI.version).toBe("__VERSION__");
    });
  });
});
