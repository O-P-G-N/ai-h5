<template>
	<view>
		<u-navbar title="视频营销" :fixed='false' :safeAreaInsetTop="false" :height='50'>
			<view class="u-nav-slot" slot="left">
				<image mode="aspectFit" @click="back" class="back" src="~@/static/index/round-back.png"></image>
			</view>
			<view class="u-nav-slot" slot="right">
				<image mode="aspectFit" @click="toWorks" class="davincupload" src="~@/static/index/davincupload.png">
				</image>
			</view>
		</u-navbar>
		<view class="videoaiheader">
			<image class="videoindexImage" src="~@/static/index/videoindexheader.webp"></image>
			<view class="videoaiheader_right">
				<view class="right_title">AI视频生成工具</view>
				<view class="intro">内容快速生成、灵活的解决方案、直观编辑和优化视频</view>
			</view>
		</view>

		<view class="container_nei">
			<view class="heardSelect">
				<view class="selectItem" :class="{'activeItem':selectIndex==0}" @click="selectIndex=0">
					视频营销
				</view>
				<view class="selectItem" :class="{'activeItem':selectIndex==1}" @click="selectIndex=1">
					智能替身
				</view>
				<view class="activeBg" :style="{'left':`calc(${selectIndex*50}% ${selectIndex==0?'+':'-'} 14rpx)`}">
				</view>
			</view>
			<view class="tabselect">
				<u-tabs :list="tabsList" lineColor='transparent' :inactiveStyle='inactiveStyle'
					:activeStyle="activeStyle" ></u-tabs>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectIndex: 0,
				tabsList: [{
						name: '全部',
					},
					{
						name: '男性',
					},
					{
						name: '女性',
					},
					{
						name: '生成AI数字人',
					}
				],
			}
		},
		computed: {
			activeStyle() {
				return {
					"background": "rgb(0, 0, 0)",
					"padding": "4rpx 24rpx",
					"border-radius": " 30rpx",
					"color": "rgb(255, 255, 255)",
				}
			},
			inactiveStyle() {
				return {
					"color": "rgb(153, 153, 153)",
					"border": "1px solid rgb(153, 153, 153)",
					"padding": "4rpx 24rpx",
					"border-radius": " 30rpx",
				}
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			toWorks() {
				uni.navigateTo({
					url: '/pages/index/picture/modelworks'
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.heardSelect {
		margin: 0 0 20px;
		width: 100%;
		padding: 14rpx;
		height: 80rpx;
		border-radius: 80rpx;
		display: flex;
		justify-content: center;
		background: #f8f8f8;
		position: relative;

		.selectItem {
			position: relative;
			z-index: 9;
			width: 50%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 28rpx;
			color: rgb(102, 102, 102);

			&.activeItem {
				font-weight: bold;
				color: rgb(0, 0, 0);
			}
		}

		.activeBg {
			width: 50%;
			position: absolute;
			z-index: 0;
			height: 80rpx;
			left: 14rpx;
			background-color: #fff;
			border-radius: 50rpx;
			transition: left 0.5s;

		}
	}
	
	.tabselect {
		margin: 15rpx 0;
	
		::v-deep .u-tabs__wrapper__nav__item:first-child {
			padding-left: 0 !important;
		}
	
		::v-deep .u-tabs__wrapper__scroll-view {
			::-webkit-scrollbar {
				width: 0;
				height: 0;
			}
		}
		::v-deep.u-tabs__wrapper__nav__item {
		    padding-right: 15px!important;
		    padding-left: 0!important;
		}
	}

	page {
		background-color: #fff;
	}

	.container_nei {
		padding: 0 40rpx;
		margin-top: 30rpx;
	}

	.back {
		width: 54rpx;
		height: 30rpx;
	}

	.davincupload {
		width: 40rpx;
		height: 40rpx;
	}

	::v-deep .u-navbar__content__title {
		font-weight: bold;
		color: #303133;
	}

	.videoaiheader {
		background: #f8f8f8;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 40rpx 60rpx;

		.videoindexImage {
			width: 180rpx;
			height: 180rpx;
		}

		.videoaiheader_right {
			flex: 1;
			margin-left: 40rpx;


			.right_title {
				color: #333;
				font-weight: 600;
				font-size: 40rpx;
				margin-bottom: 20rpx;
			}

			.intro {
				width: calc(100% - 30rpx);
				font-size: 28rpx;
				color: #868686;
			}
		}
	}
</style>