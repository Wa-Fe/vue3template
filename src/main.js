import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"
// 全局的过滤器
import filters from "@/utils/filters.js"
// 全局方法
import Public from "@/utils/public"
// 导航守卫
// import "@/utils/routerguard.js"

const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.$filters = filters
app.config.globalProperties.$public = Public
app.use(router)
app.use(pinia)
app.mount("#app")
