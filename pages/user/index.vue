<template>
	<view class="user_index">
		<view class="user_head">
			<view class="user_head_left">
				<view class="name">{{myInfo.nickName}}</view>
				<view class="account_level">
					<u--text class="account_num" mode="name" :text="myUserName"
						:format="eyeShow?'':'encrypt'"></u--text>
					<!-- <view >buyit714@gmail.com</view> -->
					<image class="account_img" :show="true" @click="showHidden"
						:src="eyeShow?'../../static/user/eye.png':'../../static/user/hide.png'"></image>
					<image @click="levelDesc" class="level_img"
						:src="myInfo.vip==1?'../../static/user/e1.png':myInfo.vip==2?'../../static/user/d1.png':myInfo.vip==3?'../../static/user/c1.png':myInfo.vip==4?'../../static/user/b1.png':myInfo.vip==5?'../../static/user/a1.png':myInfo.vip==6?'../../static/user/s1.png':''">
					</image>
				</view>
			</view>
		</view>
		<view class="user_head_right">
			<image src="@/static/user/set.png" class="user_head_right_set" @click="securityCenter" mode=""></image>
			<view class="user_head_right_content" @click="viewNotices">
				<u-badge class="badge" :offset="[0, -1]" :absolute="true" v-if="$store.getters.unr>0" :isDot="true"
					type="error"></u-badge>
				<image class="user_head_right_content_img" src="../../static/user/small_bell.png"></image>
			</view>
		</view>
		<view class="yuecard" v-if="infoShow">
			<view class="allbalance">
				<view class="left">
					<view class="titles">
						<text class="cbac">{{$t('home.asset.total')}}</text>
					</view>
					<view class="balancenum">
						<text v-if="eyeShows">{{myInfo.total}} USDT</text>
						<text v-else>******</text>
						<image class="balancenum_img" @click="eyeShows=!eyeShows"
							:src="eyeShows?'../../static/user/eye.png':'../../static/user/hide.png'" mode=""></image>
					</view>
				</view>
				<button class="right_btn" size="default" type="default"
					@click="integralExchange">{{$t('home.asset.exchange_point')}}</button>
			</view>
			<view class="yuecard_nei">
				<view class="yuecardtop">
					<view class="yuecardtopevery" @click="viewContract">
						<text>{{$t('home.asset.in_contract')}}:</text>
						<text v-if="eyeShows" class="texta">{{myInfo.contract}} USDT</text>
						<text v-else class="texta">******</text>
					</view>
					<view class="yuecardtopevery" @click="viewHistory">
						<text>{{$t('home.asset.point')}}:</text>
						<text v-if="eyeShows" class="texta">{{myInfo.score}}</text>
						<text v-else class="texta">******</text>
					</view>
				</view>
				<view class="yuecardtop">
					<view class="yuecardtopevery" @click="viewCapitalFlow">
						<text>{{$t('home.asset.hongbao_balance')}}:</text>
						<text v-if="eyeShows" class="texta">{{myInfo.hongbao}} USDT</text>
						<text v-else class="texta">******</text>
					</view>
					<view class="yuecardtopevery">
						<text>{{$t('home.asset.credit')}}:</text>
						<text v-if="eyeShows" class="texta">{{myInfo.activeIncome}} USDT</text>
						<text v-else class="texta">******</text>
					</view>
				</view>
				<view class="yuecardtop">
					<view class="yuecardtopevery_one">
						<text>{{$t('user.con_detail.i73')}}:</text>
						<text v-if="eyeShows" class="texta">{{myInfo.aai}} ch@i ≈ {{myInfo.aai2usdtAmount}} USDT</text>
						<text v-else class="texta">******</text>
					</view>

				</view>
			</view>

		</view>
		<view v-else class="yuecardskeleton">
			<u-skeleton :title="false" :rows="1" class="yuecardskeleton" loading rowsWidth="100%"></u-skeleton>
		</view>
		<view class="threebalance">
			<template v-if="infoShow">
				<view class="threebalance_every" @click="viewContract">
					<view class="threebalance_num">
						<text v-if="eyeShows">${{myInfo.todayIncome}}</text>
						<text v-else>******</text>
					</view>
					<view class="threebalance_title">
						{{$t('home.today_earnings')}}
					</view>
				</view>
				<view class="lines"></view>
				<view class="threebalance_every" @click="viewCapitalFlow">
					<view class="threebalance_num">
						<text v-if="eyeShows">${{myInfo.weekIncome}}</text>
						<text v-else>******</text>
					</view>
					<view class="threebalance_title">
						{{$t('home.earnings_this_week')}}
					</view>
				</view>
				<view class="lines"></view>
				<view class="threebalance_every" @click="viewCapitalFlow">
					<view class="threebalance_num">
						<text v-if="eyeShows">${{myInfo.totalIncome}}</text>
						<text v-else>******</text>
					</view>
					<view class="threebalance_title">
						{{$t('home.total_earnings')}}
					</view>
				</view>
			</template>
			<template v-else>
				<u-skeleton :title="false" :rows="1" class="threebalance_skeleton" loading
					rowsWidth="100%"></u-skeleton>
			</template>
		</view>
		<view class="rechargewithdrawal">
			<button class="everyone" size="default" type="default" @click="recharge">{{$t('home.charge')}}</button>
			<button class="everytwo" size="default" type="default" @click="withdrawal">{{$t('home.withdraw')}}</button>
		</view>
		<view class="asset_details" @click="viewAssetDetails">
			<view class="asset_details_left">
				<view class="asset_details_left_top">
					<view class="asset_details_left_top_style"></view>
					<view class="asset_details_left_top_title">{{$t('user.asset.details.index.asset_detail')}}</view>
				</view>
				<view class="asset_details_left_bottom">Asset details</view>
			</view>
			<image class="asset_details_right" src="@/static/user/property_img.png" mode=""></image>
		</view>
		<view class="heard_left">
			<image class="homecs" src="~@/static/index/homecs.png"></image>
			<text>{{$t('index.ai.creation')}}</text>

		</view>
		<view v-if="list.length>0">
			<u-swiper class="swiper_list" height="368" radius="20" :list="list" keyName="address" showTitle
				imgMode="widthFix" autoplay circular></u-swiper>
		</view>

		<!-- <view class="justcard">
			<view class="justcard_bottom">
				{{$t('home.pic.about')}}
				<image class="justcard_bottom_img" src="@/static/user/homecs1.png" mode=""></image>

			</view>
			<button class="justcard_top" @click="aboutUs">
				<view class="justcard_left">{{$t('home.pic.more')}}</view>
				<view class="justcard_right">
					<image class="justcard_right_img" src="@/static/user/homejiantou.png" mode=""></image>
				</view>
			</button>
		</view> -->
		<view class="funlist">
			<!-- <view @click="viewPortfolio">
				<view class="funlist_every">
					<view class="left"><text>{{$t('home.menu.showreel')}}</text></view>
					<view class="right">
						<image class="right_img" src="@/static/user/rightjt.png"></image>
					</view>
				</view>
			</view> -->
			<!-- <view>
				<view class="funlist_every" @click="viewAssetDetails">
					<view class="left"><text>{{$t('home.menu.asset_record')}}</text></view>
					<view class="right">
						<image class="right_img" src="@/static/user/rightjt.png"></image>
					</view>
				</view>
			</view> -->
			<!-- <view>
				<view class="funlist_every" @click="viewIslands">
					<view class="left"><text>{{$t('home.menu.islande')}}</text></view>
					<view class="right">
						<image class="right_img" src="@/static/user/rightjt.png"></image>
					</view>
				</view>
			</view> -->
			<!-- <view>
				<view class="funlist_every" @click="securityCenter">
					<view class="left"><text>{{$t('home.menu.security')}}</text></view>
					<view class="right">
						<image class="right_img" src="@/static/user/rightjt.png"></image>
					</view>
				</view>
			</view> -->
			<!-- <view>
				<view class="funlist_every" @click="helpCenter">
					<view class="left"><text>{{$t('home.menu.assist')}}</text></view>
					<view class="right">
						<image class="right_img" src="@/static/user/rightjt.png"></image>
					</view>
				</view>
			</view> -->
			<!-- <view>
				<view class="funlist_every" @click="viewNotice">
					<view class="left"><text>{{$t('home.menu.notice')}}</text></view>
					<view class="right">
						<image class="right_img" src="@/static/user/rightjt.png"></image>
					</view>
				</view>
			</view> -->

		</view>
		<Footer pageName='user'></Footer>

		<u-modal @confirm="setConfirm" @cancel="show=false" showCancelButton :cancelText="$t('model.tips7')" :confirmText="$t('model.tips8')"
			:show="show" :content='content'>
			<view class="slot-content" slot="default">
				<view class="slot-content_item">{{$t('model.tips5')}}</view>
				<view class="slot-content_item">{{$t('model.tips6')}}</view>
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
				eyeShow: false, //用户名展示
				eyeShows: true, //金额展示

				myInfo: {}, //我的信息
				infoShow: false, //是否显示
				myUserName: "", //我的用户名
				show: false, //温馨提示模态框
				content: "", //提示框内容
				setIndex: null, //设置索引
				tips: this.$t("user.islands.sc.sn.i1"), //温馨提示国际化
				list: [], //轮播图列表
			}
		},
		created() {},
		onShow() {
			this.getMyInfo();
			this.$store.dispatch('app/getUnread')
		},
		methods: {
			// 获取我的信息
			getMyInfo() {
				if (uni.getStorageSync("user").phone) {
					this.myUserName = uni.getStorageSync("user").phone
				} else {
					this.myUserName = uni.getStorageSync("user").email
				}
				uni.request({
					url: '/member/myWallet',
					method: "GET",
					success: (res) => {
						this.infoShow = true;
						this.myInfo = res.data;
						console.log(res);
					}
				});
				uni.request({
					url: `/workImage/listForUser`,
					method: "POST",
					data: {
						keyword: "",
						pageNum: 1,
						pageSize: 10
					},
					success: (res) => {
						this.list = res.data.rows;
					}
				});
			},
			// 等级说明
			levelDesc() {
				uni.navigateTo({
					url: `/pages/user/leveldesc`
				});
			},
			// 设置完整性判断
			setConfirm() {
				this.show = false;
				uni.navigateTo({
					url: `/pages/user/securitycenter/setEmail`
				});
			},
			// 查看通知
			viewNotices() {
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
					url: `/pages/user/exchange_index/index`
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
				// uni.navigateTo({
				// 	url: `/pages/user/withdrawal`
				// });
				uni.request({
					url: `/member/getAccountIsComplete`,
					method: "GET",
					success: (res) => {
						if (res.code == 200) {
							if (!res.data.email&&!res.data.phone) {
								this.show = true;
							} else {
								uni.navigateTo({
									url: `/pages/user/withdrawal`
								});
							}
						} else if (res.code == 500) {
							uni.$u.toast(this.$t("model.tips4"))
						}

					}
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
			// 安全中心
			securityCenter() {
				uni.navigateTo({
					url: `/pages/user/securitycenter/index`
				});
			},
			// 查看公告
			viewNotice() {
				uni.navigateTo({
					url: `/pages/user/notice`
				});
			},
			// 帮助中心
			helpCenter() {
				uni.navigateTo({
					url: `/pages/user/helpcenter/index`
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
		min-height: 100vh;
		padding: 16px;
		box-sizing: border-box;
		background-color: #fff;

		.login_out {
			.u-popup__content {
				border-radius: 30px !important;
			}
		}

		.u-modal__content {
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			padding: 10px;
			.slot-content{
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;
				color: #000;
				.slot-content_item{
					height: 30px;
					line-height: 30px;
				}
			}
		}

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

			.user_head_right_set {
				width: 60rpx;
				height: 60rpx;
			}

			.user_head_right_content {
				margin-left: 48rpx;
				width: 64rpx;
				height: 64rpx;
				border-radius: 20px;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;

				.badge {
					z-index: 111;
				}

				.user_head_right_content_img {
					width: 60rpx;
					height: 60rpx;
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
						font-size: 20px;
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
					justify-content: center;
					margin: 0;
					font-size: 12px;
					margin-bottom: -5px;
					height: 36px;
					line-height: 15px;
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

					.yuecardtopevery_one {
						width: 100%;
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

		.asset_details {
			width: 100%;
			height: 148rpx;
			margin-top: 40rpx;
			background: url("@/static/user/property_bg.png") no-repeat;
			background-size: cover;
			padding: 20rpx 46rpx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.asset_details_left {
				.asset_details_left_top {
					display: flex;
					align-items: center;
					margin-bottom: 4rpx;

					.asset_details_left_top_style {
						width: 4px;
						height: 16px;
						background: #0077FF;
						border-radius: 0px 0px 0px 0px;
					}

					.asset_details_left_top_title {
						margin-left: 8rpx;
						font-size: 18px;
						font-family: PingFang SC, PingFang SC;
						font-weight: bold;
						color: #4A567D;
					}
				}

				.asset_details_left_bottom {
					margin-left: 16rpx;
					font-size: 10px;
					font-family: PingFang SC, PingFang SC;
					font-weight: bold;
					color: rgba(89, 98, 126, 0.38);
				}
			}

			.asset_details_right {
				width: 116rpx;
				height: 116rpx;
			}
		}

		.heard_left {
			margin-top: 20px;
			margin-bottom: 6px;
			display: flex;
			align-items: center;

			.homecs {
				width: 50rpx;
				height: 50rpx;
			}

			text {
				margin-left: 10rpx;
				color: #1b1b1b;
				font-size: 38rpx;
				font-weight: bold;

			}
		}

		// .swiper_list {
		// 	height: 368px !important;
		// 	.u-swiper__wrapper{
		// 		height: 368px !important;
		// 	}

		// 	.u-swiper__wrapper__item__wrapper__title {
		// 		bottom: 0px;
		// 	}
		// }

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
			margin-bottom: 132px;
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