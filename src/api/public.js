import request from "@/api/request"

// 配置
export const getSetting = (data) => {
  return request({ "url": "/pc/index/getSetting", "method": "GET", "data": data })
}
