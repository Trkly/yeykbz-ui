import {defineConfig, presetUno, presetAttributify, presetIcons} from 'unocss'
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
    safelist: safelist,
    presets: [
        presetUno(), // 核心预设
        presetAttributify({ // 属性化模式
            prefix: 'uno-', // 防止与Vue原生属性冲突
            prefixedOnly: true
        }),
        presetIcons()
    ],
    shortcuts: {
        'flex-center': 'flex justify-center items-center',
        'wh-full': 'w-full h-full'
    },
    rules: [
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })], // 自定义规则
        // 显式定义边框宽度
        ["border", { border: "2px dashed #ADD8E6" }],
        ["border-t", { "border-top": "2px dashed #ADD8E6" }],
        ["border-b", { "border-bottom": "2px dashed #ADD8E6" }],
        ["flex-c", {"display": "flex", "justify-content": "center", "align-items": "center"}]
    ],
    content: {
        filesystem: [
            './src/**/*.{vue,ts,tsx}' // 组件库源码路径
        ]
    },
})