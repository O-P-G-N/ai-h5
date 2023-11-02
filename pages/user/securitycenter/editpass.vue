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
					<u-cell title="邮箱账号">
						<view slot="value" class="email_content">
							<u-input class="email_content_text" v-model="from.name">
								<button slot="suffix" class="email_content_btn">获取验证码</button>
							</u-input>
						</view>
					</u-cell>
					<u-cell title="验证码">
						<view slot="value" class="code_content">
							<input v-model="from.code" type="number" class="uni-input" maxlength="10"
								placeholder="请输入验证码" />
						</view>
					</u-cell>
					<u-cell title="验证码">
						<view slot="value" class="code_content">
							<u-input v-model="from.password" placeholder="密码" :password="eyeShow">
								<image @click="showHidden" slot="suffix" class="eye"
									:src="eyeShow?'../../static/login/close.png':'../../static/login/open.png'" mode=""></image>
							</u-input>
						</view>
					</u-cell>
				</u-cell-group>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				from: {
					name: "", //用户名
					code: "", //验证码
				}, //表单验证
				eyeShow:true,//密码显示
			};
		},
		created() {},
		methods: {
			// 返回积分查看
			goBackUser() {
				uni.navigateTo({
					url: `/pages/user/securitycenter/index`
				});
			},

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

					.uni-input {
						text-align: right;
					}
				}
			}
		}



	}
</style>