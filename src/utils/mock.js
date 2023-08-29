// 模拟路由信息
export const MenuList = [
    {
        "component_name": "工作台",
        "component_path": "work",
        "path": "work",
        "children": [
            {
                "component_name": "workdetail",
                "component_path": "work/workdetail",
                "path": "workdetail",
            }
        ]
    },
    {
        "component_name": "团队管理",
        "component_path": "achievement",
        "path": "achievement",
        "redirect": "/achievementdetail",
        "children": [
            {
                "component_name": "achievementdetail",
                "component_path": "achievement/achievementdetail",
                "path": "achievementdetail",
            }
        ]
    },
    {
        "component_name": "商品列表",
        "component_path": "layout",
        "path": "goodslist",
        "children": [
            {
                "component_name": "商品列表",
                "component_path": "background/goodslist",
                "path": "goodslist",
            }
        ]
    },
    {
        "component_name": "商table列表",
        "component_path": "layout",
        "path": "tablelist",
        "children": [
            {
                "component_name": "table列表",
                "component_path": "background/tablelist",
                "path": "tablelist",
            }
        ]
    }
]