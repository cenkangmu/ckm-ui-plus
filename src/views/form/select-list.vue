<template>
  <div class="page">
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      基础用法
    </c-dividing-line>
    <div class="block">
      {{value}}
      <c-select-list v-model="value" :data="data"/>
    </div>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      修改样式
    </c-dividing-line>
    <div class="block">
      {{value2}}
      <c-select-list background="#222" color="orange" v-model="value2" :data="data"/>
    </div>

  </div>
</template>
<script setup>
import {ref} from 'vue'

let value = ref('选项3')
let value2 = ref('选项10')
let data = ref([])
for(let i = 1;i<=30;i++){
  data.value.push('选项'+i)
}
</script>
<script>
export default {
  name: 'SelectList/选择列表',
}
</script>
<style scoped>
.fsb {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
}
</style>