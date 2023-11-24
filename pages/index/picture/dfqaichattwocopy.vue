<template>
	<view>
		<u-navbar :title="create" :fixed='false' :safeAreaInsetTop="false" :height='50'>
			<view class="u-nav-slot" slot="left">
				<image mode="aspectFit" @click="back" class="back" src="~@/static/index/round-back.png"></image>
			</view>
			<view class="u-nav-slot" slot="right">
				<image mode="aspectFit" @click="toWorks" class="davincupload" src="~@/static/index/davincupload.png">
				</image>
			</view>
		</u-navbar>
		<view class="content-lei">
			<template>
				<view class="generateDiv">
					<template v-if="imgUrl">
						<view class="generateImg_box">
							<image class="generateImg" :src="imgUrl" @click="showFn(imgUrl)"></image>
						</view>

					</template>

				</view>
				<view class="hint" v-if='imgUrl'>{{$t("index.savelocally")}}</view>
				<view class="content-title" style="margin-top: 30rpx;"><text>{{$t("index.screendescription")}}</text>
				</view>
				<view class="detail-content">{{parameter.content}}</view>

				<view class="content-title"><text>{{$t("index.creativeinfo")}}</text></view>
				<view class="detail-content1">
					<view class="detail-item">
						<view class="detail-left">{{$t("index.theme")}}</view>
						<view class="detail-right">{{parameter.topicStr}}</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">{{$t("index.size")}}</view>
						<view class="detail-right">1024*1024</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">{{$t("index.styleselection")}}</view>
						<view class="detail-right">{{parameter.styleStr}}</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">{{$t("index.samplingmode")}}</view>
						<view class="detail-right">DPM++ 2M Karras</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">{{$t("index.suggestiverelatedterm")}}</view>
						<view class="detail-right">7</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">Clip skip</view>
						<view class="detail-right">{{$t("index.staytuned")}}...</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">ENSD</view>
						<view class="detail-right">{{$t("index.staytuned")}}...</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">{{$t("index.rolepeers")}}</view>
						<view class="detail-right">{{$t("index.staytuned")}}...</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">{{$t("index.fusionmodel")}}</view>
						<view class="detail-right">{{$t("index.staytuned")}}...</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">{{$t("index.referenceimage")}}</view>
						<view class="detail-right">{{$t("index.staytuned")}}...</view>
					</view>
				</view>
				<view class="miaoshu">
					<view class="content-title"><text>{{$t("index.finedrawing")}}</text></view>
					<view class="detail-content1">
						<view class="detail-item">
							<view class="detail-left">{{$t("index.finedrawingmultiple")}}</view>
							<view class="detail-right">1.5</view>
						</view>
						<view class="detail-item">
							<view class="detail-left">{{$t("index.strength")}}</view>
							<view class="detail-right">80%</view>
						</view>
					</view>
				</view>

			</template>
		</view>
		<u-popup :show="show" closeOnClickOverlay @close="show=false" mode="center" customStyle="{'background-color':'transparent'}">
			<image mode="widthFix" class="privImg" :src="generateImg"></image>
			<view style="display: flex;align-items: center;">
				<view class="buttonDown" @click="save">{{$t("index.tips25")}}</view>
				<view class="buttonDown" @click="copyBtn">{{$t("index.copylink")}}</view>
			</view>
		</u-popup>
		<ai-popup v-model="showPopup">
			<view class="popupContentMain">
				<view class="title">
					{{showDetail.title}}
				</view>
				<view class="content">{{showDetail.content}}</view>
				<view class="button" @click="showPopup=false">{{$t("index.gotit")}}</view>
			</view>
		</ai-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				parameter: {},
				typeIndex: 0,
				styleIndex: 0,
				isGenerate: false,
				generateImg: '',
				progress: 0,
				create: this.$t("index.ai.create"), //AI创作国际化
				showPopup: false,
				showDetail: {
					title: '',
					content: ''
				},
				imgUrl: [], //图片地址
				loadComplete: false, //图片加载完成
			}
		},
		onLoad(e) {
			this.parameter = JSON.parse(e.imgInfo);
			this.imgUrl = this.parameter.address;
		},
		methods: {


			back() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			toWorks() {
				uni.navigateTo({
					url: '/pages/index/picture/modelworks'
				})
			},
			showFn(src) {
				this.show = true
				this.generateImg = src
			},
			copyBtn() {
				let that = this
				uni.setClipboardData({
					data: this.generateImg,
					success: function() {
						uni.showToast({
							title: that.$t("index.tips8"),
							success: function(res) {
								that.show = false
							}
						})
					}
				});
			},
			save() {
				let that = this
				const a = document.createElement('a');
				a.style.display = 'none';
				a.download = 'xx';
				a.href = that.generateImg;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			}
		}
	}
</script>

<style scoped lang="scss">
	.popupContentMain {
		width: 90vw;
		border-radius: 30rpx;
		padding: 40rpx 30rpx;
		box-sizing: border-box;
		background-color: #fff;

		.title {
			display: flex;
			align-items: center;
			margin-bottom: 24rpx;
			font-size: 32rpx;
			color: #333;
			font-weight: bold;
			justify-content: center;
		}

		.content {
			padding: 30rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			margin-top: 30rpx;
			margin-bottom: 48rpx;
			word-break: break-all;
			font-size: 28rpx;
			color: rgba(0, 0, 0, 0.9);
		}

		.button {
			width: 100%;
			height: 100rpx;
			background-color: #333333;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 20rpx;
		}
	}

	page {
		background-color: #fff;
		padding-bottom: 20rpx;
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

	.content-title {
		display: flex;
		align-items: center;

		text {
			color: #000;
			font-weight: bold;
			font-size: 32rpx;
		}

		.miaoshudaxio {
			width: 34rpx;
			height: 34rpx;
			margin-left: 10rpx;
		}
	}

	.typeList {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 30rpx 0;

		.type-item {
			width: 210rpx;
			height: 210rpx;
			margin-bottom: 20rpx;
			position: relative;
			border-radius: 40rpx;

			.item-image {
				width: 100%;
				height: 100%;
				border-radius: 40rpx;
			}

			.typeTitle {
				color: #fff;
				font-weight: bold;
				position: absolute;
				z-index: 999;
				font-size: 28rpx;
				top: 20rpx;
				left: 20rpx;
			}

			.activeItem {
				position: absolute;
				top: 0;
				left: 0;
				z-index: 9;
				width: calc(100% - 16rpx);
				height: calc(100% - 16rpx);
				border: 8rpx solid #2fa2e3;
				border-radius: 40rpx;

				&::after {
					content: ' ';
					width: 60rpx;
					height: 36rpx;
					position: absolute;
					bottom: 0;
					right: 0;
					background-image: url('@/static/index/modelzhong.webp');
					background-size: 100% 100%;
				}
			}
		}
	}

	.stylelist {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 30rpx;

		.tabsList-item {
			width: 31%;
			padding: 20rpx 0;
			margin-bottom: 20rpx;
			background: #f5f6fa;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: rgba(0, 0, 0, 0.9);

			&.activeItem {
				background: #333;
				color: #fff;
			}
		}
	}

	.last-button {
		width: 100%;
		height: 60px;
		text-align: center;
		color: #fff;
		font-size: 16px;
		background: #333;
		border-radius: 53px;
		margin-top: 25px;
		border: unset !important;
		display: flex !important;
		align-items: center;
		justify-content: center;
		padding: 0 12px !important;
	}

	.clickView {
		margin-top: 50rpx;
		width: 100%;
		height: 120rpx;
		background: #333;
		border-radius: 106rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 32rpx;

	}


	::v-deep.generateDiv {
		width: 100%;
		height: 650rpx;
		background-color: rgb(246, 247, 251);
		border-radius: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		overflow: hidden;
		position: relative;

		.generateImg_box {
			width: 100%;
			height: 100%;
			display: flex;
			flex-wrap: wrap;

			.generateImgs {
				width: calc(100% / 2);
				height: calc(100% / 2);


			}

			.generateImg {
				width: 100%;
				height: 100%;
			}
		}



		.generateImg {
			width: 100%;
			height: 100%;

			.u-image {
				width: 100% !important;
				height: 100% !important;

				.u-image__image {
					width: 100% !important;
					height: 100% !important;
				}
			}
		}

		.img_load {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			background-color: rgb(246, 247, 251);
		}

		.progress-title {
			font-size: 28rpx;
			color: #333;
			font-weight: bold;
		}

		.progress-dec {
			font-size: 28rpx;
			color: #666;
			margin: 0rpx 0 10rpx 0;
		}

		.progress {
			width: 300rpx;
			background-color: #dfe3fe;
			height: 20rpx;
			border-radius: 20rpx;
			overflow: hidden;

			.progress-item {
				background-color: #5d7dfd;
				height: 100%;
				width: 0;
			}
		}
	}

	.hint {
		width: 100%;
		text-align: center;
		color: #3a3a3a;
		font-size: 24rpx;
		margin-top: 10rpx;
	}

	.detail-content {
		width: calc(100% - 60rpx);
		border: 2rpx solid #9f9f9f;
		height: 100rpx;
		border-radius: 30rpx;
		display: flex;
		align-items: center;
		padding: 0 30rpx;
		margin: 20rpx 0 30rpx 0;
		color: #080808;
		font-size: 28rpx;
	}

	.detail-content1 {
		width: calc(100% - 60rpx);
		border: 2rpx solid #9f9f9f;
		border-radius: 30rpx;
		padding: 0 30rpx;
		margin-top: 20rpx;

		.detail-item {
			margin-top: 25rpx;
			width: 100%;
			height: 60rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 28rpx;

			.detail-left {
				color: #686868;
			}

			.detail-right {
				color: #080808;
			}
		}
	}

	.miaoshu {
		margin-top: 20px;
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
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		margin: 16rpx auto;
	}
</style>