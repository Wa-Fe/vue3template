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
    </el-row>
  </div>
</template>

<script setup>
// 全局变量需要 getCurrentInstance const pub = getCurrentInstance()
// 计算属性 computed 需要引入
import { ref, getCurrentInstance, computed } from "vue"
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
</script>
<style lang="scss"></style>
