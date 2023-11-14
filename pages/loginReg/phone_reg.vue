<template>
	<view class="phone_reg">
		<u-navbar @leftClick="goBackUser" :left-text="back" :title="register" :safeAreaInsetTop="false"
			titleStyle="fontWeight: 600"></u-navbar>
		<view class="container_nei">
			<view class="title_h1">{{$t('login.type.phones.register')}}</view>
			<view class="inputmain">
				<view class="inputevery">
					<view class="inputevery_content">
						<vue-country-intl schema="input" :searchAble="true" type="phone" @onChange="onChange"
							v-model="countryCode"></vue-country-intl>
					</view>
				</view>
				<view class="inputevery">
					<u-input v-model="from.phone" :placeholder="enterphone">
						<u--text class="phone_tip" :text="countryCode" slot="prefix"></u--text>
						<view slot="suffix" class="email_content_btn">
							<u-code :start-text="getcode" ref="uCode" @change="codeChange"
								:changeText="acquire"></u-code><text @click="getCode">{{tips}}</text>
						</view>
					</u-input>
				</view>
				<view class="inputevery">
					<u-input class="email_content_text" type="number" :placeholder="entercode"
						v-model="from.code"></u-input>
				</view>
				<view class="inputevery">
					<u-input v-model="from.password" :placeholder="enterpassword" :password="eyeShow">
						<image @click="showHidden" slot="suffix" class="eye"
							:src="eyeShow?'../../static/login/close.png':'../../static/login/open.png'" mode=""></image>
					</u-input>
				</view>
				<view class="inputevery">
					<u-input v-model="from.invitationCode" :placeholder="invitationcode">
					</u-input>
				</view>
				<view class="privacy">
					{{$t('login.selectmobileverification5')}}<text class="blur" @click="viewTerms">《{{$t('login.selectmobileverification2')}}》</text>{{$t('login.selectmobileverification3')}}<text class="blur" @click="viewPolicy">《{{$t('login.selectmobileverification4')}}》</text>
				</view>
				<view class="btns">
					<view class="rightforget" @click="forgotPassword">{{$t('login.forgotpassword')}}？</view>
					<ai-button :disabled="forbidden" :loading="loading" class="next-btn loginbtn"
						@click="regBtn">{{$t('login.register')}}</ai-button>
					<!-- <button class="loginbtn" ></button> -->
					<view class="register">
						{{$t('login.existingaccount')}}？
						<text class="blur" @click="loginNow">{{$t('login.loginnow')}}</text>
					</view>
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
				eyeShow: true, //密码显示
				checkboxValue: "", //是否记住密码
				from: {
					phone: "", //手机号码
					code: "", //验证码
					password: "", //密码
					invitationCode: "", //邀请码
					countryCode: "", //国家编码
				},
				forbidden: false, //是否禁用
				loading: false, //等待状态
				tips: "", //提示语
				register:this.$t('login.register'),//注册国际化
				back:this.$t('login.back'),//返回国际化
				enterphone:this.$t('login.enterphone'),//请输入手机号国际化
				getcode:this.$t('login.getcode'),//获取验证码国际化
				acquire:this.$t('login.acquire'),//X秒后获取国际化
				entercode:this.$t('login.entercode'),//请输入验证码国际化
				enterpassword:this.$t('login.enterpassword'),//请输入密码国际化
				invitationcode:this.$t('login.invitationcode'),//请输入邀请码国际化
			};
		},
		onLoad(option) {
			if (option.invitationCode) {
				this.from.invitationCode = option.invitationCode;
			}
		},
		methods: {
			// 返回注册首页
			goBackUser() {
				uni.navigateTo({
					url: `/pages/loginReg/reg_account`
				});
			},
			// 选择国家
			onChange(selected) {
				this.countryCode = `+${selected.dialCode}`;
				this.from.countryCode = selected.dialCode;
			},
			// 查看用户协议
						viewTerms(){
							uni.navigateTo({
								url: `/pages/loginReg/termsUse`
							});
						},
						// 查看隐私协议
						viewPolicy(){
							uni.navigateTo({
								url: `/pages/loginReg/privacyPolicy`
							});
						},
			// 显示隐藏
			showHidden() {
				this.eyeShow = !this.eyeShow
			},
			// 忘记密码
			forgotPassword() {
				uni.navigateTo({
					url: `/pages/loginReg/phone_asswordRet`
				});
			},
			// 获取验证码
			getCode() {
				if (this.from.countryCode == "") {
					uni.$u.toast(this.$t("login.tips21"));
					return
				} else if (this.from.phone == "") {
					uni.$u.toast(this.$t("login.enterphone"));
					return
				} else {
					if (this.$refs.uCode.canGetCode) {
						uni.request({
							url: `/aicommon/sendCode`,
							method: "GET",
							data: {
								countryCode: this.from.countryCode,
								to: this.from.phone,
								type: 1
							},
							success: (res) => {
								if (res.code == 200) {
									this.$refs.uCode.start();
									uni.$u.toast(this.$t("login.tips13"));
								}
							}
						});
					} else {
						uni.$u.toast(this.$t("login.tips3"));
					}
				}

			},
			// 提示语
			codeChange(text) {
				this.tips = text;
			},
			// 注册
			regBtn() {
				let patrn = /^(?=.*?[A-Z])(?=.*?\d).*$/
				let patrns = /^(?=.*?[*?!&￥$%^#,./@";:><\[\]}{\-=+_\\|》《。，、？’‘“”~ `]).*$/
				if (this.from.countryCode == "") {
					uni.showToast({
						title:this.$t("login.tips18"),
						icon: "none",
						success: function(res) {},
					})
					return
				} else if (this.from.phone == "") {
					uni.showToast({
						title: this.$t("login.tips19"),
						icon: "none",
						success: function(res) {},
					})
					return
				} else if (this.from.code == "") {
					uni.showToast({
						title: this.$t("login.tips14"),
						icon: "none",
						success: function(res) {},
					})
					return
				} else if (this.from.password == "") {
					uni.showToast({
						title: this.$t("login.tips10"),
						icon: "none",
						success: function(res) {},
					})
					return
				} else if (this.from.password.length < 8) {
					uni.showToast({
						title: this.$t("login.tips4"),
						icon: "none",
						success: function(res) {},
					})
					return
				} else {
					if (patrn.test(this.from.password)) {
						this.forbidden = true;
						this.loading = true
						uni.request({
							url: '/nt/registerPhone',
							method: "POST",
							data: this.from,
							success: (res) => {
								// uni.$u.toast('注册成功');
								if (res.code == 200) {
									this.forbidden = false;
									this.loading = false;
									uni.showToast({
										title: this.$t("login.tips15"),
										success: function(res1) {
											let times = setTimeout(() => {
												clearTimeout(times)
												uni.setStorageSync("user", res.data)
												uni.switchTab({
													url: `/pages/index/index`
												});
											}, 1000)
										},
									})
								} else if (res.code == 500) {
									this.forbidden = false;
									this.loading = false;
								}

							}
						});
					} else if (patrns.test(this.from.password)) {
						this.forbidden = true;
						this.loading = true
						uni.request({
							url: '/nt/registerPhone',
							method: "POST",
							data: this.from,
							success: (res) => {
								// uni.$u.toast('注册成功');
								if (res.code == 200) {
									this.forbidden = false;
									this.loading = false;
									uni.showToast({
										title: this.$t("login.tips15"),
										success: function(res1) {
											let time = setTimeout(() => {
												clearTimeout(time)
												uni.setStorageSync("user", res.data)
												uni.switchTab({
													url: `/pages/index/index`
												});
											}, 1000)
										},
									})
								} else if (res.code == 500) {
									this.forbidden = false;
									this.loading = false;
								}

							}
						});
					} else {
						uni.$u.toast(this.$t("login.tips8"));
						return
					}
				}
			},
			// 立即登录
			loginNow() {
				uni.navigateTo({
					url: `/pages/loginReg/login`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.phone_reg {
		min-width: 100wh;
		min-height: 100vh;
		display: flex;
		align-items: center;

		box-sizing: border-box;

		.container_nei {
			padding: 53px 42px;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			box-sizing: border-box;

			.title_h1 {
				width: 100%;
				font-size: 32px;
				font-family: Alibaba PuHuiTi -113 Black, Alibaba PuHuiTi 20;
				font-weight: 1000;
				color: #000;
				text-align: center;
				display: flex;
				justify-content: center;
			}

			.inputmain {
				width: 100%;
				margin-top: 21px;

				.inputevery {
					margin-top: 18px;
					width: 100%;
					height: 53px;
					background: #eff3fa;
					border-radius: 12px 12px 12px 12px;
					display: flex;
					align-items: center;

					.email_content_btn {
						padding: 2px 5px;
						border-radius: 10px;
						font-size: 12px;
						height: 32px;
						box-sizing: border-box;
						background: #00bfff;
						color: #fff;
					}

					uni-button:after {
						border: none;
					}

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

					.eye {
						width: 21px;
						height: 21px;
					}
				}

				.privacy {
					font-size: 14px;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: rgba(0, 0, 0, .5);

					.blur {
						color: #2961ff !important;
					}
				}

				.btns {
					margin-top: 53px;

					.rightforget {
						text-align: center;
						color: #2961ff;
						display: flex;
						justify-content: center;
					}

					.loginbtn {
						width: 100%;
						background: #94b0ff;
						border-radius: 12px 12px 12px 12px;
						color: #fff;
						height: 42px;
						display: flex;
						justify-content: center;
						align-items: center;
						margin: 16px 0;
					}

					.register {
						width: 100%;
						text-align: center;
						height: 21px;
						font-size: 14px;
						font-family: PingFang SC-Regular, PingFang SC;
						font-weight: 400;
						color: #000;
						display: flex;
						justify-content: center;

						.blur {
							color: #2961ff !important;
						}
					}
				}
			}
		}
	}
</style>