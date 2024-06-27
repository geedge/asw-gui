import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
      alias: {
        //别名配置
        "@": path.resolve(__dirname, "./src"),
      },
  },
  //本地运行配置，以及反向代理配置
  server: {
    host: true,
    port: "8080", //端口
    open: true,//服务启动时自动在浏览器中打开应用
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        // 引入 variables.scss 这样就可以在全局中使用 variables.scss中预定义的变量了
        // 给导入的路径最后加上 ; 
        additionalData: `@use "@/styles/variables.scss" as *; `,
      }
    }
  },
})


