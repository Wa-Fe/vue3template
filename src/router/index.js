/*
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-10-13 16:22:53
 * @LastEditTime: 2022-10-13 17:07:02
 * @LastEditors: Wa_Fe
 */
import {
    createRouter,
    createWebHistory
} from 'vue-router'

const router = createRouter({
    history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [{
        path: '/',
        redirect:'/index'
    },
    {
        path: '/index',
        component: () => import('../views/index.vue')
    }, ]
})

export default router