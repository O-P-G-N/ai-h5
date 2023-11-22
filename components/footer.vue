<template>
	<view class="footerMain">
		<view class="footerContent">
			<view class="footer_every" @click="toPath('index')" :class="{'active':pageName=='index'}">
				<image v-if="pageName=='index'" class="icon" src="~@/static/tabbar/one_a.png"></image>
				<image v-else class="icon" src="~@/static/tabbar/one.png"></image>
			</view>
			<view class="footer_every" @click="toPath('market')" :class="{'active':pageName=='market'}">
				<image v-if="pageName=='market'" class="icon" src="~@/static/tabbar/two_a.png"></image>
				<image v-else class="icon" src="~@/static/tabbar/two.png"></image>
			</view>
			<view style="width: 28%;">
				<view class="footer_every" @click="toPath('partner')"
					style="position: absolute; bottom: 32rpx; width: 28%;left: 50%;margin-left: -14%;">
					<view class="tx_main">
						<image class="tx_png" src="~@/static/tabbar/tx.png"></image>
					</view>
					<view class="dialogue_box" v-if="$store.getters.pageShow">
						<acousticWave></acousticWave>
						<view class="dialogue_box_text" v-if="pageName=='market'">{{$t("user.con_detail.i48")}}</view>
						<view class="dialogue_box_text" v-if="pageName=='index'">{{$t("user.con_detail.i66")}}</view>
						<view class="dialogue_box_text" v-if="pageName=='community'">{{$t("user.con_detail.i67")}}</view>
						<view class="dialogue_box_text" v-if="pageName=='user'">{{$t("user.con_detail.i68")}}</view>
						<acousticWave></acousticWave>
						<image @click.stop="clear" class="dialogue_box_img" src="@/static/tabbar/clear.png" mode=""></image>
						<view class="triangle"></view>
					</view>
				<image class="robot_btn" v-if="!$store.getters.pageShow&&$store.getters.languageType==0" src="../static/tabbar/robot_btn_1.png" mode=""></image>
				<image class="robot_btn" v-if="!$store.getters.pageShow&&$store.getters.languageType==1" src="../static/tabbar/robot_btn.png" mode=""></image>
				</view>
			</view>
			<view class="footer_every" @click="toPath('community')" :class="{'active':pageName=='community'}">
				<image v-if="pageName=='community'" class="icon" src="~@/static/tabbar/four_a.png"></image>
				<image v-else class="icon" src="~@/static/tabbar/four.png"></image>
			</view>
			<view class="footer_every" @click="toPath('user')" :class="{'active':pageName=='user'}">
				<image v-if="pageName=='user'" class="icon" src="~@/static/tabbar/five_a.png"></image>
				<image v-else class="icon" src="~@/static/tabbar/five.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			pageName: {
				type: String,
				default: ''
			}
			
		},
		components: {
			acousticWave: () => import('@/components/acousticwave.vue'),

		},
		data() {
			return {
			}
		},
		methods: {
			toPath(name) {
				if (name) {
					if (name != "partner") {
						uni.switchTab({
							url: `/pages/${name}/index`
						})
					} else {
						uni.navigateTo({
							url: `/pages/${name}/index`
						});
					}

				}
			},
			clear(){
				this.$store.commit('app/clear',false)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.footerMain {
		position: fixed;
		z-index: 99;
		bottom: 42rpx;
		left: 0;
		right: 0;
		width: 100vw;

		.footerContent {
			width: calc(100vw - 76rpx);
			margin-left: 38rpx;
			padding: 20rpx 0;
			border-radius: 64px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: #ededed;

			.footer_every {
				width: 18%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				position: relative;

				&.active {
					animation-name: clickAnimation;
					animation-duration: .5s;
					animation-timing-function: ease-in-out;
				}

				.icon {
					width: 80rpx;
					height: 80rpx;
				}

				.tx_main {
					width: 122rpx;
					height: 122rpx;
					padding: 2rpx;
					border-radius: 50%;
					border: 1rpx solid #7AFAD8;

					.tx_png {
						width: 122rpx;
						height: 122rpx;
						border-radius: 50%;

					}
				}

				.dialogue_box {
					position: absolute;
					min-width: 226px;
					height: 52px;
					background: linear-gradient(118deg, #2E334F 0%, #090A10 100%);
					border-radius: 10px;
					top: -56px;
					display: flex;
					justify-content: center;
					align-items: center;
					z-index: 9999999999999;
					padding: 0 10rpx;
					.dialogue_box_text{
						margin: 0 10rpx;
						font-size: 14px;
						font-family: PingFang SC, PingFang SC;
						white-space: nowrap;
						font-weight: 400;
						color: #7AFAD8;
						
					}
					.dialogue_box_img{
						position: absolute;
						right: 2px;
						top: -2px;
						width: 24px;
						height: 52px;
					}
					.triangle{
						position: absolute;
						bottom: -12px;
						left: 48%;
						border: 6px solid transparent;
						  border-top-color: #2E334F;
					}
				}
				.robot_btn{
					position: absolute;
					bottom: 0;
					width: 66px;
					height: 25px;
				}
			}

		}
	}

	@keyframes clickAnimation {
		0% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}

		50% {
			-webkit-transform: scale(.8);
			transform: scale(.8);
		}

		100% {
			-webkit-transform: scale(1.2);
			transform: scale(1.2);
		}
	}
</style>