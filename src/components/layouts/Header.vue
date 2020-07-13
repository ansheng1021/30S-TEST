<template>
    <div class="header">
        <el-header>
            <el-row type="flex" justify="space-between" class="wrap-row" style="height: 60px;">
                <el-col :span="12" class="left-container ">
                    <White-header v-on:changeIsHome="changeIsHome" v-show="is_home"></White-header>
                    <Black-header v-on:changeIsHome="changeIsHome" v-show="!is_home"></Black-header>
                </el-col>
                <el-col :span="12" class="right-container">
                    <router-link to="/login">
                        <el-button round>登录</el-button>
                    </router-link>
                    <router-link to="/login">
                        <el-button round>注册</el-button>
                    </router-link>
                </el-col>
            </el-row>
        </el-header>
    </div>
</template>

<script>
    import WhiteHeader from './WhiteHeader'
    import BlackHeader from './BlackHeader'
    export default {
        name: 'Header',
        data() {
            return {
                logo: {
                    src_white: "https://img-space.30sche.com/other/202007/13/a3fc09e43f7a0626d2ab4afd3fd82504.png",
                    src_black:"https://www.30sche.com/src/assets/components/header/images/logo_02-8ef07cc6ad.png",
                    title: "30秒懂车"
                },
                is_home:true
            }
        },
        components:{
            WhiteHeader,
            BlackHeader
        },
        methods: {
            changeIsHome(type){
                type = parseInt(type)
                if(type == 1){
                    this.is_home = true
                    this.$router.push("/")
                }else{
                    this.is_home = false
                    this.$router.push("/login")
                }
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
            .el-button{
                background: none!important;
                border: none!important;
                color: white;
            }
        }

    }


</style>