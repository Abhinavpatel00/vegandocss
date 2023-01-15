const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra()


 
module.exports = withNextra({
  i18n: {
    locales: ['en', 'zh', 'de'],
    defaultLocale: 'en'
  }
})
