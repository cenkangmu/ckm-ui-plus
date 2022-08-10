<template>
<div class="c-navbar c-iconfont" :style="{
  width:width,
  height:height,
  background:background,
  borderColor:borderColor,
  color:color,
}">
<!-- 左边 -->
  <div class="c-navbar-left" v-if="showSearch?($slots.left || backText):true">
    <slot name="left" v-if="$slots.left"/>
    <div class="c-navbar-back" v-if="!$slots.left && backText" @click="back">
      <span>&#xe601;</span>
      <span>{{ backText }}</span>
    </div>
  </div>
<!-- 中间 -->
  <div class="c-navbar-title">
    <div class="c-navbar-search" v-if="showSearch">
      <div class="c-search-icon">&#xe741;</div>
      <input v-model="modelValue" @input="valueChange($event)" :placeholder="placeholder">
    </div>
    <div v-else>{{title}}</div>
  </div>
<!-- 右边 -->
  <div class="c-navbar-right" v-if="showSearch?($slots.right || rightText):true">
    <slot name="right" v-if="$slots.right"/>
    <div class="c-navbar-right-default" v-if="!$slots.right && rightText" @click="right">
      {{ rightText }}
    </div>
  </div>
</div>
</template>
<script setup>
const props = defineProps({
  title:String,
  width:{type:String},
  height:{type:String,default:'50px'},
  background:{type:String,default:'#fff'},
  backText:{type: String,},
  rightText:{type:String,},
  borderColor:{type:String},
  color:{type:String},
  showSearch:Boolean,//显示搜索框
  placeholder:{type:String,default:'请输入关键字搜索'},
  modelValue:String,

})

const emit = defineEmits()
function back(){
  emit('back')
}
function valueChange(e){
  emit('update:modelValue', e.target.value)
}
function right(){
  emit('tapRight')
}
</script>
<script>
export default {
  name: "c-navbar"
}
</script>

<style lang="scss" scoped>
.c-navbar{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  color: $color1;
  .c-navbar-left{
    flex: none;
    min-width: 4em;
    .c-navbar-back{
      margin-right: 15px;
    }
    span{
      &:nth-child(1){
        margin-right: 5px;
      }
    }
  }
  .c-navbar-title{
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .c-navbar-search{
      min-width: 200px;
      width: 100%;
      height: 100%;
      background: $color7;
      border-radius: 100px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
      .c-search-icon{
        font-size: 20px;
        color: $color5;
        flex: none;
      }
      input{
        background: transparent;
        border: none;
        outline: none;
        flex: 1;
        margin-left: 8px;
        color: #666;
        &::placeholder{
          color: $color5;
        }
      }
    }
  }
  .c-navbar-right{
    flex: none;
    text-align: right;
    min-width: 4em;
    .c-navbar-right-default{
      margin-left: 15px;
    }
  }
}
</style>