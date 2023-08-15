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
        <el-button type="primary" @click="tonew">
          跳转
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



function tonew () {
  console.log("12")
  router.push({
    "path":"/echarts"
  })
}
</script>
<style lang="scss"></style>
