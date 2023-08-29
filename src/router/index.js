import { createRouter, createWebHistory } from "vue-router"
import Layout from "@/layout/index.vue"
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
        },
        {
            "path": "/test",
            // "name": "test",
            // "redirect": "/test",
            "component": Layout,
            "children": [
                {
                    "path": "/test",
                    "name": "test",
                    "component": () => import("../views/test/index.vue")
                }
            ]
        },
    ]
})

export default router
