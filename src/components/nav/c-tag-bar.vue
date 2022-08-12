<template>
  <div class="c-tag-bar c-iconfont" :style="{
    height:height,
    width:width,
    background:background,
    borderBottom:`1px solid ${borderColor}`,
    fontSize:fontSize,
    color:color
  }">
    <slot/>
    <slot name="right" v-if="$slots.right"/>
    <div class="c-tag-bar-icon" v-else>&#xe646;</div>
  </div>
</template>

<script>
export default {
  name: "c-tag-bar",
  props:{
    height:{type:String,default:'50px'},//高度
    width:{type:String},//宽度
    background:{type:String,default:'#fff'},//背景颜色
    color:{type:String,default:'#333'},//文本颜色
    fontSize:{type:String,default:'14px'},//字体大小
    borderColor:{type:String,default:'#f5f5f5'},//底部边框颜色
  }
}
</script>

<style lang="scss" scoped>
.c-tag-bar {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  .c-tag-bar-icon{
    color: #ccc;
    font-size: 18px;
  }
}
</style>