import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// 自动导入
import AutoImport from "unplugin-auto-import/vite"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"


// 打包分析
import { visualizer } from "rollup-plugin-visualizer"

// 打包压缩
import viteCompression from "vite-plugin-compression"

// eslint
import eslintPlugin from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig({
  "plugins": [
    vue(),
    AutoImport({
      "imports": ["vue", "vue-router",],
      "resolvers": [AntDesignVueResolver()]
    }),
    Components({
      "resolvers": [AntDesignVueResolver({ importStyle: false, resolveIcons: true })],
      // 自动导入的路径
      "dirs": ["src/components"],
      // 按需引入的文件的类型
      "extensions": ["vue"],
    }),
    // 分析
    visualizer({
      "gzipSize": true,
      "brotliSize": true,
      "emitFile": false,
      "filename": "analyze.html", //分析图生成的文件名
      "open": false //如果存在本地服务端口，将在打包后自动展示
    }),
    // eslint
    eslintPlugin({
      "include": ["src/**/*.ts", "src/**/*.vue", "src/*.ts", "src/*.vue"]
    }),
    // 打包配置
    viteCompression({
      "verbose": true, //是否在控制台输出压缩结果
      "disable": false, //是否禁用压缩
      "deleteOriginFile": false, //压缩后是否删除原文件
      "threshold": 10240, //启用压缩的文件大小限制，单位是字节
      "algorithm": "gzip", //采用的压缩算法
      "ext": ".gz" //生成的压缩包后缀
    })
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
        "rewrite": (path) => path.replace(/^\/api/, "")
      }
    }
  },
  // 自定义主题色
  "css": {
    "preprocessorOptions": {
      "scss": {
        "additionalData": "@use \"src/style/public.scss\" as *;"
      }
    }
  }
})
