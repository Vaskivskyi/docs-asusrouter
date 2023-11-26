import type { NavbarConfig } from "@vuepress/theme-default"
import { resolve } from "path";
import { readdirSync } from "fs";

export function getFiles(dir: string, exclude: string[] = []) {
  let base = resolve(__dirname, "docs");
  return readdirSync(resolve(base, dir))
    .filter(file => file.endsWith(".md") && file !== "README.md" && !exclude.includes(file))
    .map(file => `/${ dir }/${ file }`);
}

export function getFilesRev(dir: string) {
    let files = getFiles(dir);
    return files.reverse();
}

export function getFilesPushFront(dir: string, push: string[] = []){
    let files = getFiles(dir, push);
    push.forEach(function(file) {
        files.unshift(`/${ dir }/${ file }`);
    });
    return files;
}

export const navbar: NavbarConfig = [
    {
        text: "HA Integration",
        children: [
            "/guide/getting-started/",
            "/guide/configuration/",
            "/guide/faq/",
        ]
    },
    {
        text: "Python Library",
        link: "/library/"
    },
    {
        text: "Features",
        link: "/features/"
    },
    {
        text: "Devices",
        link: "/devices/"
    },
    {
        text: 'Support',
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
                link: "/log/"
            },
            {
                text: "Credits",
                link: "/credits/"
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
        ]
    },
]
