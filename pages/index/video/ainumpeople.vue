<template>
	<view class="ainumpeople">
		<u-navbar :title="creativecenter" :fixed='false' :safeAreaInsetTop="false" :height='50'>
			<view class="u-nav-slot" slot="left">
				<image mode="aspectFit" @click="back" class="head_back_img" src="~@/static/index/round-back.png">
				</image>
			</view>
			<view class="u-nav-slot" slot="right">
				<image mode="aspectFit" @click="toWorks" class="davincupload" src="~@/static/index/davincupload.png">
				</image>
			</view>
		</u-navbar>
		<view class="videoaiheader">
			<image class="videoaiheader_img" src="@/static/index/videoindexheader.png" mode=""></image>
			<view class="videoaiheader_right">
				<view class="titleweight">{{$t("index.AIvideogenerationtool")}}</view>
				<view class="intro">{{$t("index.title")}}</view>
			</view>
		</view>
		<view class="container_nei">
			<view class="">
				<view class="tabselect">
					<u-tabs class="mt10"
						:activeStyle="{color:'#fff',background: 'rgb(0, 0, 0)',padding: '2px 12px',borderRadius: '16px'}"
						:inactiveStyle="{color:'rgb(153, 153, 153)',border: '1px solid rgb(153, 153, 153)',padding: '2px 12px',borderRadius: '16px'}"
						:list="list" @click="tabsClick"></u-tabs>
				</view>
				<view class="aiNumPeople">
					<view class="aiNumPeople_list" @click="nextStepTwo">
						<image class="aiNumPeople_list_img" src="@/static/index/preview_target.webp" mode=""></image>
						<view class="titles">Alex</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '全部',
				}, {
					name: '男性',
				}, {
					name: '女性',
				}],
				creativecenter:this.$t("index.creativecenter"),//创作中心国际化
			};
		},
		methods: {
			back() {
				uni.navigateTo({
					url: `/pages/index/video/videocreatthree`
				});
			},
			toWorks() {
				// uni.navigateTo({
				// 	url: `/pages/index/video/indexIntr`
				// });
			},
			//tab按钮
			tabsClick() {

			},
			nextStepTwo(){
				uni.navigateTo({
					url: `/pages/index/video/videocreattwo`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.ainumpeople {
		width: 100%;
		background-color: #fff;
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

				.davincupload {
					width: 20px;
					height: 20px;
				}
			}
		}

		.videoaiheader {
			background: #f8f8f8;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 21px 32px;

			.videoaiheader_img {
				width: 96px;
				height: 96px;
			}

			.videoaiheader_right {
				width: calc(100% - 117px);

				.titleweight {
					color: #333;
					font-weight: 600;
					font-size: 21px;
					margin-bottom: 10px;
				}

				.intro {
					font-size: 14px;
					color: #868686;
				}
			}
		}

		.container_nei {
			padding: 0 21px 21px 21px;

			.tabselect {
				margin-top: 5px;
				margin-bottom: 10px;

				.u-tabs {
					.u-tabs__wrapper__nav__line {
						background-color: transparent !important;
					}
				}
			}

			.aiNumPeople {
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: wrap;

				.aiNumPeople_list {
					position: relative;
					width: 170px;
					height: 213px;
					margin-bottom: 16px;
					background: #333;
					border-radius: 21px;

					.aiNumPeople_list_img {
						width: 170px;
						height: 213px;
						border-radius: 21px;
					}

					.titles {
						position: absolute;
						left: 10px;
						top: 10px;
						color: #fff;
						font-size: 14px;
					}
				}
			}
		}
	}
</style>