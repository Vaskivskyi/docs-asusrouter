import { navbar } from "./navbar";
import { sidebar } from "./sidebar";
import * as path from "path";
import { defaultTheme } from '@vuepress/theme-default';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export const domain = 'https://asusrouter.vaskivskyi.com';

export function getBase() {
  let base = "/";
  return base;
}

const pagePatterns = ["**/*.md", "!.vuepress", "!node_modules"];

const conf = {
  base: getBase(),
  title: "AsusRouter",
  description: "Monitor and control your AsusWRT-powered router from Home Assistant",

  dest: "dist",
  public: "public",
  temp: ".temp",
  cache: ".cache",

  pagePatterns,

  head: [
    ["link", {
      rel: "manifest",
      href: `${ getBase() }site.webmanifest`,
    }],
  ],

  theme: defaultTheme({
    editLinkText: "📖 Edit this page on GitHub to make it better",
    contributors: false,
    docsDir: "docs",
    docsRepo: "Vaskivskyi/docs-asusrouter",
    navbar: navbar,
    repo: "Vaskivskyi/ha-asusrouter",
    sidebar: sidebar,
    sidebarDepth: 2,
    themePlugins: {
      git: true,
    },
  }),

  debug: false,

  plugins: [
    [
      docsearchPlugin({
        apiKey: "69635b7a521270caf9878222c3ec8c44",
        indexName: "asusrouter-vaskivskyi",
        appId: "PQ7YIUCYH3",
        locales: {
          "/": {
            placeholder: "Search",
          },
        },
      }),
    ],
    [
      googleAnalyticsPlugin({
        id: "G-DFHSWJ3ELB",
      }),
    ],
    [
      sitemapPlugin({
        hostname: domain,
      }),
    ],
    [
      path.resolve(__dirname, "./docs/.vuepress/defaultPageClassPlugin.ts"),
    ],
    [
      mdEnhancePlugin({
        footnote: true,
      }),
    ],
  ],
}

export default conf;
