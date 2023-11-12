<template>
	<view>
		<u-navbar title="AI合成详情" :fixed='false' :safeAreaInsetTop="false" :height='50'>
			<view class="u-nav-slot" slot="left">
				<image mode="aspectFit" @click="back" class="back" src="~@/static/index/round-back.png"></image>
			</view>
			<!-- <view class="u-nav-slot" slot="right">
				<image mode="aspectFit" class="davincupload" src="~@/static/index/davincupload.png">
				</image>
			</view> -->
		</u-navbar>
		<view class="content-lei">
			<view class="contentItemVideo" v-for="(v,i) in videoList" :key='i'>
				<view class="contentVideoMain">
					<view class="videoevery_nei" v-if="playFlag!=i&&playIndex!=i">
						<view class="bofangbtn" @click="playBtn(i)">
							<image class="bofangbtn_img" src="@/static/user/bofangicon.png" mode=""></image>
						</view>
					</view>
					<video v-else-if="playFlag==i&&playIndex==i" @pause="ended" @ended="ended"  class="contentVideo" autoplay :show-center-play-btn='false'
						:src="v.address" controls></video>
				</view>
				<!-- <view class="copy-btn" @click="copyFn">复制视频链接</view> -->
				<ai-button :btnHeight="'62px'" :color="'#fff'" :bg="'#333'" class="copy-btn" @click="copyVideoLink(v.address)">复制视频链接</ai-button>
			</view>
			<u-loadmore :status="status" />
		</view>
	</view>
</template>

<script>
	import app_config from '../../../common/config.js';
	export default {
		data() {
			return {
				from: {
					pageNum: 1,
					pageSize: 10
				},
				videoList: [], //ai视频合集
				pagenum: 0, //总共页数
				status: "loadmore",
				playFlag: null, //是否播放
				playIndex:null,//播放索引
			}
		},
		onLoad() {
			this.getVideoCollection()
		},
		onReachBottom() {
			this.loadMore()
		},
		methods: {
	
			back() {
				uni.navigateBack()
			},
			// 获取视频作品集
			getVideoCollection() {
				uni.request({
					url: `/video/list`,
					method: "POST",
					data: this.from,
					success: (res) => {
						res.data.rows.map((v) => {
							v.address = app_config.apiUrl + "/" + v.address
						})
						this.videoList = res.data.rows;
						this.pagenum = Math.ceil(res.data.total / 10);
						if (this.pagenum <= this.videoList.length) {
							this.status = "nomore"
						}
					}
				});
			},
			// 上划加载
			loadMore() {
				if (this.from.pageNum < this.pagenum) {
					this.status = "loading"
					this.from.pageNum++;
					uni.request({
						url: `/video/list`,
						method: "POST",
						data: this.from,
						success: (res) => {
							res.data.rows.map((v) => {
								v.address = app_config.apiUrl + "/" + v.address
							})
							this.status = "loadmore"
							this.videoList.push(...res.data.rows);
						}
					});
			
				} else {
					this.status = "nomore"
				}
			},
			// 播放
			playBtn(i) {
				this.playIndex=i;
				this.playFlag = i;
			},
			// 结束视频播放
			ended() {
				this.playFlag =null;
				this.playIndex=null;
			},
			// 复制视频链接
			copyVideoLink(val) {
				uni.setClipboardData({
					data: val,
					showToast: true,
					success: function() {
						uni.showToast({
							title: "复制成功",
							success: function(res) {}
						})
					}
				});
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
			.videoevery_nei {
				position: absolute;
				z-index: 9;
				width: 100%;
				height: 100%;
				border-radius: 21px;
				background-image: url(https://imgeom.oss-ap-southeast-1.aliyuncs.com/static/image/videoanli1.png);
				background-size: cover;
				background-position: 50%;
				background-repeat: no-repeat;
				left: 0;
				top: 0;
			
				.bofangbtn {
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
			
					.bofangbtn_img {
						width: 37px;
						height: 48px;
					}
				}
			}
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