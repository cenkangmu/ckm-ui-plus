import {reactive} from 'vue'

const files = require.context('@/views', true, /\.vue$/)

export function initMenus(url) {
  const menus = reactive([])

  files.keys().forEach(i => {
    let {name, __file} = files(i).default
    if (name && name !== 'index' && __file.indexOf('src/views/'+url)===0) {
      let info = name.split('/')

      menus.push({
        name: info[1],
        url: __file.replace(/(\.\/|\.vue)/g, '').replace('src/views', ''),
        english: info[0]
      })
    }
  })
  return menus
}