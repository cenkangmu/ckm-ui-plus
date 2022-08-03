<template>
  <div class="page">
    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      粘性定位到顶部
    </c-dividing-line>

    <div class="scroll-box">
      <div v-for="i in 3" class="item">{{ i }}</div>

      <c-sticky>
        <div class="item">粘性定位</div>
      </c-sticky>

      <div v-for="i in 20" class="item">{{ i }}</div>
    </div>
    <br/>

    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      粘性定位到底部
    </c-dividing-line>
    <div class="scroll-box">
      <div v-for="i in 20" class="item">{{ i }}</div>

      <c-sticky direction="bottom">
        <div class="item">粘性定位</div>
      </c-sticky>

      <div v-for="i in 3" class="item">{{ i }}</div>
    </div>
    <br/>

    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      粘性定位到左侧
    </c-dividing-line>
    <div class="scroll-box flex">
      <div v-for="i in 3" class="item">{{ i }}</div>

      <c-sticky direction="left" style="flex: none">
        <div class="item">粘性定位</div>
      </c-sticky>

      <div v-for="i in 20" class="item">{{ i }}</div>
    </div>
    <br/>

    <c-dividing-line :line-color="'#74bcff'" :text-color="'#0089ff'">
      粘性定位到右侧
    </c-dividing-line>
    <div class="scroll-box flex">
      <div v-for="i in 20" class="item">{{ i }}</div>

      <c-sticky direction="right" style="flex: none">
        <div class="item">粘性定位</div>
      </c-sticky>

      <div v-for="i in 5" class="item">{{ i }}</div>
    </div>
    <br/>
    <br/>

  </div>
</template>
<script>
export default {
  name: 'Sticky/粘性定位'
}
</script>
<style lang="scss" scoped>
.scroll-box {
  overflow: auto;
  height: 300px;
  border: 1px solid $main-color;
  border-radius: 5px;

  .item {
    padding: 15px;
    border: 1px solid $color10;
    background: #fff;
  }
}

.flex {
  display: flex;
  height: 50px;
}

</style>