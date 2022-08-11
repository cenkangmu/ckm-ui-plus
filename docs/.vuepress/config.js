const {defaultTheme} = require('vuepress')
const {resolve} = require('path')
const {path} = require('@vuepress/utils')
const {registerComponentsPlugin} = require('@vuepress/plugin-register-components')

module.exports = {
  lang: 'zh-CN',
  title: 'ckm-ui-plus',
  description: '这是我的第一个 VuePress 站点',

  theme: defaultTheme({
    sidebar: [
      {
        text: '指南',
        link: '/指南',
      },
      {
        text: '组件',
        children: [
          {
            text: '基础组件', children: [
              {text: '按钮 Button', link: '/组件/基础组件/按钮.md'},
              {text: '分割线 DividingLine', link: '/组件/基础组件/分割线.md'},
              {text: '上拉加载 PullLoad', link: '/组件/基础组件/上拉加载.md'},
              {text: '进度环 ProgressLoop', link: '/组件/基础组件/进度环.md'},
              {text: '粘性定位 Sticky', link: '/组件/基础组件/粘性定位.md'},
              {text: '标签 Tag', link: '/组件/基础组件/标签.md'},
            ]
          },
          {
            text: '表单组件', children: [
              {text: '输入框 Input', link: '/组件/表单组件/输入框.md'},
              {text: '单选项 SingleChoice', link: '/组件/表单组件/单选项.md'},
              {text: '多选项 MultipleChoice', link: '/组件/表单组件/多选项.md'},
              {text: '联级选择器 Chain', link: '/组件/表单组件/联级选择器.md'},
              {text: '开关 Switch', link: '/组件/表单组件/开关.md'},
            ]
          },
          {
            text: '导航组件', children: [
              {text: '导航栏 Navbar', link: '/组件/导航组件/导航栏.md'},
            ]
          },
        ]
      },
    ]
  }),
  alias: {
    '@theme/Page.vue': resolve(__dirname, './theme/Page.vue'),
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
}