<template>
	<view class="capital_flow">
		<u-navbar @leftClick="goBackUser" @rightClick="viewHistory" leftText="返回" title="资金流水"
			:safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
			<view class="u-nav-slot" slot="right">
				筛选
			</view>
		</u-navbar>
		<view class="container_nei">
			<view class="content">
				<view class="list-body">
					<view class="capital">
						<view class="capital_top">
							<text class="title">类型</text>
							<text>邀请分佣</text>
						</view>
						<view class="orderhao">
							<text class="title">金额</text>
							<text class="reds">+6.0000</text>
						</view>
						<view class="orderhao">
							<text class="title">时间</text>
							<text>2023-10-26 23:23:28</text>
						</view>
					</view>
				</view>
				<view class="list-body">
					<view class="capital">
						<view class="capital_top">
							<text class="title">类型</text>
							<text>邀请分佣</text>
						</view>
						<view class="orderhao">
							<text class="title">金额</text>
							<text class="greens">+6.0000</text>
						</view>
						<view class="orderhao">
							<text class="title">时间</text>
							<text>2023-10-26 23:23:28</text>
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
		created() {},
		methods: {
			// 返回个人中心
			goBackUser() {
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			// 查看历史记录
			viewHistory() {
				uni.navigateTo({
					url: `/pages/user/history`
				});
			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.capital_flow {
		width: 100%;
		height: 100%;
		box-sizing: border-box;

		.u-navbar {
			height: 51px;

			.u-navbar__content {
				height: 51px !important;

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

				.u-nav-slot {
					font-size: 12px;
					font-weight: 500;
					color: #2fa2e3;
					line-height: 14px;
					white-space: nowrap;
					width: 54px;
					display: flex;
					justify-content: flex-end;
					height: 20px;
				}

			}
		}

		.container_nei {
			padding: 0 20px;

			.content {
				margin-top: 20px;
				font-size: 15px;
				word-break: break-word;
				word-wrap: break-word;

				.list-body {
					margin-bottom: 15px;

					.capital {
						padding: 20px 16px;
						border-radius: 25px;
						color: #000;
						-webkit-backdrop-filter: blur(40px);
						backdrop-filter: blur(40px);
						background: #f5f6fa;
						.capital_top{
							font-size: 14px;
							    font-weight: 600;
							    color: #000;
							    margin-bottom: 20px;
							    display: flex;
							    justify-content: space-between;
								.title{
									font-size: 14px;
									    font-weight: 400;
									    color: #333;
								}
						}
						.orderhao{
							font-size: 14px;
							    font-weight: 400;
							    color: #333;
							    display: flex;
							    justify-content: space-between;
							    margin-top: 20px;
								.title{
									font-size: 14px;
									    font-weight: 400;
									    color: #333;
								}
								.reds{
									font-size: 14px;
									    font-weight: 500;
									    color: #ff1d47!important;
								}
								.greens{
									font-size: 14px;
									    font-weight: 500;
									    color: #1ee7a0!important;
								}
						}
					}
				}
			}
		}
	}
</style>