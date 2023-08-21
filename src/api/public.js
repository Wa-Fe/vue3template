import http from "./http"

// 配置
export const getSetting = (data) => {
  return http.get("/pc/index/getSetting", data)
}
