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
      <span v-if="modelValue">{{ modelValue.cFormat(format) }}</span>
      <span class="no-text" v-else>{{ placeholder }}</span>
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
      <div class="c-single-choice-btn">
        <div @click="cancel">取消</div>
        <div @click="submit">确定</div>
      </div>

      <!--   选择列表   -->
      <div style="display: flex">
        <c-select-list tipText="" style="flex: 1" v-model="year" :data="years"></c-select-list>
        <c-select-list tipText="" style="flex: 1" v-model="month" :data="months"></c-select-list>
        <c-select-list tipText="" style="flex: 1" v-model="date" :data="dates"></c-select-list>
      </div>

    </div>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue'

const props = defineProps({
  modelValue: Date,//选择结果
  label: null,//标签
  labelWidth: {type: String, default: '5em'},//标签宽度
  labelAlign: String,//标签对齐方式
  inputAlign: {type: String, default: 'right'},//内容对齐方式
  placeholder: {default:'请选择'},//占位符
  format:{type:String,default:'yyyy-mm-dd'},//显示格式
  defaultValue: {type: Date, default: new Date()},//默认显示
  minDate: {type: Date, default: new Date(1900, 0, 1)},//最小可选日期
  maxDate: {type: Date, default: new Date(2200, 11, 31)},//最大可选日期
  disable: Boolean,//是否禁用
  showClear: Boolean,//显示清除按钮
  change: Function,//当数据改变是调用的函数
  close: Function,//监听弹窗关闭
  cancel: Function,//监听点击取消按钮
})


let year = ref(1900),//年
    month = ref(1),//月
    date = ref(1),//日
    years = ref([]),//年列表
    months = ref([]),//月列表
    dates = ref([]),//日期列表
    show = ref(false)//选择框是否显示

watch(show, (e) => {//监听选择框显示，修改当前选中值
  let {modelValue, defaultValue} = props

  let t = modelValue || defaultValue
  if (!e || !t) return
  year.value = t.getFullYear()
  month.value = t.getMonth() + 1
  date.value = t.getDate()

})
const init = () => {
  let {minDate} = props
  year.value = minDate.getFullYear()
  month.value = minDate.getMonth() + 1
  date.value = minDate.getDate()
  initYear()
  initMonth()
  initDate()
}

function initYear() {
  years.value = []
  let min = 1900, max = 2200, {minDate, maxDate} = props
  if (minDate)
    min = minDate.getFullYear()
  if (maxDate)
    max = maxDate.getFullYear()
  for (let i = min; i <= max; i++) {
    years.value.push(i)
  }
}

function initMonth() {
  for (let i = 1; i <= 12; i++) {
    months.value.push(i)
  }
}

function initDate() {
  dates.value = []
  let lastDate = new Date(year.value, month.value, 0).getDate()
  for (let i = 1; i <= lastDate; i++) {
    dates.value.push(i)
  }
}

watch(() => year.value, initDate)
watch(() => month.value, initDate)
init()

const emit = defineEmits()

function submit() {//点击提交按钮时，修改父元素绑定的值
  let value = new Date(year.value, month.value - 1, date.value)
  emit('update:modelValue', value)
  typeof props.change === 'function' && props.change(value)
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
  name: "c-date-select"
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

  .c-single-choice-icon {
    margin-left: 10px;
    color: $color5;
    font-size: 16px;
  }

}

.c-main {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 100%;

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
    justify-content: space-between;
    border-bottom: 1px solid #eee;

    div {
      line-height: 45px;
      padding: 0 15px;

      &:nth-child(1) {
        color: $color3;
      }

      &:nth-child(2) {
        color: $main-color;
      }
    }
  }
}

.c-disable {
  pointer-events: none;
}
</style>