<template>
  <div class="c-button" :class="'c-button-'+type+'-'+showType+(disable ? ' c-disable':'')"
       :style="{
    height:height,
    width:width,
    borderRadius:radius,
    background:background,
    color:color,
    fontSize:fontSize
  }">
    <slot/>
  </div>
</template>

<script setup>
defineProps({
  height: {type: String},//高度，默认48px
  width: {type: String},//宽度，默认auto
  background: {type: String},//背景颜色
  color: {type: String},//字体颜色
  fontSize: {type: String},//字体大小,默认16px
  type: {type: String, default: 'default'},//按钮类型：default、primary、success、warn、error
  radius: {type: String, default: '5px'},//圆角
  showType: {type: String, default: 'background'},//显示类型：边框型(border)、背景型(background)
  disable:{type:Boolean}//是否禁用
})
</script>

<script>
export default {
  name: 'c-button'
}
</script>
<style lang="scss" scoped>
.c-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  font-size: 16px;
  box-sizing: border-box;
}
/* 背景型样式开始 */
.c-button-default-background {
  background: $color8;
  color: $color2;
  border: 1px solid $color9;
}

.c-button-primary-background {
  background: $main-color;
  color: #fff;
}


.c-button-success-background {
  background: $success;
  color: #fff;
}

.c-button-warn-background {
  background: $warn;
  color: #fff;
}

.c-button-error-background {
  background: $error;
  color: #fff;
}
/* 背景型样式结束 */

/* 边框型样式开始 */
.c-button-default-border {
  background: $color8;
  color: $color2;
  border: 1px solid $color9;
}

.c-button-primary-border {
  background: rgba($main-color,.1);
  color: $main-color;
  border: 1px solid $main-color;
}


.c-button-success-border {
  background: rgba($success,.1);
  color: $success;
  border: 1px solid $success;
}

.c-button-warn-border {
  background: rgba($warn,.1);
  color: $warn;
  border: 1px solid $warn;
}

.c-button-error-border {
  background: rgba($error,.1);
  color: $error;
  border: 1px solid $error;
}

/* 边框型样式结束 */
</style>