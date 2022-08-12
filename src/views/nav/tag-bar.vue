<template>
  <div class="page" style="padding: 0">
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      基础用法
    </c-dividing-line>
    <c-tag-bar>标签栏1</c-tag-bar>
    <c-tag-bar>标签栏2</c-tag-bar>
    <c-tag-bar>标签栏3</c-tag-bar>

    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      样式修改
    </c-dividing-line>
    <c-tag-bar font-size="18px">font-size="18px"</c-tag-bar>
    <c-tag-bar height="60px">height="60px"</c-tag-bar>
    <c-tag-bar border-color="#aaa"> border-color="#aaa"</c-tag-bar>
    <c-tag-bar color="#0089ff"> color="#0089ff"</c-tag-bar>
    <c-tag-bar background="orange"> color="orange"</c-tag-bar>

  </div>
</template>
<script>
export default {
  name: 'TagBar/标签栏',
}
</script>
<style scoped>

</style>