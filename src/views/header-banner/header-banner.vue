<template>
  <div class="header">
    <div class="banner">
      <swiper class="swiper-box" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="swiper-slide">
          <img class="swiper-img" src="../../assets/img/yuenv/banner1.png">
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img class="swiper-img" src="../../assets/img/yuenv/banner2.png">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <swiper class="swiper-box" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="swiper-slide">
          <img class="swiper-img" src="../../assets/img/yuenv/banner2.png">
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img class="swiper-img" src="../../assets/img/yuenv/banner1.png">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-banner',
  components: {
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        centeredSlides: true,
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: {
          delay: 2500
          // disableOnInteraction: false
        }
        // 每张播放时长3秒，自动播放
        // Some Swiper option/callback..
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang='less' scoped>
@import './header-banner.less';
</style>
