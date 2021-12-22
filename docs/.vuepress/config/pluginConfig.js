// 插件配置
module.exports = [
  ["vuepress-plugin-auto-sidebar", {
    output: {
      filename: 'config/sidebarConfig'
    },
    title: {
      mode: "uppercase",
      map: {
        "/computer/sa/": "数据结构与算法",
        "/computer/np/": "网络协议",
        "/computer/os/": "操作系统",
        "/htmlcss/animation/": "前端特效",
        "/wxapp/": "微信小程序",
        "/interview/": "面经",
      }
    },
  }]
]