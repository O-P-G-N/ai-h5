<template>
	<view>
		<u-navbar title="作品集" :fixed='false' :safeAreaInsetTop="false" :height='50'>
			<view class="u-nav-slot" slot="left">
				<image mode="aspectFit" @click="back" class="back" src="~@/static/index/round-back.png"></image>
			</view>
		</u-navbar>
		<view class="content-lei">
			<view class="heardMain">
				<input class="seachInput" placeholder="搜索画面描述" placeholder-style="color:rgb(192, 196, 204)" v-model="seachTxt" />
				<view class="seachBtn">
					<image class="searchImg" src="~@/static/index/search.png"></image>
				</view>
			</view>
			
			<view class="tabselect">
				<u-tabs :list="tabsList" lineColor='transparent' :inactiveStyle='inactiveStyle'
					:activeStyle="activeStyle" @click="tabSelectClick"></u-tabs>
			</view>
			<view class="contentMain">
				<view class="content-item" v-for="(item,index) in contentList" :key='index'>
					<image mode="widthFix" src="~@/static/index/anli.webp"></image>
				</view>
				<!-- <view class="noView" v-for="(item,index) in 10"></view> -->
			</view>
			<view class="loadingTxt" v-if='isReachBottom'>数据加载中</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				seachTxt: '',
				contentList: [],
				tabsList:[
					{
						name: 'AI创作',
					},
					{
						name: '营销创作',
					}
				],
				isReachBottom:false
			}
		},
		onLoad() {
			this.loadmore()
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
		onReachBottom() {
			// if (this.isReachBottom) {
			// 	return
			// }
			// this.isReachBottom = true
			// setTimeout(() => {
			// 	this.loadmore()
			// }, 1000)
		},
		methods: {
			tabSelectClick(e) {
				this.constenList = []
				if(this.setTimeoutL)clearTimeout(this.setTimeoutL)
				this.setTimeoutL= setTimeout(() => {
					this.loadmore()
				}, 1000)
			},
			loadmore() {
				for (let i = 0; i < 16; i++) {
					this.contentList.push({
						text: parseInt(Math.random() * 10) + 10
					})
				}
				this.isReachBottom = false
			},
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #fff;
	}

	.back {
		width: 54rpx;
		height: 30rpx;
	}

	::v-deep .u-navbar__content__title {
		font-weight: bold;
		color: #303133;
	}

	.content-lei {
		padding: 0 40rpx;
		margin-top: 30rpx;
	}

	.heardMain {
		display: flex;
		justify-content: space-between;

		.seachInput {
			width: 470rpx;
			background: #f5f6fa;
			padding: 30rpx !important;
			border-radius: 200rpx;
		}

		.seachBtn {
			padding: 30rpx;
			background: #f5f6fa;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			.searchImg{
				width: 40rpx;
				height: 40rpx;
			}
		}
	}

	
	.tabselect {
		margin: 20rpx 0;
		::v-deep .u-tabs__wrapper__nav__item:first-child {
			padding-left: 0 !important;
		}
		
		::v-deep .u-tabs__wrapper__scroll-view {
			::-webkit-scrollbar {
				width: 0;
				height: 0;
			}
		}
	}
	
	
	.contentMain{
		margin-top: 10rpx;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.content-item{
			width: 208rpx;
			height: 208rpx;	
			margin-bottom: 20rpx;
			image{
				width: 100%;
				height: 100%;
				border-radius: 30rpx;
			}
		}
	}
	
	.loadingTxt {
		margin-top: 20rpx;
		width: 100%;
		height: 100rpx;
		color: rgb(153, 153, 153);
		text-align: center;
		font-size: 30rpx;
		line-height: 100%;
	}
	.noView{
		width: 0;
		height: 0;
	}
</style>