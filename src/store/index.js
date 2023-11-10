import { useSettingStore } from "./modules/setting"

export const useStore = () => ({
  useSettingStore: useSettingStore()
})
