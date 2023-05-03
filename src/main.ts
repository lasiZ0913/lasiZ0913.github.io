import { createApp } from 'vue'
import App from './App.vue'

import {hook} from './assets/ts/hook'

import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import './style.css'
import '//at.alicdn.com/t/c/font_4047257_gcfienffoor.js'

//每个 Vue 应用都是通过用 createApp 函数创建一个新的应用实例开始的
//该应用实例是用来在应用中注册“全局”属性的
const app = createApp(App)

//注册“全局”方法 / 实例 / 组件 / 属性的   ->   等同于 vue2 中的 Vue.prototype.$http = ...
app.config.globalProperties.$hook = hook;

app.use(ElementPlus)

app.mount('#app')
