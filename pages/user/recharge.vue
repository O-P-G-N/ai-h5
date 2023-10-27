<template>
	<view class="recharge">
		<u-navbar @leftClick="goBackUser" leftText="返回" title="充值" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="container_nei">
			<view class="main">
				<view class="usdt_select">
					<view class="top_jm">
						<image class="top_jm_img" src="@/static/user/cryptocurrency-coins.png" mode=""></image>
						<text class="top_jm_text">加密货币</text>
					</view>
					<view class="border_bt"></view>
					<view class="rc_item">
						<view class="left_img">
							<image class="left_img_content" src="@/static/user/eth.png" mode=""></image>
						</view>
						<view class="names">
							<view class="n_title">USDT-TRC20</view>
							<view class="n_del">TRON</view>
						</view>
						<view class="left_border"></view>
						<view class="select_op">
							<image class="tyes" src="@/static/user/tick.png" mode=""></image>
						</view>
					</view>
					<view class="rc_item">
						<view class="left_img">
							<image class="left_img_content" src="@/static/user/eth2.png" mode=""></image>
						</view>
						<view class="names">
							<view class="n_title">USDT-ERC20</view>
							<view class="n_del">Ethereum</view>
						</view>
						<view class="left_border"></view>
						<view class="select_op">
							<image class="tyes" src="@/static/user/ty.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="ctitle">储值金额</view>
				<view class="czj_sss">
					<input class="uni-input" min placeholder="10.00 USD起" />
				</view>
				<button class="chuangjian">下一步</button>
			</view>
		</view>
		<u-modal :show="show" title="温馨提示">
			<view>
				<view class="footercontent">
					<text class="text">

					</text>
				</view>
			</view>
			<button slot="confirmButton" @click="determine" class="zhuiaddbtn">确定</button>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				content: "", //富文本内容
			};
		},
		methods:{
			// 返回个人中心
			goBackUser() {
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			determine(){
				this.show=false
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.recharge {
		min-height: 95vh;
		padding-top: 51px !important;
		overflow: hidden;
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
			}
		}

		.container_nei {
			box-sizing: border-box;
			width: 100%;
			position: absolute;
			top: 51px;
			padding: 20px 20px;

			.main {
				.usdt_select {
					padding: 10px 20px;
					background: #f8f8f8;
					margin-top: 15px;
					border-radius: 15px;

					.top_jm {
						display: flex;
						align-items: center;
						padding: 0 0 15px 0;

						.top_jm_img {
							width: 31px;
							height: 31px;
						}

						.top_jm_text {
							font-weight: 600;
							margin-left: 10px;
							font-size: 15px;
						}
					}

					.border_bt {
						width: 82%;
						height: 2px;
						background: #f1f1f1;
						margin-left: 46px;
					}

					.rc_item {
						display: flex;
						align-items: center;
						margin-bottom: 20px;
						margin-top: 31px;
						padding: 0 20px;
						position: relative;
						margin-left: 20px;

						.left_img {
							width: 25px;
							height: 25px;

							.left_img_content {
								width: 100%;
								height: 100%;
							}
						}

						.names {
							line-height: 18px;
							margin-left: 10px;

							.n_title {
								font-weight: 600;
								font-size: 15px;
							}

							.n_del {
								font-size: 12px;
								color: #bbb;
							}
						}

						.left_border {
							position: absolute;
							height: 20px;
							width: 3px;
							background: #494949;
							left: 0;
							border-radius: 15px;
						}

						.select_op {
							position: absolute;
							right: 10px;

							.tyes {
								width: 18px !important;
								height: 18px !important;
							}

							uni-image {
								width: 15px;
								height: 15px;
							}
						}
					}
				}

				.ctitle {
					margin-top: 10px;
					font-size: 18px;
				}

				.czj_sss {
					padding: 0 10px;
					height: 51px;
					background: #f8f8f8;
					border-radius: 15px;
					margin-top: 15px;
					display: flex;
					align-items: center;
				}

				.chuangjian {
					background: #333;
					height: 51px;
					line-height: 51px;
					color: #fff;
					letter-spacing: 1px;
					border-radius: 54px;
					margin: 0 15px;
					margin-top: 28px;
				}
			}
		}

		.footercontent {
			width: 100%;
			height: 258px;
			overflow: auto;

			.text {
				font-size: 14px;
				font-weight: 400;
				color: rgba(51, 51, 51, .6);
			}
		}
		.zhuiaddbtn {
			margin-top: 25px;
			width: 100%;
			height: 46px;
			line-height: 46px;
			text-align: center;
			color: #fff;
			font-size: 15px;
			background: #333;
			border-radius: 54px;
			border: unset !important;
		}
	}
</style>