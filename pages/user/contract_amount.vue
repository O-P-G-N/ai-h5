<template>
	<view class="contract_amount">
		<u-navbar @leftClick="goBackUser" leftText="返回" title="我的合约" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main">
			<view class="mymodelmain">
				<view class="mymodellist">
					<view class="modeltop">
						<view class="modeltitle">
							<image class="modeltitle_img" src="../../static/user/up.png" mode=""></image>
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
							<view class="intro">0次</view>
							<view class="titles">交易次数</view>
						</view>
					</view>
					<view class="order_sn">
						Order ID：CN-202310261741470039273
					</view>
					<view class="modelbtns">
						<button class="zhongzhibtn">终止合约</button>
					</view>
					<button class="lookmore" @click="seeMore">
						查看更多交易详情
						<image class="lookmore_img" src="@/static/user/rightjt.png" mode=""></image>
					</button>
				</view>
				
				<view class="mymodellist">
					<view class="modeltop">
						<view class="modeltitle">
							<image class="modeltitle_img" src="@/static/user/encryption.png" mode=""></image>
							<view class="in">
								<view class="title">加密货币</view>
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
							<view class="intro">0次</view>
							<view class="titles">交易次数</view>
						</view>
					</view>
					<view class="order_sn">
						Order ID：BTC-202310261727400023548
					</view>
					<view class="modelbtns">
						<button class="zhongzhibtn">终止合约</button>
					</view>
					<button class="lookmore">
						查看更多交易详情
						<image class="lookmore_img" src="@/static/user/rightjt.png" mode=""></image>
					</button>
				</view>
				<u-loadmore status="nomore" />
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
			// 返回个人中心
			goBackUser() {
				uni.navigateBack({
					delta: 1
				});
			},
			// 查看更多
			seeMore(){
				uni.navigateTo({
					url: `/pages/user/contract_details`
				});
			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.contract_amount {
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
			padding-bottom: 40px;
			padding-top: 15px;

			.mymodelmain {
				.mymodellist {
					border: 1px solid #efefef;
					background: #fff;
					padding: 10px;
					border-radius: 25px;
					margin-bottom: 20px;

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
								width: calc(100% - 60px);

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
						justify-content: space-between;
						margin: 20px 0 0 0;

						.contract_every {
							width: 32%;

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
								margin-top: 3px;
								text-align: center;
							}
						}
					}

					.order_sn {
						idth: 100%;
						margin-top: 10px;
						text-indent: 1.5em;
					}

					.modelbtns {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-top: 25px;

						.zhongzhibtn {
							width: 46%;
							height: 50px;
							line-height: 46px;
							text-align: center;
							color: #333;
							font-size: 15px;
							background: #fff;
							border: 2px solid #333 !important;
							border-radius: 53px;
						}
					}

					.lookmore {
						width: 100%;
						height: 50px;
						line-height: 50px;
						text-align: center;
						color: #333;
						font-size: 14px;
						background: #eceef3;
						border-radius: 53px;
						margin-top: 15px;
						display: flex !important;
						align-items: center;
						justify-content: center;

						.lookmore_img {
							width: 8px;
							height: 10px;
							margin-left: 5px;
						}
					}

					.lookmore::after {
						border: none !important;
					}
				}
			}
		}
	}
</style>