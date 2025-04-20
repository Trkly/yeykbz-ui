import { createApp } from "vue";
import { withInstall } from "../withInstall";
import { YButton, YCard } from "../../";
import { beforeEach, describe, expect, it } from "vitest";

describe("withInstall.ts 测试", () => {
  let app: ReturnType<typeof createApp>;

  beforeEach(() => {
    app = createApp({});
  });

  // 测试 withInstall 函数
  describe("withInstall 函数", () => {
    it("应该为 YButton 组件添加 install 方法", () => {
      const YButtonWithInstall = withInstall(YButton);
      expect(typeof YButtonWithInstall.install).toBe("function");
    });

    it("应该为 YCard 组件添加 install 方法", () => {
      const YCardWithInstall = withInstall(YCard);
      expect(typeof YCardWithInstall.install).toBe("function");
    });
  });

  // 测试 install 方法
  describe("install 方法", () => {
    it("应该正确注册 YButton 组件", () => {
      const YButtonWithInstall = withInstall(YButton);
      YButtonWithInstall.install!(app);
      expect(app.component("YButton")).toBe(YButton);
    });

    it("应该正确注册 YCard 组件", () => {
      const YCardWithInstall = withInstall(YCard);
      YCardWithInstall.install!(app);
      expect(app.component("YCard")).toBe(YCard);
    });
  });
});
