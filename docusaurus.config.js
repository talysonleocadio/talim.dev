const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Cantim do Talim',
  tagline: '',
  url: 'https://talim.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'talysonleocadio', // Usually your GitHub org/user name.
  projectName: 'talim.dev', // Usually your repo name.
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt']
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/talysonleocadio',
          label: 'GitHub',
          position: 'right'
        }
      ],
    },
    footer: {},
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/blog',
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Todos os posts'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
