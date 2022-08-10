const { defaultTheme } = require('vuepress')
const {resolve} = require('path')
const { path } = require('@vuepress/utils')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')

module.exports = {
  lang: 'zh-CN',
  title: 'ckm-ui-plus',
  description: '这是我的第一个 VuePress 站点',

  theme: defaultTheme({
    sidebar:[
      {
        text:'指南',
        link:'/指南',
      },
      {
        text:'组件',
        children:[
          {text:'按钮 Button',link:'/组件/按钮.md'}
        ]
      }
    ]
  }),
  alias:{
    '@theme/Page.vue': resolve(__dirname, './theme/Page.vue'),
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
}