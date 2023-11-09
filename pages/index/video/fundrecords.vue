<template>
	<view class="fundrecords">
		<u-navbar title="AI合成详情" :fixed='false' :safeAreaInsetTop="false" :height='50'>
			<view class="u-nav-slot" slot="left">
				<image mode="aspectFit" @click="back" class="head_back_img" src="~@/static/index/round-back.png">
				</image>
			</view>
			<view class="u-nav-slot" slot="right">
				<image mode="aspectFit" @click="toWorks" class="davincupload" src="~@/static/index/davincupload.png">
				</image>
			</view>
		</u-navbar>
		<view class="main">
			<view class="content">
				<view class="shengchengDemo" v-if="progress==100">
					<template v-if="playFlag">
						<view class="videoevery_nei">
							<view class="videopadding">
								<view class="bofangbtn" @click="playBtn">
									<image class="bofangbtn_img" src="@/static/index/bofangicon.png" mode=""></image>
								</view>
							</view>
							<image class="morentu" src="@/static/index/preview_target_big.webp" mode=""></image>
						</view>
					</template>
					<template v-else>
						<video id="myVideo" :show-center-play-btn="false" class="myVideo" autoplay @pause="ended" @ended="ended" :src="videoInfo.address" controls></video>
					</template>
				</view>
				<!-- <ai-button :btnHeight="'57px'" :bg="'#f5f6fa'" :color="'#333'" class="ghszrBtn">更换数字人</ai-button> -->
				<view class="tools">
					<view class="toolsDemo" v-if="progress==100">
						<text class="title">时长</text>
						<text class="detail jifen">{{videoInfo.timeCost}}S</text>
					</view>
					<view class="toolsDemo noBottm">
						<text class="title">数字人音色</text>
						<text class="detail">{{displayedTimbre.name}}</text>
					</view>
					<view class="toolsDemo rightJU" v-if="generateFlag">
						<ai-button :btnHeight="'32px'" :fontSize="'12px'" :bg="'#333'" class="ghysBtn"
							@click="changeVoice">更换音色</ai-button>
					</view>
					<view class="toolsDemo noBottm">
						<text class="title">消耗</text>
						<text class="detail jifen">30积分</text>
					</view>
				</view>
				<view class="" v-if="!videoInfo.address">
					<ai-button v-if="generateFlag" :disabled="forbidden" :loading="loading" :btnHeight="'57px'"
						:fontSize="'17px'" :bg="'#333'" class="startBtn" @click="startSynthesis">开始合成</ai-button>
					<view class="jdtOut" v-else>
						<u-line-progress class="jindu" :showText="false" :percentage="progress"
							activeColor="rgb(51, 51, 51)"></u-line-progress>
						<view class="yjsc">{{progress}}%</view>
					</view>
				</view>
				<ai-button v-else :btnHeight="'57px'" :fontSize="'17px'" :bg="'#333'" class="startBtn"
					@click="copyVideoLink">复制视频链接</ai-button>
			</view>
		</view>
	</view>
</template>

<script>
	import app_config from '../../../common/config.js';
	export default {
		data() {
			return {
				from: {}, //表单数据
				displayedTimbre: {}, //页面展示
				generateFlag: true, //是否开始生成
				time: null, //定时器
				loading: false, //等待
				forbidden: false, //是否禁用按钮
				progress: 0, //进度条
				completionTime: "", //合成时长
				videoInfo: {
					address: "",
				}, //视频信息
				playFlag: true, //是否播放
			};
		},
		onLoad(option) {
			this.from = JSON.parse(option.from);
			this.displayedTimbre = JSON.parse(option.displayedTimbre);
		},
		methods: {
			// 返回
			back() {
				uni.switchTab({
					url: `/pages/index/index`
				});
			},
			toWorks() {
				uni.navigateTo({
					url: `/pages/index/video/videorecord`
				});
			},
			// 更换音色
			changeVoice() {
				uni.navigateTo({
					url: `/pages/index/video/videocreattwocopy?from=${JSON.stringify(this.displayedTimbre)}&text=${JSON.stringify(this.from)}`
				});
			},
			playBtn() {
				this.playFlag = false
			},
			// 开始合成
			startSynthesis() {
				this.loading = true
				this.forbidden = true
				uni.request({
					url: '/video/generate',
					method: "POST",
					data: this.from,
					success: (res) => {
						this.loading = false;
						this.generateFlag = false;
						this.forbidden = false;
						let time = setInterval(() => {
							uni.request({
								url: '/video/status',
								method: "GET",
								data: {
									id: res.data
								},
								success: (res1) => {
									if (res1.data.address == "") {
										if (res1.data.progress < 75) {
											this.progress = res1.data.progress;
										} else {
											this.progress += 10
											if (res1.data.progress >= 95) {
												this.progress = 99
											}
										}
									} else {
										this.progress = 100
										res1.data.address = app_config.apiUrl+"/" + res1.data
											.address
										this.videoInfo = res1.data;
											console.log(this.videoInfo );
										clearInterval(time)
										time = null;
									}
								}
							});
						}, 6000)
					}
				});
			},
			// 复制视频链接
			copyVideoLink() {
				uni.setClipboardData({
					data: this.videoInfo.address,
					success: function() {
						uni.showToast({
							title: "复制成功!",
							success: function(res) {}
						})
					}
				});
			},
			// 结束视频播放
			ended(){
				this.playFlag=true;
			},
			
		}

	}
</script>

<style lang="scss" scoped>
	::v-deep.fundrecords {
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

		.main {
			padding: 0 20px;
			box-sizing: border-box;

			.content {
				margin-top: 21px;
				font-size: 16px;
				padding-bottom: 53px;

				.shengchengDemo {
					width: 100%;
					height: 357px;
					border-radius: 21px;
					position: relative;
					.myVideo{
						width: 100%;
						height: 100%;
						border-radius: 21px;
					}

					.videoevery_nei {
						position: absolute;
						z-index: 9;
						width: 100%;
						height: 357px;
						border-radius: 21px;
						background-size: 100% 100%;
						background-position: 50%;
						background-repeat: no-repeat;
						left: 0;
						top: 0;
						display: flex;
						align-items: center;
						justify-content: center;

						.videopadding {
							padding: 21px;
							display: flex;
							z-index: 1000000;
							flex-direction: column;
							justify-content: space-between;
							align-items: center;

							.bofangbtn {
								width: 80px;
								height: 80px !important;
								background: hsla(0, 0%, 100%, .1);
								-webkit-backdrop-filter: blur(10px);
								backdrop-filter: blur(10px);
								border-radius: 50%;
								opacity: 1;
								display: flex;
								align-items: center;
								justify-content: center;

								.bofangbtn_img {
									width: 32px;
									height: 42px !important;
									border-radius: 0 !important;
								}
							}
						}

						.morentu {
							position: absolute;
							top: 0;
							left: 0;
							bottom: 0;
							right: 0;
							width: 100%;
							height: 100% !important;
							border-radius: 21px;
							background: #333;
						}
					}


				}

				.ghszrBtn {
					border-radius: 12px 12px 12px 12px;
					line-height: 57px;
					margin-top: 12px;
					font-size: 17px;
					font-weight: 600;
					color: #333;

					.button-content::after {
						border: none;
					}
				}

				.tools {
					border-radius: 14px 14px 14px 14px;
					padding: 14px;
					border: 1px solid rgba(0, 0, 0, .5);
					margin-top: 34px;

					.toolsDemo {
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 14px;

						.title {
							font-size: 14px;
							font-weight: 400;
							color: #000;
							opacity: .9;
						}

						.detail {
							font-size: 14px;
							font-weight: 400;
							color: #000;
						}

						.jifen {
							font-size: 14px;
							font-weight: 400;
							color: #ffba07;
						}

						.ghysBtn {
							background: #333;
							border-radius: 32px;
							opacity: 1;
							width: auto;
							height: 32px;
							line-height: 32px;
							font-size: 12px;
							font-weight: 500;
							color: #fff;
							margin: 0;
						}
					}

					.noBottm {
						margin-bottom: 0 !important;
					}

					.rightJU {
						justify-content: flex-end !important;
					}
				}

				.startBtn {
					height: 57px;
					background: #333;
					border-radius: 56px;
					margin-top: 25px;
					line-height: 57px;
					font-size: 17px;
					font-weight: 600;
					color: #fff;
				}

				.jdtOut {
					position: relative;
					width: 100%;
					height: 57px;
					margin-top: 25px;

					.jindu {
						height: 57px;
						background: #f5f6fa;
						border-radius: 12px 12px 12px 12px;

						.u-line-progress__background {
							background-color: rgb(153, 153, 153);
							height: 100% !important;
							border-radius: 12px 12px 12px 12px;
						}

						.u-line-progress__line {
							height: 100% !important;
							border-radius: 12px 12px 12px 12px;
							background-color: rgb(51, 51, 51);
						}
					}

					.yjsc {
						position: absolute;
						height: 57px;
						line-height: 57px;
						left: 0;
						right: 0;
						top: 0;
						margin: auto;
						z-index: 1;
						text-align: center;
						font-size: 17px;
						font-weight: 600;
						color: #fff;
					}
				}
			}
		}
	}
</style>