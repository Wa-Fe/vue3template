<template>
  <a-config-provider>
    <router-view />
  </a-config-provider>
</template>
<script setup>
// 自定义主题的样式
const Theme = ref({
  token: {
    colorPrimary: "#00b96b"
  }
})
</script>
<style scoped lang="scss"></style>
