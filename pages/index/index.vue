<template>
	<view @click="closeLang">
		<view class="globalMian">
			<image class="global" @click.stop="selectLang" src="~@/static/index/global.png"></image>
			<view class="lang-down-menu" v-if="langShow">
				<view class="extend-link" v-for="(item, index) in locales" :key="index" @click="onLocaleChange(item)">
					{{item.text}}
				</view>

			</view>
		</view>
		<view class="container">
			<view class="justcard">
				<image class="justchating" src="~@/static/index/justchating.webp"></image>
				<view class="button" @click="communityBtn">
					<image class="usewrs" src="~@/static/index/awesome-users.webp"></image>
					<text class="nick_name">{{myInfo.nickName}}</text>
					<image class="homejiantou" src="~@/static/index/homejiantou.webp"></image>
				</view>
			</view>
			<view class="twocardfuns">
				<view class="card-item left" @click="toPage('/pages/index/picture/dfqaichat')">
					<view class="card-nei">
						<view class="top">
							<view class="title">AI{{$t('index.ai.creation')}}</view>
							<view class="intro">{{$t('index.ai.creatioin.text')}}</view>
						</view>
						<view class="bottom">
							<image src="~@/static/index/tiyanjt.gif"></image>
							<view>{{$t('index.ai.experience')}}</view>
						</view>
					</view>

				</view>
				<view class="card-item right" @click="toPage('/pages/index/video/indexIntr')">
					<view class="card-nei">
						<view class="top">
							<view class="title">{{$t('index.ai.video')}}</view>
							<view class="intro">{{$t('index.ai.video.text')}}</view>
						</view>
						<view class="bottom">
							<image src="~@/static/index/tiyanjt.gif"></image>
							<view>{{$t('index.ai.experience')}}</view>
						</view>
					</view>

				</view>
			</view>

			<view class="aicreate">
				<view class="heard">
					<view class="heard_left">
						<image class="homecs" src="~@/static/index/homecs.webp"></image>
						<text>{{$t('index.ai.creation')}}</text>
						<view class="rightyishu">
							<view class="text"><text>· {{$t('index.ai.slogan')}}</text></view>
						</view>
					</view>
					<view class="heard_right" @click="viewPortfolio">
						{{$t("index.tips10")}}
						<image class="heard_right_img" src="@/static/index/heard_right.png" mode=""></image>
					</view>
				</view>
			</view>
			<u-search class="sticky_search" @clear="clearFrom" @custom="searchFrom" animation
				:placeholder="$t('index.tips11')" v-model="from.keyword" :actionText="$t('index.tips12')"></u-search>
			<view class="tabselect">
				<u-tabs :list="tabsList" lineColor='transparent' :inactiveStyle='inactiveStyle'
					:activeStyle="activeStyle" @click="tabSelectClick"></u-tabs>
			</view>

			<view class="content-mian">
				<template v-if='constenList.length>0&&constenShow'>
					<view @click="viewImg(v)" class="content-item" v-for='(v,index) in constenList' :key='index'>
						<image mode="widthFix" :src="v.address"></image>
						<view class="mian-text">
							<view class="text">{{v.topicStr}}</view>
						</view>
					</view>
				</template>
				<template v-else-if="constenList.length==0&&!constenShow">
					<!-- 骨架屏 -->
					<view class="skeleton one"></view>
					<view class="skeletonLi">
						<view class="skeleton two"></view>
						<view class="skeleton three"></view>
						<view class="skeleton four"></view>
					</view>
					<view class="skeleton one"></view>
					<view class="skeletonLi">
						<view class="skeleton two"></view>
						<view class="skeleton three"></view>
						<view class="skeleton four"></view>
					</view>
				</template>
				<template v-else-if="constenList.length==0&&constenShow">
					<view class="data_none">
						<u-empty :text="$t('index.tips21')" mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png">
						</u-empty>
					</view>
				</template>
			</view>
			<u-loadmore :status="status" />
			<Footer pageName='index'></Footer>
		</view>
		<u-modal showCancelButton @confirm="setConfirm" @cancel="show=false" :show="show" :title="tips"
			:content='content'></u-modal>
		<view class="smegma" v-if="tipsShow">
			<view class="title_top" v-if="deviceType=='ios'">
				<image class="title_top_img" src="@/static/market/market_logo.png" mode=""></image>
				<view class="title_top_text">{{$t("index.tips13")}}</view>
			</view>
			<view class="title_bottom" v-if="deviceType=='ios'">
				<view class="title_bottom_top">{{$t("index.tips14")}}
					<image class="title_bottom_top_img" src="@/static/index/paw_1.png"></image>
				</view>
				<view class="title_bottom_head">
					{{$t("index.tips15")}}
					<image class="title_bottom_head_img" src="@/static/index/paw_3.png"></image>
					“{{$t("index.tips16")}}”，{{$t("index.tips17")}}
				</view>
				<image class="title_bottom_body" src="@/static/index/paw_2.png" mode=""></image>
				<view class="title_bottom_foot">
					<button class="title_bottom_foot_left" @click="pwaBtn(0)">{{$t("index.tips18")}}</button>
					<view class="btn_box">
						<button class="title_bottom_foot_right" @click="pwaBtn(1)">{{$t("index.tips19")}}</button>
						<image class="title_bottom_foot_right_img" src="@/static/index/paw_4.png"></image>
					</view>
				</view>
			</view>
			<view class="title_bottoms" v-if="deviceType=='android'">
				<view class="title_bottom_tops">{{$t("index.tips20")}}
				</view>
				<view class="title_bottom_heads">
					<image class="title_bottom_heads_img1" src="@/static/index/logo.png" mode=""></image>
					<view class="title_bottom_heads_right">
						<image class="title_bottom_heads_right_top" src="@/static/index/logo1.png" mode=""></image>
						<view class="title_bottom_heads_right_foot">http://www.alitagpt.io</view>
					</view>
				</view>
				<view class="title_bottom_foot">
					<button class="title_bottom_foot_left" @click="pwaBtn(0)">{{$t("index.tips18")}}</button>
					<view class="btn_box">
						<button class="title_bottom_foot_right" @click="pwaBtn(1)">{{$t("index.tips19")}}</button>
						<image class="title_bottom_foot_right_img" src="@/static/index/paw_4.png"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		components: {
			Footer: () => import('@/components/footer.vue'),

		},
		data() {
			return {
				constenList: [],
				from: {
					style: 1,
					pageNum: 1,
					pageSize: 10,
					keyword: ""
				},
				status: "loadmore",
				pagenum: 0, //总共页数
				langShow: false, //选择语言
				show: false, //温馨提示模态框
				content: "", //提示框内容
				setIndex: null, //设置索引
				tips: this.$t("user.islands.sc.sn.i1"), //温馨提示国际化
				tipsShow: false, //pwa提示
				tips11: this.$t("index.tips11"), //搜索画面描述国际化
				tips12: this.$t("index.tips12"), //搜索国际化
				pageShow: null, //
				myInfo: {}, //人员信息
				deviceType: "", //设备类型
				constenShow: false, //状态判断
			}
		},
		computed: {
			tabsList() {
				return [{
					name: this.$t('index.ai.creationstyle.freedom'),
					style: 1,
				}, {
					name: this.$t('index.ai.creationstyle.cyberpunk'),
					style: 2,
				}, {
					name: this.$t('index.ai.creationstyle.watercolor'),
					style: 3,
				}, {
					name: this.$t('index.ai.creationstyle.chinese_ink'),
					style: 4,
				}, {
					name: this.$t('index.ai.creationstyle.black_and_white'),
					style: 5,
				}, {
					name: this.$t('index.ai.creationstyle.oil_painting'),
					style: 6,
				}, {
					name: this.$t('index.ai.creationstyle.dreamlike'),
					style: 7,
				}, {
					name: this.$t('index.ai.creationstyle.sketch'),
					style: 8,
				}, {
					name: this.$t('index.ai.creationstyle.graffiti'),
					style: 9,
				}]
			},
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
			},
			locales() {
				return [{
						text: this.$t('locale.en'),
						code: 'en'
					},
					// {
					// 	text: this.$t('locale.zh-hans'),
					// 	code: 'zh-Hans'
					// },
					{
						text: this.$t('locale.zh-hant'),
						code: 'zh-Hant'
					}
				]
			}
		},
		onLoad() {
			let systemInfo = uni.getSystemInfoSync();
			this.systemLocale = systemInfo.language;
			this.applicationLocale = uni.getLocale();
			uni.onLocaleChange((e) => {
				this.applicationLocale = e.locale;
			})
		},
		onShow() {
			this.getImgList();
			this.getAccountIsComplete();
		},
		onReachBottom() {
			this.loadMore()
		},
		onHide() {
			this.from.pageNum = 1;
		},
		methods: {
			tabSelectClick(e) {
				this.from.style = e.style
				this.from.pageNum = 1;
				this.getImgList();
			},
			// 搜索
			searchFrom(val) {
				this.from.pageNum = 1;
				uni.request({
					url: `/workImage/list`,
					method: "POST",
					data: this.from,
					success: (res) => {
						this.constenShow = true
						this.pagenum = Math.ceil(res.data.total / 10);
						console.log(this.pagenum);
						this.constenList = res.data.rows;
						uni.pageScrollTo({
							scrollTop: 0,
							duration: 300
						});
					}
				});
			},
			// 清除
			clearFrom() {
				this.from.pageNum = 1;
				uni.request({
					url: `/workImage/list`,
					method: "POST",
					data: this.from,
					success: (res) => {
						this.constenShow = true
						this.pagenum = Math.ceil(res.data.total / 10);
						console.log(this.pagenum);
						this.constenList = res.data.rows;
						uni.pageScrollTo({
							scrollTop: 0,
							duration: 300
						});
					}
				});
			},
			// 作品集
			viewPortfolio() {
				uni.navigateTo({
					url: `/pages/user/portfolio`
				});
			},
			// 获取用户资料完整度
			getAccountIsComplete() {
				uni.request({
					url: `/help/queryAwayPoints`,
					method: "GET",
					success: (res) => {
						if (res.code == 200) {
							if (res.data == 0) {
								this.tipsShow = true;
								if (uni.getSystemInfoSync().osName == 'ios') {
									this.deviceType = "ios"
								} else {
									this.deviceType = "android"
								}
							}
						}
					}
				});

				// uni.request({
				// 	url: `/member/getAccountIsComplete`,
				// 	method: "GET",
				// 	success: (res) => {
				// 		if (res.code == 200) {

				// 			// if (!res.data.withdrawPassword) {
				// 			// 	this.show = true;
				// 			// 	this.setIndex = 2;
				// 			// 	this.content = this.$t("model.tips1")
				// 			// } else if (!res.data.question) {
				// 			// 	this.show = true;
				// 			// 	this.setIndex = 1;
				// 			// 	this.content = this.$t("model.tips2")
				// 			// } else if (!res.data.nickName) {
				// 			// 	this.show = true;
				// 			// 	this.setIndex = 0;
				// 			// 	this.content = this.$t("model.tips3")
				// 			// }
				// 		}
				// 	}
				// });
			},
			// pwa关闭
			pwaBtn(val) {
				uni.request({
					url: `/help/awayPoints`,
					method: "GET",
					data: {
						type: val
					},
					success: (res) => {
						if (res.code == 200) {
							this.tipsShow = false;

						}
					}
				});
			},
			// 查看详情
			viewImg(val) {
				uni.navigateTo({
					url: `/pages/index/picture/dfqaichattwocopy?imgInfo=${JSON.stringify(val)}`
				});
			},
			// 设置完整性判断
			setConfirm() {
				// if (this.setIndex == 0) {
				// 	this.show = false;
				// 	uni.navigateTo({
				// 		url: `/pages/user/securitycenter/settingName`
				// 	});
				// } else if (this.setIndex == 1) {
				// 	this.show = false;
				// 	uni.navigateTo({
				// 		url: `/pages/user/securitycenter/Confidentiality`
				// 	});
				// } else if (this.setIndex == 2) {
				// 	this.show = false;
				// 	uni.navigateTo({
				// 		url: `/pages/user/securitycenter/fundeditpass`
				// 	});
				// }
			},
			// 选择语言
			selectLang() {
				this.langShow = true
			},
			// 关闭语言选择框
			closeLang() {
				this.langShow = false
			},
			// 社区
			communityBtn() {
				// uni.$u.toast('社区功能暂未开放');
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			getImgList() {
				uni.request({
					url: '/member/myWallet',
					method: "GET",
					success: (res) => {
						this.myInfo = res.data;
					}
				});
				uni.request({
					url: `/workImage/list`,
					method: "POST",
					data: this.from,
					success: (res) => {
						this.constenShow = true
						this.pagenum = Math.ceil(res.data.total / 10);
						console.log(this.pagenum);
						this.constenList = res.data.rows;
					}
				});
			},
			onLocaleChange(e) {
				uni.setLocale(e.code);
				this.$i18n.locale = e.code;
				this.from.pageNum = 1;
				this.getImgList();
			},
			loadMore() {
				if (this.from.pageNum < this.pagenum) {
					this.status = "loading"
					this.from.pageNum++;
					uni.request({
						url: `/workImage/list`,
						method: "POST",
						data: this.from,
						success: (res) => {
							this.constenShow = true
							this.status = "loadmore"
							this.constenList.push(...res.data.rows);
						}
					});
				} else {
					this.status = "nomore"
				}
			},
			toPage(e) {
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";

	page {
		background-color: #fff;
	}

	::v-deep .u-modal__content {
		.u-modal__content__text {

			text-align: center;
		}
	}

	.globalMian {
		width: calc(100vw - 80rpx);
		display: flex;
		justify-content: flex-end;
		position: absolute;
		z-index: 7888;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 40rpx;

		.global {
			width: 70rpx;
			height: 72rpx;
			position: relative;
			top: -10rpx;
			right: -10rpx;
		}

		.lang-down-menu {
			position: absolute;
			right: 10px;
			top: 26px;
			z-index: 10 !important;
			text-align: center;
			background-color: #242424;
			color: #fff;
			left: unset;
			right: 0;
			min-width: 120px;
			padding: 8px 0;
			border: none;
			border-radius: 6px;
			box-shadow: 0 5px 10px 0 rgba(3, 6, 18, .5);
			transition: all .3s;

			.extend-link {
				line-height: 20px;
				padding: 12px 16px;
				display: block;
				font-size: 14px;
				font-weight: 500;
			}
		}

	}

	.container {
		padding: 40rpx;
		position: relative;

		.justcard {
			width: 100%;
			height: 250rpx;
			background-image: url('@/static/index/hometopcard.webp');
			background-size: cover;
			background-position: 50%;
			background-repeat: no-repeat;
			border-radius: 40px;

			.justchating {
				padding: 30rpx 36rpx;
				width: 300rpx;
				height: 60rpx;
			}

			.button {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-left: 30rpx;
				width: 235.1rpx;
				height: 70rpx;
				width: max-content;
				background: #333;
				border-radius: 50rpx;
				display: flex;

				.usewrs {

					padding-left: 20rpx;
					width: 30rpx;
					height: 28rpx;
					margin-right: 10rpx;
				}

				.nick_name {
					display: inline-block;
					color: #fff;
					font-size: 14px;
					font-weight: bold;
					line-height: 1;
					width: 54px;
					white-space: nowrap;
					/*不换行强制文本在一行显示*/
					overflow: hidden;
					/*超出盒子宽度部分文字被隐藏*/
					text-overflow: ellipsis
						/*当文本溢出包含元素时发生的事情 ellipsis*/
				}

				.homejiantou {
					margin-left: 30rpx;
					width: 56rpx;
					height: 56rpx;
					margin-right: 10rpx;
				}
			}
		}

		.twocardfuns {
			width: 100%;
			height: 440rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 40rpx;

			.card-item {
				width: 48%;
				height: 100%;
				background-size: 100%;
				background-position: 50%;
				background-repeat: no-repeat;
				display: flex;
				background-color: #f7f7f7;
				flex-direction: column;
				justify-content: center;
				border-radius: 40rpx;

				&.left {
					background-image: url('@/static/index/aicreat.webp');
				}

				&.right {
					background-image: url('@/static/index/yingxiao.webp');
				}

				.card-nei {
					padding: 60rpx 30rpx;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}

				.top {
					.title {
						color: #000;
						font-size: 18px;
						font-weight: 600;
					}

					.intro {
						color: #818183;
						font-size: 13px;
						line-height: 1;
						margin-top: 10px;
					}
				}

				.bottom {
					image {
						width: 40rpx;
						height: 36rpx;
					}

					view {
						font-size: 28rpx;
					}
				}
			}
		}

		.aicreate {
			width: 100%;
			margin-top: 40rpx;

			.heard {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.heard_left {
					display: flex;
					align-items: center;

					.homecs {
						width: 50rpx;
						height: 50rpx;
					}

					text {
						margin-left: 10rpx;
						color: #1b1b1b;
						font-size: 38rpx;
						font-weight: bold;

					}

					.rightyishu {
						padding: 4rpx 8rpx 4rpx 0;
						background-image: url('@/static/index/homecztiao.webp');
						background-position: 50%;
						background-repeat: no-repeat;
						background-size: 100% 100%;
						margin: 0 20rpx;

						.text,
						text {
							font-size: 24rpx;
							color: #2fa2e3;
							letter-spacing: 8rpx;
							background-size: 100% 100%;
							margin: 0 10rpx;
							letter-spacing: inherit;
						}

					}
				}

				.heard_right {
					display: flex;
					align-items: center;
					font-size: 14px;
					font-family: PingFang SC, PingFang SC;
					font-weight: 400;
					color: #181818;

					.heard_right_img {
						margin-left: 2rpx;
						width: 28rpx;
						height: 28rpx;
					}
				}

			}
		}

		.sticky_search {
			background-color: #fff !important;
			padding: 10rpx;
			box-sizing: border-box;
			margin-top: 20px !important;
		}

		.tabselect {
			margin: 20rpx 0;
		}


		.content-mian {
			width: 100%;
			display: flex;
			flex-wrap: wrap;

			.data_none {
				width: 100%;
				height: 300px;
			}

			.content-item {
				width: calc((100% - 20rpx)/2);
				margin-top: 20rpx;
				position: relative;

				&:nth-of-type(even) {
					margin-left: 20rpx;
				}

				image {
					width: 100%;
					height: 328rpx;
					border-radius: 40rpx;
					position: relative;
					z-index: 9;
				}

				.mian-text {
					position: absolute;
					z-index: 99;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;

					.text {
						margin: 20rpx 0 0 20rpx;
						color: #fff;
						font-size: 28rpx;
					}
				}
			}
		}
	}

	.u-loadmore {
		margin-bottom: 120px !important;
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

	::v-deep .u-tabs__wrapper__nav__item:first-child {
		padding-left: 0 !important;
	}

	::v-deep .u-tabs__wrapper__scroll-view {
		::-webkit-scrollbar {
			width: 0;
			height: 0;
		}
	}

	.skeletonLi {
		width: 100%;
		height: 660rpx;
		margin: 20rpx 0;

		.two {
			width: calc((100% - 20rpx) /2);
			height: 660rpx;
			margin-right: 20rpx;
			float: left;
			border-radius: 40rpx;
		}

		.three {
			width: calc((100% - 20rpx) /2);
			height: 320rpx;
			float: right;
			border-radius: 40rpx;
		}

		.four {
			width: calc((100% - 20rpx) /2);
			height: 320rpx;
			margin-top: 20rpx;
			float: right;
			border-radius: 40rpx;
		}

	}

	.skeleton.one {
		width: 100%;
		height: 328rpx;
		border-radius: 40rpx;
	}

	.smegma {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 1000000;
		background-color: rgba(3, 6, 18, .8);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 24rpx;
		box-sizing: border-box;

		.title_top {
			width: 100%;
			height: 144rpx;
			background: #FFFFFF;
			box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
			border-radius: 12px 12px 12px 12px;
			margin-top: 52px;
			padding: 8rpx 20px 20rpx;
			box-sizing: border-box;

			.title_top_img {
				width: 108px;
				height: 34px;
			}

			.title_top_text {
				font-size: 15px;
				font-family: PingFang SC, PingFang SC;
				font-weight: bold;
				color: #00070F;

			}
		}

		.title_bottom {
			width: 100%;
			// height: 604rpx;
			background: url("@/static/index/paw_5.png") no-repeat;
			background-size: 100% 100%;
			margin-bottom: 136rpx;
			padding: 30px 54rpx 30px;
			box-sizing: border-box;

			.title_bottom_top {
				font-size: 15px;
				font-family: PingFang SC, PingFang SC;
				font-weight: bold;
				color: #828282;
				display: flex;
				align-items: center;
				justify-content: center;

				.title_bottom_top_img {
					width: 24px;
					height: 24px;
				}
			}


			.title_bottom_head {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 15px;
				font-family: PingFang SC, PingFang SC;
				font-weight: bold;
				color: #828282;
				margin-top: 10px;

				.title_bottom_head_img {
					width: 20px;
					height: 20px;
				}
			}

			.title_bottom_body {
				width: 100%;
				height: 180rpx;
			}

			.title_bottom_foot {
				margin-top: 55px;
				display: flex;
				justify-content: space-between;

				.title_bottom_foot_left {
					width: 45%;
					height: 48px;
					background: #F6F6F6;
					border-radius: 25px 25px 25px 25px;
					font-size: 16px;
					font-family: PingFang SC, PingFang SC;
					font-weight: bold;
					color: #5F5F5F;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.btn_box {
					position: relative;
					width: 45%;
					height: 48px;

					.title_bottom_foot_right {
						width: 100%;
						height: 100%;
						background: #0C84FF;
						border-radius: 25px 25px 25px 25px;
						font-size: 16px;
						font-family: PingFang SC, PingFang SC;
						font-weight: bold;
						color: #fff;
						display: flex;
						align-items: center;
						justify-content: center;

					}

					.title_bottom_foot_right_img {
						position: absolute;
						right: -6px;
						top: -12px;
						z-index: 11111111;
						width: 65px;
						height: 23px;
					}
				}


				uni-button:after {
					border: none;
				}
			}
		}

		.title_bottoms {
			position: absolute;
			right: 12px;
			bottom: 0;
			width: calc(100% - 24px);
			height: 250px;
			background: url("@/static/index/paw_5.png") no-repeat;
			background-size: 100% 100%;
			margin-bottom: 136rpx;
			padding: 30px 54rpx 30px;
			box-sizing: border-box;

			.title_bottom_tops {
				font-size: 15px;
				font-family: PingFang SC, PingFang SC;
				font-weight: bold;
				color: #00070F;
			}

			.title_bottom_heads {
				margin-top: 15px;
				display: flex;
				align-items: center;

				.title_bottom_heads_img1 {
					width: 54px;
					height: 54px;
				}

				.title_bottom_heads_right {
					.title_bottom_heads_right_top {
						width: 76px;
						height: 24px;
					}

					.title_bottom_heads_right_foot {
						font-size: 15px;
						font-family: PingFang SC, PingFang SC;
						font-weight: 400;
						color: #9FA19F;
					}
				}
			}

			.title_bottom_foot {
				margin-top: 30px;
				display: flex;
				justify-content: space-between;

				.title_bottom_foot_left {
					width: 45%;
					height: 48px;
					background: #F6F6F6;
					border-radius: 25px 25px 25px 25px;
					font-size: 16px;
					font-family: PingFang SC, PingFang SC;
					font-weight: bold;
					color: #5F5F5F;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				uni-button {
					margin: 0;
				}

				.btn_box {
					position: relative;
					width: 45%;
					height: 48px;

					.title_bottom_foot_right {
						width: 100%;
						height: 100%;
						background: #0C84FF;
						border-radius: 25px 25px 25px 25px;
						font-size: 16px;
						font-family: PingFang SC, PingFang SC;
						font-weight: bold;
						color: #fff;
						display: flex;
						align-items: center;
						justify-content: center;

					}

					.title_bottom_foot_right_img {
						position: absolute;
						right: -6px;
						top: -12px;
						z-index: 11111111;
						width: 65px;
						height: 23px;
					}
				}


				uni-button:after {
					border: none;
				}
			}
		}
	}



	// .skeleton{
	// 	background: linear-gradient(90deg, #F1F2F4 25%, #e6e6e6 37%, #F1F2F4 50%);
	// 	background-size: 400% 100%;
	// 	animation: skeletonAm 1.8s ease infinite;
	// 	&.one{
	// 		width: 100%;
	// 		height: 328rpx;
	// 		border-radius: 40rpx;
	// 	}
	// }
	// @keyframes skeletonAm{
	// 	0% {
	// 	    background-position: 100% 50%;
	// 	}
	// 	100% {
	// 	    background-position: 0 50%;
	// 	} 
	// }
</style>