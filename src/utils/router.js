import Layout from "@/layout/index.vue"
const componentsPath = import.meta.glob("../views/**/*.vue")
export const formatR = (value) => {
    return value.filter((item) => {
        if (item.component_path) {
            if (item.component_path == "layout") {
                item.component = Layout
            } else {
                item.component = componentsPath[`../views/${item.component_path}/index.vue`]
            }
            item.name = item.component_name
            item.path = `/${item.path}`
            if (item.children) {
                item.children = formatR(item.children)
            }
            return true
        }
    })
}