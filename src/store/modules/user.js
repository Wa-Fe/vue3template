import { getToken } from "@/utils/storage"
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
