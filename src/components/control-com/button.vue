<template>
    <a class="button" href="javascript:;">
        <span class="spanDecoration"></span>
        <span class="name">{{ name }}</span>
    </a>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue';

const props = withDefaults(defineProps<{
    name:string,
    btnBgcOne?:string,
    btnBgcTwo?:string,
    mode?:number
}>(), {
    btnBgcOne:() => '#8d49f7',
    btnBgcTwo:() => '#6b53ff',
    mode:() => 1
})

onMounted(() => {
    (document.querySelector('.button') as HTMLElement).style.setProperty("--btnBgcOne", props.btnBgcOne);
    (document.querySelector('.button') as HTMLElement).style.setProperty("--btnBgcTwo", props.btnBgcTwo);
    if(props.mode == 2){
        // mode == 2 时，将遮罩层和伪类层背景透明，将按钮的背景色暴露出来，再将字体颜色设置为 白色即可
        (document.querySelector('.spanDecoration') as HTMLElement).style.setProperty("--btnBgc", 'transparent');
        (document.querySelector('.button') as HTMLElement).style.setProperty("--btnBgc", 'transparent');
        (document.querySelector('.name') as HTMLElement).style.setProperty("color", '#fff');
    }
})

</script>

<style scoped lang="scss">
/**
* 实现思想：  a 标签作为外层，光标进入是光标自动变换为小手
*            初始化给 a 一个背景色，再给 a 一个 after 伪类，伪类给一个 2px 的透明边框，用作鼠标移入时的边框，并且伪类的背景色为白色作为遮盖
*            .spanDecoration 作为遮罩层，但是他的透明边框只给 1px 
*            此时，看到的按钮为 1px 像素的边框，鼠标移入，将遮罩层隐藏
*/
$btnBgc: var(--btnBgc, #fff);
$btnBgcOne: var(--btnBgcOne, #8d49f7);
$btnBgcTwo: var(--btnBgcTwo, #6b53ff);
.button{
    background-image: linear-gradient(90deg, $btnBgcOne, $btnBgcTwo);
    align-items: center;
    border: none;
    border-radius: 6px;
    display: inline-flex;
    font-size: calc(1 * 16px);
    font-weight: bolder;
    height: 42px;
    justify-content: center;
    letter-spacing: 0;
    line-height: 1.1;
    overflow: hidden;
    padding: 0 1.5em;
    position: relative;
    text-align: center;
    text-decoration: none;
    margin: .3rem .4rem;
    .spanDecoration{
        border: 1px solid transparent;
        background-clip: padding-box;
        background-color: $btnBgc;
        background-image: none;
        border-radius: inherit;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        transition: background-image .2s ease-in-out,opacity .2s ease-in-out;
        width: 98%;
        opacity: 1;
        height: 40px
    }
    .name{
        // background-clip: text; 这个属性还是很吊的，配合 color: transparent; background-image: linear-gradient(90deg, $btnBgcOne, $btnBgcTwo);
        // 就能画出来渐变色字体的文字或者蒙版形式的图片文字
        // 实现原理是 先给 .name 区域上渐变色，再叫文字字体透明，再使用 background-clip: text 以文字的范围来裁剪背景图片.
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        background-image: linear-gradient(90deg, $btnBgcOne, $btnBgcTwo);
        color: transparent;
        display: block;
        padding: .2em 0 .3em;
        pointer-events: none;
        position: relative;
        text-align: center;
        white-space: nowrap;
    }
}
.button::before{
    border: 2px solid transparent;
    border-radius: inherit;
    box-sizing: border-box;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity .2s ease-in-out;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
    background-color: $btnBgc;
}
.button:hover .spanDecoration{
    opacity: 0;
}
.button:hover{
    background-image: linear-gradient(180deg, $btnBgcOne, $btnBgcTwo);
}
</style>