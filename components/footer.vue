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
						<view class="dialogue_box_text">创建合约获取更多收益</view>
						<acousticWave></acousticWave>
						<image @click.stop="clear" class="dialogue_box_img" src="@/static/tabbar/clear.png" mode=""></image>
					</view>
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
					width: 226px;
					height: 52px;
					background: url("@/static/tabbar/dialogue.png") no-repeat;
					background-size: cover;
					top: -50px;
					left: -58px;
					display: flex;
					justify-content: center;
					align-items: center;
					.dialogue_box_text{
						margin: 0 10rpx;
						font-size: 14px;
						font-family: PingFang SC, PingFang SC;
						font-weight: 400;
						color: #7AFAD8;
					}
					.dialogue_box_img{
						position: absolute;
						right: 10px;
						top: 6px;
						width: 7px;
						height: 7px;
					}
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