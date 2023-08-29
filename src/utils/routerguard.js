import router from "@/router"
import store from "@/store"


router.beforeEach(async (to, form, next) => {
    let { menulist } = store.state.router
    if (menulist && menulist.length) {
        await store.dispatch("router/forMatRouter", menulist)
        if (!to.name) {
            next({ ...to, replace: true })
        } else {
            next()
        }
    } else {
        next()
    }
})
