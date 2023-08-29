import http from "./http"

// 配置
export const getSetting = (data) => {
    return http.get("/pc/index/getSetting", data)
}

// 登录
export const getUser = (data) => {
    return http.get("/menu/path", data)
}
