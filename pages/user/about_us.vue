<template>
	<view class="about_us">
		<u-navbar @leftClick="goBackUser" :leftText="$t('user.about.i1')" title="" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="content">
			<view class="">
				<view class="content_head">
					<text class="content_head_text">{{$t('user.about.i2')}}</text>
					{{$t('user.about.i3')}}
				</view>
				<image class="content_body" src="@/static/user/introduction_bg.png" mode=""></image>
				<view class="content_foot">{{$t('user.about.i4')}}</view>
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
				uni.navigateBack({
					delta: 1
				});
			},

		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.about_us {
		width: 100%;
		height: 100%;
		padding: 20px 20px;
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

		.content {
			background: rgb(240, 244, 249);
			border-radius: 20px;
			padding: 20px;
			box-sizing: border-box;
			margin-top: 10px;
			font-size: 16px;
			word-break: break-word;
			word-wrap: break-word;
			padding-bottom: 21px;
			line-height: 1.5;

			.content_head {
				line-height: 29px;

				.content_head_text {
					color: rgb(65, 97, 214);
					font-weight: bold;
					margin-right: 5px;
				}
			}

			.content_body {
				width: 100%;
				margin: 10px 0px;
				height: 152px;
			}

			.content_foot {}
		}
	}
</style>