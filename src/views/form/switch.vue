<template>
  <div class="page">
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      基础用法
    </c-dividing-line>
    <div class="block">
      <c-switch v-model="value"/>
    </div>
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      改变样式
    </c-dividing-line>
    <div class="block">
      <div class="fsb">
        <div>调整大小</div>
        <c-switch width="100px" height="50px" v-model="value"/>
      </div>
      <div class="fsb">
        <div>背景颜色</div>
        <c-switch open-background="#333" v-model="value"/>
      </div>
      <div class="fsb">
        <div>按钮颜色</div>
        <c-switch :open-color="'#333'" v-model="value"/>
      </div>
    </div>

  </div>
</template>
<script setup>
import {ref} from 'vue'


let value = ref(false)

</script>
<script>
export default {
  name: 'Switch/开关选项',
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