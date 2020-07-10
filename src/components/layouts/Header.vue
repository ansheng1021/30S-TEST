<template>
    <el-header class="header">
        <el-row type="flex" justify="space-between" class="wrap-row" style="height: 60px;">
            <el-col :span="12" class="left-container ">
                <img class="header-img" :src="logo.src" alt="">
                <el-menu :default-active="activeIndex" class="el-menu-demo hidden-lg-and-down" mode="horizontal"
                         @select="handleSelect">
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-submenu index="2">
                        <div style="color: white;">
                            <template class="" style="color: white;" slot="title">发现</template>
                            <el-menu-item index="2-1">视频</el-menu-item>
                            <el-menu-item index="2-2">文章</el-menu-item>
                            <el-menu-item index="2-3">创作人</el-menu-item>
                        </div>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="12" class="right-container">
                <el-button round>登录</el-button>
                <el-button round>注册</el-button>
            </el-col>
        </el-row>


        <!--<el-row type="flex" justify-content="space-between">-->
        <!--<el-col :span="12">-->
        <!--<img class="header-img" :src="logo.src" alt="">-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
        <!--<img class="header-img" :src="logo.src" alt="">-->
        <!--</el-col>-->
        <!--&lt;!&ndash;<el-row>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-col :span="12"><img class="header-img" :src="logo.src" alt=""></el-col>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-row>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-row>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-col :span="12"><img class="header-img" :src="logo.src" alt=""></el-col>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-row>&ndash;&gt;-->
        <!--</el-row>-->
    </el-header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                logo: {
                    src: "https://www.30sche.com/src/assets/components/header/images/logo_02-8ef07cc6ad.png",
                    title: "30秒懂车"
                },
                activeIndex: '1'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
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
            margin-right: 30px;
        }
        .left-container {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 100%;

        }
        .right-container {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 100%;
        }
        .el-menu.el-menu--horizontal {
            border-bottom: none !important;
        }
        .el-menu--horizontal > .el-menu-item.is-active {
            border-bottom: none !important;
            color: white;
            font-weight: bold;
        }
        .el-menu{
            background: none;
        }
    }


</style>