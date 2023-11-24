<template>
	<view class="set_phone">
		<u-navbar height="53px" @leftClick="goBackUser" :title="$t('user.con_detail.i58')" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="container_nei">
			<view class="main">
				<view class="inputevery_content">
					<vue-country-intl schema="input" :iosMobileReadonly="false" :placeholder="$t('login.tips21')" :searchAble="true" type="phone"
						@onChange="onChange" v-model="from.countryCode"></vue-country-intl>
				</view>
				<u-cell-group :border="false">
					<u-cell>
						<view slot="value" class="email_content">
							<u-input type="number" :placeholder="$t('login.enterphone')" class="email_content_text"
								v-model="from.phone">
								<view slot="suffix" class="email_content_btn">
									<u-code unique-key="editpass" :start-text="$t('user.islands.sc.edp.i4')" ref="uCode"
										@change="codeChange"
										:changeText="'X'+ $t('user.islands.sc.edp.i5')"></u-code><text
										@click="getCode">{{tips}}</text>
								</view>
							</u-input>
						</view>
					</u-cell>
					<u-cell>
						<view slot="value" class="code_content">
							<u-input v-model="from.code" :placeholder="$t('user.islands.sc.edp.i61')" type="number">
							</u-input>
						</view>
					</u-cell>
				</u-cell-group>
				<ai-button :disabled="btnDisabled" :loading="loading" :bg="'#2979FF'" :btnHeight="'53px'"
					class="next-btn editpassbtn" @click="ConfMod">{{$t('user.con_detail.i60')}}</ai-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from: {
					countryCode: "", //国家
					phone: "", //手机号
					code: "", //验证码
					addr: "", //地址
					type: 4, //类型
				}, //表单验证
				tips: "", //提示语
				loading: false, //模态框按钮等待状态
				btnDisabled: false, //模态框是否禁用按钮
			};
		},
		onLoad(option) {
			this.from.addr = option.addr;
		},
		methods: {
			// 返回积分查看
			goBackUser() {
				uni.navigateTo({
					url: `/pages/loginReg/login`
				});
			},
			// 获取验证码
			getCode() {
				if (this.from.phone != "") {
					if (this.$refs.uCode.canGetCode) {
						this.$refs.uCode.start();
						uni.request({
							url: `/aicommon/sendCode`,
							method: "GET",
							data: {
								type: 1,
								to: this.from.phone,
								countryCode: this.from.countryCode,
							},
							success: (res) => {
								if (res.code == 200) {
									uni.$u.countryCodeast(this.$t('user.islands.sc.edp.i15'));
								}
							}
						});
					} else {
						uni.$u.toast(this.$t('user.islands.sc.edp.i17'));
					}
				} else {
					uni.$u.toast(this.$t('login.enterphone'));
				}
			},
			// 提示语
			codeChange(text) {
				this.tips = text;

			},
			// 选择国家
			onChange(selected) {
				this.from.countryCode = selected.dialCode;
			},
			// 立即绑定
			ConfMod() {
				if (this.from.countryCode == "") {
					uni.$u.toast(this.$t("login.tips21"));
					return;
				} else if (this.from.phone == "") {
					uni.$u.toast(this.$t('login.enterphone'));
					return;
				} else if (this.from.code == "") {
					uni.$u.toast(this.$t('user.islands.sc.edp.i61'));
					return;
				} else {
					this.loading = true
					this.btnDisabled = true;
					uni.request({
						url: `/nt/externalLogin`,
						method: "POST",
						data: this.from,
						success: (res) => {
							if (res.code == 200) {
								this.loading = false
								this.btnDisabled = false;
								uni.setStorageSync("user", res.data)
								uni.showToast({
									title: this.$t('user.con_detail.i61'),
									success: function(res) {
										let time = setTimeout(() => {
											clearTimeout(time)
											uni.switchTab({
												url: `/pages/index/index`
											});
										}, 2000)
									},
								})
							} else {
								this.loading = false
								this.btnDisabled = false;
							}
						}
					});
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.set_phone {
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
				.inputevery_content {
					background-color: #f5f6fa;
					width: 100%;
					height: 62px;
					box-sizing: border-box;
					margin-bottom: 15px;
					border-radius: 17px;
					display: flex;
					align-items: center;

					.vue-country-intl {
						width: 100%;
						border-radius: 17px;
					}

					.country-intl-input-wrap {

						border: 0 !important;
						border-radius: 17px !important;
						display: flex;
						align-items: center;

						.country-intl-input {
							padding-left: 25px;
							box-sizing: border-box;
							border-radius: 17px !important;
							border-bottom-left-radius: 0 !important;
							border-bottom-right-radius: 0 !important;
							background: #f5f6fa !important;
						}

						.country-intl-label {
							border-radius: 17px !important;
							background: #f5f6fa !important;
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
						border-radius: 17px !important;
					}

					.vue-country-list {
						width: 100%;
						margin: 0;
						padding: 0;
						list-style: none;
						font-size: 16px;
					}
				}

				.u-line {
					display: none;
				}

				.u-cell {
					background: #f5f6fa;
					border-radius: 17px;
					margin-bottom: 15px;

					.u-cell__body {
						width: 100%;
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
					width: 100%;
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
					width: 100%;

					.uni-input-placeholder {

						color: rgb(192, 196, 204);
					}

					.u-input {
						padding: 0 !important;
					}




				}


				.editpassbtn {
					// background: #333;
					// height: 53px;
					line-height: 53px;
					color: #fff;
					background: #2979FF;
					border-radius: 17px 17px 17px 17px;
					margin-top: 156px;
				}
			}
		}
	}
</style>