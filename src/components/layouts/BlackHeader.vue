<template>
    <div class="left-container">
        <img class="header-img" :src="logo.src_black" alt="">
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                text-color="#000000"
                background-color:="#000000"
                active-text-color="#ffd04b">
            <el-menu-item index="1" style="color: black!important;">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item style="color: white;" index="2-1">选项1</el-menu-item>
                <el-menu-item style="color: white;" index="2-2">选项2</el-menu-item>
                <el-menu-item style="color: white;" index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">
                        <div style="color: white;">选项4</div>
                    </template>
                    <el-menu-item style="color: white;" index="2-4-1">选项1</el-menu-item>
                    <el-menu-item style="color: white;" index="2-4-2">选项2</el-menu-item>
                    <el-menu-item style="color: white;" index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3"><a href="javascript:;" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                logo: {
                    src_white: "https://img-space.30sche.com/other/202007/13/a3fc09e43f7a0626d2ab4afd3fd82504.png",
                    src_black: "https://www.30sche.com/src/assets/components/header/images/logo_02-8ef07cc6ad.png",
                    title: "30秒懂车"
                },
                activeIndex: this.$store.state.activeIndex,
                activeIndex2: this.$store.state.activeIndex

            }
        },
        methods: {
            handleSelect(key, keyPath) {
                this.$store.dispatch('changeActiveIndex',key)
                this.$emit("changeIsHome",key)
            }
        }

    }
</script>

<style scoped lang="scss">

    .header {
        width: 100%;
        line-height: 60px;
        padding: 0 60px;
        position: relative;
        z-index: 2;
        .header-img {
            width: 100px;
        }
        .left-container {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 100%;
            .nav-item {
                color: white;
            }
            .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
                border-bottom: none !important;
            }
        }
        .right-container {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 100%;
            .el-button {
                background: none !important;
                border: none !important;
                color: white;
            }
        }

    }


</style>