<template>
  <div class="c-sticky" :style="`${direction}:${position}`">
    <slot/>
  </div>
</template>
<script setup>
defineProps({
  direction: {type: String, default: 'top'},//定位方向
  position: {type: String, default: '0'},//定位距离
})
</script>
<script>
export default {
  name: "c-sticky",

}
</script>

<style lang="scss" scoped>
.c-sticky {
  position: sticky;
}
</style>