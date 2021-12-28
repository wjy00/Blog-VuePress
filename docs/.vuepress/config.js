// 导航栏配置
const navConfig = require('./config/navConfig')
// 插件配置
const pluginConfig = require('./config/pluginConfig')
// 侧边栏配置
const sidebarConfig = require('./config/sidebarConfig')

module.exports = {
  base: "/Blog-VuePress/",
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
    sidebar: sidebarConfig
  },
  plugins: pluginConfig
}