<template>
	<view class="notice">
		<u-navbar @leftClick="goBackUser" :title="$t('home.menu.notice')" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="container_nei">
			<view class="">
				<u-tabs :scrollable="false" :activeStyle="{fontWeight: 600,color:'rgb(47, 162, 227)'}"
					:inactiveStyle="{fontWeight: 600}" :list="tabList" @click="tabClick"></u-tabs>
			</view>
			<view class="content">
				<u-collapse accordion v-if="noticeList.length>0">
					<u-collapse-item v-for="(v,i) in noticeList" :border="false" :title="v.noticeTitle" name="Docs guide">
						<text class="u-collapse-content">{{v.noticeContent}}</text>
					</u-collapse-item>

				</u-collapse>
				<view class="nothing" v-else>
					<image class="nothing_img" src="@/static/user/noticenothing.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
					name: this.$t('user.capital_flow.i77'),
					value:"1"
				}, {
					name: this.$t('user.capital_flow.i78'),
					value:"2"
				}, {
					name: this.$t('user.capital_flow.i79'),
					value:"3"
				}, ],
				noticeList:[],//公告列表
				tabIndex:"1",//tab索引
			};
		},
		onShow() {
			this.getNoticeList()
		},
		methods: {
			// 返回个人中心
			goBackUser() {
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			// 获取公告信息
			getNoticeList(){
				uni.request({
					url: `/info/list`,
					method: "GET",
					data: {noticeType:this.tabIndex},
					success: (res) => {
						this.noticeList=res.data;
					}
				});
			},
			// tab切换
			tabClick(val) {
				this.tabIndex=val.value;
				this.getNoticeList();
			},
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.notice {
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
			padding: 21px 21px;

			.content {
				margin-top: 21px;
				font-size: 16px;
				word-break: break-word;
				word-wrap: break-word;

				.u-line {
					display: none;
				}

				.u-collapse-item {
					color: rgb(51, 51, 51);
					font-weight: 400;
					border-radius: 16px;
					margin-bottom: 16px;
					background: #f5f6fa;

					.u-cell {
						border-radius: 16px;

						.u-cell__body {
							padding: 21px 16px !important;
							display: flex;
							flex-direction: row;
							box-sizing: border-box;
							padding: 10px 15px;
							font-size: 15px;
							color: #303133;
							align-items: center;
						}
					}
				}

				.nothing {
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 90px;

					.nothing_img {
						width: 165px;
						height: 132px;
					}
				}
			}
		}

	}
</style>