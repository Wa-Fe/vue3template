import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// 自动导入
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// 打包分析
import { visualizer } from "rollup-plugin-visualizer"

// eslint
import eslintPlugin from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig({
  "plugins": [
    vue(),
    AutoImport({
      "resolvers": [ElementPlusResolver()]
    }),
    Components({
      "resolvers": [ElementPlusResolver({ "importStyle":"sass" })],
      // 自动导入的路径
      "dirs": ["src/components"],
      // 按需引入的文件的类型
      "extensions": ["vue"],
    }),
    visualizer({
      "gzipSize": true,
      "brotliSize": true,
      "emitFile": false,
      "filename": "analyze.html", //分析图生成的文件名
      "open": false //如果存在本地服务端口，将在打包后自动展示
    }),
    eslintPlugin({
      "include": ["src/**/*.ts", "src/**/*.vue", "src/*.ts", "src/*.vue"],
    }),
  ],
  "resolve": {
    "alias": {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  "server": {
    "port": "3000",
    "open": false, //自动打开
    "base": "./ ", //生产环境路径
    "proxy": {
      // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      "^/api": {
        "target": "http://xxxxxx/", // 后端服务实际地址
        "changeOrigin": true, //开启代理
        "rewrite": (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // 自定义主题色
  "css":{
    "preprocessorOptions":{
      "scss":{
        "additionalData": "@use \"src/style/public.scss\" as *;"
      }
    }
  }
})
