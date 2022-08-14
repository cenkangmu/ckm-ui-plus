import {reactive} from 'vue'
const files = import.meta.globEager("/src/views/**/*.vue")

export function initMenus(url) {
  const menus = reactive([])
  for(let i in files){
    let {name, } = files[i].default
    if (name && name !== 'index' && i.indexOf('/src/views/'+url)!= -1) {
      let info = name.split('/')
      menus.push({
        name: info[1],
        url: i.replace(/(\.\/|\.vue)/g, '').replace('/src/views', ''),
        english: info[0]
      })
    }
  }
  return menus
}
