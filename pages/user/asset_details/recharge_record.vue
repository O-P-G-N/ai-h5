<template>
	<view class="recharge_record">
		<u-navbar @leftClick="goBackUser" :leftText="$t('user.asset.details.rc.back')" :title="$t('user.asset.details.rc.charge_record')" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="container_nei">
			<view class="content">
				<view class="list-body" v-for="(v,i) in contentList" :key="i">
					<view class="capital">
						<view class="capital_top">
							<text>{{$t('user.asset.details.rc.charge_type')}}</text>
							<text>{{v.type==1?' USDT-TRC20':v.type==2?' USDT-ERC20':v.type==3?' USDT-BSC':''}}</text>
						</view>
						<view class="orderhao">
							<text>{{$t('user.asset.details.rc.order_sn')}}</text>
							<text>{{v.orderNo}}</text>
						</view>
						<view class="orderhao">
							<text>{{$t('user.asset.details.rc.charge_status')}}</text>
							<text class="rechargetype">{{v.status==0?$t('user.asset.helpcenter.idx.help_center1'):$t('user.asset.helpcenter.idx.help_center2')}}</text>
						</view>
						<view class="orderhao">
							<text>{{$t('user.asset.details.rc.charge_amount')}}</text>
							<text>{{v.hongbao}}</text>
						</view>
						<view class="orderhao">
							<text>{{$t('user.asset.details.rc.actual_received')}}</text>
							<text>{{v.hongbao}}</text>
						</view>
						<view class="orderhao">
							<text>{{$t('user.asset.details.rc.charge_time')}}</text>
							<text>{{v.updateTime}}</text>
						</view>
					</view>
				</view>
				<u-loadmore :loading-text="$t('index.tips23')" :loadmore-text="$t('index.tips22')" :nomore-text="$t('index.tips24')" :status="status" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from: {
					pageNum: 1,
					pageSize: 10
				},
				PageCount: 0, //总页数
				contentList: [], //记录列表
				status: "loadmore",
			};
		},
		onShow() {
			this.getRechargeRecord()
		},
		onReachBottom() {
			this.loadMore()
		},
		onHide() {
			this.from.pageNum = 1;
		},
		methods: {
			// 返回积分查看
			goBackUser() {
				uni.navigateTo({
					url: `/pages/user/asset_details/index`
				});
			},
			// 获取充值记录
			getRechargeRecord() {
				uni.request({
					url: `/recharge/list`,
					method: "POST",
					data: this.from,
					success: (res) => {
						this.contentList = res.data.rows;
						this.PageCount = Math.ceil(res.data.total / 10);
						if (this.PageCount <= this.contentList.length) {
							this.status = "nomore"
						}
						console.log(res);
					}
				});
			},
			// 上划加载
			loadMore() {
				if (this.from.pageNum < this.PageCount) {
					this.status = "loading"
					this.from.pageNum++;
					uni.request({
						url: `/recharge/list`,
						method: "POST",
						data: this.from,
						success: (res) => {
							this.contentList.push(...res.data.rows);

						}
					});
				} else {
					this.status = "nomore"
				}
			}
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

						.orderhao {
							font-size: 16px;
							color: #333;
							display: flex;
							justify-content: space-between;
							line-height: 3;

							.rechargetype {
								color: #2fa2e3;
							}
						}
					}
				}
			}
		}
	}
</style>