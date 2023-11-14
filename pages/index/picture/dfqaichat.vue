<template>
	<view>
		<u-navbar :title="create" :fixed='false' :safeAreaInsetTop="false" :height='50'>
			<view class="u-nav-slot" slot="left">
				<image mode="aspectFit" @click="back" class="back" src="~@/static/index/round-back.png"></image>
			</view>
			<view class="u-nav-slot" slot="right">
				<image mode="aspectFit" @click="toWorks" class="davincupload" src="~@/static/index/davincupload.png">
				</image>
			</view>
		</u-navbar>
		<view class="content-lei">
			<view class="miaoshumain">
				<view class="left">· {{$t('index.screendescription')}}</view>
				<view class="right" @click="exchangePoints">
					<image mode="aspectFit" class="davincupload" src="~@/static/index/jifen.png"></image>
					<view>{{accountBalance}}{{$t('index.integral')}}</view>
				</view>
			</view>
			<view class="textarea">
				<textarea v-model="parameter.prompt" :placeholder="descriptivewords" maxlength="1000"></textarea>
				<view class="textareaLast"><text>{{parameter.prompt.length}}/<text class="num">1000</text></text>
					<view class="click" @click="parameter.prompt=''">{{$t('index.empty')}}</view>
				</view>
			</view>
			<view class="btnMain">
				<view class="btn" :class="{'btn-active':parameter.n==1}" @click="parameter.n=1">{{$t("index.sel1")}}</view>
				<view class="btn" :class="{'btn-active':parameter.n==4}" @click="parameter.n=4">{{$t("index.sel2")}}</view>
			</view>
			<ai-button :btnHeight="'60px'" class="next-btn" @click="nextFn">{{$t('index.nextstep')}}</ai-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				parameter: {
					prompt: "",
					n: 1,
					size: "1024x1024",
				},
				accountBalance: "", //账户余额
				create:this.$t("index.ai.create"),//AI创作国际化
				descriptivewords:this.$t("index.descriptivewords"),//请输入您的描述词国际化
			}
		},
		onShow() {
			this.getAccountBalance()
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			toWorks() {
				uni.navigateTo({
					url: '/pages/index/picture/modelworks'
				})
			},
			// 获取账户余额
			getAccountBalance() {
				uni.request({
					url: `/member/getAccount`,
					method: "GET",
					success: (res) => {
						this.accountBalance = res.data.score;
						console.log(res);
					}
				});
			},
			nextFn() {
				let num = null
				if (this.parameter.n == 1) {
					num = 10
				} else {
					num = 30
				}
				if (this.parameter.prompt == '') {
					uni.showToast({
						title: this.$t("index.tips1"),
						icon: 'none'
					})
					return
				} else if (this.accountBalance < num) {
					uni.showToast({
						title: this.$t("index.tips2"),
						icon: 'none'
					})
					return
				} else {
					uni.navigateTo({
						url: `/pages/index/picture/dfqaichattwo?parameter=${JSON.stringify(this.parameter)}`
					})
				}
			},
			// 积分兑换
			exchangePoints(){
				uni.navigateTo({
					url: `/pages/user/integral_exchange`
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #fff;
	}

	.back {
		width: 54rpx;
		height: 30rpx;
	}

	.davincupload {
		width: 40rpx;
		height: 40rpx;
	}

	::v-deep .u-navbar__content__title {
		font-weight: bold;
		color: #303133;
	}

	.content-lei {
		padding: 0 40rpx;

		.miaoshumain {
			margin-top: 30rpx;
			display: flex;
			justify-content: space-between;

			.left {
				color: #000;
				font-weight: bold;
				font-size: 32rpx;
			}

			.right {
				background: #333;
				display: flex;
				align-items: center;
				padding: 6rpx 16rpx;
				border-radius: 40rpx;
				color: #ffe600;
				font-size: 24rpx;
				display: flex;
				align-items: center;

				image {
					width: 34rpx;
					height: 34rpx;
					margin-right: 10rpx;
				}
			}
		}

		.textarea {
			padding: 30rpx;
			display: flex;
			flex-direction: column;
			height: 352rpx;
			align-items: center;
			justify-content: space-between;
			background: #f5f6fa;
			border-radius: 40rpx;
			margin-top: 30rpx;

			textarea {
				width: 100%;
				height: 280rpx;
			}

			.textareaLast {
				width: 100%;
				display: flex;
				justify-content: flex-end;
				align-items: center;

				text {
					color: #000;

					.num {
						color: #999;
					}
				}

				.click {
					font-size: 24rpx;
					color: #989898;
					padding: 4rpx 20rpx;
					background: #e7e7e7;
					border-radius: 30rpx;
					margin-left: 30rpx;
				}
			}
		}

		.btnMain {
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-top: 40rpx;

			.btn {
				width: 48%;
				padding: 20rpx 0;
				color: #000;
				background: #f5f6fa;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50rpx;

				&.btn-active {
					background: #333;
					color: #ffe600;

					&:before {
						content: ' ';
						width: 30rpx;
						height: 20rpx;
						background-image: url('@/static/index/xuanzhongicon.png');
						background-size: 100% 100%;
						margin-right: 10rpx;
					}
				}
			}
		}

		.next-btn {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 100rpx;
			height: 100rpx;
			color: #fff;
			font-size: 34rpx;
			background: #333;
			border-radius: 106rpx;
			border: unset !important;
		}
	}
</style>