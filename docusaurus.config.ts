import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Metadata Capture Documentation",
  tagline: "Documentation for the Metadata Capture Application",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://rhocela.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub Pages deployment, this should be the repository name
  baseUrl: "/test-multi-search/",

  // GitHub pages deployment config.
  organizationName: "rhocela", // Your GitHub username
  projectName: "test-multi-search", // Your repository name

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  plugins: [],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    navbar: {
      title: " Metadata Capture Documentation",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      hideOnScroll: false,
      items: [
        {
          type: "docSidebar",
          sidebarId: "userGuideSidebar",
          position: "left",
          label: "User Guide",
        },
        {
          type: "docSidebar", 
          sidebarId: "systemAdminGuideSidebar",
          position: "left",
          label: "System Admin Guide",
        },
        {
          type: "docSidebar",
          sidebarId: "developerGuideSidebar", 
          position: "left",
          label: "Developer Guide",
        },
      ],
    },
    // Add search configuration
    algolia: undefined, // Disable algolia if it's configured
    footer: {
      style: "dark",
      links: [
        {
          // title: "More",
          items: [
            // {
            //   label: "Demo",
            //   href: "https://metadata.demo.lnds.tech/",
            // },
            // {
            //   label: "Source Code",
            //   href: "https://gitlab.com/lnds-lu/service-library/dca-metadata-capture",
            // },
            {
              label: "Contact support",
              href: "https://get.support.lnds.lu/",
            },
          ],
        },
        {
          // title: "About LNDS",
          items: [
            {
              label: "About LNDS",
              href: "https://www.lnds.lu/",
            },
            // {
            //   label: "LinkedIn",
            //   href: "https://www.linkedin.com/company/luxembourg-national-data-service-lnds/",
            // },
            // {
            //   label: "Gitlab",
            //   href: "https://gitlab.com/lnds-lu/",
            // },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} Luxembourg National Data Service (LNDS). It is a brand of PNED G.I.E., an economic interest group established by the Luxembourg government and public institutes 2023 <br/> All rights reserved`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
