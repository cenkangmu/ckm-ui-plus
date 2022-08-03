<template>
  <div class="home c-iconfont">
    <div class="title">基本元素</div>
    <div class="main">
      <router-view/>
    </div>
<!--  底部选项卡  -->
    <div class="tab-bar">
      <div class="tab-bar-item" v-for="(i,j) in menus" :key="j"
           :class="current === j?'active':''"
           @click="tapTabBar(i,j)">
        <div :class="'tab-bar-icon '+ i.icon"></div>
        <div class="tab-bar-item-name">{{ i.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue'
import {useRouter, useRoute} from 'vue-router'

let router = useRouter(), route = useRoute()

//底部选项卡菜单
const menus = [
  {name: '基础组件', url: '/base', icon: 'icon-zujian'},
  {name: '表单组件', url: '/form', icon: 'icon-forms'},
  {name: '导航组件', url: '/nav', icon: 'icon-caidan'},
  {name: '交互组件', url: '/interactive', icon: 'icon-window-max-full'},
]

//当前选项下标
let current = ref(0)

//监听路由变化切换当前选项下标
watch(route, (e) => {
  menus.forEach((i, j) => {
    if (i.url === e.path)
      current.value = j
  })
}, {
  immediate: true
})

//点击选项卡切换路由
function tapTabBar(i, j) {
  router.push(i.url)
}
</script>

<style lang="scss" scoped>

.home {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: $color7;

  div {
    flex: none;
  }

  .title {
    line-height: 50px;
    background: $main-color;
    text-align: center;
    font-size: 18px;
    color: #fff;
  }

  .main {
    flex: 1;
    overflow: auto;
  }

  .tab-bar {
    background: $color8;
    height: 56px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    color: $color5;

    .tab-bar-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      .tab-bar-icon {
        font-size: 20px;
      }

      .tab-bar-item-name {
        margin-top: 2px;
      }

    }

    .active {
      color: $main-color;
    }
  }
}
</style>