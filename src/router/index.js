import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  "history": createWebHistory(import.meta.env.BASE_URL),
  "routes": [
    {
      "path": "/",
      "name": "index",
      "component": () => import("../views/index.vue")
    },
    {
      "path": "/echarts",
      "name": "echarts",
      "component": () => import("../views/echartstest.vue")
    }
  ]
})

export default router
