<template>
  <div>
    <a-button @click="addnum">
      {{ $filters.formatName(count) }}
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
    <context-holder />
  </div>
</template>

<script setup>
import { message } from "ant-design-vue"
const router = useRouter()
const count = ref(0)
const input = ref("")
const pub = getCurrentInstance()
const [messageApi, contextHolder] = message.useMessage()
let nu = [
  {
    name: "213213"
  },
  {
    name: "213"
  }
]
function addnum() {
  console.log("213")
  messageApi.info("Hello, Ant Design Vue!")
  // count.value++
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
</script>
<style lang="scss"></style>
