// postcss.config.mjs
import postcssModules from 'postcss-modules'
import postcssApply from 'postcss-apply'    // 新增：显式导入 apply 插件
import unocss from '@unocss/postcss'        // 新增：显式导入 unocss 插件
import each from 'postcss-each'             // 新增：显式导入 each 插件
// import simpleVars from 'postcss-simple-vars' // 新增：显式导入 simple-vars 插件
import autoprefixer from 'autoprefixer'  // 新增：显式导入 autoprefixer 插件
import nested from 'postcss-nested' // 新增导入的 postcss-nested 插件
import transformerDirectives from '@unocss/transformer-directives'; // 新增：导入 UnoCSS 的 transformer-directives 插件
export default {
  plugins: [

    // simpleVars(),        // ✅ 正确：初始化 simple-vars 插件 变量解析
    each(),              // ✅ 正确：初始化 each 插件 循环解析
    nested(),           // ✅ 正确：初始化 postcss-nested 插件 嵌套解析
    postcssApply(),       // ✅ 正确：直接调用插件函数 apply 插件
    unocss({
      transformers: [
        transformerDirectives() // ✅ 支持 UnoCSS 动态类名解析
      ]
    }),             // ✅ 正确：初始化 UnoCSS 插件 UnoCSS集成
    autoprefixer(), // ✅ 正确：初始化 autoprefixer 插件 前缀解析
    postcssModules({      // ✅ 正确：直接使用导入的模块 模块化处理
      generateScopedName: 'y__[local]___[hash:base64:5]',
      localsConvention: 'camelCaseOnly',
      getJSON: () => ({})
    })
  ]
}