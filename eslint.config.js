import globals from "globals";
import pluginJs from "@eslint/js";
import tsParser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import pluginVue from "eslint-plugin-vue";


export default [
    // 基础文件匹配配置
    {
        files: ["**/*.{js,mjs,cjs,ts,vue}"],
        ignores: [
            "**/*.sh",
            "node_modules/",
            "dist/",
            "coverage/",
            "**/*.md",
            "**/*.scss",
            "**/*.woff",
            "**/*.ttf",
            "src/test.ts",
            "docs/"
        ],
        rules: {
            "no-undef": "off"
        }
    },

    // JavaScript 基础配置
    pluginJs.configs.recommended,

    // TypeScript 配置
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.json"
            }
        },
        plugins: {
            "@typescript-eslint": tseslint
        },
        rules: {
            "@typescript-eslint/consistent-type-imports": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-explicit-any": "off"
        },
        ignores: [
            "docs/.vitepress/**/*.ts",
        ]
    },

    // Vue 配置
    ...pluginVue.configs["flat/recommended"],
    {
        files: ["**/*.vue"],
        languageOptions: {
            parser: pluginVue.parser,
            parserOptions: {
                parser: {
                    ts: tsParser,
                    js: "espree"
                },
                extraFileExtensions: [".vue"],
                ecmaVersion: 2022,
                sourceType: "module"
            },
            globals: {
                ...globals.browser,
                ...globals.es2021
            }
        },
        rules: {
            "vue/max-attributes-per-line": "off",
            "vue/multi-word-component-names": "off",
            "vue/no-v-html": "off",
            "vue/require-default-prop": "off",
            "vue/html-self-closing": "off",
            "vue/singleline-html-element-content-newline": "off",
            "vue/html-closing-bracket-newline": "off",
        },
    },

    // 全局通用规则
    {
        rules: {

        }
    }
]