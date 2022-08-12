<template>
  <div class="c-signature" :style="{
  width:width,
  height:height,
  background:background,
}" ref="canvasBox">
    <div class="c-signature-back">
      {{ backText }}
    </div>
    <canvas ref="canvas"
            @touchstart='Start($event)'
            @touchmove='Move($event)'
            @touchend='End($event)'
            @mousedown="Start($event)"
            @mousemove="Move($event)"
            @mouseup="End($event)"
    ></canvas>
  </div>
</template>
<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue";

const props = defineProps({
  width: {type: String},//宽度
  height: {type: String, default: '200px'},//高度
  background: {type: String, default: '#fff'},//背景颜色
  backText: {type: String, default: '签名区'},//背景文本
  color: {type: String, default: '#333'},//线条颜色
  lineWidth: {type: Number, default: 5},//线条宽度
})

let canvas = ref(),
    canvasBox = ref(),
    ctx, canvasW, canvasH,
    startX = 0, startY = 0

onMounted(() => {

  addEventListener("resize", init)
  init()
})
onBeforeUnmount(() => {
  document.removeEventListener('touchmove', touchmove, {passive: false})
  removeEventListener("resize", init)
})

function touchmove(evt) {
  evt.preventDefault()
}

function init() {//初始化
  setSize()
  ctx = canvas.value.getContext('2d')
  setLine()
}

function setSize() {//设置画布大小
  let {offsetWidth, offsetHeight} = canvasBox.value
  canvasW = offsetWidth
  canvasH = offsetHeight
  canvas.value.width = canvasW
  canvas.value.height = canvasH
}

function setLine() {//设置线条
  ctx.lineWidth = props.lineWidth;
  ctx.strokeStyle = props.color;
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
}

function clear() {//重置画布
  ctx.clearRect(0, 0, canvasW, canvasH)
}

function getXY(e) {//获取鼠标或手指点击的坐标
  if (e.offsetX && e.offsetY)//鼠标
    return {x: e.offsetX, y: e.offsetY}
  else {//手指
    return {
      x: e.targetTouches[0].pageX - canvasBox.value.getBoundingClientRect().left,
      y: e.targetTouches[0].pageY - canvasBox.value.getBoundingClientRect().top
    }
  }
}

function Start(e) {//按下
  document.addEventListener('touchmove', touchmove, {passive: false})
  console.log(e,  canvasBox.value)
  let {x, y} = getXY(e)
  startX = x
  startY = y
  line(x, y)
}

function Move(e) {//移动
  if (startX && startY) {
    let {x, y} = getXY(e)
    line(x, y)
    startX = x
    startY = y
  }
}

function End() {//松开
  document.removeEventListener('touchmove', touchmove, {passive: false})
  startX = ''
  startY = ''
}

function line(x, y) {//绘制线条
  ctx.beginPath()
  ctx.moveTo(startX, startY)
  ctx.lineTo(x, y)
  ctx.stroke()
  ctx.closePath()
}

function save() {//保存签名图片为base64
  return canvas.value.toDataURL()
}

defineExpose({clear,save})
</script>
<script>
export default {
  name: "c-signature"
}
</script>

<style lang="scss" scoped>
.c-signature {
  position: relative;
  display: flex;
  align-items: center;
  user-select:none;
  .c-signature-back {
    flex: 1;
    font-size: 48px;
    text-align-last: justify;
    padding: 0 30px;
    color: #eee;
  }

  canvas {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
  }
}
</style>