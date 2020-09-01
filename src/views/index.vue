<template>
  <div class="wrap">
    <div class="title">title</div>
    <div class="bg-box">
      <div class="header">
        <div class="header-box">
          <p class="header-title">港商办理指引</p>
          <p class="header-desc">港卡在手 打新无忧</p>
        </div>
        <div class="header-box">
          <p class="header-title">港商办理指引</p>
          <p class="header-desc">港卡在手 打新无忧</p>
        </div>
      </div>
    </div>
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
import footerBar from '../components/footerBar'
export default {
  components: { Swiper, footerBar },
  data() {
    return {
      activeIndex: 0,
      showDots: false,
      imgList: [
        { img: require('../assets/img/banner/banner1.jpg') },
        { img: require('../assets/img/banner/banner2.jpg') }
      ],
      itemList: [
        { name: '列表', url: '/list', icon: require('../assets/img/banner/item1.png') },
        { name: '填写表单', url: '/form', icon: require('../assets/img/banner/item2.png') }
      ]
    }
  },
  methods: {
    toUrl(index) {
      this.$router.push({
        path: this.itemList[index].url
      })
    }
  }
}
</script>

<style scoped lang="less">
  .wrap {
    .title {
      border: solid 1px red;
      display: grid;
      place-content: center;
      margin: 0 auto;
      width: 100%;
      font-size: 28px;
      height: 80px;
    }
    .bg-box {
      background-color: rgb(252,223,190);
      .header {
        // border: 1px dashed green;
        padding: 0 10px;
        .header-box {
          border-bottom: 2px dashed black;
          border-width: 1px;
          height: 100px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          .header-title {
            text-align: center;
            font-size: 28px;
          }
          .header-desc {
            margin-top: 8px;
            text-align: center;
            font-size: 14px;
          }
        }
      }
    }
  }
// .list {
//   margin-top: 10px;
//   background-color: #fff;
//   padding: 15px;
//   .item {
//     width: 25%;
//     text-align: center;
//     margin-bottom: 15px;
//     font-size: 14px;
//     > img {
//       width: 40px;
//       margin-bottom: 6px;
//     }
//   }
// }
</style>
