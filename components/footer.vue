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
				<view class="footer_every" @click="toPath(null)"
					style="position: absolute; bottom: 32rpx; width: 28%;left: 50%;margin-left: -14%;">
					<view class="tx_main">
						<image class="tx_png" src="~@/static/tabbar/tx.webp"></image>
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
		data() {
			return {

			}
		},
		created() {},
		methods: {
			toPath(name) {
				if (name) {
					uni.switchTab({
						url: `/pages/${name}/index`
					})
				}
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
					border: 1rpx solid #c8c8c8;

					.tx_png {
						width: 122rpx;
						height: 122rpx;
						border-radius: 50%;

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