<template>
  <div class="c-progress-bar" :style="{
    width:size,
    height:size
  }">
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script setup>
import {onMounted, ref, watch} from 'vue'

const props = defineProps({
  value: {type: Number, default: 0},//当前进度
  max: {type: Number, default: 100},//最大值
  size: {type: String, default: '50px'},//宽度、高度
  fontSize: {type: String, default: '12px'},//字体大小
  color: {type: String, default: '#666'},//字体颜色
  lineColor: {type: String, default: '#eee'},//线条颜色
  activeColor: {type: String, default: '#c8c8c8'},//进度达到的线条颜色
  lineWidth: {type: Number, default: 3},//线条宽度
})

let canvas = ref(),
    ctx,
    percentage,//目标进度百分比
    current = 0,//当前进度百分比
    size = props.size.replace('px', ''),
    setIntId//定时器id
//生命周期
onMounted(() => {
  canvas.value.width = size
  canvas.value.height = size
  ctx = canvas.value.getContext('2d')
  //监听value值改变，重新绘制进度条
  watch(() => props.value, (e) => {
    start()
  }, {immediate: true})
  //监听最大值改变，重新绘制进度条
  watch(() => props.max, (e) => {
    start()
  }, {immediate: true})
})

function start() {//加载动画实现
  percentage = Math.round(props.value / props.max * 100)//计算目标进度

  clearInterval(setIntId)//每当目标进度被修改时，必须重置定时器

  setIntId = setInterval(() => {
    if (current === percentage) {//判断百分比已达到目标值时，不再进行绘制
      clearInterval(setIntId)
    }
    if (current < percentage) current++
    if (current > percentage) current--
    if (current > 100) current = 100
    if (current < 0) current = 0
    draw()
  }, 1000 / 60)
}

function draw() {//统一绘画
  ctx.clearRect(0, 0, size, size)//清除画布
  writeText(current + '%')//画文本
  drawArc(props.lineColor, 100)//画线条背景
  drawArc(props.activeColor, current)//画线条前景
}

function writeText(text) {//画文本
  ctx.font = props.fontSize + " 微软雅黑"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.fillStyle = props.color
  ctx.fillText(text, size / 2, size / 2 + 2)
}

function drawArc(lineColor, value) {//画线条,lineColor：线条颜色,value：百分比(0~100)
  let end = value / 100 * 4 - 1
  ctx.beginPath();
  ctx.strokeStyle = lineColor
  ctx.lineWidth = props.lineWidth
  ctx.arc(size / 2, size / 2, size / 2 - props.lineWidth / 2,
      -Math.PI / 2, Math.PI / 2 * end, false);
  ctx.stroke();
}

</script>

<script>
export default {
  name: "c-progress-loop"
}
</script>

<style lang="scss" scoped>
.c-progress-bar {
  display: inline-block;

  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>