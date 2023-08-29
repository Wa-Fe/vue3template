import { formatR } from "@/utils/router"
import router from "@/router"
import { getRouter } from "@/utils/storage"
const getDefaultState = () => {
    return {
        menulist: [
            ...getRouter(),
            {
                "component_name": "404",
                "component_path": "404",
                "path": ":pathMatch(.*)",
            },
        ]
    }
}

const state = getDefaultState()

const mutations = {
    SET_MENULIST (state, val){
        state.menulist = val
    }
}

const actions = {
    forMatRouter ({ commit }, list) {
        return new Promise((resolve) => {
            let addRouterList = formatR(JSON.parse(JSON.stringify(list)))
            console.log(addRouterList)
            addRouterList.forEach(item => {
                router.addRoute(item)
            })
            resolve()
        })
    }
}

export default {
    "namespaced": true,
    state,
    mutations,
    actions
}
