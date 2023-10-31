<template>
	<view class="login" @click="closeLang">
		<u-navbar @leftClick="goBackUser" left-text="返回" title="注册" :safeAreaInsetTop="false"
			titleStyle="fontWeight: 600"></u-navbar>
		<view class="navbar">
			<image class="navbar_img" @click.stop="selectLang" src="@/static/login/language.png" mode=""></image>
			<view class="lang-down-menu" v-if="langShow">
				<view class="extend-link" @click.stop="closeLang">English</view>
				<view class="extend-link" @click.stop="closeLang">简体中文</view>
				<view class="extend-link" @click.stop="closeLang">日本語</view>
				<view class="extend-link" @click.stop="closeLang">Việt Nam</view>
				<view class="extend-link" @click.stop="closeLang">Korean</view>
			</view>
		</view>
		<view class="container_nei">
			<view class="title_h1">EXGPT</view>
			<view class="title_h3">欢迎来到EXGPT</view>
			<view class="subsectiontwo">
				<button class="subsectiontwo_every" @click="mobileLogin">
					<view class="flex_al_center">
						<image class="icon" src="@/static/login/phone.png" mode=""></image>
						手机号注册
					</view>
				</button>
				<view class="line">
					<view class="divider"></view>
					<view class="lint_text">或注册以</view>
				</view>
				<button class="subsectiontwo_every" @click="emailLogin">
					<view class="flex_al_center">
						<image class="icon" src="@/static/login/emails.png" mode=""></image>
						电子邮箱注册
					</view>
				</button>
			</view>
			<view class="inputmain">
				<view class="quicklogin">
					<view class="login_item">
						<image class="google" src="@/static/login/Google.png" mode=""></image>
					</view>
					<view class="login_item">
						<image class="google" src="@/static/login/window.png" mode=""></image>
					</view>
					<view class="login_item">
						<image class="google" src="@/static/login/gd.png" mode=""></image>
					</view>
				</view>
				<view class="privacy">
					注册即表示您同意我们的<text class="blur">《使用条款》</text>以及我们的<text class="blur">《隐私和政策》</text>
				</view>
				<view class="register">
					还没有账户？
					<text class="blur" @click="logNow">立即登录</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				langShow:false,//选择语言
				
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
			//手机注册
			mobileLogin() {
				uni.navigateTo({
					url: `/pages/loginReg/phone_reg`
				});
			},
			// 选择语言
			selectLang(){
				this.langShow=true
			},
			// 关闭语言选择框
			closeLang(){
				this.langShow=false
			},
			// 邮箱注册
			emailLogin() {
				uni.navigateTo({
					url: `/pages/loginReg/email_reg`
				});
			},
			// 立即登录
			logNow(){
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

	.login {
		min-height: 100vh;
		box-sizing: border-box;
		display: flex;
		width: 100%;

		.navbar {
			position: absolute;
			right: 16px;
			top: 16px;
			z-index: 99;

			.navbar_img {
				width: 37px;
				height: 38px;
			}
			.lang-down-menu{
				position: absolute;
				    right: 10px;
				    top: 26px;
				    z-index: 10!important;
				    text-align: center;
				    background-color: #242424;
				    color: #fff;
				    left: unset;
				    right: 0;
				    min-width: 120px;
				    padding: 8px 0;
				    border: none;
				    border-radius: 6px;
				    box-shadow: 0 5px 10px 0 rgba(3,6,18,.5);
				    transition: all .3s;
					.extend-link{
						line-height: 20px;
						    padding: 12px 16px;
						    display: block;
						    font-size: 14px;
						    font-weight: 500;
					}
			}
		}

		.container_nei {
			padding: 21px;
			padding-top: 96px;
			width: 100%;

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

			.subsectiontwo {
				width: 100%;
				margin-top: 29px;

				.subsectiontwo_every {
					display: flex;
					align-items: center;
					margin-bottom: 10px;
					width: 100%;
					height: 53px;
					line-height: 53px;
					background: #eff3fa;
					border-radius: 12px 12px 12px 12px;
					font-size: 17px;
					font-family: Roboto-Medium, Roboto;
					font-weight: 500;
					color: #000;
					border: 0;

					.flex_al_center {
						display: flex;
						align-items: center;

						.icon {
							margin: 0 10px;
							width: 26px;
							height: 26px;
						}
					}
				}

				uni-button:after {
					border: none;
				}

				.line {
					position: relative;

					.divider {
						color: #ededed;
						width: 100%;
						height: 1px;
						background: #ededed;
						margin: 21px 0;
					}

					.lint_text {
						white-space: nowrap;
						position: absolute;
						top: 50%;
						left: 50%;
						-webkit-transform: translate(-50%, -50%);
						transform: translate(-50%, -50%);
						height: 21px;
						text-align: center;
						font-size: 14px;
						font-family: PingFang SC-Regular, PingFang SC;
						font-weight: 400;
						color: #000;
						background: #fff;
						color: grey;
					}
				}
			}

			.inputmain {
				width: 100%;
				margin-top: 21px;

				.quicklogin {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 37px;

					.login_item {
						width: 105px;
						height: 55px;
						background: #eff3fa;
						border-radius: 12px 12px 12px 12px;
						display: flex;
						align-items: center;
						justify-content: center;

						.google {
							width: 26px;
							height: 26px;
							border-radius: 50%;
						}
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

				.register {
					width: 100%;
					position: absolute;
					left: 50%;
					bottom: 69px;
					-webkit-transform: translateX(-50%);
					transform: translateX(-50%);
					font-size: 14px;
					text-align: center;
					color: #000;

					.blur {
						color: #2961ff !important;
					}
				}
			}
		}
	}
</style>