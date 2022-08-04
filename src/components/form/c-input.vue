<template>
  <div class="c-input c-iconfont">
    <!--  标签  -->
    <div class="c-input-label" :style="{
    width:labelWidth,
    textAlign:labelAlign,
  }">{{ label }}
    </div>
    <!--  输入框  -->
    <input :placeholder="placeholder"
           :type="type"
           :value="modelValue"
           @input="valueChange($event)"
           :style="{textAlign:inputAlign }"/>
    <!--  最大长度  -->
    <div v-if="maxLength" class="c-input-max"
         :class="String(modelValue).length === maxLength?'max-reached':''">
      {{ String(modelValue).length }}/{{ maxLength }}
    </div>
    <!--  清除按钮  -->
    <div class="c-input-clear"
         v-if="showClear && String(modelValue).length"
         @click="emitValue('')">&#xe647;
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  modelValue: null,//输入框的值
  type: {type: String},//输入框类型
  label: null,//输入框标签
  labelWidth: {type: String, default: '4em'},//标签宽度
  labelAlign: null,//标签对齐方式
  inputAlign: String,//输入框内容对齐方式
  placeholder: null,//输入框占位符
  maxLength: Number,//最大文本长度
  max: Number,//数字输入时，最大值
  min: Number,//数字输入时，最小值
  showClear: Boolean,//显示清除按钮
})

const emit = defineEmits()

function valueChange(e) {
  let value = e.target.value

  if ((!props.type || props.type === 'text') && props.maxLength && value.length > props.maxLength) {
    value = e.target.value = value.substr(0, props.maxLength)
  }
  if (props.type === 'number') {
    if (props.max && value > props.max)
      value = e.target.value = e.target.value = props.max
    if (props.min && value < props.min) {
      value = e.target.value = props.min
    }
  }
  emitValue(value)
}

function emitValue(e) {
  if (props.type === 'number') {
    emit('update:modelValue', Number(e))
  } else
    emit('update:modelValue', e)
}
</script>
<script>
export default {
  name: "c-input",
}
</script>

<style lang="scss" scoped>
.c-input {
  display: flex;
  height: 44px;
  align-items: center;
  border-bottom: 1px solid $color10;
  font-size: 15px;
  padding: 0 10px;

  .c-input-label {
    flex: none;
    color: $color2;
    padding-right: 15px;
  }

  input {
    flex: 1;
    border: none;
    outline: none;

    &::placeholder {
      color: $color5;
    }
  }

  .c-input-max {
    color: $color5;
    padding-left: 10px;
    font-size: 12px;
  }

  .max-reached {
    color: $error;
  }

  .c-input-clear {
    width: 15px;
    height: 15px;
    background: $color9;
    color: $color8;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-left: 10px;
  }
}
</style>