<template>
  <div class="box">
    <!-- <Header></Header> -->
    <!-- <Time class="time"></Time> -->
    <Button name="Log in"></Button>
    <el-button size="large" circle class="counterBtn" @click="counterTag = !counterTag">
      <svg class="icon cumIcon" aria-hidden="true">
        <use xlink:href="#icon-jisuanqi"></use>
      </svg>
    </el-button>

    <transition 
      :duration="{enter:500, leave:500}"
      enter-active-class="animate__animated animate__bounceInRight" 
      leave-active-class="animate__animated animate__backOutDown">
      <div class="counter" v-if="counterTag">
        <input type="text">
      </div>
    </transition>
      
  </div>
</template>

<script setup lang="ts">
  import "animate.css"
  import Header from './header.vue'
  import Time from './tools-com/time.vue'
  import Button from './control-com/button.vue'
  import { ElMessageBox } from 'element-plus'
  import { ref } from 'vue'
  import { hook } from '../assets/ts/hook'

  const counterTag = ref(false)
  const cost:number|null = ref(null)
  const line:number|null = ref(null)
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

.cumIcon{
  font-size: 27px;
}
.counterBtn{
  position: fixed;
  bottom: 0;
  right: -50px;
  animation: initCounterBtn 2s ease-in-out;
  animation-fill-mode: forwards;
}
.counter{
  position: fixed;
  bottom: 4rem;
  right: 0;
  width: 15%;
  height: 30%;
  border-radius: 1.5rem;
  background-color: #89abca;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.counter::after{
  content: "";
  display: inline-block;
  position: absolute;
  bottom: -10px;
  transform: translateX(-50%) rotate(-45deg);
  background: linear-gradient(45deg, #89abca, #89abca 50%, transparent 50%, transparent 100%);
  width: 20px;
  height: 20px;
  background-color: #89abca;
}

.el-button--large{
  width: 50px !important;
  height: 50px !important;
}
@keyframes initCounterBtn{
  100% {  
    right: 7.5%;
    transform: rotate(0deg) translateX(50%);
  }
  0% { 
    right: -50px;
    transform: rotate(400deg);
  }
}
</style>
