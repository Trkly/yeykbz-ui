import globals from "globals";
import pluginJs from "@eslint/js";
import tsParser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginVue from "eslint-plugin-vue";


/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
    {
        languageOptions: {
            globals: globals.browser,
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module'
            }
        },
        plugins: {
            '@typescript-eslint': tseslint
        }
    },
    pluginJs.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    {
        ignores: [
            "**/*.sh",        // 忽略所有 .sh 文件
            "node_modules/",  // 忽略 node_modules 目录
            "lib/",           // 忽略 lib 目录
            "coverage/",      // 忽略 coverage 目录
            "**/*.md",        // 忽略所有 .md 文件
            "**/*.scss",      // 忽略所有 .scss 文件
            "**/*.woff",      // 忽略所有 .woff 文件
            "**/*.ttf",       // 忽略所有 .ttf 文件
            "src/test.ts",   // 忽略特定文件
            "dist/"           // 忽略 dist 目录
        ]
    },
];