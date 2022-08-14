<template>
  <div class="home-list c-iconfont">
    <div class="item" v-for="(i,j) in menus" :key="j" @click="toPage(i.url)">
      <div style="display: flex;justify-content: space-between;flex: 1;padding-right: 10px">
        <span class="item-title">{{ i.english }}</span>
        <span>{{ i.name }}</span>
      </div>
      <div class="icon-jinru"></div>
    </div>

  </div>
</template>

<script setup>
import {initMenus} from '@/hooks/menu'
import {useRouter} from 'vue-router'
const menus = initMenus('base')


const router = useRouter()
function toPage(url){
  router.push(url)
}

</script>

<style lang="scss" scoped>


.item {
  padding: 0 15px;
  height: 48px;
  border-bottom: 1px solid $color6;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .item-title {
    margin-right: 10px;
    font-weight: bold;
    color: $main-color;
  }
}

.icon-jinru {
  color: $color5;
  font-size: 16px;
}
</style>