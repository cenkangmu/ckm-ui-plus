<template>
  <div class="c-pull-load" ref="scrollBox" :style="{
    width:width,
    height:height,
  }">
    <!--  主体内容  -->
    <slot/>
    <!--  加载中  -->
    <div v-if="!isAll && modelValue">
      <slot name="load" v-if="$slots.load"/>
      <div class="c-pull-load-info" v-else>
        <c-load-icon style="margin-right: 10px"/>
        {{ loadText }}
      </div>
    </div>
    <!--  已加载全部  -->
    <div v-if="isAll">
      <slot name="all" v-if="$slots.all"/>
      <div class="c-pull-load-info" v-else>{{ allText }}</div>
    </div>

  </div>
</template>
<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue'

const props = defineProps({
      width: String,//宽度
      height: String,//高度
      onLoad: Function,//加载状态回调函数
      loadText: {type: String, default: '加载中'},//加载中文本
      allText: {type: String, default: '已经到底了'},//全部加载完成文本
      modelValue: Boolean,//加载状态
      isAll: Boolean,//是否已全部加载
    }),
    scrollBox = ref(),//滚动元素
    emit = defineEmits()

onMounted(() => {
  let box = scrollBox.value

  box.onscroll = () => {
    if (!props.isAll) {
      if (box.clientHeight + box.scrollTop + 2 >= box.scrollHeight) {
        if (props.modelValue)
          return
        emit('update:modelValue', true)
        typeof props.onLoad === 'function' && props.onLoad()
      }
    }
  }
})
onBeforeUnmount(() => scrollBox.value.onscroll = null)//组件销毁前，清除监听
</script>
<script>
export default {
  name: "c-pull-load",
}
</script>

<style lang="scss" scoped>
.c-pull-load {
  overflow: auto;

  .c-pull-load-info {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color5;
    font-size: 14px;
  }
}
</style>