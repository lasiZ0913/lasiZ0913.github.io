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

<style scoped>
.box {
  width: 100%;
  height: 100vh;
  background: url("https://s1.ax1x.com/2023/05/03/p9JHKD1.jpg") no-repeat;
  background-size: 100%;
}
.time{
  width: 200px;
  height: 200px;
}
</style>
