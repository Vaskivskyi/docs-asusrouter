import type { NavbarConfig } from "@vuepress/theme-default";
import { resolve } from "path";
import { readdirSync, existsSync, statSync } from "fs";
import { promises as fs } from "fs";

export function getFiles(dir: string, exclude: string[] = []) {
  let base = resolve(__dirname, "docs");
  return readdirSync(resolve(base, dir))
    .filter(
      (file) =>
        file.endsWith(".md") && file !== "README.md" && !exclude.includes(file)
    )
    .map((file) => `/${dir}/${file}`);
}

export function getFilesRecursive(dir: string, exclude: string[] = []): any[] {
  const base = resolve(__dirname, "docs");
  const result: any[] = [];

  function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function readDir(currentDir: string): any[] {
    const fullPath = resolve(base, currentDir);
    const items = readdirSync(fullPath);
    const dirResult: any[] = [];

    items.forEach((item) => {
      const itemPath = resolve(fullPath, item);
      const relativePath = `${currentDir}/${item}`;

      // Skip excluded files and README.md
      if (item === "README.md" || exclude.includes(item)) {
        return;
      }

      const isDir = statSync(itemPath).isDirectory();

      if (isDir) {
        dirResult.push({
          text: capitalizeFirstLetter(item),
          link: `/${relativePath}/`,
          children: readDir(relativePath),
        });
      } else if (item.endsWith(".md")) {
        dirResult.push(`/${relativePath}`);
      }
    });

    return dirResult;
  }

  result.push(...readDir(dir));

  return result;
}

export function getFilesRev(dir: string) {
  let files = getFiles(dir);
  return files.reverse();
}

export function getFilesPushFront(dir: string, push: string[] = []) {
  let files = getFiles(dir, push);
  push.forEach(function (file) {
    files.unshift(`/${dir}/${file}`);
  });
  return files;
}

export const navbar: NavbarConfig = [
  {
    text: "Integration",
    children: [
      "/guide/getting-started/",
      "/guide/configuration/",
      "/features/",
      "/guide/faq/",
    ],
  },
  {
    text: "Library",
    link: "/library/",
  },
  {
    text: "Devices",
    link: "/devices/",
  },
  {
    text: "Support",
    children: [
      {
        text: "Issues",
        link: "https://github.com/Vaskivskyi/ha-asusrouter/issues",
      },
      {
        text: "Community forum",
        link: "https://community.home-assistant.io/t/custom-component-asusrouter-integration/416111",
      },
      {
        text: "Ghange Log",
        link: "/log/",
      },
      {
        text: "Credits",
        link: "/credits/",
      },
    ],
  },
  {
    text: "Donate",
    children: [
      {
        text: "Buy Me a Coffee",
        link: "https://www.buymeacoffee.com/Vaskivskyi",
      },
      {
        text: "GitHub Sponsors",
        link: "https://github.com/sponsors/Vaskivskyi",
      },
      {
        text: "Patreon",
        link: "https://www.patreon.com/Vaskivskyi",
      },
    ],
  },
];
