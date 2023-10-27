<template>
	<view>
		<u-navbar title="AI合成详情" :fixed='false' :safeAreaInsetTop="false" :height='50'>
			<view class="u-nav-slot" slot="left">
				<image mode="aspectFit" @click="back" class="back" src="~@/static/index/round-back.png"></image>
			</view>
			<view class="u-nav-slot" slot="right">
				<image mode="aspectFit" class="davincupload" src="~@/static/index/davincupload.png">
				</image>
			</view>
		</u-navbar>
		<view class="content-lei">
			<view class="contentItemVideo" v-for="(item,index) in contentList" :key='index'>
				<view class="contentVideoMain">
					<video  @pause="stopFn(index,$event)" @ended="stopFn(index,$event)" :class="{'playVideo':item.isPlay}" class="contentVideo" :id='`video_${index}`' :show-center-play-btn='false'
						src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4" controls></video>
					<image v-if='!item.isPlay' class="playImg" @click="playFn(index)" mode="aspectFit" src="~@/static/index/bofangicon.png">
					</image>
				</view>
				<view class="copy-btn" @click="copyFn">复制视频链接</view>

			</view>
			<view class="loadingTxt" v-if='isReachBottom'>加载更多</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isReachBottom: false,
				contentList: []
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
			stopFn(){
				this.contentList=this.contentList.map(n=>{
					n['isPlay']=false
					return n
				})
			},
			playFn(index) {
				document.querySelectorAll('.playVideo').forEach(item=>{
					item.querySelector('.uni-video-video').pause()
				})
				this.contentList=this.contentList.map(n=>{
					n['isPlay']=false
					return n
				})
				this.$set(this.contentList[index],'isPlay',true)
				const playMainDom=document.getElementById(`video_${index}`)
				const videoPlay=playMainDom.querySelector('.uni-video-video')
				videoPlay.play()
			},
			back() {
				uni.navigateBack()
			},
			copyFn() {
				this.$copyToClipboard('复制信息', () => {
					uni.showToast({
						title: '复制成功！',
						icon: 'none'
					})
				})
			},
			loadmore() {
				this.isReachBottom = true
				for (let i = 0; i < 16; i++) {
					this.contentList.push({
						text: parseInt(Math.random() * 10) + 10
					})
				}
				this.$nextTick(() => {
					setTimeout(() => {
						this.isReachBottom = false
					}, 1000)
				})

			},
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

	.davincupload {
		width: 40rpx;
		height: 40rpx;
	}

	::v-deep .u-navbar__content__title {
		font-weight: bold;
		color: #303133;

	}

	.content-lei {
		padding: 0 40rpx;
		margin-top: 30rpx;
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
		position: relative;

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