<template>
	<view class="partner">
		<u-navbar @leftClick="goBackUser" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="avatar_card">
			<view class="t_bor_r">
				<image class="t_bor_r_img" src="~@/static/tabbar/tx.webp" mode=""></image>
			</view>
			<view class="right_avatar">
				<text class="right_avatar_top">nike</text>
				<ai-button @click="upTrain" :btnHeight="'26px'" :fontSize="'12px'" :bg="'#333'" class="next-btn btn-view">升级训练</ai-button>
			</view>
		</view>
		<view class="chat-view">
			<view class="chat"></view>
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
			// 返回
			goBackUser() {
				uni.switchTab({
					url: `/pages/index/index`
				});
			},
			// 升级训练
			upTrain(){
				uni.navigateTo({
					url: `/pages/partner/upgrade_train`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.partner {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		background-color: #fff;

		.u-navbar {
			height: 44px;

			.u-navbar__content {
				height: 44px !important;

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

		.avatar_card {
			width: 60%;
			display: flex;
			margin: 10px 0;
			height: 80px;
			margin: 10px auto;
			justify-content: center;
			box-sizing: border-box;

			.t_bor_r {
				width: 80px;
				height: 80px;
				border-radius: 50%;
				overflow: hidden;

				.t_bor_r_img {
					width: 100%;
					height: 100%;
				}
			}

			.right_avatar {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 10px 0;
				margin-left: 10px;
				text-align: center;
				box-sizing: border-box;

				.right_avatar_top {
					color: #000;
					font-size: 19px;
				}

				.btn-view {
					width: 100%;
					text-align: center;
					line-height: 26px;
					font-size: 12px;
					color: #fff;
					border-radius: 32px;
				}
			}
		}

		.chat-view {
			flex: 1;
			width: 100%;
			background: #fff;
			overflow-y: auto;

			.chat {
				height: 98%;
				font-size: 50px;
				box-sizing: border-box;
			}
		}
	}
</style>