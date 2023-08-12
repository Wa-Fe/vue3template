import { getToken } from "@/utils/storages.js"
const getDefaultState = () => {
  return {
    "token": getToken()
  }
}

const state = getDefaultState()

const mutations = {}

const actions = {}

export default {
  "namespaced": true,
  state,
  mutations,
  actions
}
