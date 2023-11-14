<template>
  <div>
    <el-button @click="addnum">
      <!-- {{ $filters.formatName(count) }} -->
      {{ useSettingStore.count }}
    </el-button>
    <el-button @click="resetStore">
      <!-- {{ $filters.formatName(count) }} -->
      reset
    </el-button>
    <el-button type="primary" @click="alertmsg">Primary Button</el-button>
    <!-- 测试计算属性 -->
    <div>
      {{ formatInout }}
    </div>
    <!-- 跳转界面 -->
    <div>
      <el-button type="primary" @click="showMessage()">Primary Button</el-button>
      <div class="test">
        zhge////
      </div>
    </div>
    <Hello />
  </div>
</template>

<script setup>
import { useStore } from "@/store/index.js"
const router = useRouter()
const count = ref(0)
const input = ref("")
const checked = ref(false)
const pub = getCurrentInstance()
const store = useStore()
const { useSettingStore } = store
const colorCustom = "orange"
let nu = [
  {
    name: "213213"
  },
  {
    name: "213"
  }
]
function addnum() {
  // console.log("213")
  // messageApi.info("Hello, Ant Design Vue!")
  // count.value++
  useSettingStore.count++
}

// 测试全局函数
function alertmsg() {
  pub?.proxy?.$public.TestPublic()
}

// 计算属性
const formatInout = computed(() => {
  return input.value + "xxxxx"
})

function tonew() {
  console.log("12")
  router.push({
    path: "/echarts"
  })
}

function resetStore() {
  useSettingStore.$reset()
}

function showMessage() {
  ElMessage("this is a message.")
}
</script>
<style lang="scss">
.test{
  color: v-bind("colorCustom");
}
</style>
