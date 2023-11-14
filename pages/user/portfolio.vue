<template>
	<view class="portfolio">
		<u-navbar @leftClick="goBackUser" :leftText="$t('user.con_detail.i1')" :title="$t('user.con_detail.i2')" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="searchselect">
			<view class="inputsearch">
				<u--input v-model="from.keyword" :placeholder="$t('user.con_detail.i3')" border="surround" shape="circle"></u--input>
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
					<view class="mb10 workslist_img" v-for="(v,i) in contentList" :key="i">
						<u-transition :show="true">
							<u--image @click="viewLargeImage(v.address)" :src="v.address" width="110px" height="110px"
								radius="16" shape="square"></u--image>
						</u-transition>
					</view>
				</view>
			</view>
			<view class="" v-else-if="pageIndex==1">
				<view class="videoevery_wai" v-for="(v,i) in videoList" :key="i">
					<view class="videoevery">
						<view class="videoevery_nei" v-if="playFlag!=i&&playIndex!=i">
							<image class="videoevery_nei_img" :src="v.imgUrl" mode=""></image>
							<view class="bofangbtn" @click="playBtn(i)">
								<image class="bofangbtn_img" src="@/static/user/bofangicon.png" mode=""></image>
							</view>
						</view>
						<video v-else-if="playFlag==i&&playIndex==i" class="my_video" :show-center-play-btn="false"
							id="myVideo" autoplay @pause="ended" @ended="ended" :src="v.address" controls></video>
					</view>

					<ai-button :btnHeight="'57px'" class="next-btn startBtn"
						@click="copyVideoLink(v.address)">{{$t('user.con_detail.i4')}}</ai-button>
					<!-- <button class="startBtn" >复制视频链接</button> -->
				</view>
			</view>
		</view>
		<view v-if="bigImg" class="image_mask" @click.stop="bigImg=false">
			<view class="image_box">
				<image class="big_img" @click.native.stop :src="bigImgRoute" mode=""></image>
				<view class="copy_btn" @click.stop="copyLink(bigImgRoute)">{{$t('user.con_detail.i5')}}</view>
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
					keyword: "",
					pageNum: 1,
					pageSize: 10
				},
				list: [{
					name: this.$t('user.con_detail.i6'),
				}, {
					name: this.$t('user.con_detail.i7'),
				}, ],
				contentList: [], //ai作品合集
				videoList: [], //ai视频合集
				pageIndex: 0, //页面索引
				bigImg: false, //大图状态
				bigImgRoute: "", //大图路径
				pagenum: 0, //总共页数
				status: "loadmore",
				playFlag: null, //是否播放
				playIndex: null, //播放索引
			}
		},
		onShow() {
			if (this.pageIndex == 0) {
				this.getWorkCollection()
			} else {
				this.getVideoCollection()
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
				if (this.pageIndex == 0) {
					this.getWorkCollection()
				} else {
					this.getVideoCollection()
				}
			},
			// 查看大图
			viewLargeImage(val) {
				this.bigImg = true;
				this.bigImgRoute = val
			},
			//获取图片作品合集
			getWorkCollection() {
				uni.request({
					url: `/workImage/listForUser`,
					method: "POST",
					data: this.from,
					success: (res) => {
						this.contentList = res.data.rows;
						this.pagenum = Math.ceil(res.data.total / 10);
						if (this.pagenum <= this.contentList.length) {
							this.status = "nomore"
						}
					}
				});
			},
			playBtn(i) {
				this.playIndex = i;
				this.playFlag = i;
			},
			// 获取视频作品集
			getVideoCollection() {
				uni.request({
					url: `/video/list`,
					method: "POST",
					data: this.from,
					success: (res) => {
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
					if (this.pageIndex == 0) {
						uni.request({
							url: `/workImage/list`,
							method: "POST",
							data: this.from,
							success: (res) => {
								this.status = "loadmore"
								this.contentList.push(...res.data.rows);
							}
						});
					} else {
						uni.request({
							url: `/video/list`,
							method: "POST",
							data: this.from,
							success: (res) => {
								this.status = "loadmore"
								this.videoList.push(...res.data.rows);
							}
						});
					}

				} else {
					this.status = "nomore"
				}
			},
			// 结束视频播放
			ended() {
				this.playFlag = null;
				this.playIndex = null;
			},
			// 复制图片链接
			copyLink(val) {
				let that = this
				uni.setClipboardData({
					data: val,
					success: function() {
						uni.showToast({
							title: this.$t('user.con_detail.i8'),
							success: function(res) {
								that.bigImg = false;
							}
						})
					}
				});
			},
			// 搜索
			searchBtn() {
				if (this.from.keyword == "") {
					uni.$u.toast(this.$t('user.con_detail.i9'))
				} else {
					this.from.pageNum = 1;
					if (this.pageIndex == 0) {
						this.getWorkCollection()
					} else {
						this.getVideoCollection()
					}
				}
			},
			// 复制视频链接
			copyVideoLink(val) {
				uni.setClipboardData({
					data: val,
					showToast: true,
					success: function() {
						uni.showToast({
							title: this.$t('user.con_detail.i10'),
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
				flex: 1;
				margin-right: 10px;

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
				display: grid;
				justify-content: space-around;
				grid-template-columns: repeat(auto-fill, 110px);
				grid-gap: 10px;

				.workslist_img {
					margin-left: 10px;
					margin-right: 10px;
				}

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

						background-position: 50%;
						background-repeat: no-repeat;
						left: 0;
						top: 0;

						.videoevery_nei_img {
							width: 100%;
							height: 100%;
						}

						.bofangbtn {
							position: absolute;
							left: 0;
							top: 0;
							width: 100%;
							z-index: 10000;
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