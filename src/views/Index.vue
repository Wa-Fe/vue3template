<template>
  <div>
    <el-row class="mb-4">
      <el-button @click="addnum">
        {{ $filters.formatName(count) }}
      </el-button>
      <el-button type="primary" @click="alertmsg">
        测试全局的弹窗
      </el-button>
      <!-- 测试计算属性 -->
      <div>
        <el-input v-model="input" placeholder="Please input" />
        {{ formatInout }}
      </div>
      <!-- 跳转界面 -->
      <div>
        <el-button type="primary" @click="toPage('/echarts')">
          跳转echatts
        </el-button>
        <el-button type="primary" @click="toPage('/work')">
          跳转work
        </el-button>
        <el-button type="primary" @click="toPage('/achievement')">
          跳转achievement
        </el-button>
        <el-button type="primary" @click="toPage('/test')">
          跳转test
        </el-button>
        <el-button type="primary" @click="toPage('/goodslist')">
          跳转goodslist
        </el-button>
        <el-button type="primary" @click="getList">
          获取路由
        </el-button>
      </div>
    </el-row>
  </div>
</template>

<script setup>
const router = useRouter()
const count = ref(0)
const input = ref("")
const pub = getCurrentInstance()
import { useStore } from "vuex"
const store = useStore()
import { MenuList } from "@/utils/mock"
let nu = [
    {
        "name":"213213"
    },
    {
        "name":"213"
    }
]
function addnum (){
    count.value++
}

// 测试全局函数
function alertmsg (){
    pub?.proxy?.$public.TestPublic()
}

// 计算属性
const formatInout = computed(() => {
    return input.value + "xxxxx"
})



function toPage (item) {
    router.push({
        "path": item
    })
}

function getList () {
    localStorage.setItem("router", JSON.stringify(MenuList))
    store.commit("router/SET_MENULIST", MenuList)
    store.dispatch("router/forMatRouter", MenuList)
}
</script>
<style lang="scss"></style>
