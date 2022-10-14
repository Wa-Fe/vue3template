/*
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-10-13 15:28:43
 * @LastEditTime: 2022-10-14 10:07:11
 * @LastEditors: Wa_Fe
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import store from "@/store";
// 过滤器全局导入
import filters from "@/utils/filters"
// 全局方法
import Public from "@/utils/public";
const app = createApp(App) 


app.config.globalProperties.$filters = filters;
app.config.globalProperties.$public = Public;
// Object.keys(filters).forEach(key => {
//     app.config.globalProperties.$filter(key, filters[key])
// })

app.use(router)
app.use(store)
app.mount('#app')
// createApp(App).mount('#app')
