<template>
	<view class="withdrawal">
		<u-navbar @leftClick="goBackUser" leftText="返回" title="提现" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main" v-if="pageIndex==0">
			<u-cell-group :border="false">
				<u-cell :title="userType==1?'手机号':'邮箱账号'">
					<view slot="value" class="email_content">
						<u-input class="email_content_text" v-model="userName">
							<button slot="suffix" class="email_content_btn" @click="getCode">获取验证码</button>
						</u-input>
					</view>
				</u-cell>
				<u-cell title="验证码">
					<view slot="value" class="code_content">
						<input v-model="from.code" type="number" class="uni-input" maxlength="10"
							placeholder="请输入验证码" />
					</view>
				</u-cell>
				<u-cell title="提现币种" :isLink="true" @click="withdrawalCurrency">
					<view slot="value" class="withdrawal_currency">
						<input disabled class="uni-input" v-model="currencyType" placeholder="请选择提现币种" />
					</view>
				</u-cell>
				<u-cell title="提现地址">
					<view slot="value" class="code_content">
						<input v-model="from.payAddress" class="uni-input" placeholder="请输入提现地址" />

					</view>
				</u-cell>
				<u-cell title="提币数量">
					<view slot="value" class="code_content">
						<input class="uni-input" type="number" @input="calculateAmount" v-model="from.amount"
							placeholder="请输入提币数量" />
					</view>
				</u-cell>
				<u-cell title="实际到账">
					<view slot="value" class="code_content">
						<input disabled class="uni-input" type="number" v-model="realityAmount" placeholder="请输入提币数量" />
					</view>
				</u-cell>
				<u-cell title="资金管理费" :value="commissionRate" label="本金提款金额的3%,收益提款金额的5%"></u-cell>
				<u-cell title="最小提币数量" :value="withdrawalInfo.withdrawMin"></u-cell>
				<u-cell title="最大提币数量" :value="withdrawalInfo.withdrawMax"></u-cell>
				<u-cell title="交易密码">
					<view slot="value" class="code_content">
						<u-input v-model="from.withdrawPassword" placeholder="密码" :password="eyeShow">
							<image @click="showHidden" slot="suffix" class="eye"
								:src="eyeShow?'../../static/login/close.png':'../../static/login/open.png'" mode="">
							</image>
						</u-input>
					</view>
				</u-cell>
				<u-cell title="密保问题"
					:value="withdrawalInfo.questionList.length>0?withdrawalInfo.questionList[0].value:''"></u-cell>
				<u-cell title="密保答案">
					<view slot="value" class="code_content">
						<input v-model="from.answer" class="uni-input" maxlength="10" placeholder="请输入密保答案" />
					</view>
				</u-cell>
			</u-cell-group>
			<ai-button :btnHeight="'53px'" :bg="'#333'" :disabled="forbidden" :loading="loading" class="editpassbtn" @click="subApplication">提交</ai-button>
			<!-- <button class="editpassbtn" @click="subApplication">提交</button> -->
		</view>
		<view class="miain" v-else-if="pageIndex==1">
			<view class="step">
				<u-steps current="1" direction="column">
					<u-steps-item title="发起提现">
						<image class="slot-icon" slot="icon" src="@/static/user/startIcon.png"></image>
						<view slot="desc" class="desc"></view>
					</u-steps-item>
					<u-steps-item class="active" iconSize="30" title="处理中">
						<image class="slot-icon" slot="icon" src="@/static/user/wait.png"></image>
						<view slot="desc" class="desc">预计1-2小时内到账</view>
					</u-steps-item>
					<u-steps-item title="到账成功">
						<text class="end_icon" slot="icon"></text>
						<view slot="desc" class="desc"></view>
					</u-steps-item>
				</u-steps>
			</view>
			<view class="divider"></view>
			<view class="withdrawal_amount">
				<view class="withdrawal_amount_title">提现金额：</view>
				<view class="withdrawal_amount_text">{{from.amount}}</view>
			</view>
			<view class="withdrawal_add">
				<view class="withdrawal_add_title">提现地址：</view>
				<view class="withdrawal_add_text">{{from.payAddress}}</view>
			</view>
			<button class="complete_btn" @click="completeBtn">完成</button>
		</view>
		<u-modal title="温馨提示" :show="tipsShow" :content="content" closeOnClickOverlay>
			<button class="tips_btn" @click="tipsShow = false" slot="confirmButton">确定</button>
		</u-modal>
		<u-picker closeOnClickOverlay @cancel="close" keyName="name" @confirm="confirm" @close="close" :show="show"
			:columns="columns"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: "", //用户名
				currencyType: "红包-TRC20", //币种名称
				realityAmount: "", //实际提现金额
				from: {
					type: "1", //币种
					payAddress: "", //提现地址
					code: "", //验证码
					amount: "", //提币数量
					questionKey: "", //密保Key
					withdrawPassword: "", //交易密码
					answer: "", //密保答案
				}, //表单验证
				show: false, //选择币种状态
				columns: [
					[{
						type: "1",
						name: '红包-TRC20'
					}, {
						type: "2",
						name: '红包-ERC20'
					}]
				],
				tipsShow: true, //温馨提示弹窗状态
				content: "", //弹窗内容
				userType: "", //用户类型
				pageIndex: 0, //页面索引,
				withdrawalInfo: {
					questionList: []
				}, //提现相关信息
				commissionRate: "", //提现手续费
				eyeShow: true, //密码状态
			}
		},
		onShow() {
			this.getUserName();
			this.getWithdrawalInfo()
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
						this.from.questionKey = res.data.questionList[0].key;
					}
				});
				uni.request({
					url: `/aicommon/getDict`,
					method: "GET",
					data: {
						dictType: 'fee'
					},
					success: (res) => {
						this.commissionRate = res.data[0].dictValue;
					}
				});
			},
			// 计算金额
			calculateAmount(val) {
				if (Number(val.detail.value) - Number(this.commissionRate) < 0) {
					this.realityAmount = 0
				} else {
					this.realityAmount = Number(val.detail.value) - Number(this.commissionRate)
				}
			},
			// 获取验证码
			getCode() {
				uni.request({
					url: `/aicommon/sendCodeMustToken`,
					method: "GET",
					data: {
						type: this.userType
					},
					success: (res) => {
						if (res.res.code == 200) {
							uni.$u.toast('验证码发送成功');
						}
					}
				});
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
			// 提交提现申请
			subApplication() {
				if (this.from.code == "") {
					uni.$u.toast('请输入验证码');
					return
				} else if (this.from.payAddress == "") {
					uni.$u.toast('请输入提现地址');
					return
				} else if (this.from.amount == "") {
					uni.$u.toast('请输入提现数量');
					return
				} else if (this.from.withdrawPassword == "") {
					uni.$u.toast('请输入交易密码');
					return
				} else if (this.from.answer == "") {
					uni.$u.toast('答案不能为空');
					return
				} else if (this.from.amount < this.withdrawalInfo.withdrawMin) {
					uni.$u.toast(`最小提币数量为：${this.withdrawalInfo.withdrawMin}`);
					return
				} else if (this.from.amount > this.withdrawalInfo.withdrawMax) {
					uni.$u.toast(`最大提币数量为：${this.withdrawalInfo.withdrawMax}`);
					return
				} else {
					this.forbidden=true;
					this.loading=true;
					uni.request({
						url: `/withdraw/withdrawApply`,
						method: "POST",
						data: this.from,
						success: (res) => {
							this.forbidden=false;
							this.loading=false;
							uni.$u.toast('提现已申请');
							this.pageIndex = 1;
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

				.desc {
					width: 100%;
					height: 70px !important;
					font-size: 15px;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #7D7D7D;
				}
				.slot-icon {
					width: 20px;
					height: 20px;
				}

				.u-text__value {
					font-size: 15px !important;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400 !important;
					color: #7D7D7D;
				}

				.active {
					.u-text__value {
						font-size: 16px !important;
						font-family: PingFang SC-Regular, PingFang SC;
						font-weight: 400 !important;
						color: #1D1D1D;
					}
				}

				.end_icon {
					width: 14px;
					height: 14px;
					background: #E5E5E5;
					border-radius: 50%;
				}
			}
			.divider{
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
			}
		}
	}
</style>