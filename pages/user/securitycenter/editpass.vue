<template>
	<view class="editpass">
		<u-navbar height="53px" @leftClick="goBackUser" title="登录密码" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="container_nei">
			<view class="main">
				<u-cell-group :border="false">
					<u-cell :title="titleShow?'手机号':'邮箱账号'">
						<view slot="value" class="email_content">
							<u-input class="email_content_text" v-model="name">
								<button @click="getCode" slot="suffix" class="email_content_btn">获取验证码</button>
							</u-input>
						</view>
					</u-cell>
					<u-cell title="验证码">
						<view slot="value" class="code_content">
							<u-input v-model="from.code" placeholder="请输入验证码" type="number">

							</u-input>
						</view>
					</u-cell>
					<u-cell title="新密码">
						<view slot="value" class="code_content">
							<u-input v-model="from.newPassword" placeholder="请输入新密码" :password="eyeShow">
								<image @click="showHidden" slot="suffix" class="eye"
									:src="eyeShow?'../../../static/login/close.png':'../../../static/login/open.png'"
									mode=""></image>
							</u-input>
						</view>
					</u-cell>
					<u-cell title="确认新密码">
						<view slot="value" class="code_content">
							<u-input v-model="confirmPassword" placeholder="请确认新密码" :password="eyeShows">
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
						<text class="verify_item_text">至少有 8 个字符</text>
					</view>
					<view class="verify_item">
						<u-icon size="20px" color="rgb(0, 0, 0)" name="close-circle-fill"></u-icon>
						<text class="verify_item_text">有一个大写字母或符号</text>
					</view>
					<view class="verify_item">
						<u-icon size="20px" color="rgb(0, 0, 0)" name="close-circle-fill"></u-icon>
						<text class="verify_item_text">包含数字</text>
					</view>
				</view>
				<ai-button :bg="'#333'" :btnHeight="'53px'" class="next-btn editpassbtn"
					@click="ConfMod">确认修改</ai-button>
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
				uni.request({
					url: `/aicommon/sendCodeMustToken`,
					method: "GET",
					data: {
						type: this.titleShow
					},
					success: (res) => {
						if (res.res.code == 200) {
							uni.$u.toast('验证码发送成功');
						}
					}
				});
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
				let that=this
				let num = /[0-9]/im
				let patrn =
					/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”ABCDEFGHIJKLMNOPQRSTUVWXYZ【】、；‘'，。、]/im
				if (that.from.code == "") {
					uni.$u.toast('请输入验证码');
					return
				} else if (that.from.newPassword.length < 8) {
					uni.$u.toast('至少有8个字符');
					return
				} else if (!patrn.test(that.from.newPassword)) {
					uni.$u.toast('有一个大写字母和字符');
					return
				} else if (!num.test(that.from.newPassword)) {
					uni.$u.toast('包含数字');
					return
				} else if (that.from.newPassword != that.confirmPassword) {
					uni.$u.toast('两次输入密码不一致');
					return
				} else {
					uni.request({
						url: '/member/updatePassword',
						method: "POST",
						data: that.from,
						success: (res) => {
							uni.showToast({
								title: "修改成功",
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
						}
					});
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