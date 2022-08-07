<template>
  <div class="page">
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      基础用法
    </c-dividing-line>
    <div class="block">
      <c-single-choice label="语言选择" :data="data" v-model="value"></c-single-choice>
      <c-single-choice label="禁用模式" disable :data="data" v-model="value"></c-single-choice>
      <c-single-choice label="可清除" show-clear :data="data" v-model="value"></c-single-choice>
    </div>

  </div>
</template>
<script setup>
import {ref,reactive} from 'vue'

let data = reactive([
  {label:'Java',value:'1'},
  {label:'JavaScript',value:'2'},
  {label:'C++',value:'3'},
  {label:'PHP',value:'4'},
  {label:'Python',value:'5'},
])
let value = ref('1')
function change(e){
  console.log(e)
}
function close(e){
  console.log('close')
}
</script>
<script>
export default {
  name: 'SingleChoice/单选项',
}
</script>
<style scoped>

</style>