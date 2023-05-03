<template>
    <div class="clock">  
        <div class="numbers">  
            <span style="--i:0;"><b>12</b></span>  
            <span style="--i:1;"><b>3</b></span>  
            <span style="--i:2;"><b>6</b></span>  
            <span style="--i:3;"><b>9</b></span>  
            <div class="circle" id="hr"><i></i></div>  
            <div class="circle" id="mn"><i></i></div>  
            <div class="circle" id="sc"><i></i></div>  
        </div>  
    </div>  
</template>

<script setup lang="ts">
    setInterval(() => {  
        // 需要将时间与指针角度进行转换  
        let date = new Date();  
        let hh = date.getHours() * 30;  
        let mm = date.getMinutes() * 6;  
        let ss = date.getSeconds() * 6;  
        document.getElementById("hr").style.transform = `rotateZ(${hh + (mm / 12)}deg)`;  
        document.getElementById("mn").style.transform = `rotateZ(${mm}deg)`  
        document.getElementById("sc").style.transform = `rotateZ(${ss}deg)`  
    }, 1000)  
</script>

<style scoped lang="scss">
body {  
    display: flex;  
    justify-content: center;  
    /*div周围留白*/  
    align-items: center;  
    min-height: 100vh;  
    background: #acbaca;  
}  

.clock {  
    position: relative;  
    width: 100%;  
    height: 100%;  
    background: #c9d5e0;  
    display: flex;  
    justify-content: center;  
    align-items: center;  
    border-radius: 50px;  
    box-shadow: 30px 30px 30px -10px rgb(0, 0, 0, 0.15),  
        inset 15px 15px 10px rgb(255, 255, 255, 0.75),  
        -15px -15px 35px rgb(255, 255, 255, 0.55),  
        inset -1px -1px 10px rgb(0, 0, 0, 0.2)  
}  

.clock::before {  
    content: "";  
    position: absolute;  
    width: 4px;  
    height: 4px;  
    background: #e91e63;  
    border-radius: 50%;  
    z-index: 100;  
    box-shadow: 0 0 0 1px #e91e63,  
        0 0 0 3px #fff,  
        0 0 5px 5px rgb(0, 0, 0, 0.15);  
}  

.numbers {  
    position: absolute;  
    inset: 35px;  
    background-color: #89ABCA;  
    border-radius: 50%;  
    box-shadow: 5px 5px 15px #152b4a66,  
        inset 5px 5px 5px rgb(255, 255, 255, 0.55),  
        -6px -6px 10px rgb(255, 255, 255, 1)  
}  

.numbers span {  
    position: absolute;  
    inset: 5px;  
    text-align: center;  
    color: #fff;  
    font-size: 1.25em;  
    transform: rotate(calc(90deg * var(--i)));  
}  

.numbers span b {  
    font-weight: 600;  
    display: inline-block;  
    transform: rotate(calc(-90deg * var(--i)));  
}  

.numbers::before {  
    content: "";  
    position: absolute;  
    inset: 35px;  
    background: linear-gradient(#2196f3, #6AC13B);  
    border-radius: 50%;  
    animation: animate 2s linear infinite;  
}  

@keyframes animate {  
    0% {  
        transform: rotate(360deg);  
    }  

    100% {  
        transform: rotate(0deg);  
    }  
}  

.numbers::after {  
    content: "";  
    position: absolute;  
    inset: 50px;  
    background: #38BCCA;  
    border-radius: 50%;  
}  

.circle {  
    position: absolute;  
    inset: 0;  
    border-radius: 50%;  
    display: flex;  
    justify-content: center;  
    z-index: 10;  
}  

.circle i {  
    position: absolute;  
    width: 3px;  
    height: 50%;  
    background: #fff;  
    transform-origin: bottom;  
    /*旋转基点*/  
    transform: scaleY(0.55);  
}  

#hr i {  
    width: 4px;  
    transform: scaleY(0.3);  
}  

#mn i {  
    transform: scaleY(0.45);  
}  

#sc i {  
    width: 2px;  
    transform: scaleY(0.55);  
    background-color: #FBE274;  
    box-shadow: 0 30px 0 #e91e63;  
}  
</style>