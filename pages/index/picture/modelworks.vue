<template>
	<view>
		<u-navbar title="作品集" :fixed='false' :safeAreaInsetTop="false" :height='50'>
			<view class="u-nav-slot" slot="left">
				<image mode="aspectFit" @click="back" class="back" src="~@/static/index/round-back.png"></image>
			</view>
		</u-navbar>
		<view class="content-lei">
			<view class="heardMain">
				<input class="seachInput" placeholder="搜索画面描述" placeholder-style="color:rgb(192, 196, 204)"
					v-model="from.keyword" />
				<view class="seachBtn">
					<image class="searchImg" @click="seachBtn" src="~@/static/index/search.png"></image>
				</view>
			</view>

			<view class="tabselect">
				<u-tabs :list="tabsList" lineColor='transparent' :inactiveStyle='inactiveStyle'
					:activeStyle="activeStyle" @click="tabSelectClick"></u-tabs>
			</view>
			<template v-if='selectIndex==0'>
				<view class="contentMain">
					<view class="content-item" v-for="(item,index) in contentList" :key='index'
						@click="showFn(item.address)">
						<image mode="widthFix" :src="item.address"></image>
					</view>
					<!-- <view class="noView" v-for="(item,index) in 10"></view> -->
				</view>
			</template>
			<template v-else>
				<view class="contentItemVideo" v-for="(item,index) in contentList2" :key='index'>
					<view class="contentVideoMain">
						<video @pause="stopFn(index,$event)" @ended="stopFn(index,$event)"
							:class="{'playVideo':item.isPlay}" class="contentVideo" :id='`video_${index}`'
							:show-center-play-btn='false'
							src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4" controls></video>
						<image v-if='!item.isPlay' class="playImg" @click="playFn(index)" mode="aspectFit"
							src="~@/static/index/bofangicon.png">
						</image>
					</view>
					<ai-button  class="copy-btn" @click="copyFn">复制视频链接</ai-button>
				</view>
			</template>
		</view>
		<u-popup :show="show" @close="show=false" mode="center" customStyle="{'background-color':'transparent'}">
			<image mode="widthFix" class="privImg" :src="showImage"></image>
			<view class="buttonDown" @click.stop="copyBtn(showImage)">复制链接</view>
		</u-popup>
	</view>
</template>

<script>
	import app_config from '../../../common/config.js';
	export default {
		data() {
			return {
				selectIndex: 0,
				showImage: '',
				show: false,
				contentList: [],
				contentList2: [],
				tabsList: [{
						name: 'AI创作',
					},
					{
						name: '营销创作',
					}
				],
				from: {
					pageNum: 1, //页数
					pageSize: 10, //每页条数
					keyword: "", //搜索描述
				},
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
			if (this.selectIndex == 0) {
				this.upstrokeRef()
			}
		},
		onHide() {
			this.from.pageNum = 1;
			this.contentList = [];
		},
		methods: {
			stopFn() {
				this.contentList2 = this.contentList2.map(n => {
					n['isPlay'] = false
					return n
				})
			},
			playFn(index) {
				document.querySelectorAll('.playVideo').forEach(item => {
					item.querySelector('.uni-video-video').pause()
				})
				this.contentList2 = this.contentList2.map(n => {
					n['isPlay'] = false
					return n
				})
				this.$set(this.contentList2[index], 'isPlay', true)
				const playMainDom = document.getElementById(`video_${index}`)
				const videoPlay = playMainDom.querySelector('.uni-video-video')
				videoPlay.play()
			},
			copyFn() {
				this.$copyToClipboard('复制信息', () => {
					uni.showToast({
						title: '复制成功！',
						icon: 'none'
					})
				})
			},
			showFn(src) {
				this.show = true
				this.showImage = src
			},
			tabSelectClick(e) {
				this.stopFn();
				this.from.pageNum = 1;
				this.contentList=[];
				this.contentList2=[];
				if(e.index==0){
					this.loadmore()
				}
				this.from.keyword = "";
				this.selectIndex = e.index;
			},
			// 上划加载
			upstrokeRef() {
				this.from.pageNum++
				uni.request({
					url: `/workImage/list`,
					method: "POST",
					data: this.from,
					success: (res) => {
						res.data.rows.map((v) => {
							v.address = app_config.apiUrl + "/" + v.address
						})
						this.contentList.push(...res.data.rows);
					}
				});
			},
			// 搜索
			seachBtn() {
				if (this.selectIndex == 0) {
					this.from.pageNum = 1
					this.loadmore()
				}else{
					
				}
			},
			// 查询ai图片创作
			loadmore() {
				uni.request({
					url: `/workImage/list`,
					method: "POST",
					data: this.from,
					success: (res) => {
						res.data.rows.map((v) => {
							v.address = app_config.apiUrl + "/" + v.address
						})
						this.contentList = res.data.rows;
					}
				});
			},
			// 复制图片链接
			copyBtn(val) {
				let that = this
				uni.setClipboardData({
					data: val,
					success: function() {
						uni.showToast({
							title: "复制成功,请在浏览器打开!",
							success: function(res) {
								that.show = false;
							}
						})
					}
				});
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

			.searchImg {
				width: 40rpx;
				height: 40rpx;
			}
		}
	}

	::v-deep .u-popup__content {
		background-color: transparent;
	}

	.privImg {
		width: 80vw;
	}

	.buttonDown {
		padding: 6px 14px;
		background: #133eff;
		border-radius: 8px;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;

		margin: 16px auto;
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


	.contentMain {
		margin-top: 10rpx;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.content-item {
			width: 208rpx;
			height: 208rpx;
			margin-bottom: 20rpx;

			image {
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

	.noView {
		width: 0;
		height: 0;
	}

	.contentItemVideo {
		width: 100%;
		margin-bottom: 80rpx;

		.contentVideoMain {
			position: relative;
			width: 100%;
			height: 458rpx;
			border-radius: 44rpx;
			overflow: hidden;

			.contentVideo {
				width: 100% !important;
				height: 100% !important;
				box-sizing: border-box;
				position: relative;

			}

			.playImg {
				width: 76rpx;
				height: 96rpx;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				z-index: 999;
			}
		}

		.copy-btn {
			width: 100%;
			height: 124rpx;
			border-radius: 26rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			font-size: 30rpx;
			font-weight: bold;
			background-color: #333333;
			margin-top: 20rpx;
		}
	}

	::v-deep .uni-video-bar {
		display: block !important;
	}
</style>