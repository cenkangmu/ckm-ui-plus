<template>
  <div style="padding: 15px 0">
    <qrcode-vue :value="value" :size="150" level="H" />
  </div>
</template>

<script setup>
import {ref} from 'vue'
import QrcodeVue from 'qrcode.vue'
import url from "../public/url";
const props = defineProps({
  path:String
})
const value = ref(url+(props.path || ''))
</script>

<style scoped>

</style>