<template>
	<view class="asset_details">
		<view class="navTow">
			<u-navbar @leftClick="goBackUser" :title="$t('user.asset.details.index.asset_detail')" :safeAreaInsetTop="false">
				<view class="u-nav-slot" slot="left">
					<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
				</view>
			</u-navbar>
		</view>
		<view class="container_nei">
			<view class="main">
				<view class="cellgroup">
					<u-cell-group :border="false">
						<u-cell :title="$t('user.asset.details.index.asset_detail')" :is-link="true" @click="rechargeRecord">
						</u-cell>
						<u-cell :title="$t('user.asset.details.index.withdraw_record')" :is-link="true" @click="withdrawalRecords">
						</u-cell>
						<u-cell :title="$t('user.asset.details.index.flow')" :is-link="true" @click="capitalFlow">
						</u-cell>
					</u-cell-group>
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
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			// 充值记录
			rechargeRecord(){
				uni.navigateTo({
					url: `/pages/user/asset_details/recharge_record`
				});
			},
			// 提现记录
			withdrawalRecords(){
				uni.navigateTo({
					url: `/pages/user/asset_details/withdrawal_records`
				});
			},
			//资金流水
			capitalFlow(){
				uni.navigateTo({
					url: `/pages/user/capital_flow`
				});
			}
			
			
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.asset_details {
		min-height: 90vh;
		padding-top: 53px !important;
		overflow: hidden;
		box-sizing: border-box;

		.navTow {
			width: 100%;
			position: absolute;
			top: 0;
			z-index: 999;

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
		}

		.container_nei {
			box-sizing: border-box;
			width: 100%;
			position: absolute;
			top: 53px;
			padding: 21px 21px;

			.cellgroup {
				.u-cell {
					background: #f5f6fa;
					border-radius: 18px;
					margin-bottom: 16px;
					font-weight: bold;

					.u-line {
						display: none;
					}

					.u-cell__body {
						padding: 21px 16px;
					}

					.u-icon__icon--info {
						color: #000;
					}
				}
			}
		}

	}
</style>