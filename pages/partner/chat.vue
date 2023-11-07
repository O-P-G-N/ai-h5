<template>
	<view>
		<button @click="join" type="primary">连接</button>
		<button @click="exit" type="danger">断开</button>

		<input type="textarea" v-model="message" :rows="9" />
		<button type="info" @click="send">发送消息</button>
		<view v-for="(answer,idx) in text_content" :key="idx">{{answer}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message: "", //输入框
				text_content: [], //收到的消息
				socketOpen: false,
				socketMsgQueue: [],
			}
		},
		// onShow() {
		// 	this.join()
		// },
		// onHide() {
		// 	this.exit()
		// },
		methods: {
			join() {
				uni.connectSocket({
					url: this._tyy.wsURL + '/message',
					complete() {
						console.log('WebSocket连接已打开！');
					}
				})
				uni.onSocketOpen(res => {
					this.socketOpen = true;
					this.socketMsgQueue.forEach(e => this.send(e))
					this.socketMsgQueue = [];
				})
				uni.onSocketError(res => {
					console.log('WebSocket连接打开失败，请检查！');
				});
				uni.onSocketMessage(res => {
					this.text_content.push(res.data)
				});
				uni.onSocketClose(res => {
					console.log('WebSocket 已关闭！');
				});
			},
			exit() {
				uni.closeSocket();
			},
			send() {
				if (this.socketOpen) {
					uni.sendSocketMessage({
						data: this.message
					});
				} else {
					this.socketMsgQueue.push(this.message);
				}
			}
		}
	}
</script>

<style>
</style>