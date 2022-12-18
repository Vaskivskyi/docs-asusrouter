import type { SidebarConfig } from "@vuepress/theme-default"
import { getFiles, getFilesRev } from "./navbar";

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
                    children: getFilesRev("devices/tested"),
                },
                // {
                //     text: "Other devices",
                //     link: "/devices/#other-devices",
                //     children: getFiles("devices/other"),
                // },
            ],
        },
    ],
    "/log/": [
        {
            text: "Change log",
            link: "/log/",
            children: [
                "/log/0.15.1.md",
                "/log/0.15.0.md",
                "/log/0.14.3.md",
                "/log/0.14.2.md",
                "/log/0.14.1.md",
                "/log/0.14.0.md",
                "/log/0.13.1.md",
                "/log/0.13.0.md",
            ]
        },
    ],
};
