// 记录一些系统设置
export default {
	namespaced: true,
	state: {
		init: false,
		user: null,
		token: null,
		loading: [],
		version: '',
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
		}
	},

	actions: {}
}