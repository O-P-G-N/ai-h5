<template>
	<view class="phone_asswordRet">
		<u-navbar @leftClick="goBackUser" :leftText="back" height="53px" :title="forgotpassword"
			:safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="pageOne" v-if="pageIndex==0">
			<view class="title_h2">{{$t('login.retrievepassword')}}</view>
			<view class="inputmain">
				<view class="inputevery">
					<view class="inputevery_content">
						<vue-country-intl type="phone" @onChange="onChange" v-model="countryCode"></vue-country-intl>
					</view>
				</view>
				<view class="inputevery">
					<u-input v-model="from.to" :placeholder="enterphone">
						<u--text class="phone_tip" :text="countryCode" slot="prefix"></u--text>
					</u-input>
				</view>
				<ai-button class="next-btn loginbtn" @click="nextStep">{{$t('login.nextstep')}}</ai-button>
			</view>
		</view>
		<view class="pageTwo" v-else-if="pageIndex==1">
			<view class="title_h2">{{$t('login.mobileverification')}}</view>
			<view class="formmain">
				<view class="intro">
					<view class="">{{$t('login.selectmobileverification1')}}</view>
					<view class="">{{$t('login.selectmobileverification2')}}!</view>
				</view>
				<view class="codeinput">
					<u-code-input v-model="value" :focus="true" :maxlength="6"></u-code-input>
				</view>
				<ai-button :disabled="value?false:true" class="next-btn loginbtn"
					@click="nextStepTwo">{{$t('login.nextstep')}}</ai-button>
				<view class="register">{{$t('login.notreceived')}}?<u-code ref="uCode" @change="codeChange"
						unique-key="phone_asswordRet" keep-running :start-text="retrieve"
						:changeText="acquire"></u-code><text class="retrieve_btn" @click="getCode">{{tips}}</text>
				</view>
			</view>
		</view>
		<view class="pageThree" v-else-if="pageIndex==2">
			<view class="title_h2">{{$t('login.mobileverification')}}</view>
			<view class="inputmain">
				<view class="inputevery">
					<u-input v-model="formData.password" :placeholder="enterpassword" :password="eyeShow">
						<image @click="showHidden" slot="suffix" class="eye"
							:src="eyeShow?'../../static/login/close.png':'../../static/login/open.png'" mode=""></image>
					</u-input>
				</view>
				<view class="inputevery">
					<u-input v-model="formData.confirmPassword" :placeholder="confirmpassword" :password="eyeShows">
						<image @click="showHiddens" slot="suffix" class="eye"
							:src="eyeShows?'../../static/login/close.png':'../../static/login/open.png'" mode="">
						</image>
					</u-input>
				</view>
				<view class="ps_tip">{{$t('login.tip')}}</view>
				<ai-button class="next-btn loginbtn" @click="reset">{{$t('login.reset')}}</ai-button>
				<view class="lx">{{$t('login.problem')}}?<text class="blur">{{$t('login.customerservice')}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				countryCode: "+", //国家代码
				from: {
					to: "", //手机号码
					type: 1, //类型
					countryCode: "", //国家代码
				},
				pageIndex: 0, //页面索引
				value: "", //验证码
				tips: "", //提示语
				timer: null, //定时器
				formData: {
					password: "", //新密码
					confirmPassword: "", //确认新密码
				},
				eyeShow: true, //第一个密码状态
				eyeShows: true, //第二个密码状态
				back: this.$t('login.back'), //返回国际化
				forgotpassword: this.$t('login.forgotpassword'), //忘记密码国际化
				enterphone: this.$t('login.enterphone'), //请输入手机号国际化
				retrieve: this.$t('login.retrieve'), //重新获取国际化
				enterpassword: this.$t('login.enterpassword'), //请输入密码国际化
				confirmpassword: this.$t('login.confirmpassword'), //请确认密码国际化
				acquire: this.$t('login.acquire'), //X秒后获取国际化
			};
		},
		created() {

		},
		onHide() {
			clearTimeout(this.timer)
			this.timer = null
		},
		methods: {
			// 返回登录首页
			goBackUser() {
				uni.navigateTo({
					url: `/pages/loginReg/login`
				});
			},
			// 选择国家
			onChange(selected) {
				this.countryCode = `+${selected.dialCode}`;
				this.from.countryCode = selected.dialCode;
			},
			// 下一步
			nextStep() {
				let that = this
				if (that.from.to && that.from.countryCode) {
					uni.request({
						url: '/aicommon/sendCode',
						method: "GET",
						data: that.from,
						success: (res) => {
							if (res.code == 200) {
								uni.showLoading({
									title: this.$t("login.tips1")
								})
								this.timer = setTimeout(() => {
									uni.hideLoading();
									this.loading = false
									this.forbidden = false
									uni.$u.toast(this.$t("login.tips2"));
									this.pageIndex = 1;
								}, 2000);

							} else if (res.code == 500) {
								this.loading = false
								this.forbidden = false
							}
						}
					});
				}

			},
			// 重新获取验证码
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					this.$refs.uCode.start();
					uni.request({
						url: '/aicommon/sendCode',
						method: "GET",
						data: that.from,
						success: (res) => {
							uni.$u.toast(this.$t("login.tips2"));
							// 通知验证码组件内部开始倒计时
						},
					})

				} else {
					uni.$u.toast(this.$t("login.tips3"));
				}
			},
			// 提示语
			codeChange(text) {
				this.tips = text;
			},
			// 验证码下一步
			nextStepTwo() {
				uni.request({
					url: '/nt/checkCode',
					method: "POST",
					data: {
						code: this.value,
						phone: this.from.to,
						countryCode: this.from.countryCode
					},
					success: (res) => {
						this.pageIndex = 2;
					}
				});
			},
			// 第一个密码切换
			showHidden() {
				this.eyeShow = !this.eyeShow
			},
			// 第二个密码切换
			showHiddens() {
				this.eyeShows = !this.eyeShows
			},
			// 重置
			reset() {
				let num = /[0-9]/im
				let patrn = /^(?=.*?[A-Z]).*$/
				let patrns = /^(?=.*?[*?!&￥$%^#,./@";:><\[\]}{\-=+_\\|》《。，、？’‘“”~ `]).*$/
				if (this.formData.password.length < 8) {
					uni.$u.toast(this.$t("login.tips4"));
					return
				} else {
					if (patrn.test(this.formData.password)) {
						if (!num.test(this.formData.password)) {
							uni.$u.toast(this.$t("login.tips5"));
							return
						} else if (this.formData.password != this.formData.confirmPassword) {
							uni.$u.toast(this.$t("login.tips6"));
							return
						} else {
							uni.request({
								url: '/nt/updatePasswordForPhone',
								method: "POST",
								data: {
									code: this.value,
									phone: this.from.to,
									newPassword: this.formData.password,
									countryCode: this.from.countryCode
								},
								success: (res) => {
									uni.showToast({
										title: this.$t("login.tips7"),
										success: function(res) {
											let times = setTimeout(() => {
												clearTimeout(times)
												uni.redirectTo({
													url: `/pages/loginReg/login`
												});
											}, 1000)
										},
									})
								}
							});
						}
					} else if (patrns.test(this.formData.password)) {
						if (!num.test(this.formData.password)) {
							uni.$u.toast(this.$t("login.tips5"));
							return
						} else if (this.formData.password != this.formData.confirmPassword) {
							uni.$u.toast(this.$t("login.tips6"));
							return
						} else {
							uni.request({
								url: '/nt/updatePasswordForPhone',
								method: "POST",
								data: {
									code: this.value,
									phone: this.from.to,
									newPassword: this.formData.password,
									countryCode: this.from.countryCode
								},
								success: (res) => {
									uni.showToast({
										title: this.$t("login.tips7"),
										success: function(res) {
											let time = setTimeout(() => {
												clearTimeout(time)
												uni.redirectTo({
													url: `/pages/loginReg/login`
												});
											}, 1000)
										},
									})
								}
							});
						}
					} else {
						uni.$u.toast(this.$t("login.tips8"));
						return
					}
				}


			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.phone_asswordRet {
		padding: 0 27px;
		display: flex;
		width: 100wh;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
		box-sizing: border-box;
		background-color: #fff;

		.u-navbar {
			height: 53px !important;

			.u-navbar__content {
				height: 53px !important;

				.u-navbar__content__left {
					padding-left: 18px;

					.u-nav-slot {
						width: 17px;
						height: 15px;

						.head_back_img {
							width: 100%;
							height: 100%;
						}
					}


				}

				.u-navbar__content__title {
					font-weight: 700;
					font-size: 19px;
				}

			}
		}

		.pageOne {
			width: 100%;

			.title_h2 {
				font-size: 25px;
				font-family: Alibaba PuHuiTi -113 Black, Alibaba PuHuiTi 20;
				font-weight: 1000;
				color: #000;
				text-align: center;
				margin-top: 27px;
				margin-bottom: 26px;
			}

			.inputmain {
				width: 100%;
				margin-top: 16px;

				.inputevery {
					margin-top: 18px;
					width: 100%;
					height: 53px;
					background: #eff3fa;
					border-radius: 12px 12px 12px 12px;
					display: flex;
					align-items: center;

					.u-input {
						background: #eff3fa;
						padding: 0px 16px !important;
					}

					.inputevery_content {
						background-color: rgb(239, 243, 250);
						width: 100%;
						box-sizing: border-box;

						.country-intl-input-wrap {

							border: 0 !important;
							border-radius: 0 !important;

							.country-intl-input {
								box-sizing: border-box;
								border-bottom-left-radius: 0 !important;
								border-bottom-right-radius: 0 !important;
								background: #eff3fa !important;
							}

							.country-intl-label {
								background: #eff3fa !important;
							}
						}

						.country-intl-label {
							box-sizing: border-box;
						}

						.vue-country-list {
							width: 100%;
							margin: 0;
							padding: 0;
							list-style: none;
							font-size: 16px;
						}
					}

					.phone_tip {
						.u-text__value {
							display: inline-block;
							width: 42px;
							font-size: 17px !important;
							font-family: PingFang SC-Medium, PingFang SC;
							font-weight: 700 !important;
							color: #000 !important;
						}

					}
				}

				.loginbtn {
					width: 100%;
					background: #94b0ff;
					border-radius: 12px 12px 12px 12px;
					color: #fff;
					height: 42px;
					margin-top: 43px !important;
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 16px 0;
				}
			}
		}

		.pageTwo {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;

			.title_h2 {
				font-size: 25px;
				font-family: Alibaba PuHuiTi -113 Black, Alibaba PuHuiTi 20;
				font-weight: 1000;
				color: #000;
				text-align: center;
				margin-top: 27px;
				margin-bottom: 26px;
			}

			.formmain {
				border-radius: 26px;
				margin-top: 53px;

				.intro {
					margin: 0 16px;
					color: #666;
					font-weight: 500;
					font-size: 14px;
					text-align: center;
				}

				.codeinput {
					margin-top: 21px;
					display: flex;
					justify-content: center;

					.u-code-input__item {
						width: 53px !important;
						height: 53px !important;
						border: 1px solid transparent !important;
						margin-right: 10px;
						background: #eff3fa;
						border-radius: 12px;
					}
				}

				.loginbtn {
					transition: all 1s;
					width: 100%;
					margin-top: 43px;
					background: #94b0ff;
					border-radius: 12px 12px 12px 12px;
					opacity: 1;
					color: #fff;
					height: 42px;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.register {
					font-size: 17px;
					margin-top: 21px;
					text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;

					.retrieve_btn {
						margin-left: 5px;
						color: #557cff;
					}
				}
			}
		}

		.pageThree {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;

			.title_h2 {
				font-size: 25px;
				font-family: Alibaba PuHuiTi -113 Black, Alibaba PuHuiTi 20;
				font-weight: 1000;
				color: #000;
				text-align: center;
				margin-top: 27px;
				margin-bottom: 26px;
			}

			.inputmain {
				width: 100%;

				.inputevery {
					margin-top: 18px;
					width: 100%;
					height: 53px;
					background: #eff3fa;
					border-radius: 12px 12px 12px 12px;
					display: flex;
					align-items: center;

					.eye {
						width: 21px;
						height: 21px;
					}
				}

				.ps_tip {
					font-size: 10px;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: grey;
					text-indent: 1em;
				}

				.loginbtn {
					width: 100%;
					margin-top: 43px;
					background: #2961ff;
					border-radius: 12px 12px 12px 12px;
					opacity: 1;
					color: #fff;
					height: 42px;
					font-size: 14px;
				}

				.lx {
					margin-top: 213px;
					font-size: 14px;
					font-family: PingFang SC-Regular, PingFang SC;
					color: #000;
					display: flex;
					justify-content: center;

					.blur {
						color: #2961ff;
					}
				}
			}
		}
	}
</style>