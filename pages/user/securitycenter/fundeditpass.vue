<template>
	<view class="fundeditpass">
		<u-navbar height="53px" @leftClick="goBackUser" :title="$t('user.islands.sc.fdp.i1')" :safeAreaInsetTop="false">
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
									<u-code unique-key="fundeditpass" :start-text="$t('user.islands.sc.edp.i4')"
										ref="uCode" @change="codeChange"
										:changeText="'X'+ $t('user.islands.sc.edp.i5')"></u-code><text
										@click="getCode">{{tips}}</text>
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
							<u-input v-model="from.newPassword" @focus="focusNew(true)" maxlength="6"
								:placeholder="$t('user.islands.sc.edp.i8')" :type="eyeShow?'password':'number'">
								<image @click="showHidden" slot="suffix" class="eye"
									:src="eyeShow?'../../../static/login/close.png':'../../../static/login/open.png'"
									mode=""></image>
							</u-input>
						</view>
					</u-cell>
					<u-cell :title="$t('user.islands.sc.edp.i9')">
						<view slot="value" class="code_content">
							<u-input v-model="from.confirmPassword" maxlength="6" @focus="focusNew(false)"
								:placeholder="$t('user.islands.sc.edp.i0')" :type="eyeShows?'password':'number'">
								<image @click="showHiddens" slot="suffix" class="eye"
									:src="eyeShows?'../../../static/login/close.png':'../../../static/login/open.png'"
									mode=""></image>
							</u-input>
						</view>
					</u-cell>
				</u-cell-group>
				<view class="verify">
					<view class="verify_item">
						<u-icon size="20px" color="rgb(0, 0, 0)" name="close-circle-fill"></u-icon>
						<text class="verify_item_text">{{$t('user.islands.sc.fdp.i2')}}</text>
					</view>
					<!-- <view class="verify_item">
						<u-icon size="20px" color="rgb(0, 0, 0)" name="close-circle-fill"></u-icon>
						<text class="verify_item_text">有一个大写字母或符号</text>
					</view>
					<view class="verify_item">
						<u-icon size="20px" color="rgb(0, 0, 0)" name="close-circle-fill"></u-icon>
						<text class="verify_item_text">包含数字</text>
					</view> -->
				</view>
				<u-keyboard ref="uKeyboard" @confirm="show=false" @cancel="show=false" :cancelText="$t('index.cancellation')" :confirmText="$t('index.determine')"
					@change="valChange" mode="number" @backspace="backspace" :dotDisabled="true"
					:show="show"></u-keyboard>
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
					confirmPassword: "", //确认新密码
				}, //表单验证
				eyeShow: true, //密码显示
				eyeShows: true, //密码显示
				titleShow: 1, //判断标题
				tips: "", //提示语
				loading: false, //模态框按钮等待状态
				btnDisabled: false, //模态框是否禁用按钮
				show: false, //数字键盘状态
				newFlag: true,
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
			// 判断标题
			determineTitle() {
				if (uni.getStorageSync("user").phone) {
					this.titleShow = 1;
					this.from.phone = uni.getStorageSync("user").phone;
					this.name = uni.getStorageSync("user").phone;
				} else {
					this.titleShow = 2;
					this.from.email = uni.getStorageSync("user").email;
					this.name = uni.getStorageSync("user").email;
				}
			},
			// 显示隐藏
			showHidden() {
				this.eyeShow = !this.eyeShow
			},
			// 显示隐藏
			showHiddens() {
				this.eyeShows = !this.eyeShows
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
								uni.$u.toast(this.$t('user.islands.sc.edp.i15'));
							}
						}
					});
				} else {
					uni.$u.toast(this.$t('user.islands.sc.edp.i17'));
				}

			},
			// 输入密码聚焦
			focusNew(val) {
				this.newFlag = val;
				this.show = true;
			},
			valChange(val) {
				if (this.newFlag) {
					this.from.newPassword += val;
					if (this.from.newPassword.length > 6) {
						this.show = false;
						if (this.from.newPassword.length) this.from.newPassword = this.from.newPassword.substr(0, this.from
							.newPassword.length - 1)
					}
				} else {
					this.from.confirmPassword += val;
					if (this.from.confirmPassword.length > 6) {
						this.show = false;
						if (this.from.confirmPassword.length) this.from.confirmPassword = this.from.confirmPassword.substr(
							0, this.from
							.confirmPassword.length - 1)
					}
				}

			},
			//退格
			backspace() {
				if (this.newFlag) {
					if (this.from.newPassword.length) this.from.newPassword = this.from.newPassword.substr(0, this.from
						.newPassword.length - 1)
				} else {
					if (this.from.confirmPassword.length) this.from.confirmPassword = this.from.confirmPassword.substr(0,
						this.from
						.confirmPassword.length - 1);
				}
			},
			// 提示语
			codeChange(text) {
				this.tips = text;
			},
			// 确认修改
			ConfMod() {
				let num = /[0-9]/im
				let patrn = /^(?=.*?[A-Z])(?=.*?\d).*$/
				let patrns = /^(?=.*?[*?!&￥$%^#,./@";:><\[\]}{\-=+_\\|》《。，、？’‘“”~ `]).*$/
				let patrnss = /^(?=.*?[a-z])(?=.*?\d).*$/;
				if (this.from.code == "") {
					uni.$u.toast(this.$t('user.islands.sc.edp.i16'));
					return
				} else if (this.from.newPassword.length < 6) {
					uni.$u.toast(this.$t('user.islands.sc.fdp.i3'));
					return
				} else if (this.from.newPassword.length > 6) {
					uni.$u.toast(this.$t('user.islands.sc.fdp.i3'));
					return
				} else if (patrn.test(this.from.newPassword)) {
					uni.$u.toast(this.$t('user.islands.sc.fdp.i4'));
					return
				} else if (patrns.test(this.from.newPassword)) {
					uni.$u.toast(this.$t('user.islands.sc.fdp.i5'));
					return
				} else if (patrnss.test(this.from.newPassword)) {
					uni.$u.toast(this.$t('user.islands.sc.fdp.i6'));
					return
				} else if (this.from.newPassword != this.from.confirmPassword) {
					uni.$u.toast(this.$t('user.islands.sc.edp.i18'));
					return
				} else {
					this.btnDisabled = true
					this.loading = true
					uni.request({
						url: '/member/updatePayPassword',
						method: "POST",
						data: this.from,
						success: (res) => {
							if (res.code == 200) {
								this.btnDisabled = false
								this.loading = false
								uni.showToast({
									title: this.$t('user.islands.sc.edp.i19'),
									success: function(res) {
										let times = setTimeout(() => {
											clearTimeout(times)
											uni.redirectTo({
												url: `/pages/user/securitycenter/index`
											});
										}, 1000)
									},
								})
							} else if (res.code == 500) {
								this.btnDisabled = false
								this.loading = false
							}

						}
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.fundeditpass {
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
						display: flex;
						align-items: center;
						justify-content: center;
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