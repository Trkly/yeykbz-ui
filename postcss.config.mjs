// postcss.config.mjs
import postcssModules from 'postcss-modules'
import postcssApply from 'postcss-apply'
import unocss from '@unocss/postcss'
import each from 'postcss-each'
import autoprefixer from 'autoprefixer'
import nested from 'postcss-nested'
import transformerDirectives from '@unocss/transformer-directives'

export default {
  plugins: [
    each(),                    // ✅ 循环语法支持
    nested(),                  // ✅ 嵌套语法支持
    postcssApply(),            // ✅ CSS 变量应用
    unocss({                   // ✅ UnoCSS 集成
      transformers: [transformerDirectives()]
    }),
    autoprefixer(),            // ✅ 自动前缀
    postcssModules({           // ✅ CSS 模块化
      generateScopedName: 'y__[local]___[hash:base64:5]',
      localsConvention: 'camelCaseOnly',
      getJSON: () => ({})      // 必须定义（即使为空函数）
    })
  ]
}