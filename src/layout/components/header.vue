<template>
  <div class="header">
    <div
      v-for="(item,x) in list"
      :key="x"
      class="item"
    >
      <div v-if="item.component_path == 'layout'" class="newitem" @click="toPage(item)">
        {{ item.component_name }}
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useStore()
const router = useRouter()
const list = store.state.router.menulist
console.log(list)

function toPage (item) {
    router.push({
        "path":`/${item.path}`
    })
}
</script>
<style scoped lang='scss'>
.header{
    display: flex;
    background-color: #f8f8f8;
    padding: 20px 0 ;
    .newitem{
        margin-right: 40px;
        cursor: pointer;
        &:hover{
            color: #DC143C;
        }
    }
}
</style>