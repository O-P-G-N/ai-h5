<template>
	<view class="recharge">
		<u-navbar @leftClick="goBackUser" :leftText="$t('user.about.i1')" :title="$t('user.capital_flow.i33')"
			:safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="container_nei">
			<view class="main">
				<view class="usdt_select">
					<view class="top_jm">
						<image class="top_jm_img" src="@/static/user/cryptocurrency-coins.png" mode=""></image>
						<text class="top_jm_text">{{$t('user.capital_flow.i34')}}</text>
					</view>
					<view class="border_bt"></view>
					<view class="rc_item" @click="checkEthBtn(1)">
						<view class="left_img">
							<image class="left_img_content" src="@/static/user/eth.png" mode=""></image>
						</view>
						<view class="names">
							<view class="n_title"> USDT-TRC20</view>
							<view class="n_del">TRON</view>
						</view>
						<view class="left_border" :class="from.type==1?'active':''"></view>
						<view class="select_op">
							<uni-icons :type="from.type==1?'checkbox-filled':'circle'" size="18"></uni-icons>

						</view>
					</view>
					<view class="rc_item" @click="checkEthBtn(2)">
						<view class="left_img">
							<image class="left_img_content" src="@/static/user/eth2.png" mode=""></image>
						</view>
						<view class="names">
							<view class="n_title"> USDT-ERC20</view>
							<view class="n_del">Ethereum</view>
						</view>
						<view class="left_border" :class="from.type==2?'active':''"></view>
						<view class="select_op">
							<uni-icons :type="from.type==2?'checkbox-filled':'circle'" size="18"></uni-icons>

						</view>
					</view>
					<view class="rc_item" @click="checkEthBtn(3)">
						<view class="left_img">
							<image class="left_img_content" src="@/static/user/BSC.png" mode=""></image>
						</view>
						<view class="names">
							<view class="n_title"> USDT-BSC</view>
							<view class="n_del">Binance</view>
						</view>
						<view class="left_border" :class="from.type==3?'active':''"></view>
						<view class="select_op">
							<uni-icons :type="from.type==3?'checkbox-filled':'circle'" size="18"></uni-icons>

						</view>
					</view>
				</view>
				<view class="ctitle">{{$t('user.capital_flow.i35')}}</view>
				<view class="czj_sss">
					<input type="number" v-model="from.amount" class="uni-input" :placeholder="$t('user.con_detail.i65')" />
				</view>
				<ai-button :btnHeight="'51px'" :bg="'#333'" :disabled="forbidden" :loading="loading" class="chuangjian"
					@click="nextStep">{{$t('user.capital_flow.i36')}}</ai-button>
				<!-- <button class="chuangjian" @click="nextStep">下一步</button> -->
			</view>
		</view>
		<u-modal :show="show" :title="$t('user.islands.sc.sn.i1')">
			<view>
				<view class="footercontent">
					<text class="text">
						{{$t('user.capital_flow.i800')}}
						<br />
						{{$t('user.capital_flow.i90')}}
						<br />
						<br />
						①{{$t('user.capital_flow.i91')}}
						<br />
						②{{$t('user.capital_flow.i92')}}
						<br />
						③{{$t('user.capital_flow.i93')}}
					</text>
				</view>
				<u-checkbox-group activeColor="#333" v-model="checkboxValue" shape="circle">
					<u-checkbox :label="$t('user.con_detail.i64')" :name="1">
					</u-checkbox>
				</u-checkbox-group>
			</view>

			<button slot="confirmButton" @click="determine" class="zhuiaddbtn">{{$t('user.capital_flow.i12')}}</button>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				content: "", //富文本内容
				from: {
					type: 1, //选择的货币
					amount: "", //输入的金额
				},
				forbidden: false, //是否禁用
				loading: false, //加载状态
				checkboxValue: [], //勾选框
			};
		},
		onLoad(option) {
			if (option.show == 1) {
				this.show = false;
			} else {
				uni.request({
					url: '/help/getAlertInfo',
					method: "GET",
					data: {
						type: 1
					},
					success: (res) => {
						if (res.code == 200) {
							if (res.data == 0) {
								this.show = true;
							} else {
								this.show = false;
							}
						} else if (res.code == 500) {

						}
					}
				});
			}
		},
		methods: {
			// 返回个人中心
			goBackUser() {
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			// 选择货币
			checkEthBtn(num) {
				this.from.type = num;
			},
			// 关闭弹窗
			determine() {
				if (this.checkboxValue.length > 0) {
					uni.request({
						url: '/help/saveAlertInfo',
						method: "GET",
						data: {
							type: 1
						},
						success: (res) => {
							if (res.code == 200) {
								this.show = false;
							} else if (res.code == 500) {

							}
						}
					});
				} else {
					this.show = false;
				}
			},
			// 下一步
			nextStep() {
				let that = this
				if (!that.from.amount) {
					uni.$u.toast(that.$t('user.capital_flow.i37'));
					return
				} else if (that.from.amount < 10) {
					uni.$u.toast(that.$t('user.capital_flow.i38') + '10.00');
					return
				} else {
					that.forbidden = true;
					that.loading = true;
					uni.showLoading({
						title: that.$t('user.con_detail.i46'),
						mask: true
					})
					uni.request({
						url: '/recharge/getPayinfo',
						method: "POST",
						data: that.from,
						success: (res) => {
							if (res.code == 200) {
								that.forbidden = false;
								that.loading = false;
								// console.log(res.data);
								uni.hideLoading()
								uni.navigateTo({
									url: `/pages/user/starpay?to=${res.data.to}&actionId=${res.data.actionId}&amount=${that.from.amount}&type=${that.from.type==1?' USDT-TRC20':that.from.type==2?' USDT-ERC20':that.from.type==3?' USDT-BSC':''}`
								});
							} else if (res.code == 500) {
								uni.hideLoading()
								that.forbidden = false;
								that.loading = false;
							}
						}
					});

				}
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

						.active {
							background: #1fa0b3;
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

					.uni-input {
						width: 100%;
					}
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

		.u-checkbox-group {
			margin-top: 20rpx;
		}

		.zhuiaddbtn {
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