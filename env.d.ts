/// <reference types="vite/client" />

// CSS Modules 类型声明
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module "*.css" {
  const css: string;
  export default css;
}
