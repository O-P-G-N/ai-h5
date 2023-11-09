<template>
	<view class="portfolio">
		<u-navbar @leftClick="goBackUser" leftText="返回" title="作品集" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="searchselect">
			<view class="inputsearch">
				<u--input v-model="from.keyword" placeholder="搜索画面描述" border="surround" shape="circle"></u--input>
			</view>
			<view class="rightshaixuan" @click="searchBtn">
				<image class="searchicon" src="@/static/user/search.png" mode=""></image>
			</view>
		</view>
		<u-tabs class="mt10"
			:activeStyle="{color:'#fff',background: 'rgb(0, 0, 0)',padding: '2px 12px',borderRadius: '16px'}"
			:inactiveStyle="{color:'rgb(153, 153, 153)',border: '1px solid rgb(153, 153, 153)',padding: '2px 12px',borderRadius: '16px'}"
			:list="list" @click="tabsClick"></u-tabs>
		<view class="works">
			<view class="" v-if="pageIndex==0">
				<view class="workslist">
					<view class="mb10" v-for="(v,i) in contentList" :key="i">
						<u-transition :show="true">
							<u--image @click="viewLargeImage(v.address)"
								:src="v.address" width="110px" height="110px" radius="16"
								shape="square"></u--image>
						</u-transition>
					</view>
				</view>
			</view>
			<view class="" v-else-if="pageIndex==1">
				<view class="videoevery_wai">
					<view class="videoevery">
						<video class="my_video" id="myVideo"
							src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4" controls></video>
						<view class="videoevery_nei">
							<view class="bofangbtn">
								<image class="bofangbtn_img" src="@/static/user/bofangicon.png" mode=""></image>
							</view>
						</view>
					</view>
					<ai-button class="next-btn startBtn" @click="copyVideoLink">复制视频链接</ai-button>
					<!-- <button class="startBtn" >复制视频链接</button> -->
				</view>
			</view>
		</view>
		<view v-if="bigImg" class="image_mask" @click.stop="bigImg=false">
			<view class="image_box">
				<image class="big_img" @click.native.stop :src="bigImgRoute" mode=""></image>
				<view class="copy_btn" @click.stop="copyLink(bigImgRoute)">复制链接</view>
			</view>
		</view>
		<u-loadmore :status="status" />
	</view>
</template>

<script>
	import app_config from '../../common/config.js';
	export default {
		data() {
			return {
				from: {
					keyword:"",
					pageNum:1,
					pageSize:10
				},
				list: [{
					name: 'AI创作',
				}, {
					name: '视频营销',
				}, ],
				contentList:[],//ai作品合集
				pageIndex: 0, //页面索引
				bigImg: false, //大图状态
				bigImgRoute: "", //大图路径
				pagenum:0,//总共页数
				status: "loadmore",
			}
		},
		onShow() {
			if(this.pageIndex==0){
				this.getWorkCollection()
			}
		},
		onReachBottom() {
			this.loadMore()
		},
		onHide() {
			this.from.pageNum = 1;
		},
		methods: {
			// 返回积分查看
			goBackUser() {
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			// 菜单点击
			tabsClick(val) {
				this.pageIndex = val.index;
				this.from.pageNum = 1;
			},
			// 查看大图
			viewLargeImage(val) {
				this.bigImg = true;
				this.bigImgRoute = val
			},
			//获取作品合集
			getWorkCollection(){
				uni.request({
					url: `/workImage/list`,
					method: "POST",
					data: this.from,
					success: (res) => {
						res.data.rows.map((v) => {
							v.address = app_config.apiUrl + "/" + v.address
						})
						this.contentList = res.data.rows;
						this.pagenum = Math.ceil(res.data.total / 10);
					}
				});
			},
			// 上划加载
			loadMore() {
				if (this.from.pageNum < this.pagenum) {
					this.status = "loading"
					this.from.pageNum++;
					uni.request({
						url: `/workImage/list`,
						method: "POST",
						data: this.from,
						success: (res) => {
							res.data.rows.map((v) => {
								v.address = app_config.apiUrl + "/" + v.address
							})
							this.status = "loadmore"
							this.contentList.push(...res.data.rows);
						}
					});
				} else {
					this.status = "nomore"
				}
			},
			// 复制图片链接
			copyLink(val) {
				let that = this
				uni.setClipboardData({
					data: val,
					success: function() {
						uni.showToast({
							title: "复制成功,请在浏览器打开!",
							success: function(res) {
								that.bigImg = false;
							}
						})
					}
				});
			},
			// 搜索
			searchBtn() {

			},
			// 复制视频链接
			copyVideoLink(val) {
				uni.setClipboardData({
					data: "https://cdn.uviewui.com/uview/album/1.jpg",
					showToast: true,
					success: function() {
						uni.showToast({
							title: "复制成功",
							success: function(res) {}
						})
					}
				});
			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.portfolio {
		width: 100%;
		height: 100%;
		padding: 20px 20px;
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

			}
		}

		.searchselect {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.inputsearch {
				width: 282px;

				.u-input {
					background: #f5f6fa;
					padding: 16px 16px !important;
				}
			}

			.rightshaixuan {
				padding: 16px;
				background: #f5f6fa;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;

				.searchicon {
					width: 21px;
					height: 21px;
				}
			}
		}

		.u-tabs {
			.u-tabs__wrapper__nav__line {
				background-color: transparent !important;
			}
		}

		.works {
			margin-top: 21px;

			.workslist {
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: wrap;
			}

			.videoevery_wai {
				margin-bottom: 32px;

				.videoevery {
					width: 100%;
					height: 213px;
					border-radius: 21px;
					box-sizing: border-box;
					position: relative;

					.my_video {
						width: 100%;
						height: 100%;
						border-radius: 21px;
					}

					.videoevery_nei {
						position: absolute;
						z-index: 9;
						width: 100%;
						height: 213px;
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
				}

				.startBtn {
					height: 57px;
					background: #333;
					border-radius: 12px 12px 12px 12px;
					margin-top: 12px;
					line-height: 57px;
					font-size: 17px;
					font-weight: 600;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}

		.image_mask {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(0, 0, 0, .5);
			z-index: 99;
			display: flex;
			align-items: center;
			justify-content: center;

			.image_box {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				.big_img {
					width: 373px;
					height: 374px;
				}

				.copy_btn {
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 6px 14px;
					background: #133eff;
					border-radius: 8px;
					color: #fff;
					margin-top: 16px;
				}
			}
		}
	}
</style>