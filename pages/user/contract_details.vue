<template>
	<view class="contract_details">
		<u-navbar @leftClick="goBackUser" :leftText="$t('user.con_detail.i1')" :title="$t('user.con_detail.i11')" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main">
			<view class="mymodelmain">
				<view class="mymodellist">
					<view class="modeltop">
						<view class="modeltitle">
							<image class="modeltitle_img" :src="contractDetails.type==1?'../../static/user/up.png':'../../static/user/encryption.png'" mode=""></image>
							<view class="in">
								<view class="title">{{contractDetails.type==1?$t('user.con_detail.i12'):$t('user.con_detail.i13')}}</view>
							</view>
						</view>
						<view class="modelshouyi">
							<view class="modelshouyi_every">
								<view class="leijiprice">${{contractDetails.incomeHongbao}}</view>
								<view class="">{{$t('user.con_detail.i14')}}</view>
							</view>
							<view class="modelshouyi_every">
								<view class="shouyilvprice"><text>{{Number(contractDetails.bili)*100}}%</text></view>
								<view class="">{{$t('user.con_detail.i15')}}</view>
							</view>
						</view>
					</view>
					<view class="contractthree">
						<view class="contract_every">
							<view class="intro">{{contractDetails.payNum}}{{$t('user.con_detail.i17')}}</view>
							<view class="titles">{{$t('user.con_detail.i16')}}</view>
						</view>
						<view class="contract_every">
							<view class="intro">{{contractDetails.runday}}{{$t('user.con_detail.i18')}}</view>
							<view class="titles">{{$t('user.con_detail.i22')}}</view>
						</view>
						<view class="contract_every">
							<view class="intro">1{{$t('user.con_detail.i19')}}</view>
							<view class="titles">{{$t('user.con_detail.i20')}}</view>
						</view>
					</view>
					<view class="order_sn">
						Order ID：{{contractDetails.orderSn}}
					</view>
					<view class="order_sn">
						{{$t('user.con_detail.i24')}}：{{contractDetails.createTime}}
					</view>
					<view class="order_sn" v-if="contractDetails.status==0">
						{{$t('user.con_detail.i25')}}：{{contractDetails.endTime}}
					</view>
					<view class="order_sn" v-if="contractDetails.status==2||contractDetails.status==1">
						{{$t('user.con_detail.i26')}}：{{contractDetails.updateTime}}
					</view>
				</view>
				<view class="jiaoyititles">{{$t('user.con_detail.i21')}}</view>
				<view class="tablemain">
					<view class="tablemain_body" v-for="(v,i) in marketData" :key="i">
						<view class="">{{v.createTime}}</view>
						<view class="">Stock：{{v.stock}} |（Symbol：{{v.symbol}}）| US</view>
						<view class="tablemain_body_content">
							<view :class="v.type=='Buy'?'redactivebgcolor':'greenactivebgcolor'">
								{{v.type}}
							</view>
							<view class="">Price：{{v.price}}| Floating P/L：{{v.floating}}</view>
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
				contractDetails: {}, //交易详情
				marketData:[],//交易行情
			};
		},
		onLoad(option) {
			this.getContractDetails(option.id)
		},
		methods: {
			// 返回合约金额
			goBackUser() {
				uni.navigateBack({
					delta: 1
				});
			},
			getContractDetails(id) {
				uni.request({
					url: `/island/contract/${id}`,
					method: "POST",
					success: (res) => {
						res.data.runday = this.getDaysDiff(res.data.createTime, Date.now())
						this.contractDetails=res.data;
					}
				});
				uni.request({
					url: `/marketDetail/list`,
					method: "GET",
					data:{
						pageNum:1,
						pageSize:10
					},
					success: (res) => {
						this.marketData=res.data.rows;
					}
				});
			},
			// 计算天数
			getDaysDiff(startDate, endDate) {
				const oneDay = 24 * 60 * 60 * 1000; // 一天的毫秒数
				const start = new Date(startDate);
				const end = new Date(endDate);
				const diffDays = Math.round(Math.abs((end - start) / oneDay));
				return diffDays;
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
					.order_sn {
						idth: 100%;
						margin-top: 10px;
						text-indent: 1.5em;
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

							.greenactivebgcolor {
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