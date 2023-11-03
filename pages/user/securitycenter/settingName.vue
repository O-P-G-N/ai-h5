<template>
	<view class="set_name">
		<u-navbar @leftClick="goBackUser" title="设置昵称" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main">
			<view class="cell">
				<input class="uni-input" maxlength="20" placeholder="请输入昵称" />
			</view>
			<view class="tip">
				<view class="">温馨提示：</view>
				<view class="">设置后默认不允许修改，请认真给自己取名哦！</view>
			</view>
			<ai-button :btnHeight="'53px'" :bg="'#333'" class="next-btn editpassbtn" @click="ConfirmBind">确认绑定</ai-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			// 返回
			goBackUser() {
				uni.switchTab({
					url: `/pages/index/index`
				});
			},
			// 确认设置
			ConfirmSet(){
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.set_name {
		min-height: 100vh;
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

		.main {
			padding: 20px;
			box-sizing: border-box;

			.cell {
				background: #f5f6fa;
				border-radius: 18px;
				margin-bottom: 16px;
				height: 42px;
				padding-left: 10px;
				display: flex;
				align-items: center;

				.uni-input {
					width: 100%;
				}
				.uni-input-placeholder{
					color: rgb(192, 196, 204);
					font-size: 16px;
				}
			}

			.tip {
				color: #000;
				font-size: 16px;
				text-align: center;
			}

			.editpassbtn {
				height: 53px;
				line-height: 53px;
				color: #fff;
				letter-spacing: 1px;
				border-radius: 56px;
				margin-top: 26px;
			}
		}

	}
</style>