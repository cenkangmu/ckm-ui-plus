<template>
  <div class="page" style="padding: 20px 0">
    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      基础用法
    </c-dividing-line>
    <c-signature ref="sign"/>
    <div style="padding: 5px 15px;display: flex">
      <c-button style="flex: 1;margin: 10px" radius="50px" type="error" @click="clear">清除签名</c-button>
      <c-button style="flex: 1;margin: 10px" radius="50px" type="primary" @click="save">保存签名</c-button>

    </div>
    <div style="padding: 5px 15px;display: flex;align-items: center">
      签名结果：<img height="50" v-if="img" :src="img"/>
    </div>


    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      修改颜色
    </c-dividing-line>
    <c-signature ref="sign2" color="orange"/>
    <div style="padding: 5px 15px;display: flex">
      <c-button style="flex: 1;margin: 10px" radius="50px" type="error" @click="clear2">清除签名</c-button>
      <c-button style="flex: 1;margin: 10px" radius="50px" type="primary" @click="save2">保存签名</c-button>

    </div>
    <div style="padding: 5px 15px;display: flex;align-items: center">
      签名结果：<img height="50" v-if="img2" :src="img2"/>
    </div>


    <c-dividing-line line-color="#74bcff" text-color="#0089ff">
      修改线条大小
    </c-dividing-line>
    <c-signature ref="sign3" line-width="10"/>
    <div style="padding: 5px 15px;display: flex">
      <c-button style="flex: 1;margin: 10px" radius="50px" type="error" @click="clear3">清除签名</c-button>
      <c-button style="flex: 1;margin: 10px" radius="50px" type="primary" @click="save3">保存签名</c-button>

    </div>
    <div style="padding: 5px 15px;display: flex;align-items: center">
      签名结果：<img height="50" v-if="img3" :src="img3"/>
    </div>

  </div>
</template>
<script setup>
import {ref} from 'vue'

let sign = ref(),img = ref('')
let sign2 = ref(),img2 = ref('')
let sign3 = ref(),img3 = ref('')
const clear = ()=> sign.value.clear()
const save = ()=>{
  img.value = sign.value.save()
}
const clear2 = ()=> sign2.value.clear()
const save2 = ()=>{
  img2.value = sign2.value.save()
}
const clear3 = ()=> sign3.value.clear()
const save3 = ()=>{
  img3.value = sign3.value.save()
}
</script>
<script>
export default {
  name: 'Signature/电子签名',
}
</script>