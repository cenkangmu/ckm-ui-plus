<template>
  <div class="c-tag c-iconfont">


    <div class="c-tag-box" :class="'c-tag-'+type+'-'+showType+(disable ? ' c-disable':'')"
         :style="{
    height:height,
    width:width,
    borderRadius:radius,
    background:background,
    color:color,
    fontSize:fontSize
  }">
      <slot/>
      <span class="c-tag-close" v-if="showClose" @click="clickClose">&#xe647;</span>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  height: {type: String},//高度，默认48px
  width: {type: String},//宽度，默认auto
  background: {type: String},//背景颜色
  color: {type: String},//字体颜色
  fontSize: {type: String},//字体颜色，默认12px
  type: {type: String, default: 'default'},//按钮类型：default、primary、success、warn、error
  radius: {type: String, default: '0'},//圆角
  showType: {type: String, default: 'background'},//显示类型：边框型(border)、背景型(background)
  showClose: {type: Boolean},//是否禁用
  disable: {type: Boolean},//是否禁用
})
const emit = defineEmits()

function clickClose() {
  emit('close')
}
</script>

<script>
export default {
  name: 'c-tag'
}
</script>
<style lang="scss" scoped>
.c-tag {
  display: inline-block;
  font-size: 12px;

  margin: 5px;

  .c-tag-box {
    padding: 0 5px;
    min-height: 20px;
    min-width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .c-tag-close {
    margin-left: 5px;
  }
}

/* 背景型样式开始 */
.c-tag-default-background {
  background: $color8;
  color: $color2;
  border: 1px solid $color9;
}

.c-tag-primary-background {
  background: $main-color;
  color: #fff;
}

.c-tag-success-background {
  background: $success;
  color: #fff;
}

.c-tag-warn-background {
  background: $warn;
  color: #fff;
}

.c-tag-error-background {
  background: $error;
  color: #fff;
}

/* 背景型样式结束 */

/* 边框型样式开始 */
.c-tag-default-border {
  background: $color8;
  color: $color2;
  border: 1px solid $color10;
}

.c-tag-primary-border {
  background: rgba($main-color, .1);
  color: $main-color;
  border: 1px solid $main-color;
}


.c-tag-success-border {
  background: rgba($success, .1);
  color: $success;
  border: 1px solid $success;
}

.c-tag-warn-border {
  background: rgba($warn, .1);
  color: $warn;
  border: 1px solid $warn;
}

.c-tag-error-border {
  background: rgba($error, .1);
  color: $error;
  border: 1px solid $error;
}

/* 边框型样式结束 */
</style>