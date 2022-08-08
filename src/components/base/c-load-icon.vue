<template>
  <div class="loadingBox" :style="{
      width: size,
      height: size
  }">
    <div class="loadingItem" v-for="i in lineNum" :style="{
      width: lineWidth,
      transformOrigin: '50% 50%',
      transform: `translate(-50%, -50%) rotate(calc(360deg / 8 * ${i}))`
    }">
      <div :style="{background:color}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "c-load-icon",
  props:{
    color:{
      default:'#ccc'
    },
    lineNum:{
      default: 8
    },
    size:{
      default:'16px'
    },
    lineWidth:{
      default:'2px'
    }
  }
}
</script>

<style scoped>
@keyframes load{
  from{transform: rotate(0deg);}
  to{transform: rotate(360deg);}
}
.loadingBox {

  position: relative;
  animation: load 1.5s linear infinite;
}

.loadingItem {
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
}

.loadingItem div {
  height: 25%;
  display: block;
  content: '';
}
</style>
