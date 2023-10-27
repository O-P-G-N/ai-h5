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
					<image class="miaoshudaxio" src="~@/static/index/miaoshudaxio.webp"></image>
				</view>
				<view class="typeList">
					<view class="type-item" v-for="(item,index) in typeList" :key='index' @click="typeIndex=index">
						<view class="activeItem" v-if='typeIndex==index'></view>
						<image class="item-image" src="~@/static/index/anli.webp"></image>
						<view class="typeTitle">{{item.name}}</view>
					</view>
				</view>
				<view class="content-title"><text>· 风格选择</text>
					<image class="miaoshudaxio" src="~@/static/index/miaoshudaxio.webp"></image>
				</view>
				<view class="stylelist">
					<view class="tabsList-item" v-for='(item,index) in stylelist' :key='index' @click='styleIndex=index'
						:class="{'activeItem':styleIndex==index}">
						{{item.name}}
					</view>
				</view>
				<view class="clickView" @click="generateFn">立即生成</view>


			</template>
			<template v-else>
				<view class="generateDiv">
					<template v-if='generateImg!=""'>
						<image @click="showFn" @longpress="$downloadFile(generateImg,'图片')" mode="aspectFill" class="generateImg" :src="generateImg"></image>
					</template>
					<template v-else>
						<view class="progress-title">{{progress}}%</view>
						<view class="progress-dec">正在生成中...</view>
						<view class="progress">
							<view class="progress-item" :style="{'width':`${progress}%`}"></view>
						</view>
					</template>
				</view>
				<view class="hint" v-if='generateImg!=""'>长安图片保存到本地</view>
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
						<view class="detail-right">{{parameter.width}}*{{parameter.height}}</view>
					</view>
				</view>
			</template>
		</view>
		<u-popup :show="show" mode="center" customStyle="{'background-color':'transparent'}">
		    <image mode="widthFix" class="privImg" :src="generateImg"></image>
			<view class="buttonDown" @click="$downloadFile(generateImg,'图片');show=false">保存图片</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				parameter: {},
				typeIndex: 0,
				styleIndex: 0,
				isGenerate: false,
				generateImg: '',
				progress: 0,
				typeList:[{
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
				callBack: null
			}
		},
		onLoad(e) {
			this.parameter = JSON.parse(e.parameter)
			this.callBack = (res) => {
				if (res) {
					this.generateImg = require(`@/static/index/anli.webp`)
				}
			}
		},
		methods: {
			back() {
				if(this.isGenerate){
					this.isGenerate=false
				}else{
					uni.navigateBack()
				}
			},
			toWorks() {
				uni.navigateTo({
					url: '/pages/index/modelworks'
				})
			},
			showFn(src){
				this.show=true
			},
			generateFn() {
				this.isGenerate = true
				if (this.setIntervalL) clearInterval(this.setIntervalL)
				this.setIntervalL = setInterval(() => {
					this.progress = parseInt((this.progress + 1) * 100) / 100
					if (this.progress >= 100) {
						if (this.setIntervalL) clearInterval(this.setIntervalL)
						if (this.callBack) this.callBack(true)
					}
				}, 100)
			}
		}
	}
</script>

<style scoped lang="scss">
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
			.typeTitle{
				color: #fff;
				font-weight: bold;
				position: absolute;
				z-index: 999;
				font-size: 28rpx;
				top:20rpx;
				left: 20rpx;
			}

			.activeItem {
				position: absolute;
				top: 0;
				left: 0;
				z-index: 9;
				width: 202rpx;
				height: 202rpx;
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


	.generateDiv {
		width: 100%;
		height: 650rpx;
		background-color: rgb(246, 247, 251);
		border-radius: 30rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		overflow: hidden;
		.generateImg{
			width: 100%;
			height: 100%;
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
		height: 200rpx;
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
	
	::v-deep .u-popup__content{
		background-color: transparent;
	}
	.privImg{
		width: 80vw;
	}
	
	.buttonDown{
		width: 250rpx;
		height: 80rpx;
		background-color:rgb(22, 155, 213);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		border-radius: 20rpx;
		margin: 20rpx auto;
	}
</style>