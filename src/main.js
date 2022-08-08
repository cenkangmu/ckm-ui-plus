import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import com from '@/components'
createApp(App).use(router).use(com).mount('#app')
