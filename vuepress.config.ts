// Theme
import { hopeTheme } from "vuepress-theme-hope";

// Bundler
import { viteBundler } from "@vuepress/bundler-vite";

// Navbar and Sidebar
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";

import * as path from "path";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export const domain = "https://asusrouter.vaskivskyi.com";

export function getBase() {
  let base = "/";
  return base;
}

const pagePatterns = ["**/*.md", "!.vuepress", "!node_modules"];

const conf = {
  base: getBase(),
  title: "AsusRouter",
  description:
    "Monitor and control your AsusWRT-powered router from a Python environment or from Home Assistant",

  dest: "dist",
  public: "public",
  temp: ".temp",
  cache: ".cache",

  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          "@theme": path.resolve(
            "node_modules/vuepress-theme-hope/lib/client/components"
          ),
        },
      },
    },
    vuePluginOptions: {},
  }),

  pagePatterns,

  head: [
    // Manifest
    [
      "link",
      {
        rel: "manifest",
        href: `${getBase()}site.webmanifest`,
      },
    ],
    // Normal favicon
    ["link", { rel: "icon", href: "/icon.svg" }],
  ],

  theme: hopeTheme({
    // --------------------
    // Navbar settings
    navbar: navbar,
    // Display icons in navbar
    navbarIcon: true,
    // Placement of elements in navbar
    navbarLayout: {
      start: ["Brand"],
      center: ["Links"],
      end: ["Language", "Repo", "Outlook", "Search"],
    },
    // Logo
    logo: "logo.svg",
    logoDark: "logoDark.svg",
    // Title for the navbar
    navTitle: "AsusRouter",
    // Repository
    repo: "Vaskivskyi/ha-asusrouter",
    repoDisplay: true,
    repoLabel: "Repository",
    // Autohide navbar ["always", "mobile", "none"]
    navbarAutoHide: "mobile",
    // Hide navbar on mobile
    hideSiteNameOnMobile: true,

    // --------------------
    // Sidebar settings
    // For automatic modes ["structure", "heading"]
    sidebar: sidebar,
    // Display icons in sidebar
    sidebarIcon: true,
    // Sorter ["readme", "order", "date", "date-desc", "title", "filename"]
    sidebarSorter: "readme",
    // Depth of the sidebar
    headerDepth: 2,

    // --------------------
    // Route navigation settings
    // Breadcrumb
    breadcrumb: true,
    breadcrumbIcon: true,
    // Bottom links
    prevLink: true,
    nextLink: true,

    // --------------------
    // Page header settings
    // Show icon
    titleIcon: true,
    // Show page info: false / ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"]
    // Unfortunately, it does not allow setting edit time in the current version
    pageInfo: ["ReadingTime", "Category", "Tag"],

    // --------------------
    // Meta settings
    // Show last updated time at the bottom of the posts
    lastUpdated: true,
    contributors: false,
    // Edit link
    editLink: true,
    editLinkPattern: ":repo/edit/:branch/:path",
    docsRepo: "Vaskivskyi/docs-asusrouter",
    docsBranch: "main",
    docsDir: "docs",

    // --------------------
    // Footer
    footer:
      'AsusRouter library, integration and webpage are maintained by <a href="https://github.com/Vaskivskyi" target="_blank">@Vaskivskyi</a><br /><a href="https://www.buymeacoffee.com/vaskivskyi" target="_blank">-= ☕ Support development =-</a><br /><br />AsusRouter is an independent project, not affiliated with ASUSTek Computer Inc. <a href="/legal">Disclaimer</a>',
    copyright:
      '<br />a part of <a href="https://onesimpleproject.com" target="_blank">One Simple Project</a>',
    displayFooter: true,

    // --------------------
    // Dark mode ["switch", "toggle", "auto", "enable", "disable"]
    darkmode: "switch",
    fullscreen: false,
    backToTop: true,
    pure: false,
    print: true,

    // --------------------
    // Markdown settings
    markdown: {
      alert: true,
      align: true,
      figure: true,
      footnote: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
    },

    // --------------------
    // Plugins
    plugins: {
      copyCode: {
        showInMobile: true,
      },
      docsearch: {
        apiKey: "69635b7a521270caf9878222c3ec8c44",
        appId: "PQ7YIUCYH3",
        indexName: "asusrouter-vaskivskyi",
      },
      git: true,
      icon: {
        assets: "fontawesome-with-brands",
      },
      sitemap: {
        hostname: domain,
      },
    },
  }),

  debug: false,

  plugins: [
    [
      googleAnalyticsPlugin({
        id: "G-DFHSWJ3ELB",
      }),
    ],
  ],
};

export default conf;
