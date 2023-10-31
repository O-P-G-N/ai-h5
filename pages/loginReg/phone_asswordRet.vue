<template>
	<view class="phone_asswordRet">
		<u-navbar @leftClick="goBackUser" leftText="返回" height="53px" title="忘记密码" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="pageOne" v-if="pageIndex==0">
			<view class="title_h2">找回密码</view>
			<view class="inputmain">
				<view class="inputevery">
					<view class="inputevery_content">
						<vue-country-intl type="phone" @onChange="onChange" v-model="countryCode"></vue-country-intl>
					</view>
				</view>
				<view class="inputevery">
					<u-input v-model="from.to" placeholder="请输入手机号">
						<u--text class="phone_tip" :text="countryCode" slot="prefix"></u--text>
					</u-input>
				</view>
				<ai-button class="next-btn loginbtn" @click="nextStep">下一步</ai-button>
			</view>
		</view>
		<view class="pageTwo" v-else-if="pageIndex==1">
			<view class="title_h2">手机验证</view>
			<view class="formmain">
				<view class="intro">
					<view class="">如果您选择的是手机验证</view>
					<view class="">请在1分钟后检查您的手机短信息!</view>
				</view>
				<view class="codeinput">
					<u-code-input v-model="value" :focus="true" :maxlength="4"></u-code-input>
				</view>
				<ai-button :disabled="value?false:true" class="next-btn loginbtn">下一步</ai-button>
				<view class="register">没有收到?<text class="retrieve_btn">重新获取</text></view>
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
					countryCode: ""
				},
				pageIndex: 0, //页面索引
				value: "", //验证码
			};
		},
		created() {

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
				if(this.from.to&&this.from.countryCode){
					uni.request({
						url: '/aicommon/sendCode',
						method: "GET",
						data: this.from,
						success: (res) => {
							this.pageIndex = 1
						}
					});
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
	}
</style>