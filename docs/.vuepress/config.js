const navConfig = require('./config/navConfig')

module.exports = {
  title: 'Blog-WJY',
  description: 'WJY-Blog',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: navConfig,
  }
}