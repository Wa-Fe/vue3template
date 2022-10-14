/*
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-10-13 15:28:43
 * @LastEditTime: 2022-10-13 17:31:35
 * @LastEditors: Wa_Fe
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),'vue/compiler-sfc'],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    },
  },
  server: {
    port: '3000',
    open: false, //自动打开 
    base: "./ ", //生产环境路径
    proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      '^/api': {
        target: "http://tool.api.bancoulm.com/", // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
