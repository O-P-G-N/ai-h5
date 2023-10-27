<template>
	<view class="contract_details">
		<u-navbar @leftClick="goBackUser" leftText="返回" title="合约详情" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main">
			<view class="mymodelmain">
				<view class="mymodellist">
					<view class="modeltop">
						<view class="modeltitle">
							<image class="modeltitle_img" src="@/static/user/up.png" mode=""></image>
							<view class="in">
								<view class="title">证券</view>
							</view>
						</view>
						<view class="modelshouyi">
							<view class="modelshouyi_every">
								<view class="leijiprice">$0.00</view>
								<view class="">累计收益</view>
							</view>
							<view class="modelshouyi_every">
								<view class="shouyilvprice"><text>0.50%</text></view>
								<view class="">收益率</view>
							</view>
						</view>
					</view>
					<view class="contractthree">
						<view class="contract_every">
							<view class="intro">1份</view>
							<view class="titles">合约份数</view>
						</view>
						<view class="contract_every">
							<view class="intro">0天</view>
							<view class="titles">已运行</view>
						</view>
						<view class="contract_every">
							<view class="intro">1次</view>
							<view class="titles">交易次数</view>
						</view>
					</view>
				</view>
				<view class="jiaoyititles">交易行情</view>
				<view class="tablemain">
					<view class="tablemain_body">
						<view class="">2023-10-27 09:37:30</view>
						<view class="">Stock：Aptos |（Symbol：APT）| US</view>
						<view class="tablemain_body_content">
							<view class="redactivebgcolor">
							Buy
							</view>
							<view class="">Price：6.43 | Floating P/L：0%</view>
						</view>
					</view>
					<view class="tablemain_body">
						<view class="">2023-10-27 09:36:16</view>
						<view class="">Stock：Zcash |（Symbol：ZEC）| US</view>
						<view class="tablemain_body_content">
							<view class="redactivebgcolor">
							Sell
							</view>
							<view class="">Price：30.27 | Floating P/L：17.59%</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		created() {},
		methods: {
			// 返回合约金额
			goBackUser() {
				uni.redirectTo({
					url: `/pages/user/contract_amount`
				});
			},

		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.contract_details {
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
			}
		}

		.main {
			padding-bottom: 41px;
			padding-top: 15px;

			.mymodelmain {
				.mymodellist {
					padding: 20px;
					background: #fff;
					border-radius: 25px;
					margin-bottom: 31px;

					.modeltop {
						padding: 20px 15px;
						background: #111;
						border-radius: 20px;

						.modeltitle {
							display: flex;
							align-items: center;
							margin-right: 15px;
							width: 80%;

							.modeltitle_img {
								width: 25px;
								height: 25px;
								margin-right: 15px;
								border-radius: 50%;
							}

							.in {
								width: calc(100% - 62px);

								.title {
									font-size: 16px;
									font-weight: 600;
									color: #fff;
								}
							}
						}

						.modelshouyi {
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin-top: 15px;

							.modelshouyi_every {
								width: 50%;

								uni-view:first-child {
									font-size: 18px;
									font-weight: 600;
									margin-top: 5px;
									text-align: center;
								}

								uni-view:last-child {
									font-size: 14px;
									color: hsla(0, 0%, 100%, .6);
									font-weight: 300;
									text-align: center;
								}

								.leijiprice {
									color: #2fa2e3;
									text-align: center;
								}

								.shouyilvprice {
									color: #1ee7a0;
								}
							}
						}
					}

					.contractthree {
						display: flex;
						align-items: flex-start;
						justify-content: space-between;
						margin: 20px 0 10px 0;

						.contract_every {
							width: 33%;
							display: flex;
							flex-direction: column;
							justify-content: flex-start;

							.intro {
								font-size: 15px;
								color: #000;
								font-weight: 600;
								text-align: center;
							}

							.titles {
								font-size: 15px;
								color: #000;
								font-weight: 300;
								text-align: center;
							}
						}
					}
				}

				.jiaoyititles {
					color: #333;
					font-size: 16px;
					margin-bottom: 15px;
				}

				.tablemain {
					display: flex;
					flex-direction: column;
					border: 1px solid rgba(51, 51, 51, .2);
					border-radius: 20px;
					padding: 20px;

					.tablemain_body {
						line-height: 31px;

						.tablemain_body_content {
							display: flex;
							border-bottom: 1px solid rgb(239, 239, 239);
							padding-bottom: 10px;

							.redactivebgcolor {
								background: #ad0606;
								color: #fff;
								width: 31px;
								height: 30px;
								text-align: center;
								margin-right: 10px;
							}
							.greenactivebgcolor{
								background: #5ead24;
								    color: #fff;
								    width: 31px;
								    text-align: center;
								    margin-right: 10px;
									height: 30px;
							}
						}
					}
				}
			}
		}
	}
</style>