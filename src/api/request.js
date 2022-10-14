/*
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-10-13 17:11:07
 * @LastEditTime: 2022-10-13 17:44:24
 * @LastEditors: Wa_Fe
 */
import axios from "axios";

// 判断当前的运行环境的
// 2.创建实例对象
const instance = axios.create({
    // 根据运行环境配置请求基准地址
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 6000 // 请求的超时时间
})

// 3.请求拦截器 ==> 前端给后端的东西
instance.interceptors.request.use(
    (config) => {
        // 判断是否存在token,如果存在将每个页面header添加token
        // if (store.state.token) {
        //     config.headers.common['Authorization'] = store.state.token
        // }
        // // post请求参数如需进转换，详情见注意！！
        // if(config.method==='post')
        // {
        //     config.data=Qs.stringify(config.data);
        // }
        // 配置请求头 默认是json
        config.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
        return config
    },
    (error) => {
        // console.log("对请求错误做些什么=========");
        return Promise.reject(error)
    })

// 4.响应拦截器 ==> 后端给前端的东西
instance.interceptors.response.use(function (response) {
    // 对响应数据做些什么 ==> 判断返回状态码
    return response
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

export default instance

