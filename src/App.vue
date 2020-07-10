<template>
    <el-container>
        <Header/>
        <div id="main">
            <router-view/>
        </div>
        <Footer/>
    </el-container>
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
    #main{
        float: left;
    }
</style>