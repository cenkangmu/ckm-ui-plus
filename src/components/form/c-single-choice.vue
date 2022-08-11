<template>
  <div class="c-single-choice c-iconfont" @click="show = true" :class="disable?'c-disable':''">
    <!--  标签  -->
    <div class="c-single-choice-label" :style="{
    width:labelWidth,
    textAlign:labelAlign,
  }">{{ label }}
    </div>
    <!--  选择结果  -->
    <div class="c-single-choice-text" :style="{textAlign:inputAlign }">
      <span v-if="modelValue">{{ getValue }}</span>
      <span class="no-text" v-else>请选择</span>
      <div class="c-input-clear"
           v-if="showClear && modelValue"
           @click.stop="emit('update:modelValue', '')">&#xe647;
      </div>
    </div>
    <div class="c-single-choice-icon">&#xe646;</div>
  </div>
  <!--  弹窗选中  -->
  <div class="c-mark c-iconfont" v-if="show">
    <!--  主体  -->
    <div class="c-main">
      <!--   标题   -->
      <div class="c-main-label">{{ label }}</div>
      <!--   选择列表   -->
      <div class="c-single-choice-list">
        <div class="c-single-choice-item" v-for="i in data" @click="change(i)"
             :key="i[valueKey]" :class="current === i[valueKey]?'c-single-choice-active':''">
          <div v-if="current === i[valueKey]">&#xe642;</div>
          <div v-else>&#xe6a6;</div>
          <div>{{ i[labelKey] }}</div>
        </div>
      </div>
      <!--  底部按钮    -->
      <div class="c-single-choice-btn">
        <div @click="cancel">取消</div>
        <div @click="submit">确定</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, watch} from 'vue'

const props = defineProps({
  data: Array,//选择数据
  modelValue: null,//选择结果
  labelKey: {type:String,default: 'label'},//显示key
  valueKey: {type:String,default: 'value'},//返回key
  label: null,//输入框标签
  labelWidth: {type: String, default: '5em'},//标签宽度
  labelAlign: String,//标签对齐方式
  inputAlign: {type: String, default: 'right'},//输入框内容对齐方式
  placeholder: null,//输入框占位符
  disable:Boolean,//是否禁用
  showClear:Boolean,//显示清除按钮
  change: Function,//当数据改变是调用的函数
  close:Function,//监听弹窗关闭
  cancel:Function,//监听点击取消按钮
})


const getValue = computed(() => {//计算选择框显示结果
  let value = ''
  props.data.forEach(i => {
    if (i[props.valueKey] === props.modelValue)
      value = i[props.labelKey]
  })
  return value
})


let current = ref(),//当前选中值
    show = ref(false)//选择框是否显示
watch(show, (e) => {//监听选择框显示，修改当前选中值
  if (e)
    current.value = props.modelValue
})

const emit = defineEmits()

function change(e) {//点击选择项时，修改当前选中的值
  current.value = e[props.valueKey]
}

function submit() {//点击提交按钮时，修改父元素绑定的值
  emit('update:modelValue', current.value)
  typeof props.change === 'function' && props.change(current.value)
  closeChoice()
}

function closeChoice() {//关闭弹窗
  show.value = false
  typeof props.close === 'function' && props.close()
}
function cancel(){
  typeof props.cancel === 'function' && props.cancel()
  closeChoice()
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
    display: flex;
    align-items: center;
    overflow: hidden;
    span{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
    }

    .no-text {
      color: $color5;
    }
    .c-input-clear {
      flex: none;
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
    overflow: auto;
    .c-single-choice-item {
      margin: 20px 0;
      color: $color2;
      display: flex;
      align-items: center;

      div {
        &:nth-child(1) {
          font-size: 20px;
          margin-right: 15px;
          flex: none;
        }

        &:nth-child(2) {
          width: calc(100% - 35px);
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
.c-disable{
  pointer-events: none;
}
</style>