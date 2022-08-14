<template>
  <div class="c-select-list" :style="{
  height:`${itemHeight*7}px`,
  width:width,
  background:background,
  color:color,
  fontSize:fontSize,
  textAlign:textAlign
}">
    <div class="c-select-list-box" @scroll="scroll" ref="scrollBox">
      <div class="c-select-list-item" v-for="i in 3" :style="{height:`${itemHeight}px`}"></div>
      <div class="c-select-list-item" :style="{lineHeight:`${itemHeight}px`}">{{ tipText }}</div>
      <div class="c-select-list-item" v-for="(i,j) in data" :key="j" :style="{
        lineHeight:`${itemHeight}px`
      }">
        {{ i[labelKey] || i }}
      </div>
      <div class="c-select-list-item" v-for="i in 3" :style="{height:`${itemHeight}px`}"></div>
    </div>
    <!--  蒙板  -->
    <div class="c-select-list-box" style="pointer-events: none">
      <div class="c-select-list-item-mark" v-for="i in 7" :style="{
        height:`${itemHeight}px`,
        background: background,
        opacity:`.7`
      }"></div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref, watch} from 'vue'

const props = defineProps({
  modelValue: null,//选中的值
  data: Array,//选择列表数据
  labelKey: {type: String},//显示的key值
  valueKey: {type: String},//返回的key值
  width: {type: String},//宽度
  background: {type: String, default: '#fff'},//背景颜色
  color: {type: String, default: '#333'},//字体颜色
  fontSize: {type: String, default: '14px'},//字体大小
  textAlign: {type: String, default: 'center'},//对齐方式
  itemHeight: {type: Number, default: 40},//行高
  tipText:{default:'--请选择--'},//未选择
})
const emit = defineEmits()
let scrollBox = ref(),
    setTime = null,
    isScroll = false
const init = () => {
  let {data, valueKey, modelValue, itemHeight,tipText} = props
  if (!modelValue) return
  data.forEach((i, j) => {
    if (i[valueKey] === modelValue || i === modelValue) {
      if(tipText) j +=1
      scrollBox.value.scrollTop = j * itemHeight
    }
  })
}
onMounted(() => {
  watch(() => props.modelValue, init, {immediate: true})
})

const scroll = () => {
  clearTimeout(setTime)

  setTime = setTimeout(() => {
    if (isScroll) return
    isScroll = true
    let {scrollTop} = scrollBox.value//当前滚动距离
    let {itemHeight, tipText} = props //行高
    let num = Math.round(scrollTop / itemHeight) //应该滚动到第几个
    let correct = scrollTop - num * itemHeight //当前还差多少距离，整数为滚多了，负数为滚少了
     //最终该滚到的位置
    scrollBox.value.scrollTop = scrollTop - correct
    if(tipText) num -=1
    scrollEnd(num)
  }, 100)
}

function scrollEnd(num) {
  clearTimeout(setTime)
  isScroll = false

  if ((!num && num != 0) ) return

  let {data, valueKey, modelValue} = props

  const value = valueKey ? data[tipTextnum][valueKey] : data[num]
  if (value === modelValue) return
  emit('update:modelValue', value)
  emit('change', value, data[num])
}
</script>
<script>
export default {
  name: "c-select-list"
}
</script>

<style lang="scss" scoped>
.c-select-list {
  position: relative;

  .c-select-list-box {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    .c-select-list-item{
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    &::-webkit-scrollbar {
      display: none
    }

    .c-select-list-item-mark {
      box-sizing: border-box;

      &:nth-child(4) {
        opacity: 1 !important;
        background: transparent !important;
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
      }
    }
  }
}
</style>