<template>
  <div class="c-form-row c-iconfont" @click="emit('tapRow')" :class="disable?'c-disable':''">
    <!--  标签  -->
    <div class="c-form-row-label" @click="emit('tapLabel')" :style="{
    width:labelWidth,
    textAlign:labelAlign,
  }">{{ label }}
    </div>
    <!--  选择结果  -->
    <div class="c-form-row-text" :style="{textAlign:inputAlign }" @click="emit('tapValue')">
      <span v-if="value">{{ value }}</span>
      <span class="c-placeholder" v-else>{{ placeholder }}</span>
    </div>
    <div v-if="showRightIcon" class="c-form-row-icon" @click="emit('tapIcon')">&#xe646;</div>
  </div>
</template>
<script setup>
const props = defineProps({
  label: null,//标签
  value: null,//内容
  labelWidth: {type: String, default: '5em'},//标签宽度
  labelAlign: String,//标签对齐方式
  inputAlign: {type: String, default: 'right'},//内容对齐方式
  placeholder: null,//占位符
  disable: Boolean,//是否禁用
  showRightIcon:Boolean,//是否显示右侧箭头图标
})
const emit = defineEmits()
</script>
<script>
export default {
  name: "c-form-row"
}
</script>

<style lang="scss" scoped>
.c-form-row {
  display: flex;
  height: 44px;
  align-items: center;
  border-bottom: 1px solid $color10;
  font-size: 15px;
  padding: 0 10px;

  .c-form-row-label {
    flex: none;
    color: $color2;
    padding-right: 15px;
  }

  .c-form-row-text {
    flex: 1;
    overflow: hidden;
  }

  .c-placeholder {
    color: $color5;
  }

  .c-form-row-icon {
    margin-left: 10px;
    color: $color5;
    font-size: 16px;
  }

}
.c-disable{
  pointer-events: none;
}
</style>