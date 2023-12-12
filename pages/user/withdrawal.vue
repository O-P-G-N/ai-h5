<template>
	<view class="withdrawal">
		<u-navbar @leftClick="goBackUser" :leftText="$t('user.about.i1')" :title="$t('user.capital_flow.i41')"
			:safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main" v-if="pageIndex==0">
			<u-cell-group :border="false">
				<u-cell :title="userType==1?$t('user.islands.sc.edp.i2'):$t('user.islands.sc.edp.i3')">
					<view slot="value" class="email_content">
						<u-input class="email_content_text" v-model="userName">
							<view slot="suffix" class="email_content_btn">
								<u-code unique-key="withdrawal" :start-text="$t('user.islands.sc.edp.i4')" ref="uCode"
									@change="codeChange" :changeText="'X'+ $t('user.islands.sc.edp.i5')"></u-code><text
									@click="getCode">{{tips}}</text>
							</view>
						</u-input>
					</view>
				</u-cell>
				<u-cell :title="$t('user.islands.sc.edp.i6')">
					<view slot="value" class="code_content">
						<input v-model="from.code" type="number" class="uni-input" maxlength="10"
							:placeholder="$t('user.islands.sc.edp.i61')" />
					</view>
				</u-cell>
				<u-cell :title="$t('user.capital_flow.i411')" :isLink="true" @click="withdrawalCurrency">
					<view slot="value" class="withdrawal_currency">
						<input disabled class="uni-input" v-model="currencyType"
							placeholder="$t('user.capital_flow.i412')" />
					</view>
				</u-cell>
				<u-cell :title="$t('user.capital_flow.i59')">
					<view slot="value" class="code_content">
						<input v-model="from.payAddress" class="uni-input" :placeholder="$t('user.capital_flow.i62')" />

					</view>
				</u-cell>
				<u-cell :title="$t('user.capital_flow.i42')">
					<view slot="value" class="code_content">
						<input class="uni-input" type="number" v-model="from.amount"
							:placeholder="$t('user.capital_flow.i43')" />
					</view>
				</u-cell>
				<u-cell :title="$t('user.capital_flow.i44')">
					<view slot="value" class="code_content">
						<input disabled class="uni-input" type="number" v-model="realityAmount"
							:placeholder="$t('user.capital_flow.i43')" />
					</view>
				</u-cell>
				<u-cell class="receipt_time" :title="$t('user.con_detail.i82')" :isLink="true" @click="selectBy"
					:value="selectType">
				</u-cell>
				<u-cell :title="$t('user.capital_flow.i45')" :value="commissionRate" :label="lableText"></u-cell>
				<u-cell :title="$t('user.capital_flow.i46')" :value="withdrawalInfo.withdrawMin"></u-cell>
				<u-cell :title="$t('user.capital_flow.i47')" :value="withdrawalInfo.withdrawMax"></u-cell>
				<u-cell :title="$t('user.capital_flow.i48')">
					<view slot="value" class="code_content">
						<u-input v-model="from.withdrawPassword" @focus="focusNew"
							:placeholder="$t('user.capital_flow.i49')" :type="eyeShow?'password':'number'">
							<image @click="showHidden" slot="suffix" class="eye"
								:src="eyeShow?'../../static/login/close.png':'../../static/login/open.png'" mode="">
							</image>
						</u-input>
					</view>
				</u-cell>
				<!-- <u-cell :title="$t('user.capital_flow.i50')"
					:value="withdrawalInfo.questionList.length>0?withdrawalInfo.questionList[0].value:''"></u-cell>
				<u-cell :title="$t('user.capital_flow.i51')">
					<view slot="value" class="code_content">
						<input v-model="from.answer" class="uni-input" maxlength="10" :placeholder="$t('user.capital_flow.i52')" />
					</view>
				</u-cell> -->
			</u-cell-group>
			<ai-button :btnHeight="'53px'" :bg="'#333'" :disabled="forbidden" :loading="loading" class="editpassbtn"
				@click="subApplication">{{$t('user.capital_flow.i53')}}</ai-button>
			<!-- <button class="editpassbtn" @click="subApplication">提交</button> -->
		</view>
		<view class="miain" v-else-if="pageIndex==1">

			<view class="step">
				<view class="steps">
					<view class="steps_item">
						<image class="slot-icon_one" src="@/static/user/startIcon.png" mode=""></image>
						<view class="steps_item_line_one"></view>
					</view>
					<view class="steps_content">
						<view class="steps_content_title">{{$t('user.capital_flow.i54')}}</view>
					</view>
				</view>
				<view class="steps">
					<view class="steps_item_two">
						<image class="slot-icon_two" src="@/static/user/wait.png" mode=""></image>
						<view class="steps_item_line_two"></view>
					</view>
					<view class="steps_content">
						<view class="steps_content_title_two">{{$t('user.capital_flow.i55')}}</view>
						<view class="desc">
							{{from.speed==1?$t('user.capital_flow.i94'):from.speed==2?$t('user.capital_flow.i95'):from.speed==3?$t('user.capital_flow.i96'):''}}
						</view>
					</view>
				</view>
				<view class="steps">
					<view class="steps_item">
						<view class="slot-icon_three"></view>
					</view>
					<view class="steps_content">
						<view class="steps_content_title">{{$t('user.capital_flow.i57')}}</view>
					</view>
				</view>
			</view>
			<view class="divider"></view>
			<view class="withdrawal_amount">
				<view class="withdrawal_amount_title">{{$t('user.capital_flow.i58')}}：</view>
				<view class="withdrawal_amount_text">{{from.amount}}</view>
			</view>
			<view class="withdrawal_add">
				<view class="withdrawal_add_title">{{$t('user.capital_flow.i59')}}：</view>
				<view class="withdrawal_add_text">{{from.payAddress}}</view>
			</view>
			<button class="complete_btn" @click="completeBtn">{{$t('user.capital_flow.i61')}}</button>
		</view>
		<u-modal :title="$t('user.islands.sc.sn.i1')" :show="tipsShow" closeOnClickOverlay>
			<view>
				<view class="footercontent">
					<text class="text">
						{{$t('user.capital_flow.i800')}}:
						<br />
						{{$t('user.capital_flow.i80')}}
						<br />
						① {{$t('user.capital_flow.i81')}}
						<br />
						② {{$t('user.capital_flow.i82')}}
						<br />
						③{{$t('user.capital_flow.i83')}}
						<br />
						④{{$t('user.capital_flow.i84')}}
						<br />
						⑤{{$t('user.capital_flow.i85')}}
						<br />
						⑥{{$t('user.capital_flow.i86')}}
						<br />
						⑦{{$t('user.capital_flow.i87')}}
					</text>
				</view>
				<u-checkbox-group activeColor="#333" v-model="checkboxValue" shape="circle">
					<u-checkbox :label="$t('user.con_detail.i64')" :name="1">
					</u-checkbox>
				</u-checkbox-group>
			</view>
			<button class="tips_btn" @click="determine" slot="confirmButton">{{$t('user.capital_flow.i12')}}</button>
		</u-modal>
		<u-keyboard :safeAreaInsetBottom="true" ref="uKeyboard" @confirm="numShow=false" @cancel="numShow=false"
			:cancelText="$t('index.cancellation')" :confirmText="$t('index.determine')" @change="valChange"
			mode="number" @backspace="backspace" :dotDisabled="true" :show="numShow"></u-keyboard>
		<u-picker closeOnClickOverlay @cancel="close" :cancelText="$t('index.cancellation')"
			:confirmText="$t('index.determine')" keyName="name" @confirm="confirm" @close="close" :show="show"
			:columns="columns"></u-picker>
		<u-picker closeOnClickOverlay @cancel="closes" :cancelText="$t('index.cancellation')"
			:confirmText="$t('index.determine')" keyName="name" @confirm="confirms" @close="closes" :show="shows"
			:columns="column"></u-picker>
	</view>
</template>

<script>
	import currency from "currency.js"
	export default {
		data() {
			return {
				userName: "", //用户名
				currencyType: " USDT-TRC20", //币种名称
				selectType: this.$t("user.con_detail.i79"), //到账时间
				realityAmount: "", //实际提现金额
				from: {
					type: "1", //币种
					amount: "", //提币数量
					payAddress: "", //提现地址
					code: "", //验证码
					questionKey: "", //密保Key
					withdrawPassword: "", //交易密码
					answer: "", //密保答案
					speed: "1", //到账时间
				}, //表单验证
				show: false, //选择币种状态
				shows: false, //到账时间状态
				lableText: "",
				columns: [
					[{
						type: "1",
						name: ' USDT-TRC20'
					}, {
						type: "2",
						name: ' USDT-ERC20'
					}, {
						type: "3",
						name: ' USDT-BSC'
					}]
				],
				column: [
					[{
						type: "1",
						name: this.$t("user.con_detail.i79")
					}, {
						type: "2",
						name: this.$t("user.con_detail.i80")
					}, {
						type: "3",
						name: this.$t("user.con_detail.i81")
					}]
				],
				tipsShow: false, //温馨提示弹窗状态
				content: "", //弹窗内容
				userType: "", //用户类型
				pageIndex: 0, //页面索引,
				withdrawalInfo: {
					questionList: []
				}, //提现相关信息
				commissionRate: "", //提现手续费
				eyeShow: true, //密码状态
				loading: false, //按钮等待状态
				forbidden: false, //是否禁用按钮
				tips: "", //提示语
				checkboxValue: [], //勾选提示
				numShow: false, //数字键盘状态
			}
		},
		onShow() {
			this.getUserName();
			this.getWithdrawalInfo()
			uni.hideKeyboard()
			this.$nextTick(()=>{
				this.numShow=false;
			})
			this.lableText = this.$t('user.capital_flow.i451') + "5%"
		},
		onReady() {
			uni.request({
				url: '/help/getAlertInfo',
				method: "GET",
				data: {
					type: 2
				},
				success: (res) => {
					if (res.code == 200) {
						if (res.data == 0) {
							this.tipsShow = true;
						} else {
							this.tipsShow = false;
						}
					} else if (res.code == 500) {

					}
				}
			});
		},
		methods: {
			// 获取账号
			getUserName() {
				if (uni.getStorageSync("user").phone) {
					this.userName = uni.getStorageSync("user").phone;
					this.userType = 1;
				} else {
					this.userName = uni.getStorageSync("user").email;
					this.userType = 2;
				}
			},
			// 获取提现相关信息
			getWithdrawalInfo() {
				uni.request({
					url: `/withdraw/getWithdrawInfo`,
					method: "GET",
					success: (res) => {
						this.withdrawalInfo = res.data;
						// this.from.questionKey = res.data.questionList[0].key;
					}
				});
				// uni.request({
				// 	url: `/aicommon/getDict`,
				// 	method: "GET",
				// 	data: {
				// 		dictType: 'fee'
				// 	},
				// 	success: (res) => {
				// 		this.commissionRate = res.data[0].dictValue;
				// 	}
				// });
			},
			// 计算金额
			calculateAmount(val) {
				console.log("1", this.amount);

			},
			// 输入密码聚焦
			focusNew(val) {
				uni.hideKeyboard()
				this.numShow = true;
			},
			valChange(val) {
				this.from.withdrawPassword += val;
				if (this.from.withdrawPassword.length > 6) {
					this.numShow = false;
					if (this.from.withdrawPassword.length) this.from.withdrawPassword = this.from.withdrawPassword.substr(
						0, this.from
						.withdrawPassword.length - 1)
				}
			},
			//退格
			backspace() {
				if (this.from.withdrawPassword.length) this.from.withdrawPassword = this.from.withdrawPassword.substr(0,
					this.from
					.withdrawPassword.length - 1)
			},

			// 关闭弹窗
			determine() {
				if (this.checkboxValue.length > 0) {
					uni.request({
						url: '/help/saveAlertInfo',
						method: "GET",
						data: {
							type: 2
						},
						success: (res) => {
							if (res.code == 200) {
								this.tipsShow = false;
							} else if (res.code == 500) {

							}
						}
					});
				} else {
					this.tipsShow = false;
				}
			},
			// 获取验证码
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					this.$refs.uCode.start();
					uni.request({
						url: `/aicommon/sendCodeMustToken`,
						method: "GET",
						data: {
							type: this.userType
						},
						success: (res) => {
							if (res.code == 200) {
								uni.$u.toast(this.$t('user.islands.sc.edp.i15'));
							}
						}
					});
				} else {
					uni.$u.toast(this.$t('user.islands.sc.edp.i17'));
				}
			},
			// 提示语
			codeChange(text) {
				this.tips = text;
			},
			// 显示隐藏
			showHidden() {
				this.eyeShow = !this.eyeShow
			},
			// 返回个人中心
			goBackUser() {
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			// 提现币种
			withdrawalCurrency() {
				this.show = true
			},
			// 点击屏蔽罩关闭
			close() {
				this.show = false;
			},
			// 确定选择币种按钮
			confirm(val) {
				this.show = false;
				this.from.type = val.value[0].type;
				this.currencyType = val.value[0].name;
			},
			// 到账时间
			selectBy() {
				this.shows = true
			},
			// 点击屏蔽罩关闭
			closes() {
				this.shows = false;
			},
			// 确定选择到账时间按钮
			confirms(val) {
				let num = null
				if (val.value[0].type == 1) {
					num = "5%";
				} else if (val.value[0].type == 2) {
					num = "2.5%";
				} else {
					num = "2%"
				}
				this.shows = false;
				this.from.speed = val.value[0].type;
				this.selectType = val.value[0].name;
				this.from.amount = "";
				this.commissionRate = "";
				this.realityAmount = "";
				this.lableText = this.$t('user.capital_flow.i451') + num
			},
			// 提交提现申请
			subApplication() {
				let that = this
				if (that.from.code == "") {
					uni.$u.toast(that.$t('user.islands.sc.edp.i16'));
					return
				} else if (that.from.payAddress == "") {
					uni.$u.toast(that.$t('user.capital_flow.i62'));
					return
				} else if (that.from.amount == "") {
					uni.$u.toast(that.$t('user.capital_flow.i63'));
					return
				} else if (that.from.withdrawPassword == "") {
					uni.$u.toast(that.$t('user.capital_flow.i64'));
					return
				} else if (that.from.amount < that.withdrawalInfo.withdrawMin) {
					uni.$u.toast(`${that.$t('user.capital_flow.i66')}：${that.withdrawalInfo.withdrawMin}`);
					return
				} else if (that.from.amount > that.withdrawalInfo.withdrawMax) {
					uni.$u.toast(`${that.$t('user.capital_flow.i67')}：${that.withdrawalInfo.withdrawMax}`);
					return
				} else {
					uni.showLoading({
						title: that.$t('user.con_detail.i47'),
						mask: true
					})
					that.forbidden = true;
					that.loading = true;
					uni.request({
						url: `/withdraw/withdrawApply`,
						method: "POST",
						data: that.from,
						success: (res) => {
							if (res.code == 200) {
								that.forbidden = false;
								that.loading = false;
								uni.$u.toast(that.$t('user.capital_flow.i68'));
								that.pageIndex = 1;
								uni.hideLoading()
							} else {
								that.forbidden = false;
								that.loading = false;
								uni.hideLoading()

							}

						}
					});
				}
			},
			// 完成按钮
			completeBtn() {
				uni.switchTab({
					url: `/pages/user/index`
				});
			}
		},
		watch: {
			"from.amount": {
				handler(val) {
					let commission = null;
					if (this.from.speed == 1) {
						commission = 0.05
					} else if (this.from.speed == 2) {
						commission = 0.025
					} else {
						commission = 0.02
					}
					if (val.split(".").length > 1) {
						if (val.split(".")[1].length <= 6) {
							this.commissionRate = currency(val, {
								precision: 6
							}).multiply(commission).value;
							this.realityAmount = currency(val, {
								precision: 6
							}).subtract(this.commissionRate).value;
						} else {
							this.$nextTick(() => {
								this.from.amount = val.split(".")[0].concat(".").concat(val.split(".")[1]
									.substring(0, 6))
							})
							this.commissionRate = currency(val.split(".")[0].concat(".").concat(val.split(".")[1]
								.substring(0, 6)), {
								precision: 6
							}).multiply(commission).value;
							this.realityAmount = currency(val, {
								precision: 6
							}).subtract(this.commissionRate).value;
						}
					} else {
						if (this.from.amount.length > 0) {
							this.commissionRate = currency(val, {
								precision: 6
							}).multiply(commission).value;
							this.realityAmount = currency(val, {
								precision: 6
							}).subtract(this.commissionRate).value;
						}

					}
				},
				deep: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.withdrawal {
		min-height: 95vh;
		overflow: hidden;
		padding: 20px;
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
			.u-line {
				display: none;
			}

			.u-cell {
				background: #f5f6fa;
				border-radius: 17px;
				margin-bottom: 15px;

				.u-cell__body {
					padding: 20px 15px;
					justify-content: space-between;

					.u-cell__body__content {
						flex: unset !important;
						margin-right: 10px;

						.u-cell__label {
							margin-top: 0;
						}

						.u-cell__title-text {
							font-size: 15px;
							line-height: 22px;
							color: #303133;
						}
					}
				}
			}

			.receipt_time {
				.u-cell__body {
					.u-cell__body__content {

						flex: 1 !important;
					}
				}
			}

			.email_content {
				display: flex;
				align-items: center;

				.email_content_text {
					padding: 0 !important;
				}

				.email_content_btn {
					padding: 2px 5px;
					border-radius: 10px;
					font-size: 12px;
					box-sizing: border-box;
					background: #00bfff;
					color: #fff;
				}

				uni-button:after {
					border: none;
				}
			}

			.code_content {
				flex: 1;

				.uni-input-placeholder {
					text-align: end;
					color: rgb(192, 196, 204);
				}

				.u-form-item__body {
					padding: 0;
				}

				.uni-input-input {
					text-align: right;
				}

				.eye {
					width: 21px;
					height: 21px;
				}
			}

			.withdrawal_currency {
				display: flex;
				flex: 1;
				align-items: center;
				justify-content: flex-end;
				margin-right: 5px;

				.uni-input-placeholder {
					text-align: end;
					color: rgb(192, 196, 204);
				}

				.uni-input {
					text-align: right;
				}
			}

			.editpassbtn {
				background: #333;
				height: 53px;
				line-height: 53px;
				color: #fff;
				letter-spacing: 1px;
				border-radius: 56px;
			}
		}

		.u-popup__content {
			border-radius: 16px !important;
		}

		.u-toolbar__wrapper__confirm {
			color: rgb(0, 0, 0) !important;
		}

		.u-checkbox-group {
			margin-top: 20rpx;
		}

		.tips_btn {
			width: 100%;
			height: 48px;
			line-height: 48px;
			text-align: center;
			color: #fff;
			font-size: 16px;
			background: #333;
			border-radius: 56px;
			border: unset !important;
		}

		.miain {
			.step {
				height: 300px;
				display: flex;
				flex-direction: column;

				.steps {
					width: 100%;
					height: 100px;
					display: flex;
					align-items: center;

					.steps_item {
						display: flex;
						flex-direction: column;
						height: 100%;
						width: 30px;
						align-items: center;
						margin-top: 5px;

						.slot-icon_one {
							width: 14px;
							height: 14px;
						}

						.steps_item_line_one {
							height: calc(100% - 14px);
							border-left: 1px dashed #5ABC6F;
						}

						.slot-icon_three {
							width: 14px;
							height: 14px;
							background-color: #E5E5E5;
							border-radius: 50%;
						}
					}

					.steps_item_two {
						display: flex;
						flex-direction: column;
						height: 100%;
						width: 30px;
						align-items: center;

						.steps_item_line_two {
							height: calc(100% - 30px);
							border-left: 1px dashed #E5E5E5;
						}

						.slot-icon_two {
							width: 30px;
							height: 30px;
						}
					}

					.steps_content {
						margin-left: 10px;
						flex: 1;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: flex-start;
						color: #7D7D7D;

						.steps_content_title {}

						.steps_content_title_two {
							display: flex;
							align-items: center;
							height: 30px;
							color: #1D1D1D;
						}

						.desc {
							font-size: 15px;
							font-family: PingFang SC-Regular, PingFang SC;
							font-weight: 400;
							color: #7D7D7D;
						}
					}
				}



			}

			.divider {
				width: 100%;
				height: 1px;
				background-color: #E5E5E5;
				margin-bottom: 30px;
			}


			.withdrawal_amount {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.withdrawal_amount_title {
					font-size: 14px;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #7D7D7D;
				}

				.withdrawal_amount_text {
					font-size: 14px;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #1D1D1D;
				}
			}

			.withdrawal_add {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.withdrawal_add_title {
					font-size: 14px;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #7D7D7D;
				}

				.withdrawal_add_text {
					width: 50%;
					word-wrap: anywhere;
					font-size: 14px;
					font-family: PingFang SC-Bold, PingFang SC;
					font-weight: bold;
					color: #1D1D1D;
				}
			}

			.complete_btn {
				margin-top: 150px;
				font-size: 16px;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #1D1D1D;
				width: 176px;
				border: none;
			}

			uni-button:after {
				border: none;
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
		.u-transition{
			background-color: transparent !important;
		}
	}
</style>