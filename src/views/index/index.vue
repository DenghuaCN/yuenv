<template>
  <div class="viewport-wrap-box">
    <headerBanner></headerBanner>

    <div class="content-wrap">
      <div class="item-box">

        <div class="top">
          <img class="logo" src="../../assets/img/yuenv/fu-tu.png" >
          <div class="desc-box">
            <p class="securities-name">富途证券</p>
            <div class="icon-box">
              <section class="icon-desc" v-for="(item, index) in 3" :key="index">
                <img class="icon" src="../../assets/img/yuenv/gou.png">
                <span>入金奖励</span>
              </section>
            </div>
          </div>
        </div>

        <div class="content">
          <div class="main-desc">
            <div class="left">
              <div class="dot"></div>
            </div>
            <div class="main-desc-text">
              开户即可获得180天港股免佣，首次入金≥2万港币，可获得1次抽奖机会+基金收益券：抽奖最低HKD130小米股票卡，最高1000美金特斯拉股票卡;基金收益券，购买基金可使用，3天固定年化15%的收益券。
            </div>
          </div>

          <div class="get-more">
            <span>了解更多</span>
            <div class="arrow"></div>
          </div>

          <div class="active-desc">
            <div class="desc-item">
              <div class="left">
                <div class="dot"></div>
              </div>
              <div class="main-desc-text">
                现金打新50，融资打新100，10倍杠杆，利率2-3%
              </div>
            </div>
            <div class="desc-item">
              <div class="left">
                <div class="dot"></div>
              </div>
              <div class="main-desc-text">
                支持fps，支持民生、招行、工行银证转账，独立暗盘，可1手融，可市值打新
              </div>
            </div>
          </div>

        </div>

        <button class="open-account">免费开户</button>
      </div>
    </div>

    <footer-component></footer-component>
    <!-- <div class="banner">
      <swiper :list="imgList" v-model="activeIndex" auto :show-dots="!showDots" dots-position="center"></swiper>
    </div>
    <div class="list clearfix">
      <div class="item fl" v-for="(item,index) in itemList" :key="index" @click="toUrl(index)">
        <img :src="item.icon" alt="">
        <div class="itemName">{{item.name}}</div>
      </div>
    </div>
    <footerBar></footerBar> -->
  </div>
</template>

<script>
import { Swiper } from 'vux'
import footerBar from '../../components/footerBar'
import HeaderBanner from '../header-banner/header-banner'
import footerComponent from '../footer-component/footer-component'
export default {
  components: {
    Swiper,
    footerBar,
    HeaderBanner,
    footerComponent
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
