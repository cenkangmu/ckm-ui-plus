import {reactive} from 'vue'

const files = import.meta.globEager("/src/views/**/*.vue")

export function initMenus(url) {
  const menus = reactive([])

  Object.keys(files).forEach(i => {
    let {name, __file} = files[i].default

    let index = __file.indexOf('src/views/')
    __file = __file.substr(index)

    if (name && name !== 'index' && __file.indexOf('src/views/'+url)!= -1) {
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