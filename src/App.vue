<template>
    <!-- <el-container>
        <Header/>
        <div id="main">
            <router-view/>
        </div>
        <Footer/>
    </el-container> -->
    <div id="main">
        <el-container>
            <Header/>
            <div>
                <router-view/>
            </div>
            <Footer/>
        </el-container>
    </div>
</template>

<script>
    import Header from '@/components/layouts/Header'
    import Footer from '@/components/layouts/Footer'

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        }
    }
</script>

<style lang="scss">
    $container-large-desktop: 1200px;
    $btn-primary-bg: #00b5ad;
    $btn-primary-border: #00b5ad;
    $label-primary-bg: #00b5ad;
    $pagination-active-bg: #00b5ad;
    $pagination-active-border: #00b5ad;
    $pagination-color: #00b5ad;
    $input-border-focus: #00b5ad;
    $link-color: #12c4c5;
    $link-hover-color: #22ddde;
    $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
    $fa-font-path: "~font-awesome/fonts/";
    @import "~bootstrap-sass/assets/stylesheets/_bootstrap";
    @import "~font-awesome/scss/font-awesome";
    #main {
        // float: left;
        .el-container {
            display: block;
        }

    }
    .el-menu.el-menu--horizontal{
        border-bottom: none!important;
    }
    .el-menu--popup-bottom-start{
        background: rgba(51,51,51,0.5)!important;
        margin-top: 0!important;
    }
    .el-menu--popup-right-start{
        background: rgba(51,51,51,0.5)!important;
        margin-top: 0!important;
    }
    .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title{
        background: rgba(51,51,51,0.5)!important;
        margin-top: 0!important;
    }
    .el-menu--horizontal>.el-menu-item.is-active:hover{
        background: none!important;
    }
    .el-menu--horizontal>.el-menu-item.is-active{
        color: white!important;
        font-weight: bold!important;
    }
    .el-menu--horizontal>.el-menu-item{
        border-bottom: none!important;
    }
    .el-menu--horizontal>.el-menu-item:hover{
        background: none!important;
    }
    .el-menu--popup{
        padding: 0!important;
    }
    .el-submenu__title:hover{
        background: none!important;
    }
    .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
        color: white!important;
        font-weight: bold;
        border-bottom: none!important;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title{
        border-bottom: none!important;
    }
    .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
        background: none!important;
    }
    a {
        text-decoration: none !important;
    }
    ul, li {
        padding: 0;
        margin: 0;
        list-style: none
    }

</style>