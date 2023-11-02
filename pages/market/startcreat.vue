<template>
	<view class="startcreat">
		<u-navbar :fixed="false" @leftClick="goBackUser" title="创建合约" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main">
			<view class="mymodelmain">
				<view class="touming">
					<view class="chuangjian_top">
						<view class="left">
							<image class="left_img" src="../../static/user/up.png" mode=""></image>
							<view class="in">证券</view>
						</view>
						<view class="right">
							<view class="">0.5%~1.2%</view>
							<view class="">平均日收益率</view>
						</view>
					</view>
					<view class="jiaoyimubiao">
						<text>交易目标</text>
						<text class="jiaoyimubiao_text">美股/A股/港股</text>
					</view>
					<view class="tuoguan">托管金额</view>
					<view class="transactionList">
						<view class="every" @click="selectCopies(1)" :class="from.copiesNum==1?'everyactive':''">1份
						</view>
						<view class="every" @click="selectCopies(10)" :class="from.copiesNum==10?'everyactive':''">10份
						</view>
						<view class="every" @click="selectCopies(100)" :class="from.copiesNum==100?'everyactive':''">
							100份</view>
						<view class="every" @click="selectCopies(500)" :class="from.copiesNum==500?'everyactive':''">
							500份</view>
						<view class="mairu">
							<input class="uni-input" v-model="from.copiesNum"
								placeholder-style="color:rgb(192, 196, 204)" @input="customAmount" type="number"
								placeholder="自定义买入份额" />
						</view>
					</view>
					<view class="meifen">每份等于200USDT</view>
				</view>
				<view class="yujimain">
					<view class="buymoney">
						<view class="">买入金额</view>
						<text class="buymoney_num">{{Number(from.copiesNum)*200}} USDT</text>
					</view>
					<view class="buymoney">
						<view class="">当前余额最大可购买份数</view>
						<text class="buymoney_text">2份</text>
					</view>
					<view class="buymoney">
						<view class="">当前等级最大可购买份数</view>
						<text class="buymoney_text">100份</text>
					</view>
				</view>
			</view>
			<u-row customStyle="margin-bottom: 10px">
				<u-col span="4">
					<view class="bg-purple-light">合约运行天数</view>
				</u-col>
				<u-col span="4">
					<view class="bg-purple-light">信用等级要求</view>
				</u-col>
				<u-col span="4">
					<view class="bg-purple-light">最大日收益</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px">
				<u-col span="4">
					<view class="bg-purple">1-7天</view>
				</u-col>
				<u-col span="4">
					<view class="bg-purple">C</view>
				</u-col>
				<u-col span="4">
					<view class="bg-purple">0.5%</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px">
				<u-col span="4">
					<view class="bg-purple">8-15天</view>
				</u-col>
				<u-col span="4">
					<view class="bg-purple">B</view>
				</u-col>
				<u-col span="4">
					<view class="bg-purple">0.7%</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px">
				<u-col span="4">
					<view class="bg-purple">16-30天</view>
				</u-col>
				<u-col span="4">
					<view class="bg-purple">B</view>
				</u-col>
				<u-col span="4">
					<view class="bg-purple">0.9%</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px">
				<u-col span="4">
					<view class="bg-purple">30天以上</view>
				</u-col>
				<u-col span="4">
					<view class="bg-purple">B</view>
				</u-col>
				<u-col span="4">
					<view class="bg-purple">1.2%</view>
				</u-col>
			</u-row>
		</view>
		<view class="createbtn">
			<button class="chuangjian">创建合约</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from: {
					copiesNum: 1
				}
			};
		},
		methods: {
			// 返回
			goBackUser() {
				uni.switchTab({
					url: `/pages/market/index`
				});
			},
			// 自定义金额
			customAmount(val) {
				this.from.copiesNum = val.detail.value;
			},
			// 选择份数
			selectCopies(val) {
				this.from.copiesNum = val;
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.startcreat {
		min-width: 100vw;
		min-height: 100vh;
		box-sizing: border-box;
		background-color: #fff;
		padding: 0 21px;

		.u-navbar {
			height: 53px;

			.u-navbar__content {
				height: 53px !important;

				.u-navbar__content__left {
					padding-left: 0;

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
					font-weight: 700;
					font-size: 17px;
				}
			}
		}

		.main {
			position: relative;
			padding-bottom: 76px;
			padding-top: 10px;
			width: 100%;

			.mymodelmain {
				margin-bottom: 26px;

				.touming {
					background: #fff;
					padding: 21px;
					border-radius: 26px;

					.chuangjian_top {
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 16px;
						background: #111;
						color: #fff;
						border-radius: 21px;

						.left {
							display: flex;
							align-items: center;
							margin-right: 16px;

							.left_img {
								width: 26px;
								height: 26px;
								margin-right: 16px;
								border-radius: 50%;
								background-color: #fff;
							}

							.in {
								width: calc(100% - 42px);
							}
						}

						.right {}
					}

					.jiaoyimubiao {
						display: flex;
						align-items: center;
						margin-top: 16px;
						justify-content: flex-end;

						.jiaoyimubiao_text {
							font-weight: 600;
							margin-left: 5px;
							color: #2fa2e3;
						}
					}

					.tuoguan {
						font-weight: 300;
						font-size: 17px;
						margin-top: 16px;
					}

					.transactionList {
						display: flex;
						align-items: center;
						flex-wrap: wrap;
						justify-content: space-between;
						margin-top: 16px;

						.every {
							width: 31%;
							padding: 16px 0;
							text-align: center;
							background: #f5f6fa;
							border-radius: 21px;
							margin-bottom: 12px;
							font-weight: 300;
							font-size: 17px;
						}

						.mairu {
							width: 65%;
							margin-bottom: 12px;

							.uni-input {
								background: #f5f6fa;
								height: 53px;
								line-height: 53px;
								border-radius: 16px;

								.uni-input-wrapper {
									font-size: 17px !important;
									text-align: center;
								}
							}
						}

						.everyactive {
							background: #333;
							color: #fff;
							font-weight: 500;
							transition-duration: .3s;
							transition-timing-function: ease-in-out;
						}
					}

					.meifen {
						font-weight: 300;
						font-size: 14px;
						text-align: right;
						color: #999;
					}
				}

				.yujimain {
					margin-top: 26px;
					padding: 16px;
					border: 1px solid rgba(51, 51, 51, .2);
					border-radius: 26px;

					.buymoney {
						color: rgba(51, 51, 51, .6);
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 16px;
						max-width: 100%;

						.buymoney_num {
							color: #2fa2e3;
							font-weight: 600;
							font-size: 16px;
							margin-left: 10px;
						}

						.buymoney_text {
							color: #111;
							margin-left: 10px;
						}
					}
				}
			}

			.bg-purple-light {
				text-align: center;
				font-weight: bold;
				color: #000;
			}

			.bg-purple {
				text-align: center;
				font-size: 14px;
				height: 40px;
				color: #606266;
				line-height: 40px;
				border-bottom: 1px solid #f5f5f5 !important;
			}
		}

		.createbtn {
			width: calc(100% - 40px);
			position: fixed;
			bottom: 25px;

			.chuangjian {
				background: #333;
				height: 50px;
				line-height: 50px;
				color: #fff;
				letter-spacing: 1px;
				border-radius: 53px;
				
			}
		}
	}
</style>