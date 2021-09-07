/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'WRAP',
  tagline: 'A decentralized bridge between Ethereum and Tezos.',
  url: 'https://tzwrap.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Bender Labs', // Usually your GitHub org/user name.
  projectName: 'Wrap protocol', // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '🌞',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: 'Wrap',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'governance',
          position: 'right',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'wrap-protocol',
          label: 'FAQ',
          position: 'right',
        },
        {
          href: 'https://github.com/bender-labs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://medium.com/bender-labs',
          label: 'Blog',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/governance',
            },
            {
              label: 'FAQs',
              to: '/docs/wrap-protocol',
            },
            {
              label: 'Whitepaper',
              href: 'https://uploads-ssl.webflow.com/605b954cee75fc72dfcdf42e/6062c8a1202d848191213859_Wrap%20Protocol%20-%20Whitepaper%20(1).pdf',
            },
          ],
        },
        {
          title: 'Community',
          items: [

            {
              label: 'Discord',
              href: 'https://discord.gg/tZf8M89BRe',
            },
            {
              label: 'Discourse',
              href: 'https://community.benderlabs.io/'
            },
            {
              label: 'Telegram',
              href: 'https://t.me/benderlabs'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Wrap_Protocol',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Bender Labs',
              href: 'https://www.benderlabs.io/',
            },
            {
              label: 'Liquidity',
              href: 'https://liquidity.tzwrap.com/',
            },
            {
              label: 'Live Stats',
              href: 'https://info.tzwrap.com/',
            },
            {
              label: 'Blog',
              href: 'https://medium.com/bender-labs',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/bender-labs/',
            }
          ],
        },
      ],
      logo: {
        alt: 'Defi Pulse',
        src: 'img/defi-pulse.png',
        href: 'https://defipulse.com/',
      },
      copyright: `Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/bender-labs/wrap-website/edit/main/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
