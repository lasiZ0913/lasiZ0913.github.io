<template>
  <div style="background-color: green;">
      我是B
      <button @click="change">change falg</button>
      <div>{{ flag }}</div>
  </div>
</template>
  
<script setup lang='ts'>
import { inject, Ref, ref } from 'vue'

const flag = inject<Ref<number>>('flag')
const change = () => {
  console.log(flag);
  flag.value = 2
}
</script>
  
<style>
</style>