<template>
  <div class="page">
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      基础用法
    </c-dividing-line>
    <div class="block">
      <c-input label="当前进度" v-model="value" type="number" placeholder="输入0~100的数字"/>
      <br/>
      <c-progress-loop :value="value"/>
    </div>


    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      改变样式
    </c-dividing-line>

    <div class="block">
      <c-progress-loop :value="value" size="80px" font-size="20px"/>&nbsp;

      <c-progress-loop :value="value" :line-width="7"/>&nbsp;

      <c-progress-loop :value="value" color="#ffc800" line-color="#ffedc2" activeColor="#ffc800"/>
    </div>


    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      设置最大值：
    </c-dividing-line>
    <div class="block">
      <c-input label="当前进度" v-model="value2" type="number" placeholder="请输入当前进度"/>

      <c-input label="最大值" v-model="max" type="number" placeholder="请输入最大值"/>
      <br/>
      <c-progress-loop :value="value2" :max="max"/>

    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'

let value = ref(30)
let value2 = ref(30)
let max = ref(300)

</script>
<script>
export default {
  name: 'ProgressLoop/进度环',
}
</script>
<style scoped>

</style>