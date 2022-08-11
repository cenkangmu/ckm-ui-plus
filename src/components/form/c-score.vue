<template>
  <div class="c-score c-iconfont" :class="disable?'c-disable':''">

    <div v-for="i in number" class="c-score-item" :style="{
    margin:'0 '+ margin,
    color:color,
    fontSize:size
  }" @click="tapItem(i)">
      <div v-if="isSelect(i)">
        <slot name="select" v-if="$slots.select"/>
        <div v-else>&#xe62b;</div>
      </div>
      <div v-else>
        <slot name="noSelect" v-if="$slots.noSelect"/>
        <div v-else>&#xe648;</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  modelValue: {type: Number, default: 0},//当前评分
  max: {type: Number, default: 5},//最大评分
  number: {type: Number, default: 5},//图标总数量
  size: {type: String, default: '16px'},//图标大小
  color: {type: String, default: '#ff8c00'},//图标颜色
  margin: {type: String, default: '5px'},//图标间距
  disable: {type: Boolean},//是否禁用
})
const emit = defineEmits()

function isSelect(i) {
  let {modelValue, max, number} = props
  return i <= Math.round(modelValue / max * number)
}

function tapItem(i) {
  let {max, number} = props
  let value = i / number * max
  if (String(value).split('.').length === 2)
    value = value.toFixed(2)
  emit('update:modelValue', value)
}
</script>
<script>
export default {
  name: "c-score"
}
</script>

<style lang="scss" scoped>
.c-score {
  display: inline-block;
  align-items: center;
  padding: 5px;
  .c-score-item {
    display: inline-block;
  }
}
.c-disable {
  pointer-events: none;
}
</style>