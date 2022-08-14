<template>
  <div class="c-calendar-board c-iconfont">
    <div class="c-calendar-board-top">
      <div class="c-calendar-board-top-btn" @click="setList(true)">&#xe601;</div>
      <div class="c-calendar-board-top-center">
        <span @click="listType = 'year'">{{ year }}</span>
        年
        <span @click="listType = 'month'">{{ month!=null ? (month + 1) : '--' }}</span>
        月
      </div>
      <div class="c-calendar-board-top-btn" @click="setList(false)">&#xe646;</div>
    </div>
    <div class="c-calendar-board-bottom" v-if="listType == 'date'">
      <div class="c-date-row">
        <div class="c-date-item">日</div>
        <div class="c-date-item">一</div>
        <div class="c-date-item">二</div>
        <div class="c-date-item">三</div>
        <div class="c-date-item">四</div>
        <div class="c-date-item">五</div>
        <div class="c-date-item">六</div>
      </div>
      <div class="c-date-row">
        <div class="c-date-item" v-for="i in dates" @click="changeDate(i)"
             :class="{
          'c-date-item-active':comparisonDate(i),
          'c-date-no-select':noSelect(i)
        }">
          {{ i && i.getDate() }}
        </div>

      </div>
    </div>
    <div class="c-calendar-board-bottom" v-if="listType == 'month'">
      <div class="c-date-row">
        <div class="c-month-item" v-for="i in 12" :class="(i-1)===month&&'c-date-item-active'"
             @click="changeMonth(i)">
          {{ i }} 月
        </div>

      </div>
    </div>
    <div class="c-calendar-board-bottom" v-if="listType == 'year'">
      <div class="c-date-row">
        <div class="c-month-item" v-for="i in years" :class="i===year&&'c-date-item-active'"
             @click="changeYear(i)">
          {{ i }}
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import {ref, watch} from 'vue'

const props = defineProps({
  modelValue: {type: Date},//选中的值
  maxDate:{type:Date},//最大可选日期
  minDate:{type:Date},//最小可选日期
})
const emit = defineEmits()
let dates = ref([])
let years = ref([])
let date = ref()
let year = ref()
let month = ref()
let listType = ref('date') // date:日期  month:月份  year:年份
watch(()=>props.modelValue,(e)=>{
  date.value = e
  init()
},{immediate:true})

function init() {
  let d = props.modelValue || new Date()
  year.value = d.getFullYear()
  month.value = d.getMonth()
  getMonthDates()
  getYearList()
}

function getMonthDates() {//获取某个月份全部日期
  dates.value = []
  let lastDate = new Date(year.value, month.value + 1, 0).getDate()

  for (let i = 1; i <= lastDate; i++) {
    dates.value.push(new Date(year.value, month.value, i))
  }
  let day = dates.value[0].getDay()
  if (day > 1) {
    for (let i = 0; i < day; i++) {
      dates.value.unshift(null)
    }
  }
}

function getYearList() {//获取年份列表
  years.value = []
  let min = year.value - 5
  let max = year.value + 6
  for (let i = min; i <= max; i++) {
    years.value.push(i)
  }
}

function comparisonDate(i) {//对比当前选择日期
  let d = date.value
  if (!i || !d) return false
  return (
      i.getFullYear() === d.getFullYear()
      && i.getMonth() === d.getMonth()
      && i.getDate() === d.getDate()
  )
}
function noSelect(i){//判断日期是否可选
  let {maxDate,minDate} = props,result = false
  if (!i) return result
  if(maxDate){
    if(i.getTime()>maxDate.getTime())
      result = true
  }
  if(minDate){
    if(i.getTime()<minDate.getTime())
      result = true
  }
  return result
}

function setList(bool) {//点击左右箭头触发,bool:true 左    bool:false 右
  switch (listType.value) {
    case 'date':
      if (bool) {
        if (month.value === 0) {
          month.value = 11
          year.value--
        } else month.value--
      } else {
        if (month.value === 11) {
          month.value = 0
          year.value++
        } else month.value++
      }
      getMonthDates();
      return
    case 'month':
      if (bool) {
        year.value--
      } else {
        year.value++
      }
      return;
    case 'year':
      if (bool) {
        year.value-=5
      } else {
        year.value+=6
      }
      getYearList()
      return;
  }
}

function changeDate(i) {//选择日期
  if (!i) return
  if(noSelect(i)) return;
  date.value = i
  emit('update:modelValue', i)
}

function changeMonth(i) {//选择月份
  month.value = i - 1
  listType.value = 'date'
  date.value = null
  getMonthDates()
}

function changeYear(i) {
  year.value = i
  listType.value = 'month'
  month.value = null
  getYearList()
}
</script>
<script>
export default {
  name: "c-calendar-board"
}
</script>

<style lang="scss" scoped>
.c-calendar-board {
  font-size: 14px;
  padding: 15px;
  color: $color1;
  background: $color8;
  .c-calendar-board-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    .c-calendar-board-top-center {
      font-size: 18px;
    }

    .c-calendar-board-top-btn {
      width: 30px;
      height: 30px;
      background: $color11;
      color: $color3;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      border-radius: 2px;
    }
  }

}

.c-date-row {
  display: flex;
  flex-wrap: wrap;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .c-date-item {
    width: calc(100% / 7);
    padding: 15px 0;
    border-radius: 5px;
  }

  .c-date-item-active {
    background: $main-color;
    color: $color8
  }
  .c-date-no-select{
    opacity: .3;
  }
  .c-month-item {
    width: calc(100% / 4);
    box-sizing: border-box;
    height: 80px;
    font-size: 18px;
    border-radius: 5px;
  }
}
</style>