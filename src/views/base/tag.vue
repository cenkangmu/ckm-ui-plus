<template>
  <div class="page">
    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      基础用法
    </c-dividing-line>
    <c-tag>标签</c-tag>
    <c-tag type="primary">标签</c-tag>
    <c-tag type="success">标签</c-tag>
    <c-tag type="warn">标签</c-tag>
    <c-tag type="error">标签</c-tag>

    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      边框型：showType="border"
    </c-dividing-line>
    <c-tag>标签</c-tag>
    <c-tag showType="border" type="primary">标签</c-tag>
    <c-tag showType="border" type="success">标签</c-tag>
    <c-tag showType="border" type="warn">标签</c-tag>
    <c-tag showType="border" type="error">标签</c-tag>

    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      显示关闭图标
    </c-dividing-line>
    <c-tag show-close @close="close">标签</c-tag>
    <c-tag show-close @close="close" type="primary">标签</c-tag>
    <c-tag show-close @close="close" type="success">标签</c-tag>
    <c-tag show-close @close="close" type="warn">标签</c-tag>
    <c-tag show-close @close="close" type="error">标签</c-tag>

    <c-tag show-close @close="close" showType="border" type="primary">标签</c-tag>
    <c-tag show-close @close="close" showType="border" type="success">标签</c-tag>
    <c-tag show-close @close="close" showType="border" type="warn">标签</c-tag>
    <c-tag show-close @close="close" showType="border" type="error">标签</c-tag>


    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      禁用模式
    </c-dividing-line>
    <c-tag disable>标签</c-tag>
    <c-tag disable type="primary">标签</c-tag>
    <c-tag disable type="success">标签</c-tag>
    <c-tag disable type="warn">标签</c-tag>
    <c-tag disable type="error">标签</c-tag>

    <c-tag disable showType="border" type="primary">标签</c-tag>
    <c-tag disable showType="border" type="success">标签</c-tag>
    <c-tag disable showType="border" type="warn">标签</c-tag>
    <c-tag disable showType="border" type="error">标签</c-tag>

    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      样式修改
    </c-dividing-line>
    <c-tag width="60px" type="primary">宽度</c-tag>
    <c-tag height="26px" type="primary">高度</c-tag>
    <c-tag background="#333" type="primary">背景</c-tag>
    <c-tag color="#333" type="primary">字体颜色</c-tag>
    <c-tag font-size="16px" type="primary">字体大小</c-tag>
    <c-tag radius="3px" type="primary">圆角</c-tag>

    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      数字角标
    </c-dividing-line>
    <c-tag radius="100px" type="error" >9</c-tag>
    <c-tag radius="100px" type="error">99</c-tag>
    <c-tag radius="100px" type="error">999</c-tag>
  </div>
</template>
<script setup>
function close(){
  alert('您点击了关闭图标')
}
</script>
<script>
export default {
  name: 'Tag/标签'
}
</script>
<style scoped>

</style>