<template>
<div class="showDemo" @click="showDemo">
  查看Demo
</div>
</template>

<script setup>
import url from '../public/url'
function showDemo(){
  open(url)
}
</script>

<style lang="scss" scoped>
.showDemo{
  font-size: 24px;
  color: var(--c-brand);
  cursor: pointer;
  border: 2px solid var(--c-brand);
  padding: 15px;
  text-align: center;
  border-radius: 5px;
  width: 260px;
  margin: 0 auto;
  transition: all .3s;
  &:hover{
    background: var(--c-brand);
    color: #fff;
  }
}
</style>