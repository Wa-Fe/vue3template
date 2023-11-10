import { defineStore } from "pinia"
import { parse, stringify } from "zipson"
// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useSettingStore = defineStore("setting", {
  // state: 返回对象的函数
  state: () => ({
    count: 1
  }),
  persist: {
    enabled: true, //开启
    storage: localStorage, //修改存储位置
    key: "setting",
    paths: ["count"], //指定要长久化的字段,
    serializer: {
      deserialize: parse,
      serialize: stringify
    }
  }
})
