<template>
    <div class="big-banner">
        <div class="line"></div>
        <img class="big-banner-item" :src="bannerFilter[swiperIndex]" alt="">
        <div class="swiper-container">
            <swiper v-if="banner.length > 1" ref="mySwiper" :options="swiperOption">
                <swiper-slide v-for="item in banner" :key="item">
                    <img class="bannerItem" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>

<script>
    // import 'swiper/css/swiper.css'
    import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'

    export default {
        name: "Home",
        data() {
            let vm = this
            return {
                notNextTick: true,
                swiperIndex: 0,
                swiperOption: {
                    pagination: '.swiper-pagination',
                    initialSlide: 0,
                    autoplay: {
                        delay:1000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                    // 箭头配置
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    // 环状轮播
                    loop: true,
                    loopAdditionalSlides: 0,
                    // 一个屏幕展示的数量
                    slidesPerView: 1,
                    observer: true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true,//修改swiper的父元素时，自动初始化swiper
                    direction: 'horizontal',
                    // 间距
                    spaceBetween: 10,
                    on: {
                        slideChangeTransitionStart: function () {
                            vm.swiperIndex = this.realIndex
                        }
                    }
                },
                bannerFilter: [
                    "https://img-space.30sche.com/other/202007/13/fef0f2ea21446cf92ba80f6a8de775c7.png",
                    "https://img-space.30sche.com/other/202007/13/d0ed90c49c4fde9d9fef56a182200efa.png",
                    "https://img-space.30sche.com/other/202007/13/f7f06102949ce036788e1104b4b97ee6.jpg"
                ],
                banner: [
                    "https://img-space.30sche.com/other/202007/13/bf64b5dd123134a893d069e5286f76c0.png",
                    "https://img-space.30sche.com/other/202007/13/5d633d6176b1f9fb0f654e66261da35b.png",
                    "https://img-space.30sche.com/other/202007/13/13ff416ba2b3dca3f3876203e238c850.jpg"
                ]
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
        components: {
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        },
        mounted() {

        },

        methods: {
            getBanner() {
                return this.banner
            }
        }
    }
</script>

<style scoped>
    .line{
        height: 60px;
    }
    .big-banner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 450px;
        overflow: hidden;
        z-index: 1;
        /*background: #009fa2;*/
        /* z-index: 1; */
    }

    .swiper-container {
        width: 1200px;
        height: 390px;
        margin: 0 auto;
        position: relative;
        z-index: 3;
    }

    .bannerItem {
        width: 100%;
        height: 100%;
        overflow: visible;
    }

    .big-banner-item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }
</style>