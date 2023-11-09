import Vue from 'vue'
import App from './App'

import uView from '@/uni_modules/uview-ui'
import store from '@/store/index.js'
import md5Libs from './common/md5'
import VueI18n from 'vue-i18n'// v8.x
import en from './i18n/en.json'
import zhHans from './i18n/zh-Hans.json'
import zhHant from './i18n/zh-Hant.json'
import app_config from './common/config';
import app_util from './common/util.js';
import install from './common/install.js'


import VueCountryIntl from 'vue-country-intl';
// 引入css
import 'vue-country-intl/lib/vue-country-intl.css'
// 全局注册组件
Vue.component(VueCountryIntl.name, VueCountryIntl);

// window["console"]["log"] = function () {};
const messages = {
	en,
	'zh-Hans': zhHans,
	'zh-Hant': zhHant
}
let i18nConfig = {
  locale: uni.getLocale(),// 获取已设置的语言
  messages
}

App.mpType = 'app'
Vue.config.productionTip = false
Vue.use(uView)
Vue.use(VueI18n)
Vue.use(install)
Vue.prototype.$store = store; //挂载在 Vue 实例上
Vue.prototype._loading = store.getters.loading


let req_handler = function(){
	let this_url = ''
	return {
		invoke(config) {
			console.log(config);
			// 关闭证书验证
			config.sslVerify = false;
			// request 触发前拼接 url
			if(app_util.checkURL(config.url)){
				config.url = config.url;
			}else{
				config.header = (typeof config.header == 'object' ? config.header : {});
				// URL拼接
				config.url = app_config.apiUrl.replace(/([\w\W]+)\/$/,"$1") + config.url;
				// 获取缓存Token
				if (uni.getStorageSync("user")) {
					config.header.Authorization = uni.getStorageSync("user").token;
				}
				// #设置其他的请求头
				// 带语言
				if (uni.getStorageSync("lang")) {
					config.header.lang = uni.getStorageSync("lang");
				}
			}
			
			this_url = config.url
			if(store.state.app.loading.indexOf(this_url) >= 0){
				console.error('intercepted duplicate request', this_url)
				throw 'IGNORE_ERROR'
			} else{
				store.commit('app/SET_LOADING',{
					effect: this_url,
					on: true
				})
			}
			
			if(app_config.debug > 2){
				console.log('invoke-success', config);
			}
		},
		complete(res) {
			
		},
		success(res) {
			store.commit('app/SET_LOADING',{
				effect: this_url,
				on: false
			})
			console.log('test',res);
			if(res.statusCode == 200 && res.errMsg == 'request:ok'){
				res.res = res.data;
				if (res.data.code == 200) {
					res.data = res.res.data;
					res.msg = res.res.msg;
					return true;
				}else if(res.data.code == 4){
					return false;
				} else if(res.data.status == 0 || res.data.status == 1){
					// 屏蔽其他第三方报错
				}else if(res.data.code == 401){
					uni.showToast({title: "登录过期失效",icon: 'error',position: true,});
					uni.redirectTo({
						url: '/pages/loginReg/login'
					})
					return false;
				}else { 
					uni.showToast({title: res.data.msg,icon: 'error',position: true});
					return false;
				}
				if(app_config.debug){
					console.log('request-success', res);
				}
			}else{
				if(res.statusCode == 401){
					uni.showToast({title: res.data.msg,icon: 'error',position: true});
					// 约定401未登录请求
					
					
				}else if(res.statusCode == 404){
					uni.showToast({title: 'API 接口不存在',icon: 'error',position: true});
				}else if(res.statusCode == 500){
					uni.showToast({title: 'API  服务器繁忙',icon: 'error',position: true});
				}else{
					uni.showToast({title: res.data.msg,icon: 'error',position: true});
				}
				if(app_config.debug > 2){
					console.log('request-fail', res);
				}
				return false;
			}
		},
		fail(err) {  
			if(app_config.debug){
				console.log('http-fail', err)
			}
		}
	}
}

uni.addInterceptor('request', req_handler())

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
	i18nConfig,
	store,
    ...App
})
app.$mount()
