import type { SidebarConfig } from "@vuepress/theme-default"
import { getFiles } from "./navbar";

export const sidebar: SidebarConfig = {
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
            ]
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
            children: getFiles("features"),
        },
    ],
    "/devices/": [
        {
            text: "Supported devices",
            link: "/devices/",
            children: [
                {
                    text: "Tested devices",
                    link: "/devices/#tested-devices",
                    children: getFiles("devices/tested"),
                },
                // {
                //     text: "Other devices",
                //     link: "/devices/#other-devices",
                //     children: getFiles("devices/other"),
                // },
            ],
        },
    ],
};
