<template>
  <div class="c-switch" :class="disable?'c-disable':''" :style="{
    width:width,
    height:height,
    background:modelValue?openBackground:background,
    // justifyContent:modelValue?'flex-end':''
  }" @click="tapSwitch">
    <div class="c-switch-circular" :style="{
      background: modelValue?openColor:color,
      width:`calc(${height}  - 6px)`,
      height: `calc(${height}  - 6px)`,
      transform:`translateX(${modelValue?`calc(${width} - ${height})`:'0'})`
    }"></div>
  </div>
</template>
<script setup>
const props = defineProps({
  width:{type:String,default:'60px'},//宽度
  height:{type:String,default: '30px'},//高度
  background:{type:String,default:'#eee'},//关闭时背景色
  openBackground:{type:String,default:'#00ef72'},//打开时背景色
  color:{type:String,default:'#fff'},//关闭时前景色
  openColor:{type:String,default:'#fff'},//打开时前景色
  modelValue:Boolean,//值
  disable:Boolean,//是否禁用
})
const emit = defineEmits()
function tapSwitch(){
  if(props.disable) return
  emit('update:modelValue',!props.modelValue)
}
</script>
<script>
export default {
  name: "c-switch"
}
</script>

<style lang="scss" scoped>
.c-switch{
  border-radius: 100px;
  display: flex;
  box-sizing: border-box;
  padding: 3px;
  .c-switch-circular{
    border-radius: 50%;
    transition: all .3s;
  }
}
</style>