<template>
	<view class="phone_reg">
		<u-navbar @leftClick="goBackUser" :left-text="back" :title="register" :safeAreaInsetTop="false"
			titleStyle="fontWeight: 600"></u-navbar>
		<view class="container_nei">
			<view class="title_h1">{{$t('login.type.phones.register')}}</view>
			<view class="inputmain">
				<view class="inputevery">
					<view class="inputevery_content">
						<vue-country-intl schema="input" :iosMobileReadonly="false" :placeholder="$t('login.tips21')" :searchAble="true"
							type="phone" @onChange="onChange" v-model="countryCode"></vue-country-intl>
					</view>
				</view>
				<view class="inputevery">
					<u-input type="number" v-model="from.phone" :placeholder="enterphone">
						<u--text class="phone_tip" :text="countryCode" slot="prefix"></u--text>
						<view slot="suffix" class="email_content_btn">
							<u-code :start-text="getcode" ref="uCode" @change="codeChange"
								:changeText="acquire"></u-code><text class="get_code" @click="getCode">{{tips}}</text>
						</view>
					</u-input>
				</view>
				<view class="inputevery">
					<u-input class="email_content_text" type="number" :placeholder="entercode"
						v-model="from.code"></u-input>
				</view>

				<view class="inputevery">
					<u-input v-model="from.password" :placeholder="enterpassword" maxlength="32" :password="eyeShow">
						<image @click="showHidden" slot="suffix" class="eye"
							:src="eyeShow?'../../static/login/close.png':'../../static/login/open.png'" mode=""></image>
					</u-input>
				</view>
				<view class="inputevery">
					<u-input v-model="from.withdrawPassword" maxlength="6" :placeholder="$t('login.traderPassword')"
						:password="eyeShows">
						<image @click="showHiddens" slot="suffix" class="eye"
							:src="eyeShows?'../../static/login/close.png':'../../static/login/open.png'" mode="">
						</image>
					</u-input>
				</view>
				<view class="inputevery">
					<u-input v-model="from.newWithdrawPassword" maxlength="6" :placeholder="$t('login.traderPassword1')"
						:password="eyeShowss">
						<image @click="showHiddenss" slot="suffix" class="eye"
							:src="eyeShowss?'../../static/login/close.png':'../../static/login/open.png'" mode="">
						</image>
					</u-input>
				</view>
				<view class="inputevery">
					<u-input :disabled="invitationDisa" v-model="from.invitationCode" :placeholder="invitationcode">
					</u-input>
				</view>
				<view class="verify_item">
					<u-icon size="20px" color="rgb(0, 0, 0)" name="close-circle-fill"></u-icon>
					<text class="verify_item_text">{{$t('login.traderPassword3')}}</text>
				</view>
				<view class="privacy">
					{{$t('login.agreement5')}}<text class="blur"
						@click="viewTerms">《{{$t('login.agreement2')}}》</text>{{$t('login.agreement3')}}<text
						class="blur" @click="viewPolicy">《{{$t('login.agreement4')}}》</text>
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
				eyeShows: true, //密码显示
				eyeShowss: true, //密码显示
				checkboxValue: "", //是否记住密码
				from: {
					phone: "", //手机号码
					code: "", //验证码
					password: "", //密码
					invitationCode: "", //邀请码
					countryCode: "", //国家编码
					withdrawPassword: "", //交易密码
					newWithdrawPassword: "", //确认交易密码
				},
				forbidden: false, //是否禁用
				loading: false, //等待状态
				tips: "", //提示语
				register: this.$t('login.register'), //注册国际化
				back: this.$t('login.back'), //返回国际化
				enterphone: this.$t('login.enterphone'), //请输入手机号国际化
				getcode: this.$t('login.getcode'), //获取验证码国际化
				acquire: this.$t('login.acquire'), //X秒后获取国际化
				entercode: this.$t('login.entercode'), //请输入验证码国际化
				enterpassword: this.$t('login.enterpassword'), //请输入密码国际化
				invitationcode: this.$t('login.invitationcode'), //请输入邀请码国际化
				traderPassword: this.$t('login.traderPassword'), //请输入交易密码国际化
				invitationDisa: false, //是否禁用邀请码输入框
			};
		},
		onLoad(option) {
			if (option.invitationCode) {
				this.from.invitationCode = option.invitationCode;
				this.invitationDisa = true
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
			viewTerms() {
				uni.navigateTo({
					url: `/pages/loginReg/termsUse`
				});
			},
			// 查看隐私协议
			viewPolicy() {
				uni.navigateTo({
					url: `/pages/loginReg/privacyPolicy`
				});
			},
			// 显示隐藏
			showHidden() {
				this.eyeShow = !this.eyeShow
			},
			// 显示隐藏
			showHiddens() {
				this.eyeShows = !this.eyeShows
			},
			// 显示隐藏
			showHiddenss() {
				this.eyeShowss = !this.eyeShowss
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
						this.$refs.uCode.start();
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
				let that = this
				let num = /[0-9]/im
				let patrn = /^(?=.*?[A-Z]).*$/
				let patrnss = /^(?=.*?[a-z]).*$/;
				let patrnsa = /^(?=.*?[$/";:><\[\]}{\-=+_\\|。，、’‘“”~ `]).*$/
				let patrns = /^(?=.*?[～！!@#¥%.&*（）：“？》《]).*$/
				let hz =
					/^(?=.*?[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]).*$/
				if (that.from.countryCode == "") {
					uni.showToast({
						title: that.$t("login.tips18"),
						icon: "none",
						success: function(res) {},
					})
					return
				} else if (that.from.phone == "") {
					uni.showToast({
						title: that.$t("login.tips19"),
						icon: "none",
						success: function(res) {},
					})
					return
				} else if (that.from.code == "") {
					uni.showToast({
						title: that.$t("login.tips14"),
						icon: "none",
						success: function(res) {},
					})
					return
				} else if (that.from.password == "") {
					uni.showToast({
						title: that.$t("login.tips10"),
						icon: "none",
						success: function(res) {},
					})
					return
				} else if (that.from.password.length < 8) {
					uni.showToast({
						title: that.$t("login.tips4"),
						icon: "none",
						success: function(res) {},
					})
					return
				} else if (that.from.password.indexOf(" ") != -1 || patrnsa.test(that.from.password) || hz.test(that.from
						.password)) {
					uni.showToast({
						title: that.$t("login.tips23"),
						icon: "none",
						success: function(res) {},
					})
					return
				} else {
					if (patrn.test(that.from.password)) {
						if (that.from.withdrawPassword == "") {
							uni.$u.toast(that.$t('login.traderPassword'));
							return
						} else if (that.from.withdrawPassword.length < 6) {
							uni.$u.toast(that.$t('user.islands.sc.fdp.i7'));
							return
						} else if (patrn.test(that.from.withdrawPassword)) {
							uni.$u.toast(that.$t('user.islands.sc.fdp.i7'));
							return
						} else if (patrns.test(that.from.withdrawPassword)) {
							uni.$u.toast(that.$t('user.islands.sc.fdp.i7'));
							return
						} else if (patrnss.test(that.from.withdrawPassword)) {
							uni.$u.toast(that.$t('user.islands.sc.fdp.i7'));
							return
						} else if (that.from.withdrawPassword != that.from.newWithdrawPassword) {
							uni.$u.toast(that.$t('login.traderPassword2'));
							return
						} else {
							that.forbidden = true;
							that.loading = true
							uni.request({
								url: '/nt/registerPhone',
								method: "POST",
								data: that.from,
								success: (res) => {
									// uni.$u.toast('注册成功');
									if (res.code == 200) {
										that.forbidden = false;
										that.loading = false;
										uni.showToast({
											title: that.$t("login.tips15"),
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
									} else {
										that.forbidden = false;
										that.loading = false;
									}

								}
							});
						}
					} else if (patrns.test(that.from.password)) {
						if (that.from.withdrawPassword == "") {
							uni.$u.toast(that.$t('login.traderPassword'));
							return
						} else if (that.from.withdrawPassword.length < 6) {
							uni.$u.toast(that.$t('user.islands.sc.fdp.i7'));
							return
						} else if (patrn.test(that.from.withdrawPassword)) {
							uni.$u.toast(that.$t('user.islands.sc.fdp.i7'));
							return
						} else if (patrns.test(that.from.withdrawPassword)) {
							uni.$u.toast(that.$t('user.islands.sc.fdp.i7'));
							return
						} else if (patrnss.test(that.from.withdrawPassword)) {
							uni.$u.toast(that.$t('user.islands.sc.fdp.i7'));
							return
						} else if (that.from.withdrawPassword != that.from.newWithdrawPassword) {
							uni.$u.toast(that.$t('login.traderPassword2'));
							return
						} else {
							that.forbidden = true;
							that.loading = true
							uni.request({
								url: '/nt/registerPhone',
								method: "POST",
								data: that.from,
								success: (res) => {
									// uni.$u.toast('注册成功');
									if (res.code == 200) {
										that.forbidden = false;
										that.loading = false;
										uni.showToast({
											title: that.$t("login.tips15"),
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
									} else {
										that.forbidden = false;
										that.loading = false;
									}

								}
							});
						}

					}else if (patrnss.test(that.from.password)) {
						if (that.from.withdrawPassword == "") {
							uni.$u.toast(that.$t('login.traderPassword'));
							return
						} else if (that.from.withdrawPassword.length < 6) {
							uni.$u.toast(that.$t('user.islands.sc.fdp.i7'));
							return
						} else if (patrn.test(that.from.withdrawPassword)) {
							uni.$u.toast(that.$t('user.islands.sc.fdp.i7'));
							return
						} else if (patrns.test(that.from.withdrawPassword)) {
							uni.$u.toast(that.$t('user.islands.sc.fdp.i7'));
							return
						} else if (patrnss.test(that.from.withdrawPassword)) {
							uni.$u.toast(that.$t('user.islands.sc.fdp.i7'));
							return
						} else if (that.from.withdrawPassword != that.from.newWithdrawPassword) {
							uni.$u.toast(that.$t('login.traderPassword2'));
							return
						} else {
							that.forbidden = true;
							that.loading = true
							uni.request({
								url: '/nt/registerPhone',
								method: "POST",
								data: that.from,
								success: (res) => {
									// uni.$u.toast('注册成功');
									if (res.code == 200) {
										that.forbidden = false;
										that.loading = false;
										uni.showToast({
											title: that.$t("login.tips15"),
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
									} else {
										that.forbidden = false;
										that.loading = false;
									}

								}
							});
						}

					} else {
						uni.$u.toast(that.$t("login.tips8"));
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
						display: flex;
						align-items: center;
						color: #fff;

						.get_code {
							display: flex;
							align-items: center;
							width: 100%;
							height: 100%;
						}
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
								>span:last-child{
									width: 80%;
									white-space: nowrap;
									/*不换行强制文本在一行显示*/
									overflow: hidden;
									/*超出盒子宽度部分文字被隐藏*/
									text-overflow: ellipsis;
										/*当文本溢出包含元素时发生的事情 ellipsis*/
								}
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

				.verify_item {
					margin: 10px 0;
					display: flex;
					align-items: center;
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