<template>
  <div>
    <el-button type="primary" @click="todetail">
      跳转detail
    </el-button>
    <RouterView />
  </div>
</template>

<script setup>
const router = useRouter()
function todetail () {
    router.push({
        "path":"/workdetail"
    })
}
</script>
<style scoped lang='scss'>
</style>