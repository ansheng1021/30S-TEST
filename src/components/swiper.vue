<template>
    <div class="">
        <div id="certify">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div :key="i" class="swiper-slide" v-for="(item,i) in bannerItem">
                        <img :src="item.top_pic_url" alt="">
                        <img :src="item.special_1" alt="" class="coverImg">
                    </div>

                </div>
            </div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'

    export default {
        name: 'swiper',
        data() {
            return {
                // bannerItem: [
                //     // {
                //     //     id: 1,
                //     //     url: 'https://img-space.30sche.com/other/202007/13/bf64b5dd123134a893d069e5286f76c0.png',
                //     //     coverUrl: 'https://img-space.30sche.com/other/202007/13/fef0f2ea21446cf92ba80f6a8de775c7.png'
                //     // },
                //     // {
                //     //     id: 2,
                //     //     url: 'https://img-space.30sche.com/other/202007/13/5d633d6176b1f9fb0f654e66261da35b.png',
                //     //     coverUrl: 'https://img-space.30sche.com/other/202007/13/fef0f2ea21446cf92ba80f6a8de775c7.png'
                //     // },
                //     // {
                //     //     id: 3,
                //     //     url: 'https://img-space.30sche.com/other/202007/13/13ff416ba2b3dca3f3876203e238c850.jpg',
                //     //     coverUrl: 'https://img-space.30sche.com/other/202007/13/f7f06102949ce036788e1104b4b97ee6.jpg'
                //     // },
                // ]
            }
        },
        mounted() {
            // this.getBanner();
            // new Swiper('#certify .swiper-container', {
            //     watchSlidesProgress: true,
            //     slidesPerView: 'auto',
            //     centeredSlides: true,
            //     loop: true,
            //     loopedSlides: 3,
            //     autoplay: true,
            //     navigation: {
            //         nextEl: '.swiper-button-next',
            //         prevEl: '.swiper-button-prev',
            //     },
            //     pagination: {
            //         el: '.swiper-pagination',
            //         //clickable :true,
            //     },
            //     on: {
            //         progress: function (progress) {
            //             var i = this.slides.length;
            //             for (i = 0; i < this.slides.length; i++) {
            //                 var slide = this.slides.eq(i);
            //                 var slideProgress = this.slides[i].progress;
            //                 var modify = 1;
            //                 if (Math.abs(slideProgress) > 1) {
            //                     modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
            //                 }
            //                 var translate = slideProgress * modify * 60 + 'px';
            //                 var scale = 1 - Math.abs(slideProgress) / 5;
            //                 var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
            //                 slide.transform('translateX(' + translate + ') scale(' + scale + ')');
            //                 slide.css('zIndex', zIndex);
            //                 slide.css('opacity', 1);
            //                 if (Math.abs(slideProgress) > 1) {
            //                     slide.css('opacity', 0);
            //                 }
            //             }
            //         },
            //         setTransition: function (transition) {
            //             for (var i = 0; i < this.slides.length; i++) {
            //                 var slide = this.slides.eq(i)
            //                 slide.transition(transition);
            //             }
            //
            //         }
            //     }
            //
            // })
        },
        methods: {
            // getBanner() {
            //     this.$axios.get("/api/getIndexBanner")
            //         .then((res) => {
            //             if(res.data.length > 0){
            //                 this.bannerItem = res.data
            //             }
            //         })
            // }
        }
    }
</script>

<style lang="">
    .title1 {
        font-size: 24px;
        color: #333;
        margin: 35px auto 30px;
    }

    .title2 {
        font-size: 16px;
        color: #333;
        line-height: 26px;
    }

    #certify {
        position: relative;
        width: 1200px;
        margin: 0 auto;
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
    }

    .icon1 {
        margin: 50px auto 0px;
    }

    #certify .swiper-container {
        padding-bottom: 60px;
        margin: 0 auto;
        margin-top: 70px;
    }

    #certify .swiper-slide {
        width: 100%;
        height: 400px;
        background: #fff;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
        border-bottom: 4px solid #1C7EFF;
        position: relative;
        z-index: 3;
    }

    #certify .swiper-slide img {
        display: block;
        width: 100%;
        position: relative;
        z-index: 3;
    }

    .coverImg {
        width: 100% !important;
        height: 100% !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        z-index: 2 !important;
    }

    #certify .swiper-slide p {
        text-align: center;
    }

    #certify .swiper-pagination {
        width: 100%;
        bottom: 20px;
    }

    #certify .swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 0 5px;
        border: 3px solid #fff;
        background-color: #d5d5d5;
        width: 10px;
        height: 10px;
        opacity: 1;
    }

    #certify .swiper-pagination-bullets .swiper-pagination-bullet-active {
        border: 3px solid #00aadc;
        background-color: #fff;
    }

    #certify .swiper-button-prev {
        left: -30px;
        width: 45px;
        height: 45px;
        background: url(../../src/img/wm_button_icon.png) no-repeat;
        background-position: 0 0;
        background-size: 100%;
    }

    #certify .swiper-button-prev:hover {
        background-position: 0 -46px;
        background-size: 100%
    }

    #certify .swiper-button-next {
        right: 50%;
        margin-right: -75px;
        width: 150px;
        height: 150px;
        margin-top: 120px;
        background: url(../../src/img/icon4.gif) no-repeat;
        background-size: 150px 150px;
    }

    .swiper-slide-active {
        border-bottom: 0px !important;
    }

    #certify .swiper-button-next:hover {
    }
</style>