import Vue from 'vue'
import App from './App'

import uView from '@/uni_modules/uview-ui'
import store from '@/store/index.js'
import md5Libs from './common/md5'
import VueI18n from 'vue-i18n'// v8.x
import app_config from './common/config'
import app_util from './common/util.js'
import install from './common/install.js'
import req_handler from './common/request.js'
import messages from './locale/index'

import VueCountryIntl from 'vue-country-intl';
// 引入css
import 'vue-country-intl/lib/vue-country-intl.css'
// 全局注册组件
Vue.component(VueCountryIntl.name, VueCountryIntl);

// window["console"]["log"] = function () {};

let i18nConfig = {
  locale: uni.getLocale(),// 获取已设置的语言
  messages
}

App.mpType = 'app'
Vue.config.productionTip = false
Vue.use(uView)
Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)
Vue.use(install)
Vue.prototype.$store = store; //挂载在 Vue 实例上
Vue.prototype._loading = store.getters.loading

uni.addInterceptor('request', req_handler)

const sysInfo = () => {
	const sys = uni.getSystemInfoSync()
	const data = {
		top: sys.statusBarHeight,
		height: sys.statusBarHeight + uni.upx2px(90),
		screenHeight: sys.screenHeight,
		platform: sys.platform,
		model: sys.model,
		windowHeight: sys.windowHeight,
		windowBottom: sys.windowBottom,
		deviceId: sys.deviceId
	}
	return data;
}

const remoteSource = (url) => {
	// 可能会动态修改url
	return app_config.sourceUrl + '/assets/img' + url;
}

Vue.prototype._tyy = {
 	sysInfo,
 	remoteSource,
	wsURL: app_config.socketUrl
 }

const app = new Vue({
	i18n,
	store,
    ...App
})
app.$mount()
