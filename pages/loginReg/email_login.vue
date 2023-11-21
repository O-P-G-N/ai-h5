<template>
	<view class="email_login">
		<u-navbar @leftClick="goBackUser" :left-text="back" :title="typeEmail" :safeAreaInsetTop="false"
			titleStyle="fontWeight: 600"></u-navbar>
		<view class="container_nei">
			<view class="title_h1">AlitaGPT</view>
			<view class="title_h3">{{$t('login.welcome')}}</view>
			<view class="inputmain">
				<view class="inputevery">
					<u-input v-model="from.username" :placeholder="Email">
					</u-input>
				</view>
				<view class="inputevery">
					<u-input v-model="from.password" :placeholder="password" :password="eyeShow">
						<image @click="showHidden" slot="suffix" class="eye"
							:src="eyeShow?'../../static/login/close.png':'../../static/login/open.png'" mode=""></image>
					</u-input>
				</view>
				<view class="jzmm">
					<u-checkbox-group v-model="checkboxValue" placement="column" @change="checkboxChange">
						<u-checkbox :label="rememberPassword" :name="1">
						</u-checkbox>
					</u-checkbox-group>
				</view>
				<view class="privacy">
					{{$t('login.agreement1')}}<text class="blur" @click="viewTerms">《{{$t('login.agreement2')}}》</text>{{$t('login.agreement3')}}<text class="blur" @click="viewPolicy">《{{$t('login.agreement4')}}》</text>
				</view>
				<view class="btns">
					<view class="rightforget" @click="forgotPassword">{{$t('login.forgotpassword')}}？</view>
					<ai-button :disabled="from.username&&from.password&&forbidden?false:true" :loading="loading"
						class="next-btn loginbtn" @click="loginBtn">{{$t('login.login')}}</ai-button>
					<view class="register">
						{{$t('login.noaccount')}}？
						<text class="blur" @click="regAccount">{{$t('login.registernow')}}</text>
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
				eyeShow: true, //密码显示
				checkboxValue: [], //是否记住密码
				from: {
					username: "", //邮箱号
					password: "", //密码
					type: 2, //类型
				},
				loading: false, //等待
				forbidden: true, //是否禁用按钮
				rememberPassword:this.$t('login.rememberpassword'),//记住密码国际化
				back:this.$t('login.back'),//返回国际化
				typeEmail:this.$t('login.type.email'),//邮箱登录国际化
				password:this.$t('login.password'),//密码国际化
				Email:this.$t('login.Email'),//密码国际化
			};
		},
		onShow() {
			if (uni.getStorageSync("emailCheck") == 1) {
				this.checkboxValue.push(1)
				this.from = uni.getStorageSync("email")
			}
		},
		created() {},
		methods: {
			// 返回登录首页
			goBackUser() {
				uni.navigateTo({
					url: `/pages/loginReg/login`
				});
			},
			// 忘记密码
			forgotPassword() {
				uni.navigateTo({
					url: `/pages/loginReg/email_asswordRet`
				});
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
			// 勾选记住密码
			checkboxChange(val) {
				if (val[0] == 1) {
				} else {
					uni.removeStorageSync("emailCheck")
					uni.removeStorageSync("email")
				}
			},
			// 登录
			loginBtn() {
				let that = this
				let patrn = /^(?=.*?[A-Z])(?=.*?\d).*$/
				let patrns = /^(?=.*?[*?!&￥$%^#,./@";:><\[\]}{\-=+_\\|》《。，、？’‘“”~ `]).*$/
				let emailPattern =
					/^[A-Za-z0-9]+([-._][A-Za-z0-9]+)*@[A-Za-z0-9]+(-[A-Za-z0-9]+)*(\.[A-Za-z]{2,6}|[A-Za-z]{2,4}\.[A-Za-z]{2,3})$/
				if (!emailPattern.test(this.from.username)) {
					uni.showToast({
						title: this.$t("login.tips9"),
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
						title:this.$t("login.tips4"),
						icon: "none",
						success: function(res) {},
					})
					return
				} else {
					if (patrn.test(this.from.password)) {
						this.loading = true
						this.forbidden = false
						uni.request({
							url: '/nt/login',
							method: "POST",
							data: this.from,
							success: (res) => {
								if (res.code == 200) {
									if (that.checkboxValue[0] == 1) {
										uni.setStorageSync("emailCheck", that.checkboxValue[0])
										uni.setStorageSync("email", this.from)
									}
									this.$store.commit('app/clear',true)
									uni.showToast({
										title:this.$t("login.tips11"),
										success: function() {
											let time = setTimeout(() => {
												that.loading = false;
												that.forbidden = true;
												clearTimeout(time)
												uni.setStorageSync("user", res.data)
												uni.switchTab({
													url: `/pages/index/index`
												});
											}, 1000)
										},
									})
								} else if (res.code == 500) {
									that.loading = false;
									that.forbidden = true;

								}

							}
						});
					} else if (patrns.test(this.from.password)) {
						this.loading = true
						this.forbidden = false
						uni.request({
							url: '/nt/login',
							method: "POST",
							data: this.from,
							success: (res) => {
								if (res.code == 200) {
									if (that.checkboxValue[0] == 1) {
										uni.setStorageSync("emailCheck", that.checkboxValue[0])
										uni.setStorageSync("email", this.from)
									}
									uni.showToast({
										title: this.$t("login.tips11"),
										success: function() {
											let times = setTimeout(() => {
												that.loading = false;
												that.forbidden = true;
												clearTimeout(times)
												uni.setStorageSync("user", res.data)
												uni.switchTab({
													url: `/pages/index/index`
												});
											}, 1000)
										},
									})
								} else if (res.code == 500) {
									that.loading = false;
									that.forbidden = true;

								}

							}
						});
					} else {
						uni.$u.toast(this.$t("login.tips8"));
						return
					}
				}
			},
			// 注册账号
			regAccount() {
				uni.navigateTo({
					url: `/pages/loginReg/reg_account`
				});
			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.email_login {
		width: 100%;
		height: 100%;

		box-sizing: border-box;

		.container_nei {
			padding: 21px;
			padding-top: 96px;
			width: 100%;
			box-sizing: border-box;

			.title_h1 {
				width: 100%;
				font-size: 32px;
				font-family: Alibaba PuHuiTi -113 Black, Alibaba PuHuiTi 20;
				font-weight: 1000;
				color: #000;
				display: flex;
				justify-content: center;
			}

			.title_h3 {
				margin-top: 10px;
				width: 100%;
				height: 21px;
				font-size: 19px;
				font-family: Alibaba PuHuiTi -53 Regular, Alibaba PuHuiTi 20;
				font-weight: 400;
				color: #000;
				line-height: 21px;
				margin-bottom: 57px;
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
							border-right: 1px solid #ccc;
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

				.jzmm {
					font-size: 16px !important;
					padding: 13px 0;
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
					margin-top: 100px;

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