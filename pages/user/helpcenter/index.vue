<template>
	<view class="help_center">
		<u-navbar @leftClick="goBackUser" title="帮助中心" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="container_nei">
			<view class="content">
				<view class="list-body" @click="viewDetail">
					<view class="capital">
						<view class="capital_titles">
							<view class="capital_top">常见问题解答（FAQ）</view>
							<image class="capital_titles_img" src="@/static/user/rightjt.png" mode=""></image>
						</view>
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
			// 返回个人中心
			goBackUser() {
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			// 查看详情
			viewDetail(){
				uni.navigateTo({
					url: `/pages/user/helpcenter/helpcenterdetail`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.help_center {
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
			box-sizing: border-box;
			width: 100%;
			position: absolute;
			top: 53px;
			padding: 21px 21px;

			.content {
				margin-top: 16px;
				font-size: 16px;
				word-break: break-word;
				word-wrap: break-word;

				.list-body {
					margin-bottom: 16px;

					.capital {
						padding: 21px;
						border-radius: 21px;
						color: #333;
						background: #f5f6fa;

						.capital_titles {
							display: flex;
							justify-content: space-between;

							.capital_top {
								font-size: 17px;
								font-weight: 600;
								overflow: hidden;
								text-overflow: ellipsis;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 2;
								line-height: 1.5;
							}

							.capital_titles_img {
								width: 9px;
								height: 12px;
								margin-left: 10px;
								margin-top: 5px;
							}
						}
					}
				}
			}
		}
	}
</style>