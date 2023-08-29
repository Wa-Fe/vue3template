import { createStore } from "vuex"
import user from "./modules/user"
import router from "./modules/router"
export default createStore({
    "modules": {
        user,
        router
    }
})