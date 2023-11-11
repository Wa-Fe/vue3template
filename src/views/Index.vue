<template>
  <div>
    <a-button @click="addnum">
      <!-- {{ $filters.formatName(count) }} -->
      {{ useSettingStore.count }}
    </a-button>
    <a-button @click="resetStore">
      <!-- {{ $filters.formatName(count) }} -->
      reset
    </a-button>
    <a-button type="primary" @click="alertmsg">Primary Button</a-button>
    <!-- 测试计算属性 -->
    <div>
      {{ formatInout }}
    </div>
    <!-- 跳转界面 -->
    <div>
      <a-button type="primary">Primary Button</a-button>
      <StepBackwardOutlined />
      <a-empty />
    </div>
    <div>
      <a-checkbox v-model:checked="checked">Checkbox</a-checkbox>
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
console.log(useSettingStore)
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
</script>
<style lang="scss"></style>
