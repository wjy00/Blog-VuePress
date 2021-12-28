// 导航栏配置
module.exports = [{
  text: '🏠 主页',
  link: '/'
}, {
  text: '💗 关于',
  link: '/about'
}, {
  text: '计算机基础',
  link: '/computer/',
  items: [{
    text: "数据结构与算法",
    link: '/computer/sa/'
  }, {
    text: '网络协议',
    link: '/computer/np/'
  }, {
    text: '操作系统',
    link: '/computer/os/'
  }]
}, {
  text: 'HTML+CSS',
  items: [{
    text: 'HTML',
    link: '/htmlcss/html/'
  }, {
    text: 'CSS',
    link: '/htmlcss/css/'
  }, {
    text: '前端特效',
    link: '/htmlcss/animation/'
  }, ]
}, {
  text: 'JavaScript',
  link: '/javascript/'
}, {
  text: 'Node.js',
  link: '/nodejs/'
}, {
  text: '前端框架',
  items: [{
    text: 'vue',
    link: '/frame/vue/'
  }]
}, {
  text: '微信小程序',
  link: '/wxapp/'
}, {
  text: '其他知识',
  items: [{
    text: 'GIT',
    link: '/others/git/'
  }, {
    text: 'WEBPACK',
    link: '/others/webpack/'
  }]
}, {
  text: '⭐ 项目',
  items: [{
    text: '后台系统',
    link: 'https://www.baidu.com/',
    target: '_blank'
  }, {
    text: 'echart监控系统',
    link: 'https://www.google.com/',
    target: '_blank'
  }],
}, {
  text: '💬 面经',
  link: '/interview/'
}]