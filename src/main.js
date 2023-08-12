import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// 全局的过滤器
import filters from "@/utils/filters.js"
// 全局方法
import Public from "@/utils/public"


const app = createApp(App)
app.config.globalProperties.$filters = filters
app.config.globalProperties.$public = Public
app.use(router)
app.use(store)
app.mount("#app")
