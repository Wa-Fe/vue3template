import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
// 全局的过滤器
import filters from "@/utils/filters.js"
// 全局方法
import Public from "@/utils/public"
// store
import { createPinia } from "pinia"
// storec 持久化
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"



const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.config.globalProperties.$filters = filters
app.config.globalProperties.$public = Public
app.use(router)
app.use(pinia)
app.mount("#app")
