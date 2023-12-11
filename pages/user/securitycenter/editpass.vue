<template>
	<view class="editpass">
		<u-navbar height="53px" @leftClick="goBackUser" :title="$t('user.islands.sc.edp.i1')" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="container_nei">
			<view class="main">
				<u-cell-group :border="false">
					<u-cell :title="titleShow==1?$t('user.islands.sc.edp.i2'):$t('user.islands.sc.edp.i3')">
						<view slot="value" class="email_content">
							<u-input class="email_content_text" v-model="name">
								<view slot="suffix" class="email_content_btn">
									<u-code unique-key="editpass" :start-text="$t('user.islands.sc.edp.i4')" ref="uCode" @change="codeChange"
										:changeText="'X'+ $t('user.islands.sc.edp.i5')"></u-code><text @click="getCode">{{tips}}</text>
								</view>
							</u-input>
						</view>
					</u-cell>
					<u-cell :title="$t('user.islands.sc.edp.i6')">
						<view slot="value" class="code_content">
							<u-input v-model="from.code" :placeholder="$t('user.islands.sc.edp.i61')" type="number">

							</u-input>
						</view>
					</u-cell>
					<u-cell :title="$t('user.islands.sc.edp.i7')">
						<view slot="value" class="code_content">
							<u-input v-model="from.newPassword" :placeholder="$t('user.islands.sc.edp.i8')" :password="eyeShow">
								<image @click="showHidden" slot="suffix" class="eye"
									:src="eyeShow?'../../../static/login/close.png':'../../../static/login/open.png'"
									mode=""></image>
							</u-input>
						</view>
					</u-cell>
					<u-cell :title="$t('user.islands.sc.edp.i9')">
						<view slot="value" class="code_content">
							<u-input v-model="confirmPassword" :placeholder="$t('user.islands.sc.edp.i0')" :password="eyeShows">
								<image @click="showHiddens" slot="suffix" class="eye"
									:src="eyeShows?'../../../static/login/close.png':'../../../static/login/open.png'"
									mode=""></image>
							</u-input>
						</view>
					</u-cell>
				</u-cell-group>
				<!-- <view class="verify">
					<view class="verify_item">
						<u-icon size="20px" color="rgb(0, 0, 0)" name="close-circle-fill"></u-icon>
						<text class="verify_item_text">{{$t('user.islands.sc.edp.i11')}}</text>
					</view>
					<view class="verify_item">
						<u-icon size="20px" color="rgb(0, 0, 0)" name="close-circle-fill"></u-icon>
						<text class="verify_item_text">{{$t('user.islands.sc.edp.i12')}}</text>
					</view>
					<view class="verify_item">
						<u-icon size="20px" color="rgb(0, 0, 0)" name="close-circle-fill"></u-icon>
						<text class="verify_item_text">{{$t('user.islands.sc.edp.i13')}}</text>
					</view>
				</view> -->
				<ai-button :disabled="btnDisabled" :loading="loading" :bg="'#333'" :btnHeight="'53px'"
					class="next-btn editpassbtn" @click="ConfMod">{{$t('user.islands.sc.edp.i14')}}</ai-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: "", //用户名
				from: {
					email: "", //邮箱号
					phone: "", //手机号
					code: "", //验证码
					newPassword: "", //新密码
				}, //表单验证
				confirmPassword: "", //确认新密码
				eyeShow: true, //密码显示
				eyeShows: true, //密码显示
				titleShow: 1, //判断标题
				tips: "", //提示语
				loading: false, //模态框按钮等待状态
				btnDisabled: false, //模态框是否禁用按钮
			};
		},
		created() {},
		onShow() {
			this.determineTitle()
		},
		methods: {
			// 返回积分查看
			goBackUser() {
				uni.navigateTo({
					url: `/pages/user/securitycenter/index`
				});
			},
			// 获取验证码
			getCode() {
				if (this.$refs.uCode.canGetCode) {
				this.$refs.uCode.start();
					uni.request({
						url: `/aicommon/sendCodeMustToken`,
						method: "GET",
						data: {
							type: this.titleShow
						},
						success: (res) => {
							if (res.code == 200) {
								this.$refs.uCode.start();
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
			// 判断标题
			determineTitle() {
				if (uni.getStorageSync("user").phone) {
					this.titleShow = 1;
					this.name = uni.getStorageSync("user").phone;
					this.from.phone = uni.getStorageSync("user").phone;
				} else {
					this.titleShow = 2;
					this.name = uni.getStorageSync("user").email;
					this.from.email = uni.getStorageSync("user").email;
				}
			},
			// 显示隐藏
			showHidden() {
				this.eyeShow = !this.eyeShow;
			},
			// 显示隐藏
			showHiddens() {
				
				this.eyeShows = !this.eyeShows;
			},
			// 确认修改
			ConfMod() {
				let that = this
				let num = /[0-9]/im
				let patrn = /^(?=.*?[A-Z])(?=.*?\d).*$/
				let patrns = /^(?=.*?[*?!&￥$%^#,./@";:><\[\]}{\-=+_\\|》《。，、？’‘“”~ `]).*$/
				if (that.from.code == "") {
					uni.$u.toast(that.$t('user.islands.sc.edp.i16'));
					return
				} else if (that.from.newPassword.length < 8) {
					uni.$u.toast(that.$t('user.islands.sc.edp.i11'));
					return
				} else {
					if (patrn.test(that.from.newPassword)) {
						if (!num.test(that.from.newPassword)) {
							uni.$u.toast(that.$t('user.islands.sc.edp.i13'));
							return
						} else if (that.from.newPassword != that.confirmPassword) {
							uni.$u.toast(that.$t('user.islands.sc.edp.i18'));
							return
						} else {
							that.btnDisabled = true
							that.loading = true
							uni.request({
								url: '/member/updatePassword',
								method: "POST",
								data: that.from,
								success: (res) => {
									if (res.code == 200) {
										that.btnDisabled = false
										that.loading = false
										uni.showToast({
											title: that.$t('user.islands.sc.edp.i19'),
											success: function(res) {
												uni.removeStorageSync("user")
												if (that.titleShow == 1) {
													uni.removeStorageSync("phoneCheck")
													uni.removeStorageSync("phone")
												} else {
													uni.removeStorageSync("emailCheck")
													uni.removeStorageSync("email")
												}
												let time = setTimeout(() => {
													clearTimeout(time)
													uni.redirectTo({
														url: `/pages/loginReg/login`
													});
												}, 1000)
											},
										})
									} else if (res.code == 500) {
										that.btnDisabled = false
										that.loading = false
									}

								}
							});
						}
					} else if (patrns.test(that.from.newPassword)) {
						if (!num.test(that.from.newPassword)) {
							uni.$u.toast(that.$t('user.islands.sc.edp.i13'));
							return
						} else if (that.from.newPassword != that.confirmPassword) {
							uni.$u.toast(that.$t('user.islands.sc.edp.i18'));
							return
						} else {
							that.btnDisabled = true
							that.loading = true
							uni.request({
								url: '/member/updatePassword',
								method: "POST",
								data: that.from,
								success: (res) => {
									if (res.code == 200) {
										that.btnDisabled = false
										that.loading = false
										uni.showToast({
											title: that.$t('user.islands.sc.edp.i19'),
											success: function(res) {
												uni.removeStorageSync("user")
												if (that.titleShow == 1) {
													uni.removeStorageSync("phoneCheck")
													uni.removeStorageSync("phone")
												} else {
													uni.removeStorageSync("emailCheck")
													uni.removeStorageSync("email")
												}
												let times = setTimeout(() => {
													clearTimeout(times)
													uni.redirectTo({
														url: `/pages/loginReg/login`
													});
												}, 1000)
											},
										})
									} else if (res.code == 500) {
										that.btnDisabled = false
										that.loading = false
									}

								}
							});
						}
					} else {
						uni.$u.toast(that.$t('user.islands.sc.edp.i12'));
						return
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.editpass {
		min-height: 100vh;
		background-color: #fff;

		box-sizing: border-box;

		.u-navbar {
			height: 53px;

			.u-navbar__content {
				height: 53px !important;

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
			padding: 21px 21px;

			.main {
				.u-line {
					display: none;
				}

				.u-cell {
					background: #f5f6fa;
					border-radius: 17px;
					margin-bottom: 15px;

					.u-cell__body {
						height: 62px;
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
						height: 32px;
						box-sizing: border-box;
						background: #00bfff;
						color: #fff;
						display: flex;
						align-items: center;
						justify-content: center;
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

				.verify {
					display: flex;
					flex-direction: column;
					padding: 0 16px;

					.verify_item {
						display: flex;
						align-items: center;
						color: #5c616f;
						line-height: 2;

						.verify_item_text {
							margin-left: 10px;
							font-size: 14px;
							color: #5c616f;
							;
						}
					}
				}

				.editpassbtn {
					// background: #333;
					// height: 53px;
					line-height: 53px;
					color: #fff;
					letter-spacing: 1px;
					border-radius: 56px;
					margin-top: 26px;
				}
			}
		}
	}
</style>