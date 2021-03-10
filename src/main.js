import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/theme/5f80c7/index.css'
import './assets/theme/f5686f/index.css'
import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
