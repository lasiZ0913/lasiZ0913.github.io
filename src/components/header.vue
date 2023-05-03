<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/img/page-logo.png" alt="">
        </div>
        <div class="menu">
            <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="transparent"
                @open="handleOpen"
            >
                <template v-for="(item, index) in menuList" :key="index">
                    <el-menu-item 
                        :index="index"
                        v-if="!item.child"
                    >
                        <svg class="icon cumIcon" aria-hidden="true">
                            <use :xlink:href="'#'+item.icon"></use>
                        </svg>
                        {{ item.title }}
                    </el-menu-item>
                    <el-sub-menu v-if="item.child">
                        <template #title>
                            <svg class="icon cumIcon" aria-hidden="true">
                                <use :xlink:href="'#'+item.icon"></use>
                            </svg>
                            {{ item.title }}
                        </template>
                        <el-menu-item 
                            v-for="(childItem, childIndex) in item.child" :key="childIndex"
                            :index="childIndex"
                        >
                            <svg class="icon cumIcon" aria-hidden="true">
                                <use :xlink:href="'#'+childItem.icon"></use>
                            </svg>
                            {{ childItem.title }}
                        </el-menu-item>
                    </el-sub-menu>
                </template>
                
            </el-menu>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { reactive, ref, onMounted } from 'vue'
    const menuList:listType[] = reactive([
        {
            title:'首页',
            path:'index',
            icon:'icon-shouye'
        },{
            title:'随笔',
            path:'essay',
            icon:'icon-xiaobenjiaocheng'
        },{
            title:'笔记',
            path:'/',
            icon:'icon-bi',
            child:[
                {
                    title:'前端',
                    path:'notes',
                    icon:'icon-_qianduankaifa'
                },
                {
                    title:'java',
                    path:'notes',
                    icon:'icon-java'
                },
                {
                    title:'python',
                    path:'notes',
                    icon:'icon--_pythonzhihangqi'
                }
            ]
        }
    ])
    
    const handleOpen = (key: string, keyPath: string[]) => {
        console.log(key, keyPath)
    }

    interface listType{
        title:string,
        path:string,
        icon:string,
        child?:listType[]
    }
</script>

<style scoped lang="scss">
.header {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12%;
    box-sizing: border-box;
}
.logo{
    height: 50px;
    display: flex;
    align-items: center;
    img{
        height: 50px;
    }
}
.menu{
    width: 30%;
}

.el-menu--horizontal{
    border: none;
    background: transparent;
}
.el-menu-item{
    font-size: 17px;
    font-weight: bold;
}
:deep(.el-sub-menu__title){
    font-size: 17px;
    font-weight: bold;
}
.el-menu-item:hover{
    background: transparent !important;
}
:deep(.el-popper){
    background-color: transparent !important;
    border: none !important;
}
:deep(.el-menu--horizontal){
    border-bottom: none;
}
.cumIcon{
    font-size: 22px;
    margin-right: 3px;
}
</style>
