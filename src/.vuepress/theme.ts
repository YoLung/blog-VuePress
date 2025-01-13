import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://yiyujingren.cn",

  author: {
    name: "Young",
  },

  logo: "https://mister-hope.com/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",
  repoLabel: '',

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: '<a href="https://beian.miit.gov.cn">鄂ICP备19029534号-1</>|<img src="https://beian.mps.gov.cn/img/logo01.dd7ff50e.png"><a href="https://beian.mps.gov.cn/#/query/webSearch">鄂公网安备42108302000078号</>',
  displayFooter: true,

  // 博客相关
  blog: {
    description: "不语则已 一语惊人",
    intro: "/intro.html",
    medias: {
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  metaLocales: {
    //editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      assets: "fontawesome-with-brands",
    },
  },
});
