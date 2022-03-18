// 插件配置
module.exports = [
  ["vuepress-plugin-auto-sidebar",
    // auto-sidebar插件配置项
    {
      output: {
        filename: 'config/sidebarConfig'
      },
      // 修改侧边栏大标题
      title: {
        mode: "uppercase",
        map: {
          "/computer/sa/": "数据结构与算法",
          "/computer/np/": "计算机网络",
          "/computer/os/": "操作系统",
          "/htmlcss/animation/": "前端特效",
          "/wxapp/": "微信小程序",
          "/interview/": "面经",
        }
      },
    }
  ]
]