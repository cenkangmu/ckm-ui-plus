<template>
  <div class="page">
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      基础用法
    </c-dividing-line>
    <div class="block">
      <c-input label="姓名" v-model="name" placeholder="输入姓名"/>
      <c-input label="手机号码" v-model="phone" placeholder="输入性别"/>
    </div>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      标签对齐方式
    </c-dividing-line>
    <div class="block">
      <c-input label="姓名" v-model="name" label-align="right" placeholder="输入姓名"/>
      <c-input label="手机号码" v-model="phone" label-align="right" placeholder="输入性别"/>
    </div>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      输入框文本对齐方式
    </c-dividing-line>
    <div class="block">
      <c-input label="姓名" v-model="name" input-align="right" placeholder="输入姓名"/>
      <c-input label="手机号码" v-model="phone" input-align="right" placeholder="输入性别"/>
    </div>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      文本长度限制
    </c-dividing-line>
    <div class="block">
      <c-input label="手机号码" v-model="phone" :max-length="11" placeholder="输入性别"/>
    </div>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      数字大小限制
    </c-dividing-line>
    <div class="block">
      <c-input label="最大值" v-model="num" type="number" :max="1000" placeholder="最大值限制为1000"/>
      <c-input label="最大值" v-model="num" type="number" :min="50" placeholder="最小值为50"/>
    </div>
    
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      可清空
    </c-dividing-line>
    <div class="block">
      <c-input label="姓名" v-model="name" show-clear placeholder="输入姓名"/>
      <c-input label="手机号码" v-model="phone" show-clear :max-length="11" placeholder="输入性别"/>
    </div>

  </div>
</template>
<script setup>
import {ref} from 'vue'

let name = ref('')
let phone = ref('')
let num = ref()
</script>
<script>
export default {
  name: 'Input/输入框',

}
</script>
<style scoped>

</style>