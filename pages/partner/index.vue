<template>
	<view class="partner">
		<u-navbar @leftClick="goBackUser" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
				<image class="t_bor_r_img" src="@/static/tabbar/tx.png" mode=""></image>
				<view class="">
					<text class="right_avatar_top">Alita</text>
					<view class="right_avatar_text">{{$t("pa.prc11")}}</view>
				</view>
			</view>
			<ai-button slot="right" @click="upTrain" :btnHeight="'26px'" :fontSize="'12px'" :bg="'#333'"
				class="next-btn btn-view">{{$t("pa.prc1")}}</ai-button>
		</u-navbar>
		<view class="chat-view">
			<scroll-view class="chat_show" :scroll-y="true" :scroll-top="scrollTop">
				<view :class="!v.who ?'chat_show_box':'chat_show_box_one'" v-for="(v,i) in chatList" :key="i">
					<image class="chat_show_box_left" v-if="!v.who " src="@/static/tabbar/tx.png" mode="">
					</image>
					<view class="chat_show_box_center_one" v-if="!v.who ">
						<text style="margin-right: 2px;">{{v.reply}}</text>
						<!-- <acousticWave v-if="chatList.length>3&&i==chatList.length-3"></acousticWave> -->
						<omit v-if="chatList[chatList.length-1].reply==''&&i==chatList.length-1"></omit>
					</view>
					<view class="chat_show_box_center_two" v-else>{{v.reply}}</view>
					<image class="chat_show_box_right" v-if="v.who " src="@/static/market/human.png" mode=""></image>
				</view>
			</scroll-view>
			<view class="chat_text">
				<textarea class="chat_text_trea" v-model="question" placeholder-style="color:#24282C"
					placeholder="Enter..." />
				<image @click="getChat" class="chat_text_btn" src="@/static/market/PaperAirplane.png" mode="">
				</image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
			acousticWave: () => import('@/components/acousticwave.vue'),
			omit: () => import('@/components/omit.vue'),

		},
		data() {
			return {
				chatList: [{
					reply: this.$t("pa.prc2")
				}],
				question: "", //提问
				scrollTop: 5000,

			};
		},
		onShow() {
			this.getList()
		},
		methods: {
			// 获取连天记录
			getList(){
				uni.request({
					url: `/chat/list`,
					method: "GET",
					data:{
						pageNum:10000,
						pageSize:10
					},
					success: (res) => {
						res.data.rows.map((v)=>{
							this.chatList.push({
								reply: v.question,
								who: 1
							})
							this.chatList.push({
								reply: v.answer,
								who: 0
							})
						})
					},
					fail() {
						
					}
				});
			},
			// 返回
			goBackUser() {
				uni.switchTab({
					url: `/pages/index/index`
				});
			},
			// 升级训练
			upTrain() {
				let time = setTimeout(() => {
					clearTimeout(time)
					uni.navigateTo({
						url: `/pages/partner/upgrade_train`
					});
				}, 500)
			},
			// 获取聊天
			getChat() {
				if (this.question == "") {
					uni.$u.toast(this.$t("pa.prc3"))
					return
				} else {
					// try {

					// } catch {

					// }
					if(this.chatList[this.chatList.length - 1].reply==""&&this.chatList.length>2&&this.chatList[this.chatList.length - 1].who==0){
						this.chatList.pop() 
					}
					this.chatList.push({
						reply: this.question,
						who: 1
					})
					this.chatList.push({
						reply: "",
						who: 0
					})
					uni.request({
						url: `/chat/quiz`,
						method: "GET",
						data: {
							question: this.question
						},
						success: (res) => {
							if (res.data.reply != undefined) {
								this.chatList[this.chatList.length - 1].reply = res.data.reply
							} else {
								this.chatList.pop()
							}
							// res.data.reply = "nihaoya "
							// this.chatList.push(res.data)
							// console.log(this.chatList);
						},
						fail() {
							
						}
					});
					this.question = ""
				}

			}
		},
		watch: {
			chatList: {
				deep: true,
				handler() {
					this.$nextTick(() =>
						this.scrollTop = this.scrollTop + 100
					)
				}
			}
		}

	}
</script>

<style lang="scss" scoped>
	::v-deep.partner {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		background-color: #fff;

		.u-navbar {
			height: 60px;

			.u-navbar__content {
				height: 60px !important;

				.u-navbar__content__left {
					padding-left: 18px;

					.u-nav-slot {
						display: flex;
						align-items: center;
					}

					.head_back_img {
						margin-right: 17px;
						width: 17px;
						height: 15px;
					}

					.t_bor_r_img {
						margin-right: 14px;
						width: 66rpx;
						height: 66rpx;
					}

					.right_avatar_top {
						font-size: 15px;
						font-family: PingFang SC, PingFang SC;
						font-weight: bold;
						color: #000000;
					}

					.right_avatar_text {
						font-size: 12px;
						font-family: PingFang SC, PingFang SC;
						font-weight: 400;
						color: #B9B9B9;
					}
				}

				.btn-view {
					width: 100%;
					margin-right: 20px;
					text-align: center;
					line-height: 26px;
					font-size: 12px;
					color: #fff;
					border-radius: 32px;
				}

			}
		}

		.chat-view {
			// flex: 1;
			height: calc(100% - 60px);
			width: 100%;
			background: #F5F6FA;
			overflow-y: auto;



			.chat_show {
				height: 80%;
				padding: 10px;
				box-sizing: border-box;

				.chat_show_box {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					margin-top: 20px;

				}

				.chat_show_box_one {
					display: flex;
					align-items: flex-end;
					margin-top: 20px;
					justify-content: flex-end;

				}

				.chat_show_box_left {
					width: 40px;
					height: 40px;
					margin-right: 10px;
				}

				.chat_show_box_center_one {
					padding: 10px;
					box-sizing: border-box;
					background: linear-gradient(118deg, #2E334F 0%, #090A10 100%);
					background-size: 400% 400%;
					border-radius: 11px 11px 11px 11px;
					min-width: 54px;
					min-height: 48px;
					font-size: 14px;
					max-width: calc(100% - 100px);
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					color: #7AFAD8;
					display: flex;
					align-items: center;
					justify-content: center;
					animation: glowing 5s linear normal;
				}

				@keyframes glowing {
					0% {
						background-position: 400% 0;
					}

					50% {
						background-position: 200% 0;
					}

					100% {
						background-position: 0 0;
					}
				}

				.chat_show_box_center_two {
					background: #5288EC;
					border-radius: 12px 12px 12px 12px;
					padding: 10px;
					box-sizing: border-box;
					color: #fff;
					min-width: 54px;
					min-height: 48px;
					max-width: calc(100% - 100px);
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.chat_show_box_right {
					width: 40px;
					height: 40px;
					margin-left: 10px;
				}
			}

			.chat_text {
				height: 20%;
				box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
				padding: 18px 20px;
				padding-right: 55px;
				box-sizing: border-box;
				position: relative;
				background-color: #fff;

				.chat_text_trea {
					width: 100%;
					height: 100%;
				}

				.chat_text_btn {
					width: 25px;
					height: 25px;
					position: absolute;
					right: 20px;
					top: 20px;
				}
			}

		}
	}
</style>