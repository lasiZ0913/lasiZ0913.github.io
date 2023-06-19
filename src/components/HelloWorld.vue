<template>
  <div class="box">
    <!-- <Header></Header> -->
    <!-- <Time class="time"></Time> -->

    <!-- 临时测试内容 start -->
    <test @on-click="onClick"></test>
    
    <!-- 临时测试内容 end -->

    <!-- <el-button size="large" circle class="counterBtn" @click="counterTag = !counterTag">
      <svg class="icon cumIcon" aria-hidden="true">
        <use xlink:href="#icon-jisuanqi"></use>
      </svg>
    </el-button> -->

    <transition 
      :duration="{enter:500, leave:500}"
      enter-active-class="animate__animated animate__bounceInRight" 
      leave-active-class="animate__animated animate__backOutDown">
      <div class="counter" v-if="counterTag">
        <input type="number" v-model="line">
        <input type="text" v-model="cost">
        <div class="result">
          <span class="counterResult">{{ counterResult }}%</span>
          <Button name="copy" @click="copyCounterResult"></Button>
        </div>
      </div>
    </transition>
   
  </div>
</template>

<script setup lang="ts">
  import _ from 'lodash'
  import "animate.css"
  import gsap from 'gsap'
  // import Header from './header.vue'
  // import Time from './tools-com/time.vue'
  import Button from './control-com/button.vue'
  import test from './control-com/test.vue'
  import { ElMessageBox } from 'element-plus'
  import { ref, watch, reactive, shallowRef, triggerRef, shallowReactive, provide } from 'vue'
  import { hook } from '../assets/ts/hook'

  // 计算器
  const counterTag = ref(false)
  let cost = ref(null)
  let line = ref(null)
  let counterResult = ref(0)
  watch([cost, line], ([costNew, lineNew], [costOld, lineOld]) => {
    counterResult.value = parseInt(((lineNew - costNew) / costNew * 100).toFixed(2))
  })
  const copyCounterResult = () => {
    line.value = null
    hook.copy(counterResult, '%')
  }

  // 临时测试
  const onClick = (e) => {
    console.log(e);
  }
  let flag = ref<number>(1)
  provide('flag', flag)
  
</script>

<style scoped="true" lang="scss">
// 测试内容
.testClass{
  display: flex;
  flex-wrap: wrap;
  width: calc(35px * 14);
  .testItem{
    width: 35px;
    height: 35px;
    border: 1px solid #ccc;
    line-height: 35px;
    text-align: center;
    border-radius: 50%;
  }
}
.mmm{
  transition: all 1s;
}
.box {
  width: 100%;
  height: 100vh;
  position: relative;
  // background: url("https://s1.ax1x.com/2023/05/03/p9JHKD1.jpg") no-repeat;
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
  height: 25%;
  border-radius: 1.5rem;
  background-color: rgba(255,255,255,.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding-top: 1%;
  .result{
    display: flex;
    justify-content: space-around;
    align-items: center;
    span{
      font-size: 1.5rem;
    }
  }
}
.counter::after{
  content: "";
  display: inline-block;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%) rotate(-45deg);
  background: linear-gradient(45deg, rgba(255,255,255,.2), rgba(255,255,255,.2) 50%, transparent 50%, transparent 100%);
  width: 20px;
  height: 20px;
  background-color: rgba(255,255,255,0);
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
