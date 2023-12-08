<template>
	<view class="history">
		<u-navbar @leftClick="goBackUser" :leftText="$t('user.about.i1')" :title="$t('user.capital_flow.i13')" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="content">
			<view class="list-body" v-for="(v,i) in lists" :key="i">
				<view class="capital">
					<view class="capital_top">
						<text>{{$t('user.capital_flow.i14')}}</text>
						<text>{{$t('user.capital_flow.i15')}}</text>
					</view>
					<view class="orderhao">
						<text>{{$t('user.capital_flow.i16')}}</text>
						<text>{{v.hongbao}}</text>
					</view>
					<view class="orderhao">
						<text>{{$t('user.capital_flow.i17')}}</text>
						<text>{{v.useScore}}</text>
					</view>
					<view class="orderhao">
						<text>{{$t('user.capital_flow.i18')}}</text>
						<text>{{v.updateTime}}</text>
					</view>
				</view>
			</view>
			<u-loadmore :loading-text="$t('index.tips23')" :loadmore-text="$t('index.tips22')" :nomore-text="$t('index.tips24')" :status="loadStatus" />
		</view>
	</view>
</template>

<script>
	import {listMixin} from "@/mixin/page.js"
	export default {
		mixins: [listMixin],
		data() {
			return {
				pageUrl: `/score/list`,
			};
		},
		onLoad() {
			this.getList(1);
			const pages = getCurrentPages();
			console.log(pages);
			if (pages.length > 1) {
				uni.setStorageSync('router', pages[pages.length-2].route);
			}
		},
		methods: {
			// 返回积分查看
			goBackUser() {
				const pages = getCurrentPages();
				if (pages.length > 1) {
					uni.navigateBack({
						delta: 1
					});
				} else {
					uni.redirectTo({
						url: `/${uni.getStorageSync("router")}`
					});
					uni.switchTab({
						url: `/${uni.getStorageSync("router")}`
					});
				}
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

					.orderhao {
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