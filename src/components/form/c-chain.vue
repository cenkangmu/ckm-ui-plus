<template>
  <div class="c-chain c-iconfont" @click="show = true" :class="disable?'c-disable':''">
    <!--  标签  -->
    <div class="c-chain-label" :style="{
    width:labelWidth,
    textAlign:labelAlign,
  }">{{ label }}
    </div>
    <!--  选择结果  -->
    <div class="c-chain-text" :style="{textAlign:inputAlign }">
      <span v-if="modelValue.length">{{ getValue }}</span>
      <span class="no-text" v-else>请选择</span>
      <div class="c-input-clear"
           v-if="showClear && modelValue"
           @click.stop="emit('update:modelValue', '')">&#xe647;
      </div>
    </div>
    <div class="c-chain-icon">&#xe646;</div>
  </div>
  <!--  弹窗选中  -->
  <div class="c-mark c-iconfont" v-if="show">
    <div class="c-main">
      <div class="c-main-btn">
        <div @click="cancel">取消</div>
        <div>请选择</div>
        <div @click="submit">确定</div>
      </div>

      <div class="c-main-result">
        <span style="color: #0090ff" v-for="(i,j) in getCurrentValue" @click="tapResult(j)">
          <span v-if="getCurrentValue.length>1 && j!==0"> / </span>{{i}}
        </span>
        <span v-if="current.length === layer">
        <span v-if="getCurrentValue.length !==0"> / </span>请选择
      </span>
      </div>
      <!--   选择列表   -->
      <div class="c-chain-list">
        <div class="c-chain-item" v-for="i in showList" @click="change(i)"
             :key="i[valueKey]" :class="current.indexOf(i[valueKey])>-1 ?'c-chain-active':''">
          <div>{{ i[labelKey] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive, computed, watch} from 'vue'

const props = defineProps({
  data: Array,//选择数据
  modelValue: Array,//选择结果
  labelKey: {default: 'label'},//显示key
  valueKey: {default: 'value'},//返回key
  childrenKey: {default: 'children'},//子集key
  label: null,//输入框标签
  labelWidth: {type: String, default: '5em'},//标签宽度
  labelAlign: String,//标签对齐方式
  inputAlign: {type: String, default: 'right'},//输入框内容对齐方式
  placeholder: null,//输入框占位符
  separator:{type:String,default:'/'},//分隔符
  showLast:Boolean,//只显示最后一项
  disable: Boolean,//禁用
  showClear: Boolean,//清除按钮
  change: Function,//当数据改变是调用的函数
  close: Function,//监听弹窗关闭
  cancel: Function,//监听点击取消按钮
})

let current = ref([]),//当前选中值
    show = ref(false),//选择框是否显示
    layer = ref(0),//选择等级
    //显示选择列表
    showList = computed(() => {
      let {value} = current,
          {data, valueKey, childrenKey} = props
      layer.value = 0
      if (value.length) {
        value.forEach(i => {
          for (let j in data) {
            if (data[j][valueKey] === i && data[j][childrenKey]) {
              layer.value++
              data = data[j][childrenKey]
            }
          }
        })
      }

      return data

    })//当前展示的数组

const getValue = computed(() => {//计算选择框显示结果
  let {data, valueKey, labelKey, childrenKey,separator,modelValue,showLast} = props,
      str = []
  if (modelValue.length) {
    modelValue.forEach(i => {
      for (let j in data) {
        if (data[j][valueKey] === i) {
          str.push(data[j][labelKey])
          if (data[j][childrenKey])
            data = data[j][childrenKey]
        }
      }
    })
  }
  return showLast?str[str.length-1]:str.join(separator)
})

const getCurrentValue = computed(() => {//计算选择框显示结果
  let {value} = current,
      {data, valueKey, labelKey, childrenKey} = props,
      str = []
  if (value.length) {
    value.forEach(i => {
      for (let j in data) {
        if (data[j][valueKey] === i) {
          str.push(data[j][labelKey])
          if (data[j][childrenKey])
            data = data[j][childrenKey]
        }

      }
    })
  }
  return str
})


watch(show, (e) => {//监听选择框显示，修改当前选中值
  current.value = []
  if (e)
    current.value.push(...props.modelValue)
})

const emit = defineEmits()

function change(e) {//点击选择项时，修改当前选中的值
  if(layer.value < current.value.length)
    current.value.splice(layer.value,1,e[props.valueKey])
  else
    current.value.push(e[props.valueKey])
}
function tapResult(i){
  current.value.splice(i,current.value.length)
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

function cancel() {
  typeof props.cancel === 'function' && props.cancel()
  closeChoice()
}
</script>

<script>
export default {
  name: "c-chain"
}
</script>

<style lang="scss" scoped>
.c-chain {
  display: flex;
  height: 44px;
  align-items: center;
  border-bottom: 1px solid $color10;
  font-size: 15px;
  padding: 0 10px;

  .c-chain-label {
    flex: none;
    color: $color2;
    padding-right: 15px;
  }

  .c-chain-text {
    flex: 1;
    display: flex;
    align-items: center;
    overflow: hidden;
    span {
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

  .c-chain-icon {
    margin-left: 10px;
    color: $color5;
    font-size: 16px;
  }

}

.c-main {
  background: #fff;
  width: 100%;
  height: 45%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  .c-main-btn {
    flex: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    box-sizing: border-box;
    color: $color2;
    padding: 0 15px;

    div {

      &:nth-child(1) {
        color: $color3;
      }

      &:nth-child(3) {
        color: $main-color;
      }
    }
  }

  .c-main-result {
    flex: none;
    display: flex;
    align-items: center;
    height: 36px;
    border: 1px solid $color10;
    box-sizing: border-box;
    color: $color2;
    padding: 0 15px;
    font-size: 14px;
  }

  .c-chain-list {
    flex: 1;
    padding: 20px;
    overflow: auto;

    .c-chain-item {
      margin: 15px 0;
      color: $color2;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .c-chain-active {
      color: $main-color;
    }
  }


}

.c-disable {
  pointer-events: none;
}
</style>