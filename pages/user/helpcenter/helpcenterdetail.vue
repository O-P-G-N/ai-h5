<template>
	<view class="help_detail">
		<u-navbar @leftClick="goBackUser" title="" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onLoad(option) {
			this.getHelpDetail(option.id);
		},
		methods: {
			// 获取信息详情
			getHelpDetail(id){
				uni.request({
					url: `/help/get`,
					method: "GET",
					success: (res) => {
						
						console.log(res);
					}
				});
			},
			// 返回帮助中心
			goBackUser() {
				uni.navigateTo({
					url: `/pages/user/helpcenter/index`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.help_detail {
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
	}
</style>