<template>
  <div class="viewport-wrap-box">
    <headerBanner></headerBanner>

    <div class="title-box">
      <h1 class="title">港美股开户</h1>
    </div>

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
          <div class="main-desc">
            <div class="left">
              <div class="dot"></div>
            </div>
            <div class="main-desc-text">{{ item.mainDesc }}</div>
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
              <div class="main-desc-text">
                {{ descItem }}
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
      test: false,
      showActiveDesc: false,
      dataList: [
        {
          securitiesName: '富途证券',
          iconSrc: require('../../assets/img/yuenv/fu-tu.png'),
          iconDesc: ['入金奖励', '10倍融资', '独立暗盘'],
          mainDesc: '开户即可获得180天港股免佣，首次入金≥2万港币，可获得1次抽奖机会+基金收益券：抽奖最低HKD130小米股票卡，最高1000美金特斯拉股票卡;基金收益券，购买基金可使用，3天固定年化15%的收益券。',
          activeDesc: [
            '现金打新50，融资打新100，10倍杠杆，利率2-3%',
            '支持fps，支持民生、招行、工行银证转账，独立暗盘，可1手融，可市值打新'
          ],
          activeArrow: true,
          showActiveDesc: false
        },
        {
          securitiesName: '老虎证券  ',
          iconSrc: require('../../assets/img/yuenv/tiger.png'),
          iconDesc: ['入金奖励', '20倍融资', '市值打新'],
          mainDesc: '开通综合账户首次入金≥2.4W港币，送1股阿里巴巴港股。',
          activeDesc: [
            '无现金打新，融资打新100，15-20倍杠杆，利率2-3%。',
            '标准户支持fps，无银证转账，无暗盘，不可1手融，可市值打新。',
            '交易佣金：0.029%+15元平台费',
            '卖出股票资金可实时用于打新'
          ],
          activeArrow: true,
          showActiveDesc: false
        },
        {
          securitiesName: '华盛证券',
          smallSecuritiesName: '华盛通',
          iconSrc: require('../../assets/img/yuenv/hua-sheng.png'),
          iconDesc: ['入金奖励', '20倍融资', '市值打新'],
          mainDesc: '首次入金≥1.3万港币并交易1次，900元佣金卡+250元融资打新券。',
          activeDesc: [
            '现金打新50，融资打新100，10倍杠杆，利率2-3%',
            '支持fps，支持民生、招行、永隆银证转账，辉立暗盘，可1手融，不可市值打新',
            '交易佣金：0.029%+15元平台费',
            '交易佣金：0.03%（最低3元）+平台费15元/笔，暗盘同',
            '卖出股票资金可实时用于打新'
          ],
          activeArrow: true,
          showActiveDesc: false
        }
      ]
    }
  },
  methods: {
    clickMore(event, index) {
      this.dataList[index].activeArrow = !this.dataList[index].activeArrow
      this.dataList[index].showActiveDesc = !this.dataList[index].showActiveDesc
    }
  }
}
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
