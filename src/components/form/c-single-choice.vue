<template>
  <div class="c-single-choice c-iconfont" @click="show = true">
    <div class="c-single-choice-label" :style="{
    width:labelWidth,
    textAlign:labelAlign,
  }">{{ label }}
    </div>
    <div class="c-single-choice-text" :style="{textAlign:inputAlign }">
      <span v-if="modelValue">{{ getValue }}</span>
      <span class="no-text" v-else>请选择</span>
    </div>
    <div class="c-single-choice-icon">&#xe646;</div>
  </div>

  <div class="c-mark c-iconfont" v-if="show">
    <div class="c-main">
      <div class="c-main-label">{{ label }}</div>
      <div class="c-single-choice-list">
        <div class="c-single-choice-item" v-for="i in data" @click="change(i)"
             :key="i[valueKey]" :class="current === i[valueKey]?'c-single-choice-active':''">
          <div v-if="current === i[valueKey]">&#xe642;</div>
          <div v-else>&#xe6a6;</div>
          <div>{{ i[labelKey] }}</div>
        </div>
      </div>
      <div class="c-single-choice-btn">
        <div @click="closeChoice">取消</div>
        <div @click="submit">确定</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
const props = defineProps({
  data: Array,//选择数据
  modelValue: null,//选择结果
  labelKey: {default: 'label'},//显示key
  valueKey: {default: 'value'},//返回key
  change: Function,//当数据改变是调用的函数
  label: null,//输入框标签
  labelWidth: {type: String, default: '5em'},//标签宽度
  labelAlign: String,//标签对齐方式
  inputAlign: {type: String, default: 'right'},//输入框内容对齐方式
  placeholder: null,//输入框占位符
})

const getValue = computed(()=>{
  let value = ''
  props.data.forEach(i=>{
    if(i[props.valueKey] === props.modelValue)
      value = i[props.labelKey]
  })
  return value
})


let current = ref(props.modelValue),show = ref(false)

const emit = defineEmits()
function change(e){
  current.value = e[props.valueKey]
}

function submit(){

  emit('update:modelValue',current.value)
  closeChoice()
}
function closeChoice(){
  show.value = false
}
</script>

<script>
export default {
  name: "c-single-choice"
}
</script>

<style lang="scss" scoped>
.c-single-choice {
  display: flex;
  height: 44px;
  align-items: center;
  border-bottom: 1px solid $color10;
  font-size: 15px;
  padding: 0 10px;

  .c-single-choice-label {
    flex: none;
    color: $color2;
    padding-right: 15px;
  }

  .c-single-choice-text {
    flex: 1;

    .no-text {
      color: $color5;
    }
  }

  .c-single-choice-icon {
    margin-left: 10px;
    color: $color5;
    font-size: 16px;
  }

}

.c-main {
  background: #fff;
  width: calc(100% - 60px);
  max-height: calc(100% - 200px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  .c-main-label {
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid $color10;
    flex: none;
    color: $color1;
    box-sizing: border-box;
  }

  .c-single-choice-list {
    flex: 1;
    padding: 0 20px;

    .c-single-choice-item {
      margin: 20px 0;
      color: $color4;
      display: flex;
      align-items: center;
      div{
        &:nth-child(1){
          font-size: 20px;
          margin-right: 15px;
          flex: none;
        }
        &:nth-child(2){
          width: calc(100% - 35px) ;
          word-wrap: break-word;
        }
      }

    }

    .c-single-choice-active {
      color: $main-color;
    }
  }

  .c-single-choice-btn {
    flex: none;
    display: flex;
    height: 50px;
    border-top: 1px solid $color10;
    box-sizing: border-box;

    div {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      &:nth-child(1) {
        color: $color3;
      }

      &:nth-child(2) {
        color: $main-color;
        border-left: 1px solid $color10;
      }
    }
  }
}
</style>