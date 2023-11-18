<template>
	<view class="login" @click="closeLang">
		<view class="navbar">
			<image class="navbar_img" @click.stop="selectLang" src="@/static/login/language.png" mode=""></image>
			<view class="lang-down-menu" v-if="langShow">
				<view class="extend-link" v-for="(item, index) in locales" :key="index" @click="onLocaleChange(item)">
					{{item.text}}
				</view>

			</view>
		</view>
		<view class="container_nei">
			<view class="title_h1">EXGPT</view>
			<view class="title_h3">{{$t('login.welcome')}}</view>
			<view class="subsectiontwo">
				<button class="subsectiontwo_every" @click="mobileLogin">
					<view class="flex_al_center">
						<image class="icon" src="@/static/login/phone.png" mode=""></image>
						{{$t('login.type.phone')}}({{$t('login.notyetopened')}})
					</view>
				</button>
				<button class="subsectiontwo_every" @click="emailLogin">
					<view class="flex_al_center">
						<image class="icon" src="@/static/login/emails.png" mode=""></image>
						{{$t('login.type.email')}}
					</view>
				</button>
				<!-- <a
					href="tpoutside://pull.activity?param={callbackUrl:'http: / /115.205.0.178:9011\/taaBizApi /taaInitData',action: 'login',actionId:'1648522106711',blockchains:[{chainId:'1',network:'ethereum'}],dappIcon:'https: /\/eosknights.io /img /icon.png',dappName:'zs',protocol:'TokenPocket',version:'2.0'}">
					<button class="subsectiontwo_every" @click="walletLogin">

						<view class="flex_al_center">
							<image class="icon" src="@/static/login/wallet.png" mode=""></image>
							{{$t('login.type.wallet')}}
						</view>
					</button>
				</a> -->
				<a href="weixin://">
					<button class="subsectiontwo_every" @click="walletLogin">

						<view class="flex_al_center">
							<image class="icon" src="@/static/login/wallet.png" mode=""></image>
							{{$t('login.type.wallet')}}
						</view>
					</button>
				</a>
				<view class="line">
					<view class="divider"></view>
					<view class="lint_text">{{$t('login.orloginto')}}</view>
				</view>
			</view>
			<view class="inputmain">
				<view class="quicklogin">
					<view class="login_item" @click="loginItem">
						<image class="google" src="@/static/login/Google.png" mode=""></image>
					</view>
					<view class="login_item" @click="loginItem">
						<image class="google" src="@/static/login/window.png" mode=""></image>
					</view>
					<view class="login_item" @click="loginItem">
						<image class="google" src="@/static/login/gd.png" mode=""></image>
					</view>
				</view>
				<view class="privacy">
					{{$t('login.agreement1')}}<text class="blur"
						@click="viewTerms">《{{$t('login.agreement2')}}》</text>{{$t('login.agreement3')}}<text
						class="blur" @click="viewPolicy">《{{$t('login.agreement4')}}》</text>
				</view>
				<view class="register">
					{{$t('login.noaccount')}}？
					<text class="blur" @click="regAccount">{{$t('login.registernow')}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				langShow: false, //选择语言
			};
		},
		computed: {
			locales() {
				return [{
						text: this.$t('locale.en'),
						code: 'en'
					},
					{
						text: this.$t('locale.zh-hans'),
						code: 'zh-Hans'
					},
					{
						text: this.$t('locale.zh-hant'),
						code: 'zh-Hant'
					}
				]
			}
		},
		onLoad() {
			let systemInfo = uni.getSystemInfoSync();
			this.systemLocale = systemInfo.language;
			this.applicationLocale = uni.getLocale();
			uni.onLocaleChange((e) => {
				this.applicationLocale = e.locale;
			})
		},
		methods: {
			//手机登录
			mobileLogin() {
				uni.$u.toast(this.$t("login.tips16"));
				// uni.navigateTo({
				// 	url: `/pages/loginReg/phone_login`
				// });
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
			onLocaleChange(e) {
				uni.setLocale(e.code);
				this.$i18n.locale = e.code;
			},
			// 选择语言
			selectLang() {
				this.langShow = true
			},
			// 关闭语言选择框
			closeLang() {
				this.langShow = false
			},
			// 提示
			loginItem() {
				uni.$u.toast(this.$t("login.tips17"));
			},
			// 邮箱登录
			emailLogin() {
				uni.navigateTo({
					url: `/pages/loginReg/email_login`
				});
			},
			// 钱包登录
			walletLogin() {

			},
			// 注册账号
			regAccount() {
				uni.navigateTo({
					url: `/pages/loginReg/reg_account`
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

		a {
			text-decoration: none;
			color: #000;
		}

		.navbar {
			position: absolute;
			right: 16px;
			top: 16px;
			z-index: 99;

			.navbar_img {
				width: 37px;
				height: 38px;
			}

			.lang-down-menu {
				position: absolute;
				right: 10px;
				top: 26px;
				z-index: 10 !important;
				text-align: center;
				background-color: #242424;
				color: #fff;
				left: unset;
				right: 0;
				min-width: 120px;
				padding: 8px 0;
				border: none;
				border-radius: 6px;
				box-shadow: 0 5px 10px 0 rgba(3, 6, 18, .5);
				transition: all .3s;

				.extend-link {
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
					margin-top: 10px;
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