<template>
  <div class="page">
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      基础用法
    </c-dividing-line>
    <div class="block">
      <c-date-select label="出生日期" v-model="value"/>
    </div>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      默认选中
    </c-dividing-line>
    <div class="block">
      <c-date-select label="出生日期" :default-value="new Date(2020,0,1)" v-model="value2"/>
    </div>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      可清空
    </c-dividing-line>
    <div class="block">
      <c-date-select label="出生日期" show-clear v-model="value"/>
    </div>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      禁用状态
    </c-dividing-line>
    <div class="block">
      <c-date-select label="出生日期" disable v-model="value"/>
    </div>

  </div>
</template>
<script setup>
import {ref} from 'vue'
let value = ref(new Date())
let value2 = ref()

</script>
<script>
export default {
  name: 'DateSelect/日期选择',
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