<template>
  <div class="c-switch" :style="{
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
  width:{type:String,default:'60px'},
  height:{type:String,default: '30px'},
  background:{type:String,default:'#eee'},
  openBackground:{type:String,default:'#00ef72'},
  color:{type:String,default:'#fff'},
  openColor:{type:String,default:'#fff'},
  modelValue:Boolean,
})
const emit = defineEmits()
function tapSwitch(){
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