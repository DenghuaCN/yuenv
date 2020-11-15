<template>
  <div class="account-wrap">
    <div class="head-wrap">
      <div class="head-box">
        <img src="../../assets/img/yuenv/account/head2.png" >
      </div>
      <!-- <img class="name" src="../../assets/img/yuenv/account/text.png" > -->
      <p class="head-text">港哥事务所</p>
    </div>

    <div class="from">
      <img class="phone-icon" src="../../assets/img/yuenv/account/phone.png" >
      <input class="phone-input" v-model="phone" type="text" placeholder="请输入手机号码">
    </div>

    <button class="account-button" @click="handlerOpenAccount">我要开户</button>

    <div class="phone-desc">
      <p>请输入正确手机号</p>
      <p>仅作<span>后期奖励发放和专属服务凭证</span></p>
    </div>
  </div>
</template>

<script>
import { config } from '../index/config.js'

export default {
  data() {
    return {
      securitiesName: this.$route.query.name || '',
      from: this.$route.query.from || '',
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

      if (this.securitiesName === '') {
        this.$Toast({
          msg: '请选择券商',
          type: 'warning'
        })
        setTimeout(() => {
          this.$router.push({
            path: '/',
            query: {
              from: this.from
            }
          })
        }, 1500)
        return
      }

      this.commitAndGo()
    },
    getsecuritiesUrl() {
      let arr = config.dataList

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].securitiesName === this.securitiesName) {
          return arr[i].url
        }
      }
    },
    goToUrl() {
      let url = this.getsecuritiesUrl()

      window.location.href = url
    },
    commitAndGo() {
      if (this.isLoading) {
        return
      }

      this.isLoading = true

      let url = 'http://xgswscn.cn:80/infos.htm' // 测试环境url
      let body = {
        'data': [
          {
            'from': this.from,
            'type': '点击开户',
            'key': this.phone,
            'value': this.securitiesName
          }
        ]
      }

      // console.log(body) // print提交内容

      let timeoutId = setTimeout(() => {
        this.isLoading = false
        this.goToUrl()
      }, 5000)

      this.$axios.post(url, body, true)
        .then((res) => {
          console.log(res)
          let resData = res.data

          if (resData.code === 0) {
            clearTimeout(timeoutId)
          }
          this.isLoading = false
          this.goToUrl()
        })
        .catch((err) => {
          clearTimeout(timeoutId)
          console.error(err)
          this.isLoading = false
          this.goToUrl()
        })
    }
  }
}
</script>

<style scoped lang="less">
@import "./account.less";
</style>
