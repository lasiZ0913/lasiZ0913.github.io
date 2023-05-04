<template>
  <div class="box">
    <Header></Header>
    <Time class="time"></Time>
  </div>
</template>

<script setup lang="ts">
  import Header from './header.vue'
  import Time from './tools-com/time.vue'
  import { ref } from 'vue'

  defineProps<{ msg: string }>()

  const count = ref(0)
</script>

<style scoped="true" lang="scss">
.box {
  width: 100%;
  height: 100vh;
  position: relative;
  background: url("https://s1.ax1x.com/2023/05/03/p9JHKD1.jpg") no-repeat;
  background-size: 100%;
}
.time{
  position: fixed;
  top: 0;
  right: 1%;
}
// 媒体查询
// @media screen and (max-width:1800px) {
//     .box {
//         width: 1920px;  
//         height: 937px;  
//     }
// }
</style>
