export default {
    install(Vue, options) {
        Vue.prototype.util = {
            // url序列参数转化为对象
            queryParse(url) {
                if (url.indexOf('?') === -1) {
                    return null
                }
                var str = url.split('?')[1].split('#')[0]
                var items = str.split('&')
                var result = {}
                var arr = []
                for (var i = 0; i < items.length; i++) {
                    arr = items[i].split('=')
                    result[arr[0]] = arr[1]
                }
                return result
            },
            // 判断设备处于PC还是移动端
            mobileTest() {
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            },
            // 判断安卓或者ios终端
            ckos() {
                let u = navigator.userAgent
                let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
                let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
                if (isAndroid) {
                    return 'android'
                } else if (isiOS) {
                    return 'ios'
                } else {
                    return 'pc'
                }
            }
        }
    }
}