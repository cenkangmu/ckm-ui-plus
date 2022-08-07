<template>
  <div class="c-multiple-choice c-iconfont" @click="show = true" :class="disable?'c-disable':''">
    <!--  标签  -->
    <div class="c-multiple-choice-label" :style="{
    width:labelWidth,
    textAlign:labelAlign,
  }">{{ label }}
    </div>
    <!--  选择结果  -->
    <div class="c-multiple-choice-text" :style="{textAlign:inputAlign }">
      <span v-if="modelValue.length">
        {{ getValue }}

      </span>
      <span class="no-text" v-else>请选择</span>
      <span class="c-multiple-choice-count" v-if="modelValue.length">{{modelValue.length}}</span>
    </div>
    <div class="c-multiple-choice-icon">&#xe646;</div>
  </div>
  <!--  弹窗选中  -->
  <div class="c-mark c-iconfont" v-if="show">
    <!--  主体  -->
    <div class="c-main">
      <!--   标题   -->
      <div class="c-main-label">
        <div style="display: flex;align-items: center" :style="{color:all?'#0090ff':'#666'}" @click="tapAll">
          <div v-if="all">&#xe630;</div>
          <div v-else>&#xe696;</div>
          <div style="margin-left: 5px">全选</div>
        </div>
        <div style="flex: 1;text-align: center">{{ label }}</div>
        <div style="padding-left: 15px;color: #0090ff" @click="current = [];all = false">清除</div>
      </div>
      <!--   选择列表   -->
      <div class="c-multiple-choice-list">
        <div class="c-multiple-choice-item" v-for="i in data" @click="change(i)"
             :key="i[valueKey]" :class="current.indexOf(i[valueKey]) !==-1 ?'c-multiple-choice-active':''">
          <div v-if="current.indexOf(i[valueKey]) !==-1">&#xe630;</div>
          <div v-else>&#xe696;</div>
          <div>{{ i[labelKey] }}</div>
        </div>
      </div>
      <!--  底部按钮    -->
      <div class="c-multiple-choice-btn">
        <div @click="cancel">取消</div>
        <div @click="submit">确定</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive, computed, watch} from 'vue'

const props = defineProps({
  data: Array,//选择数据
  modelValue: null,//选择结果
  labelKey: {default: 'label'},//显示key
  valueKey: {default: 'value'},//返回key
  label: null,//输入框标签
  labelWidth: {type: String, default: '5em'},//标签宽度
  labelAlign: String,//标签对齐方式
  inputAlign: {type: String, default: 'right'},//输入框内容对齐方式
  placeholder: null,//输入框占位符
  disable: Boolean,//禁用
  change: Function,//当数据改变是调用的函数
  close: Function,//监听弹窗关闭
  cancel: Function,//监听点击取消按钮
  separator:{type:String,default:'、'},//分隔符
  showOne:Boolean,//只显示被选中的第一个
})


const getValue = computed(() => {//计算选择框显示结果
  let value = []
  props.data.forEach(i => {
    if (props.modelValue.includes(i[props.valueKey]))
      value.push(i[props.labelKey])
  })
  if(!value.length) return ''
  return props.showOne?value[0]:value.join(props.separator)
})


let current = ref([]),//当前选中值
    show = ref(false),//选择框是否显示
    all = ref(false)//是否全选
watch(show, (e) => {//监听选择框显示，修改当前选中值
  current.value = []
  if (e)
    current.value.push(...props.modelValue)
  checkAll()
})
function tapAll(){
  all.value = !all.value
  current.value = []
  if(all.value){
    current.value = props.data.map(i=>i[props.valueKey])
  }
}

function checkAll(){
  all.value = props.data.length && current.value.length === props.data.length
}

const emit = defineEmits()

function change(e) {//点击选择项时，修改当前选中的值
  let index = current.value.indexOf(e[props.valueKey])
  if (index === -1)
    current.value.push(e[props.valueKey])
  else
    current.value.splice(index, 1)
  checkAll()
}

function submit() {//点击提交按钮时，修改父元素绑定的值
  emit('update:modelValue', current.value)
  props.change && props.change(current.value)
  closeChoice()
}

function closeChoice() {//关闭弹窗
  show.value = false
  props.close && props.close()
}

function cancel() {//点击取消
  props.cancel && props.cancel()
  closeChoice()
}
</script>

<script>
export default {
  name: "c-multiple-choice"
}
</script>

<style lang="scss" scoped>
.c-multiple-choice {
  display: flex;
  height: 44px;
  align-items: center;
  border-bottom: 1px solid $color10;
  font-size: 15px;
  padding: 0 10px;

  .c-multiple-choice-label {
    flex: none;
    color: $color2;
    padding-right: 15px;
  }

  .c-multiple-choice-text {
    flex: 1;
    display: flex;
    overflow: hidden;
    span{
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .no-text {
      color: $color5;
    }
    .c-multiple-choice-count{
      flex: none;
      min-width: 20px;
      height: 20px;
      background: $color11;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-left: 10px;
      font-size: 10px;
      color: $color4;
    }
  }

  .c-multiple-choice-icon {
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
    height: 50px;
    border-bottom: 1px solid $color10;
    flex: none;
    color: $color1;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 15px;
    div{
      flex: none;
    }
  }

  .c-multiple-choice-list {
    flex: 1;
    padding: 0 20px;
    overflow: auto;

    .c-multiple-choice-item {
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

    .c-multiple-choice-active {
      color: $main-color;
    }
  }

  .c-multiple-choice-btn {
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

.c-disable {
  pointer-events: none;
}
</style>