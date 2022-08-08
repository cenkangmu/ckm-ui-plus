<template>
  <div class="page">
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      基础用法
    </c-dividing-line>
    <div class="block">
      <c-chain label="城市选择" :data="data" v-model="value"></c-chain>
      <c-chain show-last label="只显示一项" :data="data" v-model="value"></c-chain>
      <c-chain disable label="禁用选项" :data="data" v-model="value"></c-chain>
    </div>

  </div>
</template>
<script setup>
import {ref} from 'vue'

let data = ref([
  {
    label: '广东省',
    value: 1,
    children: [
      {label: '广州市', value: 11, children: [
          {label: '番禺区', value: 111},
          {label: '天河区', value: 112},
          {label: '白云区', value: 113},
          {label: '黄浦区', value: 114},
        ]},
      {label: '深圳市', value: 12},
      {label: '东莞市', value: 13},
      {label: '佛山市', value: 14},
    ]
  },
  {
    label: '广西省',
    value: 2,
    children: [
      {label: '南宁市', value: 21},
      {label: '百色市', value: 22},
      {label: '柳州市', value: 23},
      {label: '桂林市', value: 24},
    ]
  },
  {
    label: '云南省',
    value: 3,
    children: [
      {label: '昆明市', value: 31}
    ]
  },
  {
    label: '贵州省',
    value: 4,
    children: [
      {label: '贵阳市', value: 41}
    ]
  },
])
let value = ref([])

</script>
<script>
export default {
  name: 'Chain/联级选择器',
}
</script>
<style scoped>

</style>