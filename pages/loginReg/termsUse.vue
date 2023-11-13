<template>
	<view class="terms_use">
		<u-navbar @leftClick="goBackUser" :left-text="back" :title="termsuse" :safeAreaInsetTop="false"
			titleStyle="fontWeight: 600"></u-navbar>
		<view class="main" v-if="pageShow==0">
		
		</view>
		<view class="main" v-else-if="pageShow==1">
			<web-view src="../../static/file/termsUse/zh-Hans.html"></web-view>
		</view>
		<view class="main" v-else-if="pageShow==2">
			<web-view src="../../static/file/termsUse/en.html"></web-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				termsuse: this.$t('login.termsuse'), //用户协议国际化
				back: this.$t('login.back'), //返回国际化
				pageShow: 0,
			};
		},
		onShow() {
			if (uni.getStorageSync("UNI_LOCALE") == "zh-Hant") {
				this.pageShow = 0
			} else if (uni.getStorageSync("UNI_LOCALE") == "zh-Hans") {
				this.pageShow = 1
			} else if (uni.getStorageSync("UNI_LOCALE") == "en") {
				this.pageShow = 2
			}
		},
		methods: {
			// 返回登录首页
			goBackUser() {
				uni.navigateBack({
					delta: 1
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.terms_use {
		min-height: 100vh;
		box-sizing: border-box;
		width: 100%;
		min-height: 100vh;
		background-color: #fff;

		.u-navbar {
			height: 53px;
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
		.main{
			padding:0 20rpx;
			box-sizing: border-box;
		}
	}
</style>