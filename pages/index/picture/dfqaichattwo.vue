<template>
	<view>
		<u-navbar title="AI创作" :fixed='false' :safeAreaInsetTop="false" :height='50'>
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
				<view class="content-title"><text>· 模型主题</text>
					<image @click="showPopupFn(1)" class="miaoshudaxio" src="~@/static/index/miaoshudaxio.webp"></image>
				</view>
				<view class="typeList">
					<view class="type-item" v-for="(item,index) in typeList" :key='index'
						@click="themeSelect(index,item.name)">
						<view class="activeItem" v-if='typeIndex==index'></view>
						<image class="item-image" :src="item.imgUrl"></image>
						<view class="typeTitle">{{item.name}}</view>
					</view>
				</view>
				<view class="content-title"><text>· 风格选择</text>
					<image @click="showPopupFn(2)" class="miaoshudaxio" src="~@/static/index/miaoshudaxio.webp"></image>
				</view>
				<view class="stylelist">
					<view class="tabsList-item" v-for='(item,index) in stylelist' :key='index'
						@click='styleSelect(index,item.name)' :class="{'activeItem':styleIndex==index}">
						{{item.name}}
					</view>
				</view>
				<ai-button :btnHeight="'72px'" class="clickView" @click="generateFn">立即生成</ai-button>
			</template>
			<template v-else>
				<view class="generateDiv">
					<template v-if="generateImg!=''">
						<u--image :showLoading="true" class="generateImg" @load="load" :src="generateImg" width="80px"
							height="80px" @click="showFn"></u--image>
							<view class="img_load" v-if="!loadComplete"><u-loading-icon :show="!loadComplete"></u-loading-icon>正在为您加载中...</view>
						<!-- <image @click="showFn" mode="aspectFill" class="generateImg" :src="generateImg" @error="t1" @load="lo1"></image> -->
					</template>
					<template v-else>
						<view class="progress-title">{{progress}}%</view>
						<view class="progress-dec">正在生成中...</view>
						<view class="progress">
							<view class="progress-item" :style="{'width':`${progress}%`}"></view>
						</view>
					</template>
				</view>
				<view class="hint" v-if='generateImg!=""'>长按图片保存到本地</view>
				<view class="content-title" style="margin-top: 30rpx;"><text>画面描述</text></view>
				<view class="detail-content">{{parameter.prompt}}</view>

				<view class="content-title"><text>创作信息</text></view>
				<view class="detail-content1">
					<view class="detail-item">
						<view class="detail-left">主题</view>
						<view class="detail-right">{{typeList[typeIndex].name}}</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">尺寸</view>
						<view class="detail-right">1024*1024</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">风格选择</view>
						<view class="detail-right">{{parameter.topic}}</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">采样模式</view>
						<view class="detail-right">DPM++ 2M Karras</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">提示性相关词</view>
						<view class="detail-right">7</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">Clip skip</view>
						<view class="detail-right">敬请期待...</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">ENSD</view>
						<view class="detail-right">敬请期待...</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">角色同人</view>
						<view class="detail-right">敬请期待...</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">融合模型</view>
						<view class="detail-right">敬请期待...</view>
					</view>
					<view class="detail-item">
						<view class="detail-left">参考图</view>
						<view class="detail-right">敬请期待...</view>
					</view>
				</view>
				<view class="miaoshu">
					<view class="content-title"><text>精绘</text></view>
					<view class="detail-content1">
						<view class="detail-item">
							<view class="detail-left">精绘倍数</view>
							<view class="detail-right">1.5</view>
						</view>
						<view class="detail-item">
							<view class="detail-left">强度</view>
							<view class="detail-right">80%</view>
						</view>
					</view>
				</view>

			</template>
		</view>
		<u-popup :show="show" mode="center" customStyle="{'background-color':'transparent'}">
			<image mode="widthFix" class="privImg" :src="generateImg"></image>
			<view class="buttonDown" @click="copyBtn">复制链接</view>
		</u-popup>
		<ai-popup v-model="showPopup">
			<view class="popupContentMain">
				<view class="title">
					{{showDetail.title}}
				</view>
				<view class="content">{{showDetail.content}}</view>
				<view class="button" @click="showPopup=false">知道了</view>
			</view>
		</ai-popup>
	</view>
</template>

<script>
	import app_config from '../../../common/config.js';
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
					name: '通用',
					imgUrl: require('@/static/index/preempt5.png'),
				}, {
					name: '科幻',
					imgUrl: require('@/static/index/model8.webp'),
				}, {
					name: '儿童3D',
					imgUrl: require('@/static/index/model4.webp'),
				}, {
					name: '建筑设计',
					imgUrl: require('@/static/index/model7.webp'),
				}, {
					name: '2.5D动漫',
					imgUrl: require('@/static/index/model1.webp'),
				}, {
					name: '电影写实',
					imgUrl: require('@/static/index/model10.webp'),
				}, {
					name: '人物写真',
					imgUrl: require('@/static/index/model11.webp'),
				}, {
					name: '3D日漫',
					imgUrl: require('@/static/index/model9.webp'),
				}, {
					name: 'CG写真',
					imgUrl: require('@/static/index/model5.webp'),
				}],
				stylelist: [{
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
				showPopup: false,
				showDetail: {
					title: '',
					content: ''
				},
				imgUrl: "", //图片地址
				loadComplete: false, //图片加载完成
			}
		},
		onLoad(e) {
			this.parameter = JSON.parse(e.parameter);
			this.parameter.style = "通用";
			this.parameter.topic = "自由";
		},
		methods: {
			load() {
				console.log(777);
				this.loadComplete = true;
			},
			showPopupFn(type) {
				this.showPopup = true
				if (type == 1) {
					this.showDetail = {
						title: '模型主题说明',
						content: '通过模型主题设定，可以设定最终生成出来的画面是什么材质和风格。'
					}
				} else {
					this.showDetail = {
						title: '风格选择说明',
						content: '包含风格修饰、艺术家、元素魔法'
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
			},
			// 主题选择
			themeSelect(index, name) {
				this.typeIndex = index;
				this.parameter.style = name
			},
			// 风格选择
			styleSelect(index, name) {
				this.styleIndex = index
				this.parameter.topic = name
			},
			generateFn() {
				this.generateImg = "";
				this.progress = 0;
				this.imgUrl = "";
				this.loadComplete = false;
				uni.request({
					url: `/workImage/generate`,
					method: "POST",
					data: this.parameter,
					success: (res) => {
						this.imgUrl = res.data[0]
					},
					fail: (err) => {
						this.isGenerate = false;
						if (this.setIntervalL) clearInterval(this.setIntervalL)
						uni.$u.toast('网络超时，请重试!');
					}
				});
				this.isGenerate = true
				if (this.setIntervalL) clearInterval(this.setIntervalL)
				this.setIntervalL = setInterval(() => {
					if (this.imgUrl == "") {
						if (this.progress <= 95) {
							this.progress = parseInt((this.progress + 1) * 100) / 100
						} else if (this.progress > 96) {
							this.progress = 99
						}
					} else {
						this.progress = 100;
						if (this.setIntervalL) clearInterval(this.setIntervalL)
						this.generateImg = app_config.apiUrl + "/" + this.imgUrl
					}
				}, 600)
			},
			copyBtn() {
				// $downloadFile(generateImg,'图片');show=false
				// @longpress="$downloadFile(generateImg,'图片')"
				let that = this
				uni.setClipboardData({
					data: this.generateImg,
					success: function() {
						uni.showToast({
							title: "复制成功,请在浏览器打开!",
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
		.img_load{
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