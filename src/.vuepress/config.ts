import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "易语惊人",
  description: "不语则已 易语惊人",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
