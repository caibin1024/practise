import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {ElButton} from 'element-plus';

const app= createApp(App)
app.use(store).use(router).mount('#app')
//按需导入ElementPlus组件
app.use(ElButton)