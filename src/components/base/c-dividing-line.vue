<template>
  <div class="c-dividing-line">

    <!--  左边线条  -->
    <div class="c-line" :style="{
      background:lineColor,
      height:lineHeight,
    }"></div>

    <!--  文本内容  -->
    <div class="c-text" :style="{
      color:textColor,
      fontSize:fontSize
    }">
      <slot/>
    </div>

    <!--  右边线条  -->
    <div class="c-line" :style="{
      background:lineColor,
      height:lineHeight,
    }"></div>
  </div>
</template>
<script setup>
defineProps({
  lineHeight: {type: String, default: '1px'},//高度
  lineColor: {type: String},//线条颜色
  textColor: {type: String},//字体颜色
  fontSize: {type: String},//字体大小
})
</script>
<script>
export default {
  name: "c-dividing-line"
}
</script>

<style lang="scss" scoped>
.c-dividing-line {
  display: flex;
  align-items: center;
  padding: 10px 0;

  .c-line {
    flex: 1;
    background: $color10;
  }

  .c-text {
    flex: none;
    margin: 0 15px;
    color: $color5;
    font-size: $font2;
  }
}
</style>