<template>
<div class="showPage">
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
  height: 667px;
  border: 10px solid #666;
  border-radius: 20px;
  background: #666;
  iframe{
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 20px;
  }
}
</style>