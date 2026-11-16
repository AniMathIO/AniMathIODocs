import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "AniMathIO",
  tagline: "Create mathematical videos and animations with AniMathIO!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.animathio.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "AniMathIO", // Usually your GitHub org/user name.
  projectName: "AniMathIO", // Usually your repo name.

  onBrokenLinks: "throw",

  markdown: {
    // The 2.0 reference pages are plain CommonMark adapted from the main repository: they contain
    // HTML comments and angle brackets that MDX would reject.
    format: "detect",
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      // Keep the pre-2.0 URLs (the 1.x docs lived directly under /docs) working on any static host.
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects(existingPath: string) {
          if (!existingPath.startsWith("/docs/v1/")) return undefined;
          return [existingPath.replace("/docs/v1/", "/docs/")];
        },
        redirects: [
          { from: "/docs/tutorial-basics", to: "/docs/v1/category/tutorial-basics" },
          { from: "/docs/tutorial-advanced", to: "/docs/v1/category/tutorial-advanced-features" },
        ],
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // 2.0 is the default docs version at /docs; the 1.x docs are a frozen version at /docs/v1.
          lastVersion: "current",
          versions: {
            current: { label: "2.0", path: "/", banner: "none" },
            "1.x": {
              label: "1.x (legacy)",
              path: "v1",
              banner: "unmaintained",
            },
          },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    navbar: {
      title: "AniMathIO",
      logo: {
        alt: "AniMathIO logo",
        src: "img/AniMathIO.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "v2Sidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { type: "docsVersionDropdown", position: "right" },
        {
          href: "https://github.com/AniMathIO/AniMathIO",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "AniMathIO 2.0",
              to: "/docs",
            },
            {
              label: "v1 (legacy)",
              to: "/docs/v1/getting-started",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.com/invite/cZMTYSAHRX",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/AniMathIO/AniMathIO",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AniMathIO. Built with Docusaurus.`,
    },
    colorMode: {
      // The 2.0 editor is dark; the site follows it by default and keeps the toggle.
      defaultMode: "dark",
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ["bash", "rust", "toml", "json"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
