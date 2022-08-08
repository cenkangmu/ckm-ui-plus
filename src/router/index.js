import {createRouter, createWebHashHistory} from 'vue-router'

//获取views文件夹下所有vue文件
const files = import.meta.globEager("/src/views/**/*.vue")
let components = {}
Object.keys(files).forEach(key => {
  components[key.replace(/(\.\/|\.vue)/g, '').replace('/src/views/','')] = files[key].default;
})


//提取首页子路由文件
let homeChildren = []
for (let i in components) {
  if (i.indexOf('/index')>0) {
    homeChildren.push({
      path: i.replace('/index',''),
      component: components[i]
    })
  }
}

//提取非首页子路由文件
let routeList = []
for (let i in components) {
  if (i.indexOf('/')>0 && i.indexOf('/index')===-1) {
    routeList.push({
      path: '/'+i,
      component: components[i]
    })
  }
}

const routes = [
  {
    path: '/',
    component: () => import('../views/home.vue'),
    children: [
      {path: '', redirect: '/base'},
      ...homeChildren
    ]
  },
  {
    path: '/404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/:all(.*)',//匹配找不到的路由
    redirect: '/404'//重定向到404页面
  },
  ...routeList
]
console.log(routes)
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
