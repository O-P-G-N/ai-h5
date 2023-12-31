// 记录一些系统设置
export default {
	namespaced: true,
	state: {
		init: false,
		user: null,
		token: null,
		loading: [],
		version: '',
		unread_msg_amount: 0,
		pageShow:true,
		languageType:0,//0为英文，1为繁体中文
	},

	mutations: {
		// 接口状态，，等待还是返回
		SET_LOADING: (state, {
			effect,
			on
		}) => {
			// state.loading = Vue.observable(state.loading)
			if (on && state.loading.indexOf(effect) < 0) {
				state.loading.push(effect)
			} else {
				state.loading.splice(state.loading.indexOf(effect), 1)
			}
		},
		// 清除弹窗
		clear(state, val){
			state.pageShow=val;
		},
		// 判断语言
		judgLanguage(state, val){
			state.languageType=val;
		}
	},

	actions: {
		getUnread({state, dispatch, rootState}){
			setTimeout(()=> {
				uni.request({
					url: '/member/message/unread',
					method: 'GET',
					success: res => {
						state.unread_msg_amount = res.data;
					}
				});
			}, 1000);
		},
		
	}
}