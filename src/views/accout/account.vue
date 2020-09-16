<template>
  <div class="account-wrap">
    <div class="head-wrap">
      <div class="head-box">
        <img src="../../assets/img/yuenv/account/head.png" >
      </div>
      <img class="name" src="../../assets/img/yuenv/account/text.png" >
    </div>

    <div class="from">
      <img class="phone-icon" src="../../assets/img/yuenv/account/phone.png" >
      <input class="phone-input" v-model="phone" type="text" placeholder="请输入手机号码">
    </div>

    <div class="phone-desc">
      <p>请输入正确手机号</p>
      <p>仅作<span>后期奖励发放和专属服务凭证</span></p>
    </div>

    <button class="account-button" @click="handlerOpenAccount">我要开户</button>

  </div>
</template>

<script>
import { config } from '../index/config.js'

export default {
  data() {
    return {
      securitiesName: this.$route.query.name || '',
      phone: ''
    }
  },
  beforeRouteLeave(to, from, next) { // 离开时
    next()
  },
  beforeRouteEnter(to, from, next) {
    next()
  },
  mounted() {
  },
  watch: {
    $route(to, from) {
      this.securitiesName = to.query.name
    },
    phone(inputValue) {
      let num = inputValue
      if (num.length > 11) {
        num = num.slice(0, 10)
      }
      this.phone = num
    }
  },
  methods: {
    isMobile(str) {
      return /^1[1-9][0-9]{9}$/.test(str)
    },
    handlerOpenAccount() {
      if (!this.isMobile(this.phone)) {
        alert('请输入正确的手机号码')
        return false
      }

      if (!this.securitiesName) {
        return false
      }

      let goUrl = this.getsecuritiesUrl()

      window.location.href = goUrl
    },
    getsecuritiesUrl() {
      let arr = config.dataList

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].securitiesName === this.securitiesName) {
          return arr[i].url
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
    @import './account.less';
</style>
