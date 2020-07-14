<template>
    <div class="banner_box" v-if="header_type != false">
        <div class="con" >
            <router-link v-show="header_type == 1" to="/" class="logo">
                <img class="compony-icon" :src="logo.src_white"
                     alt="">
            </router-link>
            <router-link v-show="header_type == 2" to="/" class="logo">
                <img class="compony-icon" :src="logo.src_black"
                     alt="">
            </router-link>
            <!--透明底-->
            <ul class="list" v-show="header_type == 1">
                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="transparent"
                        text-color="#fff"
                        active-text-color="#fff">
                    <el-menu-item index="1">
                        <router-link to="/" active-class="active" exact>首页</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link to="/case">客户案例</router-link>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <router-link to="/newslist1">新闻资讯</router-link>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <router-link to="/about">关于我们</router-link>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <router-link to="/contact">联系我们</router-link>
                    </el-menu-item>
                    <el-submenu index="6">
                        <template slot="title">综合</template>
                        <el-menu-item index="21">
                            <router-link to="/contact">视频</router-link>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </ul>

            <!--白色底-->
            <ul class="list" v-show="header_type == 2">
                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#ffffff"
                        text-color="#000000"
                        active-text-color="#000000">
                    <el-menu-item index="1">
                        <router-link to="/" active-class="active" exact>首页</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link to="/case">客户案例</router-link>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <router-link to="/newslist1">新闻资讯</router-link>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <router-link to="/about">关于我们</router-link>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <router-link to="/contact">联系我们</router-link>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">综合</template>
                        <el-menu-item index="2-1">
                            <router-link to="/contact">视频</router-link>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </ul>

            <div class="leftContainer">
                <div class="user">
                    <el-button type="text" :class="header_type == 1?'white-btn':'black-btn'"><router-link to="/login">注册</router-link></el-button>
                    <el-button type="text" :class="header_type == 1?'white-btn':'black-btn'"><router-link to="/login">登录</router-link></el-button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                logo: {
                    src_white: "https://img-space.30sche.com/other/202007/13/a3fc09e43f7a0626d2ab4afd3fd82504.png",
                    src_black: "https://www.30sche.com/src/assets/components/header/images/logo_02-8ef07cc6ad.png",
                    title: "30秒懂车"
                },
                header_type: this.$route.meta.header_type
            };
        },
        watch: {
            '$route': function () {
                let _this = this
                _this.header_type = _this.$route.meta.header_type
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                // console.log(this.header_type)
            }
        }
    }
</script>
<style lang="less" scoped>
    .banner_box {
        display: flex;
        height: 70px;
        background-color: transparent;
        position: relative;
        z-index: 5;
    }

    .logo {
        float: left;
        height: 100%;
        display: flex;
        align-items: center;
        img {
            width: 84px;
        }
    }

    .list {
        width: 800px;
        line-height: 80px;
        font-size: 18px;
        color: #fff;
        height: 100%;
        float: left;
        display: flex;
        align-items: center;
        li {
            float: left;
        }
    }

    .leftContainer {
        height: 100%;
        display: flex;
        align-items: center;
        float: right;
        .black-btn {
            color: black;
        }
        .white-btn {
            color: white;
        }
    }

    a {
        color: white;
    }

    .logo_txt {
        float: left;
        text-align: left;
        color: #fff;
        margin-top: 30px;
        margin-left: 30px;
        .tit {
            font-size: 24px;
            letter-spacing: 3px;
            margin-bottom: 3px
        }
        .txt {
            font-size: 10px;
        }
    }
</style>
<style lang="less">

    .el-menu {
        float: left !important;
    }

    .el-menu-item {
        padding: 0px 30px !important;
        position: relative;
        cursor: auto;
    }

    .el-menu.el-menu--horizontal {
        border-bottom: 0px !important;
        /*margin-top: 25px!important;*/
    }

    .el-menu-item {
        font-size: 14px !important;
    }

    .el-menu--horizontal > .el-menu-item a {
        display: block;
    }

    .el-submenu__title {
        font-size: 14px !important;
        padding-left: 30px !important;
    }

    .el-menu--horizontal > .el-menu-item.is-active {
        border-bottom: 0px !important;
    }

    .el-icon-arrow-down:before {
        color: #fff !important;
    }

    .el-menu--horizontal > .el-menu-item:hover {
        background-color: transparent !important;
    }

    .el-menu--horizontal > .el-submenu .el-submenu__title {
        background-color: transparent !important;
    }

    .el-menu-item:after {
        /*position: absolute;*/
        /*content: '';*/
        /*width: 0%;*/
        /*height: 2px;*/
        /*background-color: #fff;*/
        /*left: 50%;*/
        /*top: 48px;*/
        transition: all .3s;
    }

    .el-menu-item a.active {
        font-weight: bold;
        font-size: 16px;
    }

    .el-menu-item a.active:after {
        /*position: absolute;*/
        /*content: '';*/
        /*width: 50%;*/
        /*height: 2px;*/
        /*background-color: #fff;*/
        /*left: 50%;*/
        /*top: 48px;*/
        /*transition: all .3s;*/
        /*margin-left: -25%;*/
    }

    .el-menu-item:hover {
        font-weight: bold;
        transition: all .3s;
        /*position: absolute;*/
        /*content: '';*/
        /*width: 50%;*/
        /*height: 2px;*/
        /*background-color: #fff;*/
        /*left: 50%;*/
        /*top: 48px;*/
        /*margin-left: -25%;*/
    }

    .el-menu--popup-bottom-start {
        background: rgba(51, 51, 51, 0.5) !important;
        margin-top: 0 !important;
        color: white;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }

    .el-menu--popup-right-start {
        background: rgba(51, 51, 51, 0.5) !important;
        margin-top: 0 !important;
        color: white;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }

    .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
        background: rgba(51, 51, 51, 0.5) !important;
        margin-top: 0 !important;
        color: white;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }
</style>