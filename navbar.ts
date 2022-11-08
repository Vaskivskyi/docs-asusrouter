import type { NavbarConfig } from "@vuepress/theme-default"
import { resolve } from "path";
import { readdirSync } from "fs";

export function getFiles(dir: string) {
  const base = resolve(__dirname, "docs");
  return readdirSync(resolve(base, dir))
    .filter(file => file.endsWith(".md") && file !== "README.md")
    .map(file => `/${ dir }/${ file }`);
}

export const navbar: NavbarConfig = [
    {
        text: "Guide",
        children: [
            "/guide/getting-started/",
            "/guide/configuration/",
            "/guide/faq/",
        ]
    },
    {
        text: "Features",
        link: "/features/"
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
