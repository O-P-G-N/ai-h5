<template>
	<view>
		<view class="globalMian">
			<image class="global" src="~@/static/index/global.png"></image>
		</view>
		<view class="container">
			<view class="justcard">
				<image class="justchating" src="~@/static/index/justchating.webp"></image>
				<view class="button">
					<image class="usewrs" src="~@/static/index/awesome-users.webp"></image>
					<text>1423</text>
					<image class="homejiantou" src="~@/static/index/homejiantou.webp"></image>
				</view>
			</view>
			<view class="twocardfuns">
				<view class="card-item left" @click="toPage('/pages/index/picture/dfqaichat')">
					<view class="card-nei">
						<view class="top">
							<view class="title">AI创作</view>
							<view class="intro">创意画廊</view>
						</view>
						<view class="bottom">
							<image src="~@/static/index/tiyanjt.webp"></image>
							<view>体验</view>
						</view>
					</view>

				</view>
				<view class="card-item right" @click="toPage('/pages/index/video/indexIntr')">
					<view class="card-nei">
						<view class="top">
							<view class="title">视频营销</view>
							<view class="intro">数字人</view>
						</view>
						<view class="bottom">
							<image src="~@/static/index/tiyanjt.webp"></image>
							<view>体验</view>
						</view>
					</view>

				</view>
			</view>

			<view class="aicreate">
				<view class="heard">
					<image class="homecs" src="~@/static/index/homecs.webp"></image>
					<text>创作</text>
					<view class="rightyishu">
						<view class="text"><text>· 人人都是大艺术家</text></view>
					</view>
				</view>
			</view>
			<view class="tabselect">
				<u-tabs :list="tabsList" lineColor='transparent' :inactiveStyle='inactiveStyle'
					:activeStyle="activeStyle" @click="tabSelectClick"></u-tabs>
			</view>
			<vide class="content-mian">
				<template v-if='constenList.length'>
					<view class="content-item" v-for='(item,index) in constenList' :key='index'>
						<image mode="widthFix" src="@/static/index/png.webp"></image>
						<view class="mian-text">
							<view class="text">{{item.text}}</view>
						</view>
					</view>
				</template>
				<template v-else>
					<!-- 骨架屏 -->
					<view class="skeleton one"></view>
					<view class="skeletonLi">
						<view class="skeleton two"></view>
						<view class="skeleton three"></view>
						<view class="skeleton four"></view>
					</view>
					<view class="skeleton one"></view>
					<view class="skeletonLi">
						<view class="skeleton two"></view>
						<view class="skeleton three"></view>
						<view class="skeleton four"></view>
					</view>
				</template>
				

			</vide>

			<view class="loadingTxt" v-if='isReachBottom'>数据加载中</view>
			<Footer pageName='index'></Footer>
		</view>
	</view>
</template>


<script>
	export default {
		components: {
			Footer: () => import('@/components/footer.vue')
		},
		data() {
			return {
				tabsList: [{
					name: '自由',
				}, {
					name: '赛博朋克',
				}, {
					name: '水彩风'
				}, {
					name: '水墨风'
				}, {
					name: '黑白'
				}, {
					name: '油画风'
				}, {
					name: '梦幻风'
				}, {
					name: '素描'
				}, {
					name: '涂鸦'
				}],
				constenList: [],
				isReachBottom: false,
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
		onLoad() {
			this.loadmore()
		},
		onReachBottom() {
			if (this.isReachBottom) {
				return
			}
			this.isReachBottom = true
			setTimeout(() => {
				this.loadmore()
			}, 1000)
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
				for (let i = 0; i < 10; i++) {
					this.constenList.push({
						text: parseInt(Math.random() * 10) + 10
					})
				}
				this.isReachBottom = false
			},
			toPage(e){
				uni.navigateTo({
					url:e
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";

	page {
		background-color: #fff;
	}

	.globalMian {
		width: calc(100vw - 80rpx);
		display: flex;
		justify-content: flex-end;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 40rpx;

		.global {
			width: 70rpx;
			height: 72rpx;
			position: relative;
			top: -10rpx;
			right: -10rpx;
		}

	}

	.container {
		padding: 40rpx;
		position: relative;
		.justcard {
			width: 100%;
			height: 250rpx;
			background-image: url('@/static/index/hometopcard.webp');
			background-size: cover;
			background-position: 50%;
			background-repeat: no-repeat;
			border-radius: 40px;

			.justchating {
				padding: 30rpx 36rpx;
				width: 300rpx;
				height: 60rpx;
			}

			.button {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-left: 30rpx;
				width: 235.1rpx;
				height: 70rpx;
				width: max-content;
				background: #333;
				border-radius: 50rpx;
				display: flex;

				.usewrs {

					padding-left: 20rpx;
					width: 30rpx;
					height: 28rpx;
					margin-right: 10rpx;
				}

				text {
					display: inline-block;
					color: #fff;
					font-size: 14px;
					font-weight: bold;
					line-height: 1;
				}

				.homejiantou {
					margin-left: 30rpx;
					width: 56rpx;
					height: 56rpx;
					margin-right: 10rpx;
				}
			}
		}

		.twocardfuns {
			width: 100%;
			height: 440rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 40rpx;

			.card-item {
				width: 48%;
				height: 100%;
				background-size: 100%;
				background-position: 50%;
				background-repeat: no-repeat;
				display: flex;
				background-color: #f7f7f7;
				flex-direction: column;
				justify-content: center;
				border-radius: 40rpx;

				&.left {
					background-image: url('@/static/index/aicreat.webp');
				}

				&.right {
					background-image: url('@/static/index/yingxiao.webp');
				}

				.card-nei {
					padding: 60rpx 30rpx;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}

				.top {
					.title {
						color: #000;
						font-size: 18px;
						font-weight: 600;
					}

					.intro {
						color: #818183;
						font-size: 13px;
						line-height: 1;
						margin-top: 10px;
					}
				}

				.bottom {
					image {
						width: 40rpx;
						height: 20rpx;
					}

					view {
						font-size: 28rpx;
					}
				}
			}
		}

		.aicreate {
			width: 100%;
			margin-top: 40rpx;

			.heard {
				display: flex;
				align-items: center;

				.homecs {
					width: 50rpx;
					height: 50rpx;
				}

				text {
					margin-left: 10rpx;
					color: #1b1b1b;
					font-size: 38rpx;
					font-weight: bold;

				}

				.rightyishu {
					padding: 4rpx 8rpx 4rpx 0;
					background-image: url('@/static/index/homecztiao.webp');
					background-position: 50%;
					background-repeat: no-repeat;
					background-size: 100% 100%;
					margin: 0 20rpx;

					.text,
					text {
						font-size: 24rpx;
						color: #2fa2e3;
						letter-spacing: 8rpx;
						background-size: 100% 100%;
						margin: 0 10rpx;
						letter-spacing: inherit;
					}

				}
			}
		}

		.tabselect {
			margin: 20rpx 0;
		}


		.content-mian {
			width: 100%;
			display: flex;
			flex-wrap: wrap;

			.content-item {
				width: calc((100% - 20rpx)/2);
				margin-top: 20rpx;
				position: relative;

				&:nth-of-type(even) {
					margin-left: 20rpx;
				}

				image {
					width: 100%;
					height: 328rpx;
					border-radius: 40rpx;
					position: relative;
					z-index: 9;
				}

				.mian-text {
					position: absolute;
					z-index: 99;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;

					.text {
						margin: 20rpx 0 0 20rpx;
						color: #fff;
						font-size: 28rpx;
					}
				}
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

	::v-deep .u-tabs__wrapper__nav__item:first-child {
		padding-left: 0 !important;
	}

	::v-deep .u-tabs__wrapper__scroll-view {
		::-webkit-scrollbar {
			width: 0;
			height: 0;
		}
	}
	.skeletonLi{
		width: 100%;
		height: 660rpx;
		margin: 20rpx 0;
		.two{
			width: calc((100% - 20rpx) /2);
			height: 660rpx;
			margin-right: 20rpx;
			float: left;
			border-radius: 40rpx;
		}
		.three{
			width: calc((100% - 20rpx) /2);
			height: 320rpx;
			float: right;
			border-radius: 40rpx;
		}
		.four{
			width: calc((100% - 20rpx) /2);
			height: 320rpx;
			margin-top: 20rpx;
			float: right;
			border-radius: 40rpx;
		}
		
	}
	.skeleton.one{
		width: 100%;
		height: 328rpx;
		border-radius: 40rpx;
	}
	// .skeleton{
	// 	background: linear-gradient(90deg, #F1F2F4 25%, #e6e6e6 37%, #F1F2F4 50%);
	// 	background-size: 400% 100%;
	// 	animation: skeletonAm 1.8s ease infinite;
	// 	&.one{
	// 		width: 100%;
	// 		height: 328rpx;
	// 		border-radius: 40rpx;
	// 	}
	// }
	// @keyframes skeletonAm{
	// 	0% {
	// 	    background-position: 100% 50%;
	// 	}
	// 	100% {
	// 	    background-position: 0 50%;
	// 	} 
	// }

</style>