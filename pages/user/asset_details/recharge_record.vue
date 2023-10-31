<template>
	<view class="recharge_record">
		<u-navbar @leftClick="goBackUser" leftText="返回" title="充值记录" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="container_nei">
			<view class="content">
				<view class="list-body">
					<view class="capital">
						<view class="capital_top">
							<text>充值类型</text>
							<text>红包-TRC20</text>
						</view>
						<view class="orderhao">
							<text>订单号</text>
							<text>202310271625350022498</text>
						</view>
						<view class="orderhao">
							<text>充值状态</text>
							<text class="rechargetype">待支付</text>
						</view>
						<view class="orderhao">
							<text>充值金额</text>
							<text>10.00</text>
						</view>
						<view class="orderhao">
							<text>实际到账金额</text>
							<text>0.00</text>
						</view>
						<view class="orderhao">
							<text>充值时间</text>
							<text>2023-10-27 16:25:35</text>
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
			// 返回积分查看
			goBackUser() {
				uni.navigateTo({
					url: `/pages/user/asset_details/index`
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.recharge_record {
		width: 100% !important;

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

			.content {
				margin-bottom: 21px;
				font-size: 16px;
				word-break: break-word;
				word-wrap: break-word;

				.list-body {
					margin-bottom: 16px;

					.capital {
						padding: 21px;
						border-radius: 26px;
						color: #000;
						background: #f5f6fa;

						.capital_top {
							font-size: 18px;
							font-weight: 600;
							margin-bottom: 10px;
							display: flex;
							justify-content: space-between;
						}
						.orderhao{
							font-size: 16px;
							    color: #333;
							    display: flex;
							    justify-content: space-between;
							    line-height: 3;
								.rechargetype{
									color: #2fa2e3;
								}
						}
					}
				}
			}
		}
	}
</style>