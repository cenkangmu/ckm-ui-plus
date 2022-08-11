<template>

<div class="showPage">
  <div class="path">
   <div class="inputBox">
     {{url}}{{path}}
   </div>
  </div>
  <iframe :src="url + (path||'')"></iframe>
</div>
</template>

<script setup>
import url from '../public/url'

defineProps({
  path:String
})


</script>

<style lang="scss" scoped>
.showPage{
  position: fixed;
  top: 80px;
  right: 30px;
  width: 375px;
  border: 10px solid #666;
  border-radius: 30px;
  background: #666;
  overflow: hidden;
  z-index: 99;
  .path{
    background: #fff;
    padding: 15px 20px;
    border-bottom: 1px solid #eee;
    .inputBox{
      border: 1px solid #eee;
      background: #eee;
      display: flex;
      align-items: center;
      height: 36px;
      padding: 0 15px;
      font-size: 13px;
      color: #666;
      border-radius: 5px;

    }
  }
  iframe{
    width: 100%;
    height: 667px;
    border: none;
  }
}
</style>