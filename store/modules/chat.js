 import Vue from 'vue';
 import util from '../../common/util.js'; 
 import config from '../../common/config.js';
 export default {
 	namespaced: true,
 	state: {
		isOnline: false,
		socket: null,
		reconnectTime: 0,
		isOpenReconnect: true,
		ischat: {
			notice: true,
			number: 0
		},
		close: false,
		list: [],
 	},
 	mutations: {
		setIschat(state, payload) {
			for (let i in payload) {
				for (let j in state.ischat) {
					if (i === j) {
						state.ischat[j] = payload[i];
					}
				}
			}
		}
 	},
 	actions: {
		// 连接socket
		connectSocket({ state, rootState, dispatch }) {
			config.debug ? console.log("连接 GatewayWorker"):'';
			state.socket = uni.connectSocket({
				url: config.socketurl,
				complete: () => {}
			});
			// 监听连接成功
			state.socket.onOpen(() => dispatch('onOpen'));
			// 监听接收信息
			state.socket.onMessage((res) => dispatch('onMessage', res));
			// 监听断开
			state.socket.onClose((e) => dispatch('onClose', e));
			// 监听错误
			state.socket.onError(() => dispatch('onError'));
			
			// 获取一次聊天列表
			setTimeout(()=> {
				if (rootState.user.isLogin) {
					dispatch('get');
				}
			},300);
		},
		onOpen({ state, dispatch }) {
			// 用户上线
			state.isOnline = true;
			config.debug ? console.log('GatewayWorker连接成功'):'';
			state.isOpenReconnect = true;
		},
		
		// 监听关闭
		onClose({ state, dispatch }, e) {
			// 用户下线
			state.isOnline = false;
			state.socket = null;
			config.debug ? console.log('GatewayWorker连接已关闭'):'';
			if (state.isOpenReconnect) {
				config.debug ? console.log("3秒后重新链接"):'';
				setTimeout(()=> {
					dispatch('reconnect');
				}, 3000);
			}
		},
		// 监听连接错误
		onError({ state, dispatch }) {
			// 用户下线
			state.isOnline = false;
			state.socket = null;
			config.debug ? console.log('socket连接错误'):'';
			if (!state.socket) {
				setTimeout(()=> {
					dispatch('reconnect');
				}, 3000);
			}
		},
		// 监听接收消息
		onMessage({ state, dispatch, rootDispatch }, data) {
			let message = JSON.parse(data.data)
			switch (message['type']) {
				case 'ping':
					state.socket.send({
						data: '{"type":"pong"}',
						async success() {
							config.debug ? console.log("GatewayWorker心跳：" + new Date()):'';
						}
					})
					break;
				case 'init':
					uni.request({
						url: '/app/chat/shake',
						method: 'POST',
						data: {'client_id': message.client_id},
						success: res => {
							uni.setStorageSync("app:chat_client_id", res.data);
						}
					});
					break;
				case 'service':
					// 全局通知
					uni.$emit('onService', message);
					// 消息提示
					dispatch('notice', {type: message.type, data: null});
					break;
				case 'chat':
					// 全局通知
					uni.$emit('onMessage', util.setChat(message));
					// 更新数量
					dispatch('update', {type: message.type, data:message, shop: {id: message.form.shop_id, user_id: message.form.id, name: message.form.name,avatar: message.form.avatar,}});
					let tipsContent = '';
					if (message.message.type == 'text') {
						tipsContent = message.message.content.text
					}else if(message.message.type == 'img') {
						tipsContent = '[图片消息]';
					}else if(message.message.type == 'voice') {
						tipsContent = '[语音消息]';
					}
					if (state.ischat.notice) {
						dispatch('notice', {
							type: message.type, 
							data: {
								title: message.form.name,
								subtitle: '发来一条消息',
								content: tipsContent,
								jsondata: JSON.stringify({
									id: 0
								})
							}
						});
					}else{
						state.ischat.number++;
					}
					break;
				case 'order':
					// 全局更新,分析订单类型: 待收货（已发货）交易物流+1
					// 接受其他 签收，退款申请同意，拒绝
					dispatch('storage', {type: message.type});
					// 消息提示
					dispatch('notice', {
						type: 'order',
						data: {
							title: message.title,
							subtitle: '',
							content: message.content,
							jsondata: JSON.stringify({
								modules: message.modules,
								modules_id: message.modules_id
							})
						}
					});
					break;
				case 'notice':
					dispatch('storage', {type: message.type});
					// 消息提示
					dispatch('notice', {
						type: message.type,
						data: {
							title: '标题',
							subtitle: '副标题',
							content: '内容',
							jsondata: JSON.stringify({
								id: 0
							})
						}
					});
					break;	
				case 'live':
					// 全局通知
					uni.$emit('onLiveMessage', message);
					break;	
			}
		},
		// onMessage({ state, dispatch, rootDispatch }, data) {
		// 	let message = JSON.parse(data.data)
		// 	switch (message['type']) {
		// 		case 'ping':
		// 			state.socket.send({
		// 				data: '{"type":"pong"}',
		// 				async success() {
		// 					config.debug ? console.log("GatewayWorker心跳：" + new Date()):'';
		// 				}
		// 			})
		// 			break;
		// 		case 'init':
		// 			 uni.request({
		// 				url: '/app/chat/shake',
		// 				data: {'client_id': message.client_id},
		// 				method: 'POST',
		// 				success: res => {
		// 					uni.setStorageSync("app:chat_client_id", res.data);
		// 				}
		// 			});
		// 			break;
		// 		case 'say':
		// 			dispatch('handleOnMessage', res);
		// 			break;
		// 		case 'kickout':
		// 			dispatch('kickout','你被踢下线了');
		// 			break;
		// 		case 'logout':
		// 			dispatch('logout');
		// 			break;
		// 	}
		// },
		// 处理消息
		async handleOnMessage({ state, dispatch }, message) {
			if (message.type == "say") {
				uni.$emit('onMessage', message)
			} else if (message.type == "getLivingPool") {
				uni.$emit('onLibingPool', message)
			} else if (message.type == "SocketLivingInfo") {
				uni.$emit('SocketLivingInfo', message)
			}
		},
		// 断线重连
		reconnect({ state, dispatch }) {
			config.debug ? console.log("GatewayWorker准备重新连接"):'';
			if (state.isOnline) {
				return;
			}
			if (state.reconnectTime >= 3) {
				return dispatch('reconnectConfirm');
			}
			state.reconnectTime += 1
			console.log(`GatewayWorker正在${state.reconnectTime}次重新连接`);
			return dispatch('connectSocket');
		
		},
		// 断线重连提示
		reconnectConfirm({ state, dispatch }) {
			dispatch('connectSocket');
			state.reconnectTime = 0
		},
		// 验证是否上线
		checkOnline({ state, dispatch }) {
			if (!state.isOnline) {
				// 断线重连提示
				dispatch('reconnectConfirm');
				return false
			}
			return true
		},
		//踢下线
		kickout({ state, rootState }, msg) {
			uni.showModal({
				title: '提示',
				content: msg,
				success: (res) => {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
					// #ifdef APP
					if (uni.getSystemInfoSync().platform == 'ios'){
					    plus.ios.import("UIApplication").sharedApplication().performSelector("exit")
					} else if (uni.getSystemInfoSync().platform == 'android'){
					    plus.runtime.quit();
					}
					// #endif
					// #ifdef MP-WEIXIN
					wx.exitMiniProgram({
						success: (res) => {}
					})
					// #endif
					dispatch('logout');
				}
			});
		},
		// 退出登录
		async logout({state, rootState}) {
			await uni.request({
				url: '/app/user/logout',
				success: res => {
					for (let j in rootState.user) {
						rootState.user[j] = ''
					}
					rootState.user.isLogin = false;
					let statistics = rootState.statistics;
					for (let j in statistics) {
						for (let i in statistics[j]) {
							statistics[j][i] = 0
						}
					}
					// 从本地缓存中异步移除指定key
					uni.removeStorageSync('app:user');
					uni.removeStorageSync('app:statis');
					// 关闭即时通讯
					dispatch('close');
				}
			});
		},
		// 关闭连接
		close({ state, dispatch }) {
			if (state.socket) {
				state.socket.close()
			}
			dispatch('destoryChatObject');
			state.isOpenReconnect = false
		},
		// 创建聊天对象
		createChatObject({ state, dispatch }, detail) {
			state.TO = detail
		},
		// 销毁聊天对象
		destoryChatObject({ state, dispatch }) {
			state.TO = false
		},
		// 全局消息提示
		async notice({state, dispatch, rootState}, {type, data}){
			// 声音提示
			if (rootState.user.voice) {
				let audio = uni.createInnerAudioContext();
				let cdn = rootState.common.appUrl.oss;
				let src = {
					service: cdn + '/assets/addons/app/voice/service.mp3',
					order: cdn + '/assets/addons/app/voice/order.mp3',
					notice: cdn + '/assets/addons/app/voice/notice.mp3',
					chat: cdn + '/assets/addons/app/voice/chat.mp3'
				};
				audio.autoplay = true;
				audio.src = src[type];
				audio.onPlay(() => {
					config.debug ? console.log('开始播放') : '';
				});
				audio.onError((res) => {
					config.debug ? console.log(res) : '';
				});
			}
			// 震动
			// #ifndef H5
				if (rootState.user.shock) {
					uni.vibrateShort();
				}
			// #endif
			//推送
			// #ifdef APP-PLUS
				// if (rootState.user.pushs) {
				// 	if (data) {
				// 		plus.push.createMessage(data.content, data.jsondata, {
				// 			cover: false,
				// 			title: data.title,
				// 			subtitle: data.subtitle
				// 		});
				// 	}else{
				// 		config.debug ? console.log('推送数据不存在无法推送') : '';
				// 	}
				// }
			// #endif
		},
		// 读取消息列表
		async get({state, dispatch, rootState}) {
			await uni.request({
				url: '/app/chat/lists',
				success: res => {
					state.list = res.data;
					let count = 0;
					res.data.forEach(item => {count += item.count;});
					dispatch('storage', {type: 'statis', number: count});
				}
			});
		},
		// 删除指定消息
		async del({state, dispatch, rootState}, index){
			let list = state.list;
			// 修改消息总数量
			dispatch('storage', {type: 'del', number: list[index].count});
			// 清空本地储存
			uni.removeStorage({
			    key: 'wanlchat:message_' + list[index].user_id,
			    success: (res) => {
					config.debug ? console.log('删除消息成功'):'';
			    }
			});
			// 操作云
			await uni.request({url: '/app/chat/del',method: 'POST',data: {id: list[index].user_id}});
			// 删除状态管理器
			Vue.delete(state.list, index);
		},
		// 全部已读
		async empty({state, dispatch, rootState}){
			uni.showModal({
			    content: '是否将全部数据标记已读状态？',
			    success: res=> {
			        if (res.confirm) {
						// 已读状态管理器
			            state.list.forEach(item => {item.count = 0});
						// 全局清零
						dispatch('storage', {type: 'empty'});
			            // 操作云
			            uni.request({
			            	url: '/app/chat/read',
							method: 'POST',
			            	success: res => {
			            		uni.showToast({title: '全部已读',icon: 'none'});
			            	}
			            });
			        } else if (res.cancel) {
						config.debug ? console.log('用户点击取消') : '';
			        }
			    }
			});
		},
		// 通用更新，接受消息更新，发送消息更新，返回清空角标
		async update({state, dispatch}, {type, data, id, shop}){
			if (type == 'del') {
				let counts = 0;
				state.list.some(chat => {if (chat.user_id == id) {
					counts = chat.count;
					chat.count = 0;
					return true
				}});
				// 操作统计
				dispatch('storage', {type: 'del', number: counts});
				// 操作云
				await uni.request({url: '/app/chat/clear',method: 'POST',data: {id: id}});
			}else if(type == 'chat' || type == 'send'){
				let content = '';
				let createtime = data.createtime;
				let chat_id = 0;
				let chat_name = null;
				let chat_avatar = null;
				if (data.message.type == 'text') {
					content = data.message.content.text;
				}else if(data.message.type == 'img') {
					content = '[图片消息]';
				}else if(data.message.type == 'voice') {
					content = '[语音消息]';
				}else if(data.message.type == 'goods') {
					content = '[商品消息]';
				}else{
					content = '[未知类型消息]';
				}
				if(type == 'chat'){
					chat_id = data.form.id;
					dispatch('storage', {type: 'chat'});
				}else if (type == 'send') {
					chat_id = data.to_id;
				}
				let result = state.list.some(chat => {
					if (chat.user_id == chat_id) {
						if(type == 'chat'){
							chat.count += 1;
						}
						chat.createtime = createtime;
						chat.content = content;
						return true
					}
				});
				// 如果没有新增一个，chat 数量初始1
				if (!result) {
					Vue.set(state.list, 0, {
						id: shop.id,
						user_id: shop.user_id,
						name: shop.name,
						avatar: shop.avatar,
						content: content,
						count: 1,
						createtime: createtime,
					});
				}
			}
		},
		// 操作储存
		async storage({state, rootState}, {type, number}) {
			if(type == 'statis'){
				rootState.statistics.notice.chat = number; 
			}else if(type == 'order'){
				rootState.statistics.notice.order += 1;
			}else if(type == 'notice'){
				rootState.statistics.notice.notice += 1;
			}else if(type == 'chat'){
				rootState.statistics.notice.chat += 1;
			}else if(type == 'del'){
				rootState.statistics.notice.chat -= number;
			}else if(type == 'empty'){
				rootState.statistics.notice.chat = 0; 
				rootState.statistics.notice.order = 0; 
				rootState.statistics.notice.notice = 0; 
			}
			uni.setStorageSync("app:statis", rootState.statistics);
		}
 	}
 };

