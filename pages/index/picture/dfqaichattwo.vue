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
			<template v-if='!isGenerate'>
				<view class="content-title"><text>· {{$t("index.modeltheme")}}</text>
					<image @click="showPopupFn(1)" class="miaoshudaxio" src="~@/static/index/miaoshudaxio.webp"></image>
				</view>
				<view class="typeList">
					<view class="type-item" v-for="(item,index) in typeList" :key='index'
						@click="themeSelect(index,item.topic)">
						<view class="activeItem" v-if='typeIndex==index'></view>
						<image class="item-image" :src="item.imgUrl"></image>
						<view class="typeTitle">{{item.name}}</view>
					</view>
				</view>
				<view class="content-title"><text>· {{$t("index.styleselection")}}</text>
					<image @click="showPopupFn(2)" class="miaoshudaxio" src="~@/static/index/miaoshudaxio.webp"></image>
				</view>
				<view class="stylelist">
					<view class="tabsList-item" v-for='(item,index) in stylelist' :key='index'
						@click='styleSelect(index,item.style)' :class="{'activeItem':styleIndex==index}">
						{{item.name}}
					</view>
				</view>
				<ai-button :btnHeight="'72px'" class="clickView" @click="generateFn">{{$t("index.generatenow")}}</ai-button>
			</template>
			<template v-else>
				<view class="generateDiv">
					<template v-if="imgUrl.length>0">
						<view class="generateImg_box" >
							<image :class="imgUrl.length>1?'generateImgs':'generateImg'" v-for="(v,i) in imgUrl" :key="i"
								@load="load" :src="v" @click="showFn(v)"></image>
						</view>
						<view class="img_load" v-if="!loadComplete"><u-loading-icon
								:show="!loadComplete"></u-loading-icon>{{$t("index.loadingforyou")}}...</view>
					</template>
					<template v-else>
						<view class="progress-title">{{progress}}%</view>
						<view class="progress-dec">{{$t("index.generating")}}...</view>
						<view class="progress">
							<view class="progress-item" :style="{'width':`${progress}%`}"></view>
						</view>
					</template>
				</view>
				<view class="hint" v-if='imgUrl.length>0'>{{$t("index.savelocally")}}</view>
				<view class="content-title" style="margin-top: 30rpx;"><text>{{$t("index.screendescription")}}</text></view>
				<view class="detail-content">{{parameter.prompt}}</view>

				<view class="content-title"><text>{{$t("index.creativeinfo")}}</text></view>
				<view class="detail-content1">
					<view class="detail-item">
						<view class="detail-left">{{$t("index.theme")}}</view>
						<view class="detail-right">{{typeList[typeIndex].name}}</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">{{$t("index.size")}}</view>
						<view class="detail-right">1024*1024</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">{{$t("index.styleselection")}}</view>
						<view class="detail-right">{{stylelist[styleIndex].name}}</view>
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
		<u-popup :show="show" mode="center" customStyle="{'background-color':'transparent'}">
			<image mode="widthFix" class="privImg" :src="generateImg"></image>
			<view class="buttonDown" @click="copyBtn">{{$t("index.copylink")}}</view>
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
				typeList: [{
					name:this.$t("index.theme.becurrent"),
					imgUrl: require('@/static/index/preempt5.png'),
					topic: 1,
				}, {
					name: this.$t("index.theme.sciencefiction"),
					imgUrl: require('@/static/index/model8.webp'),
					topic: 2,
				}, {
					name: this.$t("index.theme.children's3D"),
					imgUrl: require('@/static/index/model4.webp'),
					topic: 3,
				}, {
					name: this.$t("index.theme.architecturaldesign"),
					imgUrl: require('@/static/index/model7.webp'),
					topic: 4,
				}, {
					name: this.$t("index.theme.2.5Danime"),
					imgUrl: require('@/static/index/model1.webp'),
					topic: 5,
				}, {
					name: this.$t("index.theme.filmrealism"),
					imgUrl: require('@/static/index/model10.webp'),
					topic: 6,
				}, {
					name:this.$t("index.theme.characterportrait"),
					imgUrl: require('@/static/index/model11.webp'),
					topic: 7,
				}, {
					name:this.$t("index.theme.3Dmarvel"),
					imgUrl: require('@/static/index/model9.webp'),
					topic: 8,
				}, {
					name:this.$t("index.theme.CGphoto"),
					imgUrl: require('@/static/index/model5.webp'),
					topic: 9,
				}],
				stylelist: [{
					name: this.$t("index.ai.creationstyle.freedom"),
					style: 1,
				}, {
					name: this.$t("index.ai.creationstyle.cyberpunk"),
					style: 2,
				}, {
					name:this.$t("index.ai.creationstyle.watercolor"),
					style: 3,
				}, {
					name:this.$t("index.ai.creationstyle.chinese_ink"),
					style: 4,
				}, {
					name:this.$t("index.ai.creationstyle.black_and_white"),
					style: 5,
				}, {
					name:this.$t("index.ai.creationstyle.oil_painting"),
					style: 6,
				}, {
					name: this.$t("index.ai.creationstyle.dreamlike"),
					style: 7,
				}, {
					name:this.$t("index.ai.creationstyle.sketch"),
					style: 8,
				}, {
					name:this.$t("index.ai.creationstyle.graffiti"),
					style: 9,
				}],
				showPopup: false,
				showDetail: {
					title: '',
					content: ''
				},
				imgUrl: [], //图片地址
				loadComplete: false, //图片加载完成
				create:this.$t("index.ai.create"),//AI创作国际化
			}
		},
		onLoad(e) {
			this.parameter = JSON.parse(e.parameter);
			this.parameter.style = 1;
			this.parameter.topic = 1;
		},
		methods: {
			load() {
				this.loadComplete = true;
			},
			showPopupFn(type) {
				this.showPopup = true
				if (type == 1) {
					this.showDetail = {
						title: this.$t("index.tips3"),
						content:this.$t("index.tips4")
					}
				} else {
					this.showDetail = {
						title: this.$t("index.tips5"),
						content: this.$t("index.tips6")
					}
				}

			},
			back() {
				if (this.isGenerate) {
					this.isGenerate = false
				} else {
					uni.navigateBack()

				}
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
			// 主题选择
			themeSelect(index, topic) {
				this.typeIndex = index;
				this.parameter.topic = topic;
			},
			// 风格选择
			styleSelect(index, style) {
				this.styleIndex = index;
				this.parameter.style = style;
			},
			generateFn() {
				this.generateImg = "";
				this.progress = 0;
				this.imgUrl = [];
				this.loadComplete = false;
				uni.request({
					url: `/workImage/generate`,
					method: "POST",
					data: this.parameter,
					success: (res) => {
						if (res.code == 200) {
							this.imgUrl = res.data;
						} else if (res.code == 500) {
							this.isGenerate = false;
							if (this.setIntervalL) clearInterval(this.setIntervalL)
							uni.$u.toast(this.$t("index.tips7"));
						}
					},
					fail: (err) => {
						this.isGenerate = false;
						if (this.setIntervalL) clearInterval(this.setIntervalL)
						uni.$u.toast(this.$t("index.tips7"));
					}
				});
				this.isGenerate = true
				if (this.setIntervalL) clearInterval(this.setIntervalL)
				this.setIntervalL = setInterval(() => {
					if (this.imgUrl.length < 1) {
						if (this.progress <= 95) {
							this.progress = parseInt((this.progress + 1) * 100) / 100
						} else if (this.progress > 96) {
							this.progress = 99
						}
					} else {
						this.progress = 100;
						if (this.setIntervalL) clearInterval(this.setIntervalL);
					}
				}, 600)
			},
			copyBtn() {
				let that = this
				uni.setClipboardData({
					data: this.generateImg,
					success: function() {
						uni.showToast({
							title:this.$t("index.tips8"),
							success: function(res) {
								that.show = false
							}
						})
					}
				});
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
		.generateImg_box{
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