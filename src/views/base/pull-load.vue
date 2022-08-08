<template>
  <div class="page">
    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      基础用法
    </c-dividing-line>
    <div class="block">
      <c-pull-load v-model="loading"
                   :is-all="num === total"
                   height="300px"
                   :on-load="getData">

        <div v-for="i in num" class="scrollItem">{{ i }}</div>

      </c-pull-load>
    </div>

    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      自定义提示模板
    </c-dividing-line>
    <div class="block">
      <c-pull-load v-model="loading"
                   :is-all="num === total"
                   height="300px"
                   :on-load="getData">

        <div v-for="i in num" class="scrollItem">{{ i }}</div>

        <template v-slot:load>
          <div style="color: #0091ff;text-align: center;padding: 15px">正在加载中</div>
        </template>

        <template v-slot:all>
          <div style="color: #0091ff;text-align: center;padding: 15px">没了！没了！没了！！！</div>
        </template>

      </c-pull-load>
    </div>

  </div>
</template>
<script setup>
import {ref} from 'vue'

const num = ref(0),
    total = ref(50),
    loading = ref(true)
function getData() {
  setTimeout(() => {
    num.value += 10
    loading.value = false
  }, 1500)
}

getData()
</script>
<script>
export default {
  name: 'PullLoad/上拉加载'
}
</script>
<style scoped>
.scrollItem {
  padding: 15px;
  border-bottom: 1px solid #eee;
}
</style>