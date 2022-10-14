<!--
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-10-13 15:35:23
 * @LastEditTime: 2022-10-14 10:14:14
 * @LastEditors: Wa_Fe
-->
<template>
  <div>
    <p>{{data.newName}}</p>
  </div>
</template>

<script setup>
import { onMounted ,ref,getCurrentInstance,reactive} from "vue";
import { getSetting } from "@/api/public.js";
import { useStore } from 'vuex'
const { proxy } = getCurrentInstance()
const store = useStore()
const name = "99999999"
const data = reactive({
  newName:'000000'
})
onMounted(()=>{
    console.log(store.state.user.name)
    console.log(store.state.user.token)
    getSetting().then(res=>{

    })

    // proxy.$public.TestPublic()
    setTimeout(() => {
      data.newName = '99999'
    }, 1000);
})
</script>
<style scoped lang="less"></style>
