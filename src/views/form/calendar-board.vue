<template>
  <div class="page">
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      基础用法
    </c-dividing-line>
    <div class="block" style="padding: 0">
      <c-calendar-board v-model="value1"/>
      <div style="padding:0 15px 15px">
        当前选中：{{value1 && value1.cFormat('yyyy-mm-dd')}}
      </div>
    </div>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      限制选择范围
    </c-dividing-line>
    <div class="block" style="padding: 0">
      <c-calendar-board v-model="value2" :max-date="max" :min-date="min"/>
      <div style="padding:0 15px 15px">
        最小可选日期：{{min && min.cFormat('yyyy-mm-dd')}}
        <br/>
        最大可选日期：{{max && max.cFormat('yyyy-mm-dd')}}
        <br/>
        当前选中：{{value2 && value2.cFormat('yyyy-mm-dd')}}
      </div>
    </div>

  </div>
</template>
<script setup>
import {ref} from 'vue'
let value1 = ref(new Date())
let value2 = ref()
let date = new Date()
let min = ref(new Date(date.getFullYear(),0,15))
let max = ref(new Date(date.getFullYear(),11,15))
</script>
<script>
export default {
  name: 'CalendarBoard/日历板',
}
</script>
<style scoped>
.fsb{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
}
</style>