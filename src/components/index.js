import('@/assets/iconfont/iconfont.css')

//获取components文件夹下所有vue文件
const files = require.context('@/components', true, /\.vue$/)
let components = {}
files.keys().forEach(key => {
  components[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
})

let install = (Vue) => {
  Vue = Vue || window.Vue
  for (let i in components) {
    Vue.component(components[i].name, components[i])
  }
}

export default {
  install,
  components
}