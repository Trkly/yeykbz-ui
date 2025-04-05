import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import * as dotenv from "dotenv";

dotenv.config(); // 加载环境变量配置文件
const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];
const safelist = [
  ...["shadow-md", "shadow-none", "hover:shadow-md"],
  ...colors.map((v) => `bg-${v}-100`),
  ...colors.map((v) => `bg-${v}-400`),
  ...colors.map((v) => `bg-${v}-500`),
  ...colors.map((v) => `hover:bg-${v}-100`),
  ...colors.map((v) => `hover:bg-${v}-300`),
  ...colors.map((v) => `hover:bg-${v}-400`),
  ...colors.map((v) => `hover:bg-${v}-500`),
  ...colors.map((v) => `border-${v}-400`),
  ...colors.map((v) => `border-${v}-500`),
  ...colors.map((v) => `text-${v}-500`),
  ...colors.map((v) => `hover:text-${v}-500`),
  "text-white",
  ...Array.from({ length: 8 }, (_, i) => `px-${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `py-${i + 1}`),
  ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),
  ...["rounded-full", "rounded-lg"],
  ...[
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
  ].map((v) => `i-ic-baseline-${v}`),
];

export default defineConfig({
  // eslint-disable-next-line no-undef
  envMode: process.env.NODE_ENV === "production" ? "build" : "dev",
  safelist: safelist,
  content: {
    pipeline: {
      exclude: [
        /node_modules/, // 排除 node_modules 目录
      ],
    },
    filesystem: [
      "./src/**/*.{vue,ts,tsx}", // 组件库源码路径
      "./src/**/*.module.css", // 包含模块化 CSS 文件
    ],
  },
  presets: [
    presetUno(), // 核心预设
    presetAttributify({
      // 属性化模式
      prefix: "y-", // 原子类全局前缀，防止与Vue原生属性冲突
      prefixedOnly: true,
    }),
    presetIcons(),
  ],
  shortcuts: {
    "flex-center": "flex justify-center items-center",
    "wh-full": "w-full h-full",
  },
  rules: [
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })], // 自定义规则
    // 显式定义边框宽度
    ["border", { border: "2px dashed #ADD8E6" }],
    ["border-t", { "border-top": "2px dashed #ADD8E6" }],
    ["border-b", { "border-bottom": "2px dashed #ADD8E6" }],
    [
      "flex-c",
      { display: "flex", "justify-content": "center", "align-items": "center" },
    ],
  ],
  transformers: [
    transformerDirectives(), // 启用@apply指令支持 启用动态类名解析
    transformerVariantGroup(), // 支持样式分组
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      none: "none",
    },
  },
});
