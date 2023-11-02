<template>
	<view class="user_index">
		<view class="user_head">
			<view class="user_head_left">
				<view class="name">ks</view>
				<view class="account_level">
					<u--text class="account_num" mode="name" text="张三三" :format="eyeShow?'':'encrypt'"></u--text>
					<!-- <view >buyit714@gmail.com</view> -->
					<image class="account_img" :show="true" @click="showHidden"
						:src="eyeShow?'../../static/user/eye.png':'../../static/user/hide.png'"></image>
					<image class="level_img" src="../../static/user/level.png"></image>
				</view>
			</view>
		</view>
		<view class="user_head_right" @click="viewNotice">
			<view class="user_head_right_content">
				<image class="user_head_right_content_img" src="../../static/user/small_bell.png"></image>
			</view>
		</view>
		<view class="yuecard" v-if="aa">
			<view class="allbalance">
				<view class="left">
					<view class="titles">
						<text class="cbac">总资产</text>/ USDT
					</view>
					<view class="balancenum">
						<text>5780.5600</text>
						<image class="balancenum_img" src="../../static/user/eye.png" mode=""></image>
					</view>
				</view>
				<button class="right_btn" size="default" type="default" @click="integralExchange">积分兑换</button>
			</view>
			<view class="yuecard_nei">
				<view class="yuecardtop">
					<view class="yuecardtopevery" @click="viewContract">
						<text>合约金额:</text>
						<text class="texta">5200.00</text>
					</view>
					<view class="yuecardtopevery" @click="viewHistory">
						<text>积分余额:</text>
						<text class="texta">22860.00</text>
					</view>
				</view>
				<view class="yuecardtop">
					<view class="yuecardtopevery" @click="viewCapitalFlow">
						<text>USDT余额:</text>
						<text class="texta">640.5600</text>
					</view>
					<view class="yuecardtopevery">
						<text>信用分:</text>
						<text class="texta">504.00</text>
					</view>
				</view>
			</view>

		</view>
		<view v-else class="yuecardskeleton">
			<u-skeleton :title="false" :rows="1" class="yuecardskeleton" loading rowsWidth="100%"
				rowsHeight="100%"></u-skeleton>
		</view>
		<view class="threebalance">
			<template v-if="aa">
				<view class="threebalance_every" @click="viewContract">
					<view class="threebalance_num">
						<text>$ 61.00</text>
					</view>
					<view class="threebalance_title">
						今日收益
					</view>
				</view>
				<view class="lines"></view>
				<view class="threebalance_every" @click="viewCapitalFlow">
					<view class="threebalance_num">
						<text>$ 254.00</text>
					</view>
					<view class="threebalance_title">
						本周收益
					</view>
				</view>
				<view class="lines"></view>
				<view class="threebalance_every" @click="viewCapitalFlow">
					<view class="threebalance_num">
						<text>$ 1499.56</text>
					</view>
					<view class="threebalance_title">
						累计收益
					</view>
				</view>
			</template>
			<template v-else>
				<u-skeleton :title="false" :rows="1" class="threebalance_skeleton" loading rowsWidth="100%"
					rowsHeight="100%"></u-skeleton>
			</template>
		</view>
		<view class="rechargewithdrawal">
			<button class="everyone" size="default" type="default" @click="recharge">充值</button>
			<button class="everytwo" size="default" type="default" @click="withdrawal">提现</button>
		</view>
		<view class="justcard">
			<view class="justcard_bottom">
				关于
				<image class="justcard_bottom_img" src="@/static/user/homecs1.png" mode=""></image>
				智岛
			</view>
			<button class="justcard_top" @click="aboutUs">
				<view class="justcard_left">更多</view>
				<view class="justcard_right">
					<image class="justcard_right_img" src="@/static/user/homejiantou.png" mode=""></image>
				</view>
			</button>
		</view>
		<view class="funlist">
			<view @click="viewPortfolio">
				<view class="funlist_every">
					<view class="left"><text>作品集</text></view>
					<view class="right">
						<image class="right_img" src="@/static/user/rightjt.png"></image>
					</view>
				</view>
			</view>
			<view>
				<view class="funlist_every" @click="viewAssetDetails">
					<view class="left"><text>资产明细</text></view>
					<view class="right">
						<image class="right_img" src="@/static/user/rightjt.png"></image>
					</view>
				</view>
			</view>
			<view>
				<view class="funlist_every" @click="viewIslands">
					<view class="left"><text>岛屿</text></view>
					<view class="right">
						<image class="right_img" src="@/static/user/rightjt.png"></image>
					</view>
				</view>
			</view>
			<view>
				<view class="funlist_every" @click="securityCenter">
					<view class="left"><text>安全中心</text></view>
					<view class="right">
						<image class="right_img" src="@/static/user/rightjt.png"></image>
					</view>
				</view>
			</view>
			<view>
				<view class="funlist_every">
					<view class="left"><text>帮助中心</text></view>
					<view class="right">
						<image class="right_img" src="@/static/user/rightjt.png"></image>
					</view>
				</view>
			</view>
			<view>
				<view class="funlist_every">
					<view class="left"><text>公告</text></view>
					<view class="right">
						<image class="right_img" src="@/static/user/rightjt.png"></image>
					</view>
				</view>
			</view>
			<view>
				<view class="funlist_exit" @click="outLogin">退出登录</view>
			</view>
		</view>
		<Footer pageName='user'></Footer>
		<u-modal :show="outLoginShow" @confirm="confirm" @cancel="cancel" width="300px" showCancelButton title="温馨提示">
			<view class="slot-content">
				您确定要退出登录吗？
			</view>
		</u-modal>
	</view>
</template>


<script>
	export default {
		components: {
			Footer: () => import('@/components/footer.vue')
		},
		data() {
			return {
				aa: true,
				eyeShow: false, //用户名展示
				outLoginShow: false, //确定退出弹窗
			}
		},
		created() {},
		methods: {
			// 查看通知
			viewNotice() {
				uni.navigateTo({
					url: `/pages/user/user_notice`
				});
			},
			// 展示隐藏
			showHidden() {
				this.eyeShow = !this.eyeShow
			},
			// 积分兑换
			integralExchange() {
				uni.navigateTo({
					url: `/pages/user/integral_exchange`
				});
			},
			// 查看历史记录
			viewHistory() {
				uni.navigateTo({
					url: `/pages/user/history`
				});
			},
			// 查看合约金额
			viewContract() {
				uni.navigateTo({
					url: `/pages/user/contract_amount`
				});
			},
			// 查看资金流水
			viewCapitalFlow() {
				uni.navigateTo({
					url: `/pages/user/capital_flow`
				});
			},
			// 充值
			recharge() {
				uni.navigateTo({
					url: `/pages/user/recharge`
				});
			},
			// 提现
			withdrawal() {
				uni.navigateTo({
					url: `/pages/user/withdrawal`
				});
			},
			// 关于我们
			aboutUs() {
				uni.navigateTo({
					url: `/pages/user/about_us`
				});
			},
			// 作品集
			viewPortfolio() {
				uni.navigateTo({
					url: `/pages/user/portfolio`
				});
			},
			// 资产明细
			viewAssetDetails() {
				uni.navigateTo({
					url: `/pages/user/asset_details/index`
				});
			},
			// 岛屿
			viewIslands() {
				uni.navigateTo({
					url: `/pages/user/islands/index`
				});
			},
			// 退出登录
			outLogin() {
				this.outLoginShow = true;
			},
			// 弹窗取消
			cancel(){
				this.outLoginShow = false;
			},
			// 弹窗确定
			confirm(){
				this.outLoginShow = false;
				uni.removeStorageSync("user");
				uni.navigateTo({
					url: `/pages/loginReg/login`
				});
			},
			// 安全中心
			securityCenter(){
				uni.navigateTo({
					url: `/pages/user/securitycenter/index`
				});
			}
		},

	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.user_index {
		width: 100%;
		height: 100%;
		padding: 16px;
		box-sizing: border-box;

		.user_head {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 59px;

			.user_head_left {
				width: 100%;
				height: 100%;

				.name {
					font-size: 25px;
					color: rgb(0, 0, 0);
				}

				.account_level {
					display: flex;
					align-items: center;
					height: 36px;
					margin-top: 10px;

					.account_num {
						font-weight: bold;
						overflow-wrap: normal;
						width: fit-content;
						font-size: 12px;
						flex: none;
						color: rgb(48, 49, 51);
					}

					.account_img {
						width: 20px;
						height: 20px;
						margin-left: 10px;
					}

					.level_img {
						width: 80px;
						height: 26px;
					}
				}

			}


		}

		.user_head_right {
			display: flex;
			justify-content: flex-end;
			position: absolute;
			right: 20px;
			top: 15px;
			z-index: 99;
			width: 36px;
			height: 36px;

			.user_head_right_content {
				width: 100%;
				height: 100%;
				background: #333;
				border-radius: 20px;
				display: flex;
				align-items: center;
				justify-content: center;

				.user_head_right_content_img {
					width: 15px;
					height: 15px;
				}
			}
		}

		.yuecard {
			background: #eff4fa;
			border-radius: 20px;
			margin-top: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 20px;
			position: relative;



			.allbalance {
				margin-top: 0px;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.left {
					.titles {
						font-size: 14px;
						color: #999;
						display: flex;
						align-items: center;
					}

					.balancenum {
						font-size: 25px;
						color: #000;
						font-weight: 1000;
						margin-top: 10px;

						.balancenum_img {
							width: 20px;
							margin-left: 10px;
							height: 20px;
						}
					}
				}

				.right_btn {
					border-radius: 20px;
					background-color: #333;
					color: #ffe600;
					display: flex !important;
					align-items: center;
					align-content: center;
					margin: 0;
					font-size: 12px;
					margin-bottom: -5px;
					height: 36px;
					line-height: 36px;
				}
			}

			.yuecard_nei {
				margin-top: 20px;
				border-top: 1px solid #e2e7ed;

				.yuecardtop {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 12px;

					.yuecardtopevery {
						width: 46%;
						font-size: 12px;
						display: flex;
						flex-direction: column;

						.texta {
							width: 100%;
							font-size: 14px;
							color: #000;
							font-weight: 800;
						}
					}
				}
			}
		}

		.yuecardskeleton {
			height: 128px;
			width: 100%;
			border-radius: 21px;
			margin-top: 26px;

			.u-skeleton__wrapper__content__rows {
				width: 100% !important;
				height: 128px !important;
				margin-top: 0px !important;
				border-radius: 21px;
			}
		}

		.threebalance {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 25px;

			.u-skeleton__wrapper__content__rows {
				width: 100% !important;
				height: 46px !important;
				margin-top: 0px !important;
				border-radius: 10px;
			}

			.threebalance_every {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 32%;

				.threebalance_num {
					font-size: 15px;
					font-family: Roboto-Medium, Roboto;
					font-weight: 700;
					color: #2fa2e3;
				}

				.threebalance_title {
					font-size: 13px;
					font-weight: 500;
					text-align: center;
					color: #999;
				}
			}

			.lines {
				width: 1px;
				height: 15px;
				background: #999;
			}
		}

		.rechargewithdrawal {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 25px;

			.everyone {
				background: rgb(40, 97, 254);
				padding: 15px 0;
				border-radius: 54px;
				width: 47%;
				display: flex !important;
				align-items: center;
				justify-content: center;
				height: 51px;
				color: #fff;
				font-size: 14px;
			}

			.everytwo {
				background: black;
				padding: 15px 0;
				border-radius: 54px;
				width: 47%;
				display: flex !important;
				align-items: center;
				justify-content: center;
				height: 51px;
				border: 2px solid #333;
				color: #fff;
				font-size: 14px;
			}
		}

		.justcard {
			padding: 15px 18px;
			height: 98px;
			background-image: url("@/static/user/userguanyu.png");
			background-size: cover;
			background-position: 50%;
			background-repeat: no-repeat;
			border-radius: 20px;
			margin-top: 20px;

			.justcard_bottom {
				font-weight: 500;
				color: #1b1b1b;
				line-height: 51px;
				font-size: 19px;
				display: flex;
				align-items: center;
				letter-spacing: 1px;

				.justcard_bottom_img {
					margin: 0 5px;
					width: 64px;
					height: 18px;
				}
			}

			.justcard_top {
				height: 31px;
				display: flex !important;
				align-items: center;
				justify-content: space-between;
				width: -webkit-max-content;
				width: max-content;
				padding: 4px 3px;
				background: #333;
				border-radius: 25px;
				margin-left: 0;

				.justcard_left {
					width: 46px;
					display: flex;
					align-items: center;
					margin-left: 12px;
					padding: 0 10px;
					color: #fff;
					font-size: 12px;
					line-height: 1;
					justify-content: center;
				}

				.justcard_right {
					width: 26px;
					height: 26px;
					display: flex;
					align-items: center;

					.justcard_right_img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}

		.funlist {
			background: #fff;
			margin-top: 25px;
			margin-bottom: 50px;
			width: 100%;

			.funlist_every {
				width: 100%;
				height: 53px;
				background: #eff3fa;
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 20px;
				margin-bottom: 10px;
				border-radius: 20px;
				background: #eff4fa;
				box-sizing: border-box;
				border-bottom: 1px solid hsla(0, 0%, 97.3%, .2);

				.left {
					display: flex;
					align-items: center;

					uni-text {
						font-size: 15px;
						color: #333;
						margin-left: 10px;
						font-weight: 600;
					}
				}

				.right {
					display: flex;
					align-items: center;

					.right_img {
						width: 7px;
						height: 10px;
					}
				}
			}

			.funlist_every:last-child {
				border: unset !important;
			}

			.funlist_exit {
				width: 100%;
				height: 53px;
				box-sizing: border-box;
				background: #eff3fa;
				display: flex;
				align-items: center;
				padding: 0 20px;
				margin-bottom: 10px;
				border-radius: 20px;
				background: #eff4fa;
				border-bottom: 1px solid hsla(0, 0%, 97.3%, .2);
				justify-content: center;
				font-size: 16px;
				font-weight: 600;
				color: #7b7c82;
			}
		}

		.slot-content {

			min-height: 40px;
			font-size: 15px;
			line-height: 40px;
			color: #999;
			max-height: 400px;
			overflow-x: hidden;
			overflow-y: auto;
		}
	}
</style>