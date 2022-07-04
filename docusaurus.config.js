// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MobX-Cookbook",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "favicon.png",

  organizationName: "mobx-cookbook",
  projectName: "cookbook",

  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // editUrl: 'https://github.com/mobx-cookbook/cookbook',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "MobX-Cookbook",
        logo: {
          alt: "MobX-Cookbook",
          src: "favicon.png",
        },
        items: [
          {
            type: "doc",
            docId: "installation",
            label: "Введение", // Теория?
          },
          {
            type: "doc",
            docId: "practice",
            label: "Практика",
          },
          {
            type: "doc",
            docId: "advanced",
            label: "Продвинутые темы",
          },
          {
            href: "https://github.com/mobx-cookbook/cookbook",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Главы",
            items: [
              {
                label: "Введение",
                to: "installation",
              },
              { label: "Практика", to: "practice" },
              { label: "Продвинутые темы", to: "advanced" },
            ],
          },
          {
            title: "Сообщество",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/mobxjs_ru",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config