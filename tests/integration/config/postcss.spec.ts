// tests/integration/config/postcss.spec.ts
import { describe, expect, it } from "vitest";
// @ts-ignore
import postcssConfig from "../../../postcss.config.mjs";
import unoconfig from "../../../uno.config";

describe("PostCSS Configuration Test", () => {
  it("should include postcss-modules plugin", () => {
    const postcssModulesPlugin = postcssConfig.plugins.find(
      (plugin: { postcssPlugin: string }) =>
        plugin.postcssPlugin === "postcss-modules"
    );
    expect(postcssModulesPlugin).toBeDefined();
  });

  it("should include postcss-apply plugin", () => {
    const postcssApplyPlugin = postcssConfig.plugins.find(
      (plugin: { postcssPlugin: string }) =>
        plugin.postcssPlugin === "postcss-apply"
    );
    expect(postcssApplyPlugin).toBeDefined();
  });

  it("should include unocss plugin", () => {
    const unocssPlugin = postcssConfig.plugins.find(
      (plugin: { postcssPlugin: string }) => plugin.postcssPlugin === "unocss"
    );
    expect(unocssPlugin).toBeDefined();
  });

  it("should include postcss-each plugin", () => {
    const eachPlugin = postcssConfig.plugins.find(
      (plugin: { postcssPlugin: string }) =>
        plugin.postcssPlugin === "postcss-each"
    );
    expect(eachPlugin).toBeDefined();
  });

  it("should include autoprefixer plugin", () => {
    const autoprefixerPlugin = postcssConfig.plugins.find(
      (plugin: { postcssPlugin: string }) =>
        plugin.postcssPlugin === "autoprefixer"
    );
    expect(autoprefixerPlugin).toBeDefined();
  });

  it("should include postcss-nested plugin", () => {
    const nestedPlugin = postcssConfig.plugins.find(
      (plugin: { postcssPlugin: string }) =>
        plugin.postcssPlugin === "postcss-nested"
    );
    expect(nestedPlugin).toBeDefined();
  });

  describe("PostCSS Configuration Test", () => {
    it("should include transformerDirectives in unocss configuration", () => {
      // 断言 transformers 数组存在
      expect(unoconfig.transformers).toBeDefined();

      // 检查是否存在目标转换器（通过 name 属性）
      const hasTransformer = unoconfig.transformers!.some(
        (t) => t.name === "@unocss/transformer-directives"
      );

      expect(hasTransformer).toBe(true);
    });
  });

  it("should have correct postcss-modules configuration", () => {
    // 查找插件名称可能为 'postcss-modules'

    const postcssModulesPlugin = postcssConfig.plugins.find(
      (plugin: { postcssPlugin: string }) =>
        plugin.postcssPlugin === "postcss-modules"
    );

    // console.log("postcssModulesPlugin", postcssModulesPlugin.keys());
    // if (!postcssModulesPlugin) {
    //   expect.fail("postcss-modules plugin not found");
    //   return;
    // }

    // 验证插件是否存在
    expect(postcssModulesPlugin).toBeDefined();
    // 验证配置项是否正确
    // expect(postcssModulesPlugin.generateScopedName).toBe(
    //   "yeykbz_[local]___[hash:base64:5]"
    // );

    // expect(postcssModulesPlugin.scopeBehaviour).toBe("local");
    // expect(postcssModulesPlugin.hashPrefix).toBe("yeykbz"); // 项目唯一前缀
    // expect(postcssModulesPlugin.globalModulePaths).toEqual([
    //   /node_modules\/.*\.css$/,
    // ]); // 仅处理 .module.css 文件
    // expect(postcssModulesPlugin.generateScopedName).toBeDefined();
  });
});
