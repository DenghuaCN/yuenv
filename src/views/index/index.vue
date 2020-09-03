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
          <div class="main-desc">
            <div class="left">
              <div class="dot"></div>
            </div>
            <div class="main-desc-text" v-html="item.mainDesc"></div>
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

        <button class="open-account">免费开户</button>
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
          mainDesc: '开户即可获得<em>180天港股免佣</em>，首次入金≥2万港币，可获得<em>1次抽奖机会+基金收益券：</em>抽奖最低HKD130小米股票卡，最高1000美金特斯拉股票卡;基金收益券，购买基金可使用，3天固定年化15%的收益券。',
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
          mainDesc: '开通<em>综合账户首次入金≥2.4W港币，送1股阿里巴巴港股。</em>',
          activeDesc: [
            '无现金打新，融资打新100，15-20倍杠杆，利率2-3%。',
            '标准户<em>支持fps，无银证转账</em>，无暗盘，不可1手融，可市值打新。',
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
          mainDesc: '<em>首次入金≥1.3万港币并交易1次</em>，900元佣金卡+250元融资打新券。',
          activeDesc: [
            '现金打新50，融资打新100，10倍杠杆，利率2-3%',
            '<em>支持fps，支持民生、招行、永隆银证转账</em>，辉立暗盘，可1手融，不可市值打新',
            '交易佣金：0.03%（最低3元）+平台费15元/笔，暗盘同',
            '卖出股票资金可实时用于打新'
          ],
          activeArrow: true,
          showActiveDesc: false
        },
        {
          securitiesName: '华泰国际',
          smallSecuritiesName: '全球涨乐通',
          iconSrc: require('../../assets/img/yuenv/hua-tai.png'),
          iconDesc: ['入金奖励', '20倍融资', '市值打新'],
          mainDesc: '开户送即30天V2会员和1股盈富基金，首次入金<em>≥2W港币送1股阿里巴巴+1股盈富基金</em>（开户页面点击<em>“一键领取大礼”</em>）',
          activeDesc: [
            '会员现金打新0，融资打新0，10-33倍杠杆，利率3-4%',
            '支持fps，电话暗盘，融资需一手本金，可市值打新',
            '交易佣金：会员0佣金+0平台费，非会员0.029%（最低2.9元），+平台费15元/笔，暗盘0.15%',
            '卖出股票资金可实时用于打新'
          ],
          activeArrow: true,
          showActiveDesc: false
        },
        {
          securitiesName: '东财国际证券',
          iconSrc: require('../../assets/img/yuenv/dong-cai.png'),
          iconDesc: ['入金奖励', '20倍融资', '市值打新'],
          mainDesc: '<em>首次入金≥2W港币</em>，现金打新0费用。',
          activeDesc: [
            '融资打新100，10-20倍杠杆，利率2-3%',
            '<em>支持fps，支持民生、招行、工银银证转账</em>，辉立暗盘，不可1手融，不可市值打新',
            '交易佣金：0.025%（最低5元）+平台费15元/笔，暗盘0.025%（最低3元）+平台费15元/笔',
            '卖出股票资金可实时用于打新'
          ],
          activeArrow: true,
          showActiveDesc: false
        },
        {
          securitiesName: '雪盈证券',
          iconSrc: require('../../assets/img/yuenv/xue-ying.png'),
          iconDesc: ['入金奖励', '20倍融资', '市值打新'],
          mainDesc: '<em>首次入金≥2W港币</em>，满30天并交易3次（买卖、打新均算次数），送<em>260港币礼包</em>（100港币现金+10张8港币返佣卡+8张1美金返佣卡）',
          activeDesc: [
            '港股无现金打新，融资打新100，热门股10倍杠杆，利率2-3%。',
            '不支持fps，无银证转账，无暗盘，不可1手融，可市值打新',
            '交易佣金：0.03%（最低3元）+平台费15元/笔',
            '卖出股票资金可实时用于打新'
          ],
          activeArrow: true,
          showActiveDesc: false
        },
        {
          securitiesName: '方德证券',
          smallSecuritiesName: '方德港美股',
          iconSrc: require('../../assets/img/yuenv/fang-de.png'),
          iconDesc: ['入金奖励', '20倍融资', '市值打新'],
          mainDesc: '<em>首次入金≥1W</em>，且交易1次并留存1个月，可享<em>现金打新永久免费</em>。',
          activeDesc: [
            '融资打新120元/笔，10-30倍杠杆，利率5%',
            '支持fps，无银证转账，电子暗盘，可1手融，不可市值打新',
            '交易佣金：0.25%（最低100元），无平台费，暗盘同',
            '卖出股票资金可实时用于打新'
          ],
          activeArrow: true,
          showActiveDesc: false
        },
        {
          securitiesName: ' 玖富证券',
          smallSecuritiesName: '玖富犇犇',
          iconSrc: require('../../assets/img/yuenv/jiu-fu.png'),
          iconDesc: ['入金奖励', '20倍融资', '市值打新'],
          mainDesc: '<em>三大礼包奖励：开户即抽礼包，首次入金≥1.1万港币抽礼包</em>，30天内累计交易金额满2万再次抽取礼包（开启礼包100%中奖，随机获得2~4件奖品）奖品包含：<em>京东E卡 价值5000元、美团点评1~19股、现将红包2~2020元、港股免佣3~360天</em>',
          activeDesc: [
            '现金打新10，融资打新99，10倍杠杆，利率2.88%',
            '支持fps，支持<em>民生银证转账</em>，辉立暗盘，可取资金超5000可1手融，不可市值打新',
            '交易佣金：0.029%（最低15元），无平台费，暗盘0.05%（最低15元）',
            '卖出股票资金T+2交收后方可用于打新'
          ],
          activeArrow: true,
          showActiveDesc: false
        },
        {
          securitiesName: '友信证券',
          iconSrc: require('../../assets/img/yuenv/you-xin.png'),
          iconDesc: ['入金奖励', '20倍融资', '市值打新'],
          mainDesc: '<em>首次入金≥2W港币</em>，抽奖1次+随机3股股票+90天免佣。',
          activeDesc: [
            '现金打新18，融资打新99，10倍杠杆，利率2-3%',
            '支持fps，无银证转账，辉立暗盘，可1手融，不可市值打新',
            '交易佣金：0.08%（最低8元），无平台费，暗盘0.08%（最低12元）',
            '卖出股票资金可实时用于打新'
          ],
          activeArrow: true,
          showActiveDesc: false
        },
        {
          securitiesName: '佳兆业证券 ',
          iconSrc: require('../../assets/img/yuenv/jia-zhao-ye.png'),
          iconDesc: ['入金奖励', '20倍融资', '市值打新'],
          mainDesc: '<em>首次入金≥1W港币</em>，且入金后30天内交易1次，领取100元红包 。',
          activeDesc: [
            '现金打新50，融资打新80，10倍杠杆，融资利率2-3%',
            '支持fps，支持民生银证转账，电话暗盘，可1手融，不可市值打新',
            '交易佣金：0.05%（最低15元），无平台费，暗盘120元起',
            '卖出股票资金可实时用于打新'
          ],
          activeArrow: true,
          showActiveDesc: false
        },
        {
          securitiesName: '艾德证券 ',
          smallSecuritiesName: '艾德一站通',
          iconSrc: require('../../assets/img/yuenv/ai-de.png'),
          iconDesc: ['入金奖励', '20倍融资', '市值打新'],
          mainDesc: '首次入金≥1W，放满30天并交易1次，<em>送180天免佣</em>（入金次月生效）。',
          activeDesc: [
            '现金打新0，融资打新100，10倍杠杆',
            '支持fps，无银证转账，辉立暗盘，可1手融，不可市值打新',
            '交易佣金：免佣期间不收佣金，仅收12元平台费，暗盘万5，最低30',
            '卖出股票资金可实时用于打新'
          ],
          activeArrow: true,
          showActiveDesc: false
        },
        {
          securitiesName: '广发证券',
          smallSecuritiesName: '易淘金国际版',
          iconSrc: require('../../assets/img/yuenv/guang-fa.png'),
          iconDesc: ['入金奖励', '20倍融资', '市值打新'],
          mainDesc: '<em>现金打新0</em>，融资打新100，10倍杠杆，利率2-4%',
          activeDesc: [
            '无fps，<em>支持民生、招行、永隆银证转账</em>，电话暗盘，不可1手融，不可市值打新',
            '交易佣金：0.1%（最低100元），无平台费，暗盘150元起',
            '卖出股票资金可实时用于打新'
          ],
          activeArrow: true,
          showActiveDesc: false
        },
        {
          securitiesName: '尊嘉金融',
          iconSrc: require('../../assets/img/yuenv/zun-jia.png'),
          iconDesc: ['入金奖励', '20倍融资', '市值打新'],
          mainDesc: '<em>首次入金≥1W港币</em>，30天内交易一次，享受0佣金+平台费1元/笔，暗盘0.05%（最低11.9元）',
          activeDesc: [
            '现金打新5，融资打新36.9（热门100），10倍杠杆，利率2-3%',
            '支持fps，无银证转账，辉立暗盘，可1手融，不可市值打新',
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
