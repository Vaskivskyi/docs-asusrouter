import type { SidebarConfig } from "@vuepress/theme-default";
import {
  getFiles,
  getFilesPushFront,
  getFilesRecursive,
  getFilesRev,
} from "./navbar";
import { default as deviceList } from "./docs/devices/map.json" assert { type: "json" };

export const sidebar: SidebarConfig = {
  "/library/": [
    {
      text: "Python Library",
      link: "/library/",
      children: [
        {
          text: "Modules",
          link: "/library/modules/",
          children: getFilesRecursive("library/modules"),
        },
      ],
    },
  ],
  "/guide/": [
    {
      text: "Getting started",
      link: "/guide/getting-started/",
    },
    {
      text: "Configuration",
      link: "/guide/configuration/",
      children: [
        "/guide/configuration/operation-mode.md",
        "/guide/configuration/time-constants.md",
        "/guide/configuration/network-interfaces.md",
        "/guide/configuration/events.md",
        "/guide/configuration/security.md",
      ],
    },
    {
      text: "How To",
      link: "/guide/how-to/",
      children: getFiles("guide/how-to"),
    },
    {
      text: "FAQ",
      link: "/guide/faq/",
    },
  ],
  "/features/": [
    {
      text: "Features",
      link: "/features/",
      children: getFilesPushFront("features", ["main.md"]),
    },
  ],
  "/devices/": [
    {
      text: "Supported devices",
      link: "/devices/",
      children: deviceList,
    },
  ],
  "/log/": [
    {
      text: "Change log",
      link: "/log/",
      children: getFiles("log"),
    },
  ],
};
