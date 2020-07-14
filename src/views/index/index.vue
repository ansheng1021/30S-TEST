<template>
    <div>
        <!--轮播-->
        <div class="banner-box">
            <img :src="bannerItem[swiperIndex].coverUrl" alt="" class="coverImg">
            <div id="certify">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div :key="i" class="swiper-slide" v-for="(item,i) in bannerItem">
                            <img :src="item.url" alt="">
                        </div>

                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
        <!--4大优势-->
        <div class="advantage">
            <div class="con">
                <img class="bg" src="../../img/bg4.png" alt="">
                <div class="advantage_box">
                    <div class="box1 wow animated fadeInLeft">
                        <p class="city">厦门市</p>
                        <p class="company">叁猿网络科技有限公司</p>
                    </div>
                    <div class="box2 wow animated fadeInRight">
                        <el-tabs :tab-position="tabPosition" style="height: 360px;" class="tab_advantage">
                            <el-tab-pane label="01">
                                <div class="tab_advantage_box">
                                    <img src="../../img/bg6.png" alt="">
                                    <p class="title">我们的优势</p>
                                    <p class="txt">
                                        响应式全屏幕营销网站，无需重复投资无需重复维护，无需重复运营。全面整合微信公众号、小程序，数据对接微信互动与分享。高技术，高稳定性运维解决方案。系统化整合客户快速营销。</p>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="02">
                                <div class="tab_advantage_box">
                                    <img src="../../img/bg6.png" alt="">
                                    <p class="title">我们的优势2</p>
                                    <p class="txt">
                                        响应式全屏幕营销网站，无需重复投资无需重复维护，无需重复运营。全面整合微信公众号、小程序，数据对接微信互动与分享。高技术，高稳定性运维解决方案。系统化整合客户快速营销。</p>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="03">
                                <div class="tab_advantage_box">
                                    <img src="../../img/bg6.png" alt="">
                                    <p class="title">我们的优势3</p>
                                    <p class="txt">
                                        响应式全屏幕营销网站，无需重复投资无需重复维护，无需重复运营。全面整合微信公众号、小程序，数据对接微信互动与分享。高技术，高稳定性运维解决方案。系统化整合客户快速营销。</p>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="04">
                                <div class="tab_advantage_box">
                                    <img src="../../img/bg6.png" alt="">
                                    <p class="title">我们的优势4</p>
                                    <p class="txt">
                                        响应式全屏幕营销网站，无需重复投资无需重复维护，无需重复运营。全面整合微信公众号、小程序，数据对接微信互动与分享。高技术，高稳定性运维解决方案。系统化整合客户快速营销。</p>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>
        </div>
        <!--精选案例-->
        <div class="case">
            <h2Title class="wow animated fadeInDown" title1="精选案例" title2="SELECTED CASES"></h2Title>
            <swiperCover :listData="list" ref="mychild" class="wow animated fadeInUp"></swiperCover>
        </div>
        <!--服务流程-->
        <div class="service">
            <h2Title class="wow animated fadeInDown" title1="服务流程" title2="SERVICE FLOW"></h2Title>
            <div class="con">
                <ul class="list">
                    <li class="wow animated fadeInLeft d1">
                        <img class="img" src="../../img/ser_icon1.png">
                        <img class="img_jt" src="../../img/jt.png">
                        <p class="title wow animated fadeInDown d7">需求分析</p>
                        <p class="txt wow animated fadeInDown d7">
                            专属风格定制</br>
                            用户界面设计</br>
                            网站内容撰写排版设计</br>
                            人与人之间设计
                        </p>
                    </li>
                    <li class="wow animated fadeInLeft d2">
                        <img class="img" src="../../img/ser_icon2.png">
                        <img class="img_jt" src="../../img/jt.png">
                        <p class="title wow animated fadeInDown d9">UI设计</p>
                        <p class="txt wow animated fadeInDown d9">
                            专属风格定制</br>
                            用户界面设计</br>
                            网站内容撰写排版设计</br>
                            人与人之间设计
                        </p>
                    </li>
                    <li class="wow animated fadeInLeft d3">
                        <img class="img" src="../../img/ser_icon3.png">
                        <img class="img_jt" src="../../img/jt.png">
                        <p class="title wow animated fadeInDown d11">应用开发</p>
                        <p class="txt wow animated fadeInDown d11">
                            专属风格定制</br>
                            用户界面设计</br>
                            网站内容撰写排版设计</br>
                            人与人之间设计
                        </p>
                    </li>
                    <li class="wow animated fadeInLeft d4">
                        <img class="img" src="../../img/ser_icon4.png">
                        <img class="img_jt" src="../../img/jt.png">
                        <p class="title wow animated fadeInDown d13">系统测试</p>
                        <p class="txt wow animated fadeInDown d13">
                            专属风格定制</br>
                            用户界面设计</br>
                            网站内容撰写排版设计</br>
                            人与人之间设计
                        </p>
                    </li>
                    <li class="wow animated fadeInLeft d5">
                        <img class="img" src="../../img/ser_icon5.png">
                        <p class="title wow animated fadeInDown d15">产品上线</p>
                        <p class="txt wow animated fadeInDown d15">
                            专属风格定制</br>
                            用户界面设计</br>
                            网站内容撰写排版设计</br>
                            人与人之间设计
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <!--公司信息-->
        <div class="company_box">
            <div class="con">
                <img :src="logoimg" class="icon1 wow animated fadeInLeft" alt="">
                <div class="company_txt wow animated fadeInRight">
                    <h2>{{company_name}}</h2>
                    <span>{{keyword}}</span>
                    <p>{{description}}</p>
                    <div class="more">
                        <router-link to="/about">MORE</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!--合作伙伴-->
        <div class="partner">
            <div class="con">
                <h2Title class="wow animated fadeInDown" title1="合作伙伴" title2="COOPERATIVE PARTNER"></h2Title>
                <ul class="list wow animated fadeInLeft">
                    <li v-for="item in partener">
                        <div>
                            <div class="img_box">
                                <img v-lazy='item' alt="">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <foot></foot>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import swiper from '../../components/swiper'
    import swiperCover from '../../components/swiperCover'
    import h2Title from '../../components/h2Title'
    import foot from '../../components/foot'
    import {WOW} from 'wowjs'

    export default {
        name: 'index',
        components: {
            swiper,
            h2Title,
            swiperCover,
            foot
        },
        data() {
            return {
                tabPosition: 'left',
                swiperIndex:0,
                limit: '',
                list: [],
                company_name: '',
                description: '',
                partener: '',
                logoimg: '',
                keyword: '',
                bannerItem: [
                    {
                        id: 1,
                        url: 'https://img-space.30sche.com/other/202007/13/bf64b5dd123134a893d069e5286f76c0.png',
                        coverUrl: 'https://img-space.30sche.com/other/202007/13/fef0f2ea21446cf92ba80f6a8de775c7.png'
                    },
                    {
                        id: 2,
                        url: 'https://img-space.30sche.com/other/202007/13/5d633d6176b1f9fb0f654e66261da35b.png',
                        coverUrl: 'https://img-space.30sche.com/other/202007/13/d0ed90c49c4fde9d9fef56a182200efa.png'
                    },
                    {
                        id: 3,
                        url: 'https://img-space.30sche.com/other/202007/13/13ff416ba2b3dca3f3876203e238c850.jpg',
                        coverUrl: 'https://img-space.30sche.com/other/202007/13/f7f06102949ce036788e1104b4b97ee6.jpg'
                    },
                ]
            }
        },
        methods: {
            initSwiper() {
                let vm = this
                new Swiper('#certify .swiper-container', {
                    watchSlidesProgress: true,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    loop: true,
                    loopedSlides: 3,
                    autoplay: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        //clickable :true,
                    },
                    on: {
                        slideChangeTransitionStart: function () {
                            vm.swiperIndex = this.realIndex
                        },
                        progress: function (progress) {
                            var i = this.slides.length;
                            for (i = 0; i < this.slides.length; i++) {
                                var slide = this.slides.eq(i);
                                var slideProgress = this.slides[i].progress;
                                var modify = 1;
                                if (Math.abs(slideProgress) > 1) {
                                    modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                                }
                                var translate = slideProgress * modify * 60 + 'px';
                                var scale = 1 - Math.abs(slideProgress) / 5;
                                var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                                slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                                slide.css('zIndex', zIndex);
                                slide.css('opacity', 1);
                                if (Math.abs(slideProgress) > 1) {
                                    slide.css('opacity', 0);
                                }
                            }
                        },
                        setTransition: function (transition) {
                            for (var i = 0; i < this.slides.length; i++) {
                                var slide = this.slides.eq(i)
                                slide.transition(transition);
                            }

                        }
                    }

                })
            },
            caseLoad: function () {
                this.$axios.get('/api/cases/list?page=1&limit=' + this.limit)
                    .then((res) => {
                        this.list = res.data.list
                        this.$nextTick(() => {  // 下一个UI帧再初始化swiper
                            this.swiperCover();
                        });
                    })
            },
            companyload: function () {
                this.$axios.get('/api/about/list')
                    .then((res) => {
                        var i = 4
                        this.company_name = res.data.list[i].company_name
                        this.keyword = res.data.list[i].keyword
                        this.description = res.data.list[i].description
                        this.$store.commit("Company", res.data.list[i])
                        this.partener = res.data.list[i].company_imgsurlarr
                        this.logoimg = res.data.list[i].logo_url
                    })
            },
            swiperCover() {
                this.$refs.mychild.initSwiper()
            },
        },
        mounted() {
            new WOW().init();
            this.caseLoad();
            this.companyload();
            this.initSwiper()
        }
    }
</script>
<style lang="less" scoped>
    #certify {
        position: relative;
        width: 1200px;
        margin: 0 auto;
        z-index: 3;
        /*position: absolute;*/
        /*top: 0;*/
        /*left: 0;*/
    }

    .icon1 {
        margin: 50px auto 0px;
    }

    #certify .swiper-container {
        margin: 0 auto ;
    }

    #certify .swiper-slide {
        width: 100%;
        height: 400px;
        background: #fff;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
        position: relative;
        z-index: 3;
    }

    #certify .swiper-slide img {
        display: block;
        width: 100%;
        position: relative;
        z-index: 3;
    }
    .coverImg{
        width: 100% !important;
        height:480px !important;
        position: absolute!important;
        top: 0!important;
        left: 0!important;
        z-index: 2!important;
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
        left: -5%;
        top: 0;
        bottom: 0;
        margin: auto 0;
        width: 45px;
        height: 45px;
        background: url(../../img/wm_button_icon.png) no-repeat;
        background-position: 0 0;
        background-size: 100%;
    }

    #certify .swiper-button-prev:hover {
        background-position: 0 -46px;
        background-size: 100%
    }

    #certify .swiper-button-next {
        right: -5%;
        top: 0;
        bottom: 0;
        width: 45px;
        height: 45px;
        margin: auto 0;
        background: url(../../img/wm_button_icon.png) no-repeat;
        background-position: 0 -93px;
        background-size: 100%;
    }

    .swiper-slide-active {
        border-bottom: 0px !important;
    }

    #certify .swiper-button-next:hover {
    }
    .swiper-container2 {
        width: 1200px;
        margin: 0px auto;
        height: 600px;
    }

    .el-main {
        padding: 0px;
    }

    .banner-box {
        width: 100%;
        height: 400px;
        /*background-color:#F4F4F4;*/
        /*background-image:url('../../img/bg1.png');*/
        background-position: center;
        background-position-y: 0px;
        background-repeat: no-repeat;
    }

    .title {
        margin-top: 100px;
    }

    .title_1 {
        color: #fff;
        font-size: 16px;
        margin-top: 10px;
        text-shadow: 2px 2px 6px rgba(0, 0, 0, .3);
    }

    .advantage {
        height: auto;
        /*background-image:url('../../img/bg3.png');*/
        background-repeat: no-repeat;
        background-position: center;
        background-position-y: 0px;
        .bg {
            margin-top: 200px;
        }
        .advantage_box {
            background-color: #fff;
            width: 100%;
            height: 360px;
            margin: 60px auto 110px;
            .box1 {
                width: 265px;
                height: 360px;
                margin-right: 40px;
                float: left;
                background-image: url(../../img/bg5.png);
                background-repeat: no-repeat;
                text-align: left;
                font-size: 16px;
                .city {
                    margin: 50px 0px 0px 20px;
                }
                .company {
                    margin: 10px 0px 0px 20px;
                    font-weight: 700;
                }
            }
            .box2 {
                width: 780px;
                float: left;
                .tab_advantage {
                    .tab_advantage_box {
                        text-align: left;
                        .title {
                            margin-top: 10px;
                            margin-bottom: 10px;
                            font-size: 24px;
                            font-weight: 700;
                        }
                        .txt {
                            font-size: 16px;
                            font-weight: 700;
                            letter-spacing: 3px;
                        }
                    }
                }
            }
        }
    }

    .case {
        height: 880px;
        background-image: url(../../img/bg7.png);
        background-repeat: no-repeat;
        background-position: center;
        background-position-y: 0px;
        display: flex;
        flex-direction: column;
        background-attachment: fixed;
    }

    .service {
        height: 745px;
        display: flex;
        flex-direction: column;
        .h1Title {
            margin-top: 80px;
        }
        .list {
            color: #333;
            margin-top: 75px;
            li {
                width: 240px;
                position: relative;
                float: left;
                .img_jt {
                    position: absolute;
                    top: 40px;
                    right: -30px;
                }
                &.animated:before {
                    height: 70px;
                }
                &:nth-child(1)::before {
                    background-color: #6FD6FF;
                }
                &:nth-child(1)::after {
                    background-color: #6FD6FF;
                }
                &:nth-child(2)::before {
                    background-color: #FEB785;
                }
                &:nth-child(2)::after {
                    background-color: #FEB785;
                }
                &:nth-child(3)::before {
                    background-color: #91B7FF;
                }
                &:nth-child(3)::after {
                    background-color: #91B7FF;
                }
                &:nth-child(4)::before {
                    background-color: #FE6891;
                }
                &:nth-child(4)::after {
                    background-color: #FE6891;
                }
                &:nth-child(5)::before {
                    background-color: #BCB5FC;
                }
                &:nth-child(5)::after {
                    background-color: #BCB5FC;
                }
                &:before {
                    content: '';
                    width: 2px;
                    height: 70px;
                    position: absolute;
                    left: 120px;
                    top: 88px;
                }
                &:after {
                    content: '';
                    width: 10px;
                    height: 10px;
                    border-radius: 100%;
                    position: absolute;
                    left: 116px;
                    top: 155px;
                }
                .img {
                    position: relative;
                }
                .title {
                    margin-top: 115px;
                    font-size: 24px;
                    font-weight: 700;
                }
                .txt {
                    margin-top: 30px;
                    line-height: 28px;
                    font-size: 16px;
                    color: #666;
                }
            }
        }
    }

    .company_box {
        height: 645px;
        background-image: url(../../img/bg8.png);
        background-position: center;
        background-position-y: 0px;
        background-repeat: no-repeat;
        .icon1 {
            float: left;
            margin-left: 355px;
            margin-top: 230px;
            width: 200px;
            height: 200px;
        }
        .company_txt {
            width: 540px;
            height: 340px;
            margin-top: 157px;
            background-color: #fff;
            border-radius: 50px;
            float: right;
            text-align: left;
            margin-right: -33px;
            h2 {
                font-size: 24px;
                font-weight: 700;
                padding: 40px 40px 15px 40px;
            }
            span {
                font-size: 16px;
                padding-left: 40px;
                color: #666;
            }
            p {
                font-size: 16px;
                padding-left: 40px;
                padding-top: 20px;
                width: 390px;
                line-height: 30px;
                font-weight: 700;
            }
            .more {
                width: 110px;
                height: 35px;
                line-height: 35px;
                background-color: #187AFF;
                text-align: center;
                margin-left: 40px;
                margin-top: 30px;
                a {
                    display: block;
                    color: #fff;
                    font-size: 16px;
                }
            }
        }
    }

    .partner {
        .h1Title {
            margin-top: 100px;
            margin-bottom: 60px;
        }
        .list {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 100px;
            margin-left: -20px;
            li {
                width: calc(20% - 20px);
                margin-left: 20px;
                margin-bottom: 20px;
                .img_box {
                    width: 100%;
                    height: 100px;
                    overflow: hidden;
                    position: relative;
                    img {
                        width: 100%;
                        position: absolute;
                        left: 0px;
                        top: 0px;;
                    }
                }
            }
        }
    }
</style>
<style lang="">
    .case .h1Title {
        color: #fff;
        margin-top: 80px;
    }

    #tab-0 {
        background-color: #228bf9;
        position: relative;
    }

    #tab-0:after {
        content: '';
        width: 100%;
        height: 5px;
        background-color: #fff;
        position: absolute;
        bottom: 0px;
        left: 0px;
    }

    #tab-1:after {
        content: '';
        width: 100%;
        height: 5px;
        background-color: #fff;
        position: absolute;
        bottom: 0px;
        left: 0px;
    }

    #tab-2:after {
        content: '';
        width: 100%;
        height: 5px;
        background-color: #fff;
        position: absolute;
        bottom: 0px;
        left: 0px;
    }

    #tab-3:after {
        content: '';
        width: 100%;
        height: 5px;
        background-color: #fff;
        position: absolute;
        bottom: 0px;
        left: 0px;
    }

    #tab-1 {
        background-color: #88daf2;
    }

    #tab-2 {
        background-color: #64aefb;
    }

    #tab-3 {
        background-color: #88daf2;
    }

    .el-tabs__item:hover {
        color: #fff;
    }

    .el-tabs__item.is-active {
        color: #fff;
    }

    .el-tabs__item {
        width: 85px !important;
        height: 90px !important;
        line-height: 90px !important;
        text-align: center !important;
        font-size: 36px !important;
        color: #fff !important;
    }

    .el-tabs__nav-wrap {
        overflow: visible !important;
    }

    .el-tabs__nav-scroll {
        overflow: visible !important;
    }

    .el-tabs__active-bar.is-left {
        background: none !important;
        top: 25px !important;
        right: -15px !important;
        width: 0 !important;
        height: 0 !important;
        border-width: 15px 0 15px 15px;
        border-style: solid;
        border-color: transparent transparent transparent #ed6756;
    }

    .el-tabs__header.is-left {
        margin-right: 40px !important;
    }
</style>