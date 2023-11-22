<template>
	<view class="activationcode">
		<u-navbar :fixed="false" @leftClick="goBackUser" :title="prc19" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main">
			<image class="jihuoimg" src="@/static/market/jihuomapage.png" mode=""></image>
			<button class="editpassbtn" @click="getInvitationCode">
				<view class="justcard_left" >{{$t("ac.prc20")}}</view>
				<view class="justcard_right">
					<image class="justcard_right_img" src="@/static/user/homejiantou.png" mode=""></image>
				</view>
			</button>
		</view>
		<view class="content">
			<view class="list-body" v-for="(v,i) in invitationCodeList" :key="i">
				<view class="capital">
					<view class="orderhao">
						<text>{{$t("ac.prc19")}}</text>
						<view class="jihuoma">
							<text>{{v.code}}</text>
							<image @click="copyBtn(v.code)" class="jihuoma_img" src="@/static/market/copy.png" mode="">
							</image>
						</view>
					</view>
					<view class="orderhao">
						<text>{{$t("ac.prc21")}}</text>
						<text>{{v.status==1?$t("ac.prc22"):$t("ac.prc23")}}</text>
					</view>
					<view class="orderhao">
						<text>{{$t("ac.prc24")}}</text>
						<text>{{v.createTime}}</text>
					</view>
				</view>
			</view>
			<u-loadmore :loading-text="$t('index.tips23')" :loadmore-text="$t('index.tips22')" :nomore-text="$t('index.tips24')" :status="status" />
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
				invitationCodeList: [], //激活码列表
				PageCount: 0, //总页数
				status: "loadmore",
				prc19:this.$t("ac.prc19"),//激活码国际化
			};
		},
		onShow() {
			this.getInvitationCodeList();
		},
		onReachBottom() {
			this.loadMore()
		},
		onHide() {
			this.from.pageNum = 1;
		},
		methods: {
			// 获取邀请码列表
			getInvitationCodeList() {
				uni.request({
					url: `/island/act-codes/${1}`,
					method: "GET",
					success: (res) => {
						this.invitationCodeList = res.data.rows
						this.PageCount = Math.ceil(res.data.total / 10);
					}
				});
			},
			// 获取新的邀请码
			getInvitationCode() {
				this.from.pageNum=1
				uni.request({
					url: `/island/act-code`,
					method: "POST",
					data: {
						pageNum: 1,
						pageSize: 10
					},
					success: (res) => {
						this.invitationCodeList = res.data.rows
						this.PageCount = Math.ceil(res.data.total / 10);
					}
				});
			},
			// 复制邀请码
			copyBtn(val) {
				uni.setClipboardData({
					data: val,
					success: function() {
						uni.showToast({
							title:this.$t("ac.prc25"),
							succesvals: function(res) {
							}
						})
					}
				});
			},
			loadMore() {
				if (this.from.pageNum < this.PageCount) {
					this.status = "loading"
					this.from.pageNum++;
					uni.request({
						url: `/island/act-codes/${this.from.pageNum}`,
						method: "GET",
						data: this.from,
						success: (res) => {
							this.invitationCodeList.push(...res.data.rows)
							this.PageCount = Math.ceil(res.data.total / 10);
						}
					});
				} else {
					this.status = "nomore"
				}
			},
			// 返回
			goBackUser() {
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