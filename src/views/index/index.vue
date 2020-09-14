<template>
  <div class="viewport-wrap-box">
    <headerBanner></headerBanner>

    <div class="content-wrap">

      <div class="item-box" v-for="(item, index) in dataList" :key="index">

        <div class="top">
          <img class="logo" :src="item.iconSrc" >
          <div class="desc-box">
            <div class="securities-box">
              <p class="securities-name">{{ item.securitiesName }}</p>
              <span class="small-securities-name" v-if="item.smallSecuritiesName">{{ item.smallSecuritiesName }}</span>
            </div>
            <div class="icon-box">
              <section class="icon-desc" v-for="(iconItem, index) in item.iconDesc" :key="index">
                <img class="icon" src="../../assets/img/yuenv/gou.png">
                <span>{{ iconItem }}</span>
              </section>
            </div>
          </div>
        </div>

        <div class="content">
          <div class="main-desc" v-for="(mainDescItem, main_index) in item.mainDescList" :key="main_index">
            <div class="left">
              <div class="dot"></div>
            </div>
            <div class="main-desc-text" v-html="mainDescItem"></div>
          </div>

          <div class="get-more">
            <div @click="clickMore($event, index)">
              <span>了解更多</span>
              <div class="arrow" :class="{'active-arrow': item.activeArrow}"></div>
            </div>
          </div>

          <div class="active-desc" :class="{'show-active-desc': item.showActiveDesc}">
            <div class="desc-item" v-for="(descItem, index) in item.activeDesc" :key="index">
              <div class="left">
                <div class="dot"></div>
              </div>
              <div class="main-desc-text" v-html="descItem"></div>
            </div>
          </div>

        </div>

        <!-- <button class="open-account" @click="goToAccount(item.securitiesName)">免费开户</button> -->
        <button class="open-account" @click="goToUrl(item.url)">免费开户</button>
      </div>
    </div>

    <footer-component></footer-component>

  </div>
</template>

<script>
import { Swiper } from 'vux'
import footerBar from '../../components/footerBar'
import HeaderBanner from '../header-banner/header-banner'
import footerComponent from '../footer-component/footer-component'
import { config } from './config.js'

export default {
  components: {
    Swiper,
    footerBar,
    HeaderBanner,
    footerComponent
  },
  data() {
    return {
      test: false,
      showActiveDesc: false,
      dataList: [
        ...config.dataList
      ]
    }
  },
  methods: {
    clickMore(event, index) {
      this.dataList[index].activeArrow = !this.dataList[index].activeArrow
      this.dataList[index].showActiveDesc = !this.dataList[index].showActiveDesc
    },
    goToUrl(url) {
      window.location.href = url
    },
    goToAccount(name) {
      this.$router.push({
        path: '/account',
        query: {
          name: name
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
