<template>
	<view class="email_asswordRet">
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
					<u-input v-model="from.to" :placeholder="enteremail">
					</u-input>
				</view>
				<ai-button class="next-btn loginbtn" :disabled="forbidden" :loading="loading"
					@click="nextStep">{{$t('login.nextstep')}}</ai-button>
			</view>
		</view>
		<view class="pageTwo" v-if="pageIndex==1">
			<view class="title_h2">{{$t('login.emaileverification')}}</view>
			<view class="formmain">
				<view class="intro">
					<view class="">{{$t('login.selectmobileverification3')}}</view>
					<view class="">{{$t('login.selectmobileverification4')}}</view>
				</view>
				<view class="codeinput">
					<u-code-input v-model="value" :focus="true" :maxlength="6"></u-code-input>
				</view>
				<ai-button :disabled="value?false:true" class="next-btn loginbtn"
					@click="nextStepTwo">{{$t('login.nextstep')}}</ai-button>
				<view class="register">{{$t('login.notreceived')}}?<u-code unique-key="email_asswordRet" ref="uCode"
						@change="codeChange" keep-running :start-text="retrieve" :changeText="acquire"></u-code><text
						class="retrieve_btn" @click="getCode">{{tips}}</text></view>
			</view>
		</view>
		<view class="pageThree" v-else-if="pageIndex==2">
			<view class="title_h2">{{$t('login.emaileverification')}}</view>
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
				pageIndex: 0, //页面索1
				from: {
					to: "", //邮箱号
					type: 2, //类型
				},
				tips: "", //提示语
				timer: null, //定时器
				value: "", //验证码信息
				formData: {
					password: "", //新密码
					confirmPassword: "", //确认新密码
				},
				eyeShow: true, //第一个密码状态
				eyeShows: true, //第二个密码状态
				loading: false, //等待
				forbidden: false, //是否禁用按钮
				rememberPassword: this.$t('login.rememberpassword'), //记住密码国际化
				enteremail: this.$t('login.enteremail'), //请输入邮箱国际化
				enterpassword: this.$t('login.password'), //请输入密码国际化
				confirmpassword: this.$t('login.confirmpassword'), //请确认密码国际化
				back: this.$t('login.back'), //返回国际化
				forgotpassword: this.$t('login.forgotpassword'), //忘记密码国际化
				acquire: this.$t('login.acquire'), //X秒后获取国际化
				retrieve: this.$t('login.retrieve'), //重新获取国际化

			};
		},
		onHide() {
			clearTimeout(this.timer)
			this.timer = null
		},
		methods: {
			// 返回登录首页
			goBackUser() {
				if (this.pageIndex == 2) {
					this.pageIndex = 1
				} else if (this.pageIndex == 1) {
					this.pageIndex = 0
				} else {
					uni.navigateTo({
						url: `/pages/loginReg/login`
					});
				}
			},
			// 第一步下一步
			nextStep() {
				let re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
				if (!re.test(this.from.to)) {
					uni.$u.toast(this.$t("login.tips22"));
					return
				}
				if (this.from.to) {
					this.loading = true
					this.forbidden = true
					uni.request({
						url: '/aicommon/sendCode',
						method: "GET",
						data: this.from,
						success: (res) => {
							console.log("res", res);
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
						},
						fail: (err) => {
							this.loading = false
							this.forbidden = false
						}
					});
				}
			},
			// 提示语
			codeChange(text) {
				this.tips = text;
			},
			// 重新获取验证码
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					this.$refs.uCode.start();
					uni.request({
						url: '/aicommon/sendCode',
						method: "GET",
						data: this.from,
						success: (res) => {
							uni.$u.toast(this.$t("login.tips2"));
							// 通知验证码组件内部开始倒计时
						},
						fail: () => {
							this.loading = false
							this.forbidden = false
						}
					});

				} else {
					uni.$u.toast(this.$t("login.tips3"));
				}
			},
			// 验证码下一步
			nextStepTwo() {
				uni.request({
					url: '/nt/checkCode',
					method: "POST",
					data: {
						code: this.value,
						email: this.from.to,
					},
					success: (res) => {
						if (res.code == 200) this.pageIndex = 2;
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
					uni.$u.toast(this.$t("login.tips8"));
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
								url: '/nt/updatePasswordForEmail',
								method: "POST",
								data: {
									code: this.value,
									email: this.from.to,
									newPassword: this.formData.password,
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
					} else if (patrns.test(this.formData.password)) {
						if (!num.test(this.formData.password)) {
							uni.$u.toast(this.$t("login.tips5"));
							return
						} else if (this.formData.password != this.formData.confirmPassword) {
							uni.$u.toast(this.$t("login.tips6"));
							return
						} else {
							uni.request({
								url: '/nt/updatePasswordForEmail',
								method: "POST",
								data: {
									code: this.value,
									email: this.from.to,
									newPassword: this.formData.password,
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
	::v-deep.email_asswordRet {
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
			display: flex;
			flex-direction: column;
			align-items: center;

			.title_h2 {
				font-size: 25px;
				font-family: Alibaba PuHuiTi -113 Black, Alibaba PuHuiTi 20;
				font-weight: 1000;
				color: #000;
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