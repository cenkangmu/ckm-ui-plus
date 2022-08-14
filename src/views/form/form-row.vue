<template>
  <div class="page">
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      基础用法
    </c-dividing-line>
    <div class="block">
      <c-form-row label="普通用法" value="内容"/>
      <c-form-row label="禁用模式" value="内容" disable/>
      <c-form-row label="右侧箭头" value="内容" show-right-icon/>
    </div>
  </div>
</template>
<script setup>

</script>
<script>
export default {
  name: 'FormRow/表单行',
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