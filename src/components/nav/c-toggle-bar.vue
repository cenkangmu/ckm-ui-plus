<template>
  <div class="c-toggle-bar" :style="{
    height:height,
    width:width,
    background:background,
    lineHeight:height,
    borderRadius:type === 'radius'?'100px':'',
    fontSize:fontSize,
  }">
    <div v-for="(i,j) in data" class="c-toggle-bar-item" :key="j" :class="modelValue===i[valueKey]?'':''"
         @click="tapItem(i)">

<!--  底部线条型  -->
      <div v-if="type === 'line'" :style="{
      borderBottom:`${lineWidth} solid ${modelValue===i[valueKey]?activeColor:borderColor}`,
      color:modelValue===i[valueKey]?textActiveColor:color,
    }">
        {{ i[labelKey] }}
        <div class="c-toggle-bar-news" v-if="i[newsKey]"></div>
      </div>
<!--  背景型  -->
      <div v-else :style="{
      background:modelValue===i[valueKey]?activeColor:'',
      color:modelValue===i[valueKey]?textActiveColor:color,
    }">
        {{ i[labelKey] }}
        <div class="c-toggle-bar-news" v-if="i[newsKey]"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: null,//选中的value
  data: Array,//渲染的数组
  labelKey: {default: 'label'},//显示的key
  valueKey: {default: 'value'},//选中的key
  newsKey: {default: 'news'},//新消息key
  height: {type: String, default: '44px'},//高度
  width: String,//宽度
  background: {type: String, default: '#fff'},//背景颜色
  fontSize:{type: String, default: '14px'},//字体大小
  lineWidth:{type:String,default:'3px'},//底部线条宽度
  color: {type: String, default: '#999'},//默认字体颜色
  borderColor: {type: String, default: '#eee'},//底部线条默认颜色
  activeColor: {type: String, default: '#0090ff'},//底部线条选中颜色
  textActiveColor:{type: String, default: '#0090ff'},//文本选中颜色
  type: {type: String, default: 'line'},//类型：line 线条型    background 背景型    radius 圆角型
})
const emit = defineEmits()
const tapItem = i => {
  emit('update:modelValue', i[props.valueKey])
  emit('change', i[props.valueKey], i)
}
</script>
<script>
export default {
  name: "c-toggle-bar"
}
</script>

<style lang="scss" scoped>
.c-toggle-bar {
  display: flex;
  overflow: hidden;

  .c-toggle-bar-item {
    flex: 1;
    text-align: center;
    .c-toggle-bar-news{
      display: inline-block;
      position: relative;
      left: 2px;
      bottom: 8px;
      background: #ff0000;
      width: 7px;
      height: 7px;
      border-radius: 50%;
    }
    div {
      height: 100%;
      box-sizing: border-box;
    }
  }
}
</style>