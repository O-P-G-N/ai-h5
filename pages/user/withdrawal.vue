<template>
	<view class="withdrawal">
		<u-navbar @leftClick="goBackUser" leftText="返回" title="提现" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main">
			<u--form labelPosition="left" :model="from" :rules="rules" ref="uForm">
				<u-cell-group :border="false">
					<u-cell title="邮箱账号">
						<view slot="value" class="email_content">
							<view class="email_content_text">buyit714@gmail.com</view>
							<u-button type="primary" class="email_content_btn" text="获取验证码" size="mini"></u-button>
						</view>
					</u-cell>
					<u-cell title="验证码">
						<view slot="value" class="code_content">
							<u-form-item prop="from.code" ref="item1">
								<input v-model="from.code" class="uni-input" maxlength="10" placeholder="请输入验证码" />
							</u-form-item>
						</view>
					</u-cell>
					<u-cell title="提现币种" :isLink="true" @click="withdrawalCurrency">
						<view slot="value" class="withdrawal_currency">
							<u-form-item prop="from.currency" ref="item2">
								<input disabled class="uni-input" v-model="from.currency" placeholder="请选择提现币种" />
							</u-form-item>
						</view>
					</u-cell>
					<u-cell title="提现地址">
						<view slot="value" class="code_content">
							<u-form-item prop="from.address" ref="item3">
								<input v-model="from.address" class="uni-input" maxlength="10" placeholder="请输入提现地址" />
							</u-form-item>
						</view>
					</u-cell>
					<u-cell title="提币数量">
						<view slot="value" class="code_content">
							<u-form-item prop="userInfo.name" ref="item4">
								<input class="uni-input" maxlength="10" placeholder="请输入提币数量" />
							</u-form-item>
						</view>
					</u-cell>
					<u-cell title="实际到账">
						<view slot="value" class="code_content">
							<input disabled class="uni-input" maxlength="10" placeholder="请输入提币数量" />
						</view>
					</u-cell>
					<u-cell title="资金管理费" value="3.00" label="本金提款金额的3%,收益提款金额的5%"></u-cell>
					<u-cell title="最小提币数量" value="50.00"></u-cell>
					<u-cell title="最大提币数量" value="1000000.00"></u-cell>
					<u-cell title="交易密码">
						<view slot="value" class="code_content">
							<u-form-item prop="userInfo.name" ref="item5">
								<input class="uni-input" password maxlength="10" placeholder="请输入交易密码" />
							</u-form-item>
						</view>
					</u-cell>
					<u-cell title="密保问题" value="1000000.00"></u-cell>
					<u-cell title="密保答案">
						<view slot="value" class="code_content">
							<u-form-item prop="userInfo.name" ref="item6">
								<input class="uni-input" maxlength="10" placeholder="请输入密保答案" />
							</u-form-item>
						</view>
					</u-cell>
				</u-cell-group>

			</u--form>

			<button class="editpassbtn">提交</button>
		</view>
		<u-modal title="温馨提示" :show="tipsShow" :content="content" closeOnClickOverlay>
			<u-button class="tips_btn" slot="confirmButton" text="确定" type="success" shape="circle"
				@click="tipsShow = false"></u-button>
		</u-modal>
		<u-picker closeOnClickOverlay @cancel="close" @confirm="confirm" @close="close" :show="show"
			:columns="columns"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from: {
					currency: "", //币种
				}, //表单验证
				show: false, //选择币种状态
				columns: [
					['红包-TRC20', '红包-ERC20']
				],
				tipsShow: true, //温馨提示弹窗状态
				rules: {}, //验证规则
			}
		},
		methods: {
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
			// 确定按钮
			confirm(val) {
				this.show = false;
				this.from.currency = val.value[0];
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

				.email_content_text {}

				.email_content_btn {
					margin-left: 5px;
					border-radius: 10px;
					padding: 15px 10px;
					background: #00bfff;
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

				.uni-input {
					text-align: right;
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
	}
</style>