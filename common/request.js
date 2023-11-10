// 接口
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: http + options.url, //接口地址：前缀+方法中传入的地址
			method: options.method || 'GET', //请求方法：传入的方法或者默认是“GET”
			data: options.data || {}, //传递参数：传入的参数或者默认传递空集合
			timeout: 600000,
			header: {
				'token': uni.getStorageSync('user') //自定义请求头信息
			},
			success: (res) => {
				// console.log(res.data);
				
				resolve(res)
			},
			// 这里的接口请求，如果出现问题就输出接口请求失败
			fail: (err) => {
				reject(err)
			}
		})
	})
}

export default {
		req_handler: function(){
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
}