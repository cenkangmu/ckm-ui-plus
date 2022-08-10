<template>
  <div class="page" style="padding: 15px 0">
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">基础用法</c-dividing-line>
    <c-navbar title="标题"/>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">有返回键</c-dividing-line>
    <c-navbar title="标题" back-text="返回" @back="onBack"/>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">右侧文本</c-dividing-line>
    <c-navbar title="标题" right-text="菜单" @tap-right="onRight"/>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">自定义左右插槽</c-dividing-line>
    <c-navbar title="标题" back-text="返回" @back="onBack">
      <template v-slot:left>
        <div style="color: #999">菜单</div>
      </template>
      <template v-slot:right>
        <div style="color: #0090ff">设置</div>
      </template>
    </c-navbar>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">显示搜索框</c-dividing-line>
    <c-navbar show-search v-model="keyword"/>
    <br/>
    <c-navbar back-text="返回" show-search v-model="keyword" right-text="设置"/>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">样式修改</c-dividing-line>
    <c-navbar back-text="返回" title="颜色修改" background="#333" color="orange"/>
    <c-navbar back-text="返回" title="底部边框" border-color="#ccc"/>
    <c-navbar back-text="返回" title="大小修改" height="70px"/>
  </div>
</template>
<script setup>
import {ref} from 'vue'

function onBack(){
  alert('您点击了返回')
}
function onRight(){
  alert('您点击了菜单')
}
const keyword = ref()

</script>
<script>
export default {
  name: 'Navbar/导航栏',
}
</script>
<style scoped>

</style>