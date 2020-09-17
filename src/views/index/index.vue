<template>
  <div class="viewport-wrap-box">
    <headerBanner></headerBanner>

    <div class="content-wrap">

      <div class="item-box" v-for="(item, total_index) in dataList" :key="total_index">

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

        <button class="open-account" @click="handlerOpenAccount(total_index)">免费开户</button>
      </div>
    </div>

    <footer-component></footer-component>

  </div>
</template>

<script>
// http://xgswscn.cn/index.html#/
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
      ],
      goUrl: ''
    }
  },
  mounted() {
  },
  methods: {
    clickMore(event, index) {
      this.dataList[index].activeArrow = !this.dataList[index].activeArrow
      this.dataList[index].showActiveDesc = !this.dataList[index].showActiveDesc
    },
    goToUrl() {
      window.location.href = this.goUrl
    },
    async handlerOpenAccount(i) {
      this.goUrl = this.dataList[i].url
      await this.recordClick(i)
    },
    goToAccount(name) {
      this.$router.push({
        path: '/account',
        query: {
          name: name
        }
      })
    },
    async recordClick(i) {
      // let url = 'http://119.145.28.209:20896/infos.htm'
      let url = 'http://xgswscn.cn:80/infos.htm'

      let body = {
        'data': [
          {
            'type': '点击开户',
            'key': '卷商名称',
            'value': this.dataList[i].securitiesName
          }
        ]
      }

      // let body = {
      //   'data': [
      //     {
      //       'type': 'type3',
      //       'key': 'key3',
      //       'value': 'value3'
      //     }
      //   ]
      // }

      // 5s内无响应也会跳转
      let timeoutId = setTimeout(() => {
        this.goToUrl()
      }, 5000)

      await this.$axios.post(url, body, true)
        .then((res) => {
          console.log(res)
          clearTimeout(timeoutId)
          this.goToUrl()
        })
        .catch((err) => {
          console.log(err)
          clearTimeout(timeoutId)
          this.goToUrl()
        })
    }
  }
}
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
