<template>
	  <view>
	    <button @click="join" type="primary">连接</button>
	    <button @click="exit" type="danger">断开</button>
	
	    <input type="textarea" v-model="message" :rows="9" />
	    <button type="info" @click="send">发送消息</button>
	    <input type="textarea" v-model="text_content" :rows="9" /> 返回内容
	  </view>
</template>

<script>
	export default {

		data() {
			return {
				xxxurl: "ws://192.168.31.237:8080/websocket/message",
				message: "",
				text_content: "",
				ws: null,
			}
		},
		methods: {
			join() {
				const wsuri = this.xxxurl;
				console.log(wsuri);
				this.ws = new WebSocket(wsuri);
				const self = this;
				this.ws.onopen = function(event) {
					self.text_content = self.text_content + "已经打开连接!" + "\n";
				};
				this.ws.onmessage = function(event) {
					self.text_content = event.data + "\n";
				};
				this.ws.onclose = function(event) {
					self.text_content = self.text_content + "已经关闭连接!" + "\n";
				};
			},
			exit() {
				if (this.ws) {
					this.ws.close();
					this.ws = null;
				}
			},
			send() {
				if (this.ws) {
					this.ws.send(this.message);
				} else {
					alert("未连接到服务器");
				}
			}
		}
	}
</script>

<style>
</style>