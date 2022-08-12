<template>
  <div class="page">
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">基础用法</c-dividing-line>
    <c-toggle-bar v-model="value" :data="data"/>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">背景模式</c-dividing-line>
    <c-toggle-bar v-model="value" text-active-color="#fff" type="background" :data="data"/>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">圆角模式</c-dividing-line>
    <c-toggle-bar v-model="value" text-active-color="#fff" type="radius" :data="data"/>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">调整字体大小</c-dividing-line>
    <c-toggle-bar v-model="value" :data="data" font-size="18px" />

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">调整选中颜色</c-dividing-line>
    <c-toggle-bar v-model="value" :data="data" text-active-color="orangered" active-color="orangered"/>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">调整背景色</c-dividing-line>
    <c-toggle-bar v-model="value" :data="data" background="#222"/>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">有新消息提示</c-dividing-line>
    <c-toggle-bar v-model="value" :data="data2" />
    <br/>
    <c-toggle-bar v-model="value" text-active-color="#fff" type="background" :data="data2" />
    <br/>
    <c-toggle-bar v-model="value" text-active-color="#fff" type="radius" :data="data2" />
  </div>
</template>
<script setup>
import {ref,reactive} from 'vue'
const data = reactive([
  {label:'今天',value:1},
  {label:'明天',value:2},
])
const data2 = reactive([
  {label:'今天',value:1,news:false},
  {label:'明天',value:2,news:true},
])
const value = ref(1)
</script>
<script>
export default {
  name: 'ToggleBar/切换栏',
}
</script>
<style scoped>

</style>