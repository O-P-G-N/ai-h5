<template>
	<view class="level_desc">
		<u-navbar @leftClick="goBackUser" bgColor="#201F32" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/back_ff.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main">
			<image class="level_img"
				:src="myInfo.vip==1?'../../static/user/ve.png':myInfo.vip==2?'../../static/user/vd.png':myInfo.vip==3?'../../static/user/vc.png':myInfo.vip==4?'../../static/user/vb.png':myInfo.vip==5?'../../static/user/va.png':myInfo.vip==6?'../../static/user/vs.png':''">
			</image>
			<u-line-progress activeColor="#B1B3FF" inactiveColor="#46465A" :percentage="amountPropes"
				:showText="false"></u-line-progress>
			<view class="required_value">
				<view class="">{{amountMin}}</view>
				<view class="">{{amountMax}}</view>
			</view>
			<view class="difference_value">
				{{$t("user.con_detail.i49")}}<text
					style="font-size: 20px;margin-left: 5px; margin-right: 5px;">{{amountSum}}</text>{{$t("user.con_detail.i50")}}
			</view>
		</view>
		<view class="divider">
			<view class="divider_left"></view>
			<view class="divider_center">
				{{$t("user.con_detail.i52")}}
			</view>
			<view class="divider_right"></view>
		</view>
		<view class="security_currency">
			<view class="security_currency_top">
				<image class="security_currency_top_img" src="@/static/user/vip_img.png" mode=""></image>
				<text class="security_currency_top_text">{{$t("user.con_detail.i52")}}</text>
			</view>
			<u-row class="row_one">
				<u-col span="3" textAlign="center">
					<view class="title">{{$t("user.con_detail.i54")}}</view>
				</u-col>
				<u-col span="9" textAlign="center">
					<view class="title">{{$t("user.con_detail.i72")}}</view>
				</u-col>
				<!-- <u-col span="3" textAlign="center">
					<view class="title">{{$t("user.con_detail.i56")}}</view>
				</u-col>
				<u-col span="4" textAlign="center">
					<view class="title">{{$t("user.con_detail.i57")}}</view>
				</u-col> -->
			</u-row>
			<u-row class="row_two" v-for="(v,i) in securityList" :key="i">
				<u-col span="3" textAlign="center">
					<view class="text">
						{{v.label}}
					</view>
				</u-col>
				<u-col span="9" textAlign="center">
					<view class="text">{{v.hongbao}}</view>
				</u-col>
				<!-- <u-col span="3" textAlign="center">
					<view class="text">{{v.days}}</view>
				</u-col>
				<u-col span="4" textAlign="center">
					<view class="text">{{(Number(v.bili)*100).toFixed(0)}}%</view>
				</u-col> -->
			</u-row>
		</view>
	</view>
</template>

<script>
	import currency from "currency.js"
	export default {
		data() {
			return {
				myInfo: {}, //我的信息
				securityList: [], //证券列表
				currencyList: [], //货币列表
				amountMax: "", //下一等级
				amountMin: 0, //上一等级
				amountPropes: 0, //进度条
				amountSum: 0, //历史充值金额
			};
		},
		onShow() {
			this.getMyInfo();
		},
		methods: {
			// 返回积分查看
			goBackUser() {
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			// 获取我的信息
			async getMyInfo() {
				await uni.request({
					url: '/member/myWallet',
					method: "GET",
					success: (res) => {
						this.myInfo = res.data;
					}
				});
				this.securityList = [];
				this.currencyList = []
				await uni.request({
					url: '/island/vip-rules',
					method: "GET",
					success: (res) => {
						this.securityList = res.data.vips.sort(function(a, b) {
							return (a.value - b.value)
						});
						this.securityList.map((v,i)=>{
							if(i==this.securityList.length-1){
								v.min=`${v.label}≥${v.hongbao}`
							}else{
								v.min=`${v.hongbao}≤${v.label}<${this.securityList[i+1].hongbao}`
							}
						})
						res.data.vips.map((e) => {
							if (Number(res.data.sum) >= Number(e.hongbao)) {
								this.amountMin = e.hongbao
							} else {
								if (this.amountMax == "") {
									this.amountMax = e.hongbao
									
								}
							};
						})
						if(this.amountMin==res.data.vips[res.data.vips.length-1].hongbao){
							this.amountMax="∞"
							this.amountPropes=100
							this.amountSum=0
						}else{
							this.amountSum = currency(this.amountMax, {
								precision: 0
							}).subtract(res.data.sum).value;
							this.amountPropes =(((Number( res.data.sum)-this.amountMin) / (this.amountMax-this.amountMin))*100).toFixed(0);
						}
						
						// this.propes = currency(this.amountSum, {precision: 0}).subtract(this.amountMin).divide(this.amountMax)
					}
				});
			},
		}
	}
</script>

<style scoped lang="scss">
	::v-deep.level_desc {
		width: 100vw;
		min-height: 100vh;
		background-color: #201F32;
		padding: 12px;
		box-sizing: border-box;

		.u-navbar {
			height: 51px;

			.u-navbar__content {
				height: 51px !important;

				.u-navbar__content__left {
					padding-left: 18px;

					.u-nav-slot {
						width: 20px;
						height: 20px;
					}

					.head_back_img {
						color: #fff;
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
			padding: 20px;
			box-sizing: border-box;
			width: 100%;
			height: 181px;
			position: relative;

			.level_img {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
			}

			.u-line-progress {
				width: calc(100% - 32px);
				margin-top: 80px;
			}

			.required_value {
				margin-top: 5px;
				width: calc(100% - 32px);
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 12px;
				font-family: PingFang SC, PingFang SC;
				font-weight: 400;
				color: #FBFAFF;
			}

			.difference_value {
				font-size: 12px;
				font-family: PingFang SC, PingFang SC;
				font-weight: 400;
				color: #FBFAFF;
			}
		}

		.divider {
			margin-top: 33px;
			margin-bottom: 20px;
			display: flex;
			align-items: center;
			justify-content: center;

			.divider_center {
				background: linear-gradient(180deg, #A2A2B1 0%, #4B496A 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				font-size: 16px;
				font-weight: bold;
				letter-spacing: 0.2rem;
				margin: 0 10px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.divider_left {
				width: 84px;
				height: 1px;
				background: linear-gradient(270deg, #A8A7BE 0%, rgba(168, 167, 190, 0) 100%);
				border-radius: 100px 100px 100px 100px;
				opacity: 1;
			}

			.divider_right {
				width: 84px;
				// width: 84px;
				height: 1px;
				background: linear-gradient(90deg, #A8A7BE 0%, rgba(168, 167, 190, 0) 100%);
				border-radius: 100px 100px 100px 100px;
				opacity: 1;
			}
		}

		.security_currency {
			width: 100%;
			height: 244px;
			background: linear-gradient(132deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 100%);
			border-radius: 8px 8px 8px 8px;
			opacity: 1;
			margin-bottom: 16px;
			border: 1px solid rgba(255, 255, 255, 0.3);

			.security_currency_top {
				width: 100%;
				padding: 13px 15px 7px;
				box-sizing: border-box;
				height: 50px;
				display: flex;
				align-items: center;
				background: linear-gradient(132deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 100%);

				.security_currency_top_img {
					width: 30px;
					height: 30px;
				}

				.security_currency_top_text {
					margin-left: 7px;
					font-size: 15px;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					color: #FBFAFF;
				}
			}

			.row_one {
				height: 33px;

				.title {
					height: 33px;
					line-height: 33px;
					font-size: 12px;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					color: #FBFAFF;
					background: rgba(255, 255, 255, 0.08);
				}

			}

			.row_two {
				height: 26px;

				.text {
					height: 26px;
					line-height: 26px;
					font-size: 12px;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					color: #FBFAFF;
				}

			}

			.row_two:nth-child(2n) {
				background: rgba(255, 255, 255, 0.12);
			}
		}
	}
</style>