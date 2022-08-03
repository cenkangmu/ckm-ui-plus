import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import com from '@/components'
// import com from '@/../dist/ckm-ui-plus.umd'
createApp(App).use(router).use(com).mount('#app')
