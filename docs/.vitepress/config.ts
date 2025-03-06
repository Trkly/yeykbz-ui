import { demoBlockPlugin } from "vitepress-theme-demoblock";
import sidebar from "./theme/sidebar";
const config = {
  title: "🔨  Yeykbz-UI",
  description: "基于Vite和Vue3搭建的组件库",
  themeConfig: {
    logo: "/skull.png",
    siteTitle: "Yeykbz-UI",
    nav: [
      { text: "首页", link: "/" },
      { text: "起步", link: "/guide/index", activeMatch: "/guide/" },
      {
        text: "组件",
        link: "/components/Button/index",
        activeMatch: "/components/Button/",
      },
    ],
    sidebar,
    docFooter:{
      prev: false,
      next: false
    }
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin);
    },
  },
};
export default config;
