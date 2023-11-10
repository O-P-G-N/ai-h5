<template>
	<view class="integral_exchange">
		<u-navbar @leftClick="goBackUser" @rightClick="viewHistory" leftText="返回" title="积分兑换"
			:safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
			<view class="u-nav-slot" slot="right">
				历史记录
			</view>
		</u-navbar>
		<view class="mains">
			<view class="bili">
				兑换比例：
				<text>1 红包={{exchangeNum}}积分</text>
			</view>
			<view class="activeDemo">
				<view class="content">
					<view class="left">
						<view class="iconImgs">
							<image src="@/static/user/bbji.png" mode=""></image>
						</view>
						<view class="">红包</view>
						<view class="fdTitle">消耗</view>
					</view>
					<view class="right">
						<view class="pfdz"
							style="background-color: rgb(245, 246, 250);color: rgb(127, 127, 127);top: -36px;">
							余额:{{accountBalance?accountBalance:0}}
						</view>
						<view class="intCs">
							<input @input="calculateAmount" class="uni-input" type="number" maxlength="140"
								placeholder="请输入金额" />
						</view>
					</view>
				</view>
				<view class="jiaohuan">
					<image @click="exchange" src="@/static/user/jiaohuan.png" mode=""></image>
				</view>
				<view class="content " style="top: 20px;">
					<view class="left">
						<view class="iconImgs">
							<image src="@/static/user/guanguan.png" mode=""></image>
						</view>
						<view class="">积分</view>
						<view class="fdTitle">获得</view>
					</view>
					<view class="right">
						<view class="pfdz">B+: 赠{{bonusRatio}}%</view>
						<view class="intCs">
							<text class="intCs_text">{{integralAmount}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<ai-button :btnHeight="'50px'" :bg="'#333'" :disabled="forbidden" :loading="loading" class="ljdh" @click="redeemNow">立即兑换</ai-button>
		<!-- <button class="ljdh" @click="redeemNow"></button> -->
		<view class="tuiguang">
			<view>
				<view class="title">推广收益(积分)</view>
				<view class="neirong">您所有推荐的会员使用AI功能</view>
				<view class="neirong">您都将获得一定比例的积分奖励</view>
			</view>
			<view class="right">
				<image src="@/static/user/weiks.png" mode=""></image>
			</view>
			<view class="zwkf">当前暂未开放</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				integralAmount: "0", //转换积分
				exchangeNum: "", //兑换数量
				bonusRatio: "", //加赠比例
				redPacket: "", //消耗的红包数量
				accountBalance: "", //账户余额
				forbidden:false,//是否禁用
				loading:false,//加载状态
			};
		},
		onShow() {
			this.getExchangeInfo()
		},
		methods: {
			// 返回个人中心
			goBackUser() {
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			// 获取兑换信息
			getExchangeInfo() {
				uni.request({
					url: `/aicommon/getDict`,
					method: "GET",
					data: {
						dictType: 'score'
					},
					success: (res) => {
						console.log(res);
						this.exchangeNum = res.data[0].dictValue;
						this.bonusRatio = res.data[1].dictValue;
					}
				});
				uni.request({
					url: `/member/getAccount`,
					method: "GET",
					success: (res) => {
						this.accountBalance = res.data.hongbao;
					}
				});
			},
			// 查看历史记录
			viewHistory() {
				uni.navigateTo({
					url: `/pages/user/history`
				});
			},
			// 交换
			exchange() {
				uni.$u.toast('暂未开放');
			},
			// 计算金额
			calculateAmount(val) {
				this.redPacket = val.detail.value;
				this.integralAmount = Number(val.detail.value) * (Number(this.exchangeNum) + (Number(this.exchangeNum) * (
					Number(this.bonusRatio) / 100)))
			},
			// 确定兑换
			redeemNow() {
				if (this.redPacket == "") {
					uni.$u.toast('请输入要兑换的积分或者余额');
					return
				} else if (this.redPacket > this.redPacket) {
					uni.$u.toast('兑换数量不得大于余额');
					return
				} else {
					this.forbidden=true;
					this.loading=true;
					uni.request({
						url: `/member/scoreConvert`,
						method: "POST",
						data: {
							hongbao: this.redPacket
						},
						success: (res) => {
							this.forbidden=false;
							this.loading=false;
							uni.showToast({
								title: "兑换成功",
								success: function() {
									let time = setTimeout(() => {
										clearTimeout(time)
										uni.switchTab({
											url: `/pages/user/index`
										});
									}, 1000)
								},
							})
						}
					});
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.integral_exchange {
		width: 100%;
		height: 100%;
		padding: 0 20px;
		box-sizing: border-box;

		.u-navbar {
			height: 51px;

			.u-navbar__content {
				height: 51px !important;

				.u-navbar__content__left {
					padding-left: 18px;

					.u-nav-slot {
						width: 17px;
						height: 15px;
					}

					.head_back_img {
						width: 100%;
						height: 100%;
					}
				}

				.u-navbar__content__title {
					font-weight: 600;
					font-size: 17px;
				}

				.u-nav-slot {
					font-size: 13px;
					font-weight: 500;
					color: #2fa2e3;
					line-height: 14px;
					white-space: nowrap;
					width: 54px;
					display: flex;
					justify-content: flex-end;
					height: 20px;
				}

			}
		}

		.mains {
			background: #fff;
			border: 1px solid hsla(0, 0%, 55.3%, .2);
			border-radius: 20px 20px 20px 20px;
			padding: 16px 12px 49px 12px;
			margin-top: 14px;

			.bili {
				text-align: left;
				letter-spacing: 1px;
				padding-left: 2px;

				uni-text {
					margin-left: 1px;
					font-size: 13px;
					font-weight: 500;
					color: #2fa2e3;
				}
			}

			.activeDemo {
				position: relative;
				margin-top: 10px;

				.content {
					padding: 51px 16px 34px 16px;
					box-sizing: border-box;
					height: 72px;
					background: #f5f6fa;
					border-radius: 14px 14px 14px 14px;
					display: flex;
					position: relative;
					justify-content: space-between;
					align-items: center;
					width: inherit;

					.left {
						display: flex;
						font-size: 16px;
						font-weight: 600;
						color: #333;
						position: relative;

						.iconImgs {
							width: 22px !important;
							height: 22px !important;
							margin-right: 6px;

							uni-image {
								width: 100%;
								height: 100%;
							}
						}

						.fdTitle {
							position: absolute;
							top: -25px;
							font-size: 12px;
							color: #000;
							font-weight: 800;
						}
					}

					.right {
						position: relative;
						text-align: center;

						.pfdz {
							background-color: #ffe600;
							position: absolute;
							top: -41px;
							border-radius: 0 41px 0 41px;
							white-space: nowrap;
							font-size: 13px;
							color: #000;
							font-weight: 800;
							padding: 0 13px;
							right: -16px;


						}

						.intCs {
							.uni-input {
								text-align: right;
								font-size: 16px !important;
								font-weight: 700;
								color: #333;
							}

							.intCs_text {
								font-size: 16px;
								text-align: right;
								font-weight: 700;
								color: #ffba07;
							}
						}
					}
				}

				.jiaohuan {
					width: 37px;
					height: 37px;
					left: 0;
					right: 0;
					top: 15px;
					bottom: 0;
					margin: auto;
					z-index: 2;
					position: absolute;

					uni-image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}

		.ljdh {
			height: 50px;
			background: #333;
			border-radius: 53px;
			font-size: 14px;
			font-family: PingFang SC-Medium, PingFang SC;
			font-weight: 500;
			color: #fff;
			margin-top: 24px;
			line-height: 50px;
		}

		.tuiguang {
			position: relative;
			background: #fff;
			border-radius: 20px 20px 20px 20px;
			opacity: 1;
			border: 1px solid rgba(51, 51, 51, .2);
			padding: 14px 20px 94px 14px;
			margin-top: 32px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				font-size: 15px;
				margin-bottom: 12px;
				font-weight: 500;
				color: #2fa2e3;
			}

			.neirong {
				font-size: 14px;
				font-weight: 400;
				color: rgba(51, 51, 51, .6);
			}

			.right {
				width: 48px;
				height: 37px;

				uni-image {
					width: 50px;
					height: 40px;
				}
			}

			.zwkf {
				color: rgba(51, 51, 51, .6);
				position: absolute;
				bottom: 25px;
				text-align: center;
				width: 100%;
				left: 0;
				font-size: 19px;
			}
		}
	}
</style>