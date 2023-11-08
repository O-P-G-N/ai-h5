<template>
	<view class="videocreatthree">
		<u-navbar title="创作中心" :fixed='false' :safeAreaInsetTop="false" :height='50'>
			<view class="u-nav-slot" slot="left">
				<image mode="aspectFit" @click="back" class="head_back_img" src="~@/static/index/round-back.png">
				</image>
			</view>
			<view class="u-nav-slot" slot="right">
				<image mode="aspectFit" @click="toWorks" class="davincupload" src="~@/static/index/davincupload.png">
				</image>
			</view>
		</u-navbar>
		<view class="videoeverytitle">
			<view class="videoeverytitle_left">产品图</view>
			<view class="videoeverytitle_right">请上传清晰的白底图片</view>
		</view>
		<view class="photomain">
			<u-upload :fileList="fileList6" @afterRead="afterRead" @delete="deletePic" name="6" multiple :maxCount="1"
				width="250" height="150">
				<image class="up_img" src="@/static/index/feather-upload-cloud.webp"></image>
			</u-upload>
		</view>
		<view class="product_intro">为了您有更好的产品体验，请上传清晰的产品白底图片，部分照片模版除外</view>
		<view class="product_img">
			<image class="product_img_icon" src="@/static/index/shafas.webp" mode=""></image>
			<view class="liru">示例图</view>
		</view>
		<view style="height: 106px;"></view>
		<view class="createbtn">
			<ai-button :bg="'#333'" :btnHeight="'53px'" class="next-btn chuangjian">下一步 1/3</ai-button>
		</view>
		<u-popup :show="show" @close="show=false" mode="center" customStyle="{'background-color':'transparent'}">
			<view class="backgroundshow">
				<view class="titles">产品生成图</view>
				<u-transition class="productimg" :show="show">
					<image src="" mode=""></image>
				</u-transition>
				<button class="zhongzhibtn">取消</button>
				<button class="zhuiaddbtn" @click="nextSelet">下一步,选择数字人</button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true
			};
		},
		methods:{
			back(){
				uni.navigateTo({
					url: `/pages/index/video/indexIntr`
				});
			},
			toWorks(){
				// uni.navigateTo({
				// 	url: `/pages/index/video/indexIntr`
				// });
			},
			// 下一步
			nextSelet(){
				uni.navigateTo({
					url: `/pages/index/video/ainumpeople`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.videocreatthree {
		width: 100%;
		background-color: #fff;
		min-height: 100vh;
		padding: 21px 21px;
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

		.videoeverytitle {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 21px;

			.videoeverytitle_left {
				display: flex;
				align-items: center;
				color: #333;
				font-size: 17px;
				font-weight: 600;
			}

			.videoeverytitle_right {
				display: flex;
				align-items: center;
				color: #999;
				font-size: 14px;
				font-weight: 500;
			}
		}

		.photomain {
			width: 100%;
			height: 213px;
			background: #f5f6fa;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 21px;

			.u-upload {
				width: 100%;
				height: 100%;

				.u-upload__wrap {
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: nowrap;

					.up_img {
						width: 28px;
						height: 26px;
					}
				}

			}

		}

		.product_intro {
			color: #999;
			font-size: 14px;
			margin-top: 10px;
		}

		.product_img {
			width: 100%;
			margin-top: 42px;

			.product_img_icon {
				width: 100%;
				height: 245px;
				border-radius: 26px;
				border: 1px solid #d4d4d4;
			}

			.liru {
				text-align: center;
				color: #999;
				font-size: 14px;
				margin-top: 5px;
			}
		}

		.createbtn {
			width: 90%;
			position: fixed;
			bottom: 26px;

			.chuangjian {
				width: 100%;
				height: 53px;
				line-height: 53px;
				color: #fff;
				letter-spacing: 1px;
				border-radius: 56px;
			}
		}

		.u-popup__content {
			width: 90%;
			border-radius: 16px;
			padding: 21px 16px;
			box-sizing: border-box;
			background: rgb(248, 248, 248);

			.titles {
				font-size: 17px;
				font-weight: 600;
				text-align: center;
				margin-bottom: 16px;
			}

			.productimg {
				width: 100%;
				border-radius: 16px;
			}

			.zhongzhibtn {
				width: 100%;
				height: 48px;
				line-height: 43px;
				text-align: center;
				color: #333;
				font-size: 16px;
				background: #fff;
				border: 2px solid #333 !important;
				border-radius: 56px;
				margin-top: 16px;
			}

			.zhuiaddbtn {
				width: 100%;
				height: 48px;
				line-height: 48px;
				text-align: center;
				color: #fff;
				font-size: 16px;
				background: #333;
				border-radius: 56px;
				border: unset !important;
				margin-top: 16px;
			}
		}
	}
</style>