<template>
  <div>
      我是子组件
      <Button name="click" @click="change"></Button>
      <div v-if="modelValue">子组件在此</div>
      <input type="0000" v-model="text" @input="inputChange">
      <!-- <div>{{ flag }}</div> -->

  </div>
</template>
  ``
<script setup lang='ts'>
import Button from './button.vue'
import { inject, Ref, ref } from 'vue'

defineProps<{
  modelValue:boolean,
  text:string
}>()

const emit = defineEmits<{
  (e:'update:modelValue', name:boolean) : void,
  (e:'update:text', name:string) : void
}>()

const change = () => {
  emit('update:modelValue', false)
  emit('update:text', "我明天 还要 大赚！！！")
}
const inputChange = (e:Event) => {
  emit('update:text', (e.target as HTMLInputElement).value)
}
</script>
  
<style>
</style>