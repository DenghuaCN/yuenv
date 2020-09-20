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
      phone: '',
      isLoading: false
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
      this.phone = ''
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
      // 检查手机号码格式
      if (!this.isMobile(this.phone)) {
        this.$Toast({
          msg: '请输入正确的电话号码',
          type: 'warning'
        })
        return false
      }

      // if (!this.securitiesName) {
      //   return false
      // }

      // let goUrl = this.getsecuritiesUrl()

      // window.location.href = goUrl
      this.commitPhone()
    },
    getsecuritiesUrl() {
      let arr = config.dataList

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].securitiesName === this.securitiesName) {
          return arr[i].url
        }
      }
    },
    async commitPhone(i) {
      if (this.isCommit) {
        return
      }

      this.isLoading = true

      let url = 'http://xgswscn.cn:80/infos.htm'
      let body = {
        'data': [
          {
            'type': '输入手机号',
            'key': '手机号',
            'value': this.phone
          }
        ]
      }

      this.$axios.post(url, body, true)
        .then((res) => {
          console.log(res)
          let resData = res.data
          if (resData.code === 0) {
            this.$Toast({
              msg: '提交成功！',
              type: 'success'
            })
          }
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
          this.$Toast({
            msg: '提交失败！',
            type: 'fail'
          })
          this.isLoading = false
        })
    }
  }
}
</script>

<style scoped lang="less">
@import "./account.less";
</style>
