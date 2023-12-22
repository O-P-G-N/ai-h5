<template>
	<view class="index">
		<view class="navTow">
			<u-navbar @leftClick="goBackUser" :title="$t('pa.prc8')" :safeAreaInsetTop="false">
				<view class="u-nav-slot" slot="left">
					<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
				</view>
			</u-navbar>
		</view>
		<view class="container_nei">
			<view class="main">
				<view class="cellgroup">
					<u-cell-group :border="false">
						<u-cell :title="$t('user.con_detail.i74')" :label="$t('user.con_detail.i76')" :is-link="true"
							@click="alltExchange">
							<image slot="icon" class="exchange_icon" src="@/static/user/alita.png" mode=""></image>
						</u-cell>
						<u-cell :title="$t('user.con_detail.i75')" :label="$t('user.con_detail.i77')" :is-link="true"
							@click="integralExchange">
							<image slot="icon" class="exchange_icon" src="@/static/user/guanguan.png" mode=""></image>
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

			}
		},
		onLoad() {

		},
		methods: {
			// 返回积分查看
			goBackUser() {
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			// 积分兑换
			integralExchange() {
				uni.navigateTo({
					url: `/pages/user/integral_exchange`
				});
			},
			// ch@i兑换
			alltExchange() {
				uni.navigateTo({
					url: `/pages/user/exchange_index/aai_exchange`
				});

			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.index {
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

				.exchange_icon {
					width: 20px;
					height: 20px;
				}
			}
		}
	}
</style>