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
			<!-- <view class="heardSelect">
				<view class="selectItem" :class="{'activeItem':selectIndex==0}" @click="heardSelectClick(0)">
					视频营销
				</view>
				<view class="selectItem" :class="{'activeItem':selectIndex==1}" @click="heardSelectClick(1)">
					智能替身
				</view>
				<view class="activeBg" :style="{'left':`calc(${selectIndex*50}% ${selectIndex==0?'+':'-'} 14rpx)`}">
				</view>
			</view> -->
			<!-- <template v-if='selectIndex==0'>
				<view class="videoevery_wai" v-for='(item,index) in contentList' :key='index'>
					<view class="videoevery">
						<template  v-if='!item.isPlay'>
							<image class="playImg"  @click="playFn(index)" mode="aspectFit" src="~@/static/index/bofangicon.png"></image>
							<image class="poestImg" mode="aspectFill" src="~@/static/index/videomodel3.webp"></image>
						</template>
						<video v-else id='myVideo' @pause="stopFn(index,$event)" @ended="stopFn(index,$event)" :initial-time="item.currentTime?item.currentTime:0" @timeupdate="timeupdateFn(index,$event)" class="contentVideo" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4"
							controls></video>
					</view>
					<view class="videoxinxi">
						<view class="videoxinxi_top">
							<view>模板编号：THSI234</view>
							<view class="righttag">Advertisement</view>
						</view>
						<view class="videoxinxi_botton" @click="createVideo">使用此模版创建视频</view>
					</view>
				</view>
			</template>
			<template v-else>
				
			</template>
			<view class="loadingTxt" v-if='isReachBottom'>数据加载中</view> -->
			<view class="tabselect">
				<u-tabs :list="tabsList" lineColor='transparent' :inactiveStyle='inactiveStyle'
					:activeStyle="activeStyle" @click="tabSelectClick">
				</u-tabs>
			</view>
			<view class="aiNumPeople">
				<template v-if='timbreList.length>0'>
					<view class="voiceevery" @click="createCopy(v)"
						v-for="(v, i) in timbreList" :key="i">
						<view class="everyone">
							<image class="guoqi" :src="v.imageUrl" mode=""></image>
							<view @click.stop="playAudio(v.soundUrl,i)">
								<u-icon :name="playFlag&&audioIndex==i?'pause':'play-right-fill'"
									color="rgb(41, 121, 255)" size="14"></u-icon>
							</view>
						</view>
						<view class="everyone_bottom">
							<view class="labels">{{v.lang}}</view>
						</view>
					</view>
				</template>
				<template v-else>
					<view class="aiNumPeople_list" v-for='(item,index) in 6' :key='index'>
						<view class="skeleton" style="width: 100%;height: 100%;"></view>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	const innerAudioContext = uni.createInnerAudioContext();
	export default {
		data() {
			return {
				isReachBottom: false,
				tabIndex: 0,
				selectIndex: 0,
				timbreList: [], //音色列表
				playFlag: false, //音乐播放判断
				audioIndex: 0, //播放索引
				// contentList: [],
				contentList2: [],
				tabsList: [{
						name: '全部',
						value: ""
					},
					{
						name: '男性',
						value: "1"
					},
					{
						name: '女性',
						value: "0"
					},
			
				],
				roleType: "", //角色类型
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
			this.gettimbre()
		},
		onReachBottom() {
			
		},
		methods: {
			// 创建视频
			/* createVideo(v) {
				uni.navigateTo({
					url: `/pages/index/video/videocreatthree?from=${JSON.stringify(v)}`
				});
			}, */
			// 创建文案
			createCopy(v) {
				uni.navigateTo({
					url: `/pages/index/video/videocreattwocopy?from=${JSON.stringify(v)}`
				});
			},
			// 获取音色
			gettimbre(gender) {
				uni.request({
					url: '/video/voices',
					method: "GET",
					data: {
						sex: this.roleType
					},
					success: (res) => {
						this.timbreList = res.data;
					}
				});
			},
			// 播放语音
			playAudio(src, i) {
				if (innerAudioContext.src != src) {
					innerAudioContext.stop();
					innerAudioContext.src = src;
					innerAudioContext.play();
					this.playFlag = true
				} else {
					if (innerAudioContext.paused) {
						innerAudioContext.src = src;
						innerAudioContext.play();
						this.playFlag = true
					} else {
						innerAudioContext.stop();
						this.playFlag = false;
					}
				}
				this.audioIndex = i;
				innerAudioContext.onEnded(() => {
					this.playFlag = false
				})
			},
			// 获取角色
			getStanding() {
				uni.request({
					url: '/video/voicesPeople',
					method: "GET",
					data: {
						sex: this.roleType
					},
					success: (res) => {
						this.contentList2 = res.data;
					}
				});
			},
			stopFn() {
				this.contentList = this.contentList.map(n => {
					n['isPlay'] = false
					return n
				})
			},
			timeupdateFn(index, e) {
				const {
					currentTime
				} = e.detail
				this.$set(this.contentList[index], 'currentTime', currentTime)
			},
			playFn(index) {
				this.contentList = this.contentList.map(n => {
					n['isPlay'] = false
					return n
				})
				this.$set(this.contentList[index], 'isPlay', true)
				this.$nextTick(() => {
					uni.createVideoContext('myVideo', this).play()
				})
			},
			heardSelectClick(index) {
				// this.stopFn()
				// this.isReachBottom = true
				this.selectIndex = index;
				if (this.selectIndex == 1) {
					this.getStanding()
				}
			},
			tabSelectClick(e) {
				this.timbreList = []
				if (e.value == "new") {
					uni.$u.toast('敬请期待');
					this.contentList2 = []
					return
				} else {
					this.roleType = e.value;
					this.gettimbre()
				}
				
				this.tabIndex = e.index;

			},
			back() {
				uni.switchTab({
					url: `/pages/index/index`
				});
			},
			toWorks() {
				uni.navigateTo({
					url: '/pages/index/video/videorecord'
				})
			},
			
		}
	}
</script>

<style scoped lang="scss">
	.heardSelect {
		padding: 14rpx;
		height: 80rpx;
		border-radius: 80rpx;
		display: flex;
		justify-content: center;
		background: #f8f8f8;
		position: relative;
		margin-bottom: 42rpx;

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
				display: none;
			}
		}

		::v-deep.u-tabs__wrapper__nav__item {
			padding-right: 15px !important;
			padding-left: 0 !important;
			position: relative;
		}

		::v-deep .u-badge {
			position: absolute;
			right: 10px;
			top: 0;
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

	.videoevery_wai {
		margin-top: 54rpx;
		width: 100%;

		.videoevery {
			width: 100%;
			height: 434rpx;
			border-radius: 42rpx;
			box-sizing: border-box;
			position: relative;
			overflow: hidden;

			.poestImg {
				width: 100%;
				height: 100%;
				position: relative;
				z-index: 9;
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

			.contentVideo {
				width: 100%;
				height: 100%;
			}
		}

		.videoxinxi {
			margin-top: 20rpx;
			color: rgba(0, 0, 0, 0.9);

			.videoxinxi_top {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.righttag {
					font-size: 26rpx;
					padding: 4rpx 20rpx;
					border: 2rpx solid #bfbfbf;
					border-radius: 20rpx;
				}
			}

			.videoxinxi_botton {
				width: 100%;
				background: #fff;
				height: 108rpx;
				line-height: 108rpx;
				color: #333;
				border: 2rpx solid #bfbfbf !important;
				margin-top: 20rpx;
				font-size: 32rpx;
				border-radius: 108rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}

	.aiNumPeople {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		.voiceevery {
			width: 42%;
			margin-bottom: 16px;
			padding: 10px;
			border-radius: 16px;
			border: 1px solid #e8e8e8;
			min-height: 85px;
		
			.everyone {
				display: flex;
				align-items: center;
				justify-content: space-between;
		
				.guoqi {
					width: 24px;
					height: 17px;
				}
			}
		
			.everyone_bottom {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				margin-top: 10px;
		
				.labels {
					margin-right: 5px;
				}
			}
		}
		
		.voiceevery_active {
			border: 2px solid #2979ff;
			width: 41.5%;
		}

		.aiNumPeople_list {
			position: relative;
			width: 320rpx;
			height: 400rpx;
			margin-bottom: 30rpx;
			background: #333;
			border-radius: 40rpx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}

			.title {
				position: absolute;
				left: 20rpx;
				top: 20rpx;
				color: #fff;
				font-size: 28rpx;
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
</style>