<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/img/下载.png" alt="">
        </div>
        <div class="menu">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-rizhi"></use>
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    height: 70px;
    background-color: pink;
    display: flex;
    align-items: center;
    padding: 0 15%;
    box-sizing: border-box;
}
.logo{
    height: 50px;
    img{
        height: 50px;;
    }
}
</style>
