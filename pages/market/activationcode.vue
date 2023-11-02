<template>
	<view class="activationcode">
		<u-navbar :fixed="false" @leftClick="goBackUser" title="激活码" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main">
			<image class="jihuoimg" src="@/static/market/jihuomapage.png" mode=""></image>
			<button class="editpassbtn">
				<view class="justcard_left">获取激活码</view>
				<view class="justcard_right">
					<image class="justcard_right_img" src="@/static/user/homejiantou.png" mode=""></image>
				</view>
			</button>
		</view>
		<view class="content">
			<view class="list-body">
				<view class="capital">
					<view class="orderhao">
						<text>激活码</text>
						<view class="jihuoma">
							<text>WlKTfEnn</text>
							<image @click="copyBtn('WlKTfEnn')" class="jihuoma_img" src="@/static/market/copy.png" mode=""></image>
						</view>
					</view>
					<view class="orderhao">
						<text>使用状态</text>
						<text>待使用</text>
					</view>
					<view class="orderhao">
						<text>获取时间</text>
						<text>2023-11-02 09:09:19</text>
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

			};
		},
		methods: {
			// 复制邀请码
			copyBtn(val) {
				uni.setClipboardData({
					data: val,
					success: function() {
						uni.showToast({
							title: "复制成功!",
							succesvals: function(res) {

							}
						})
					}
				});
			},
			// 返回
			goBackUser(){
				uni.switchTab({
					url: `/pages/market/index`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.activationcode {
		min-width: 100vw;
		min-height: 100vh;
		box-sizing: border-box;
		background-color: #fff;
		padding: 0 21px;


		.u-navbar {
			height: 53px;

			.u-navbar__content {
				height: 53px !important;

				.u-navbar__content__left {
				padding-left: 0;
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
					font-weight: 700;
					font-size: 17px;
				}
			}
		}

		.main {
			border-radius: 48px;
			padding: 26px 10px;
			display: flex;
			flex-direction: column;
			align-items: center;

			.jihuoimg {
				width: 213px;
				height: 213px;
			}

			.editpassbtn {
				height: 42px;
				display: flex !important;
				align-items: center;
				justify-content: space-between;
				width: -webkit-max-content;
				width: max-content;
				padding: 4px 5px;
				background: #333;
				border-radius: 26px;

				.justcard_left {
					display: flex;
					align-items: center;
					margin-left: 10px;
					padding: 0 10px;
					color: #fff;
					font-size: 14px;
					line-height: 1;
					letter-spacing: 1px;
				}

				.justcard_right {
					width: 32px;
					height: 32px;

					.justcard_right_img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}

		.content {
			margin-top: 21px;
			font-size: 16px;
			word-break: break-word;
			word-wrap: break-word;

			.list-body {
				margin-bottom: 16px;

				.capital {
					padding: 16px 18px;
					border-radius: 26px;
					color: #000;
					background: #f5f6fa;

					.orderhao {
						font-size: 16px;
						color: #333;
						display: flex;
						justify-content: space-between;
						line-height: 3;
						font-weight: 500;

						.jihuoma {
							display: flex;
							align-items: center;
							color: #2fa2e3;

							.jihuoma_img {
								width: 19px;
								height: 19px;
								margin-left: 5px;
							}
						}
					}
				}
			}
		}
	}
</style>