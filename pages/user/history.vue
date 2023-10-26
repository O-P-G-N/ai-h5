<template>
	<view class="history">
		<u-navbar @leftClick="goBackUser" leftText="返回" title="兑换记录" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="content">
			<view class="list-body">
				<view class="capital">
					<view class="capital_top">
						<text>兑换类型</text>
						<text>积分兑换</text>
					</view>
					<view class="orderhao">
						<text>兑换USDT金额</text>
						<text>10.00</text>
					</view>
					<view class="orderhao">
						<text>兑换积分数量</text>
						<text>1150.00</text>
					</view>
					<view class="orderhao">
						<text>兑换时间</text>
						<text>2023-10-26 11:14:04</text>
					</view>
				</view>
			</view>
			<view class="list-body">
				<view class="capital">
					<view class="capital_top">
						<text>兑换类型</text>
						<text>积分兑换</text>
					</view>
					<view class="orderhao">
						<text>兑换USDT金额</text>
						<text>10.00</text>
					</view>
					<view class="orderhao">
						<text>兑换积分数量</text>
						<text>1150.00</text>
					</view>
					<view class="orderhao">
						<text>兑换时间</text>
						<text>2023-10-26 11:14:04</text>
					</view>
				</view>
			</view>
			<u-loadmore :status="nomore" />
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
			// 返回积分查看
			goBackUser() {
				uni.navigateTo({
					url: `/pages/user/integral_exchange`
				});
			},

		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.history {
		width: 100%;
		height: 100%;
		padding: 20px 20px;
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

			}
		}

		.content {
			margin-bottom: 20px;
			font-size: 15px;
			word-break: break-word;
			word-wrap: break-word;

			.list-body {
				margin-bottom: 15px;

				.capital {
					padding: 20px;
					border-radius: 25px;
					color: #000;
					background: #f5f6fa;

					.capital_top {
						font-size: 17px;
						font-weight: 600;
						margin-bottom: 10px;
						display: flex;
						justify-content: space-between;
					}
					.orderhao{
						    font-size: 15px;
						    color: #333;
						    display: flex;
						    justify-content: space-between;
						    line-height: 3;
					}
				}
			}
		}
	}
</style>