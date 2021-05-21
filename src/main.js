import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import {ElButton,ElContainer,ElAside,ElHeader,ElMain,ElMenu,ElMenuItem,ElSubmenu,ElCard} from 'element-plus';

const app= createApp(App)
app.use(ElButton)
app.use(ElContainer)
app.use(ElAside)
app.use(ElHeader)
app.use(ElMain)
app.use(ElMenu)
app.use(ElMenuItem)
app.use(ElSubmenu)
app.use(ElCard)


app.use(store).use(router).mount('#app')