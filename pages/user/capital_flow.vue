<template>
	<view class="capital_flow">
		<u-navbar @leftClick="goBackUser" @rightClick="viewHistory" leftText="返回"
			:title="$t('user.asset.details.index.flow')" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
			<view class="u-nav-slot" slot="right">
				{{$t('user.capital_flow.i2')}}
			</view>
		</u-navbar>
		<view class="container_nei">
			<view class="content">
				<view class="list-body" v-for="(v,i) in contentList" :key="i">
					<view class="capital">
						<view class="capital_top">
							<text class="title">{{$t('user.capital_flow.i3')}}</text>
							<text>{{v.typeStr}}</text>
						</view>
						<view class="orderhao">
							<text class="title">{{$t('user.capital_flow.i4')}}</text>
							<text
								:class="v.useHongbao<0?'greens':'reds'">{{v.useHongbao<0?'':'+'}}{{v.useHongbao+" "+v.currencyStr}}</text>
						</view>
						<view class="orderhao">
							<text class="title">{{$t('user.capital_flow.i5')}}</text>
							<text>{{v.updateTime}}</text>
						</view>
					</view>
				</view>
				<u-loadmore :loading-text="$t('index.tips23')" :loadmore-text="$t('index.tips22')"
					:nomore-text="$t('index.tips24')" :status="status" />
			</view>
		</view>
		<u-popup :show="show" mode="center" class="popup_content_center">
			<view class="mainpopup">
				<view class="every_list">
					<text class="titles">{{$t('user.capital_flow.i6')}}</text>
					<text class="intro">{{$t('user.capital_flow.i7')}}</text>
					<u-cell-group class="start_time">
						<u-cell :title="from.begin?from.begin:$t('user.capital_flow.i8')" @click="startEndTime('start')"
							:isLink="true"></u-cell>
					</u-cell-group>
					<u-cell-group class="end_time">
						<u-cell :title="from.end?from.end:$t('user.capital_flow.i9')" @click="startEndTime('end')"
							:isLink="true"></u-cell>
					</u-cell-group>
				</view>
				<view class="anniubtn">
					<view class="chongzhi" @click="reset">{{$t('user.capital_flow.i11')}}</view>
					<view class="queding" @click="determine">{{$t('user.capital_flow.i12')}}</view>
				</view>
			</view>
		</u-popup>
		<u-datetime-picker closeOnClickOverlay @close="closeTime" @cancel="closeTime" @confirm="confirmTime"
			:show="timeShow" :maxDate="maxDate" :minDate="minDate" v-model="timeValue"
			mode="datetime"></u-datetime-picker>
			<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false, //蒙层状态
				timeShow: false, //时间选择蒙层状态
				timeValue: Number(new Date()), //选择的时间
				from: {
					begin: "",
					end: "",
					pageNum: 1,
					pageSize: 10
				},
				timeFlag: true, //判断类型
				PageCount: 0, //总页数
				contentList: [], //记录列表
				status: "loadmore",
				maxDate: uni.$u.props.datetimePicker.maxDate, //最大可选时间
				minDate: uni.$u.props.datetimePicker.minDate, //最小可选时间
			};
		},

		onShow() {
			this.getCapitalFlow()
		},
		onReachBottom() {
			this.loadMore()
		},
		onHide() {
			this.from.pageNum = 1;
		},
		onLoad() {
			const pages = getCurrentPages();
			console.log(pages);
			if (pages.length > 1) {
				uni.setStorageSync('router', pages[pages.length - 2].route);
			}
		},
		methods: {
			// 返回个人中心
			goBackUser() {
				const pages = getCurrentPages();
				if (pages.length > 1) {
					uni.navigateBack({
						delta: 1
					});
				} else {
					uni.redirectTo({
						url: `/${uni.getStorageSync("router")}`
					});
					uni.switchTab({
						url: `/${uni.getStorageSync("router")}`
					});
				}
			},
			// 筛选
			viewHistory() {
				this.from.begin = "";
				this.from.end = "";
				this.show = true;
			},

			// 选择开始和结束时间
			startEndTime(val) {
				this.timeValue = Number(new Date());
				if (val == "start") {
					if (this.from.end != "") {
						this.maxDate = new Date(this.from.end).getTime()
						this.minDate = uni.$u.props.datetimePicker.minDate
					} else {
						this.maxDate = uni.$u.props.datetimePicker.maxDate
						this.minDate = uni.$u.props.datetimePicker.minDate
					}
					if (this.from.begin == this.$t('user.capital_flow.i8')) {
						this.show = false;
						this.timeShow = true;
						this.timeFlag = true;
					} else {
						this.show = false;
						this.timeShow = true;
						this.timeFlag = true;
						this.timeValue = this.from.begin+":00"

					}
				} else {
					if (this.from.begin != "") {
						this.minDate = new Date(this.from.begin).getTime()
						this.maxDate = uni.$u.props.datetimePicker.maxDate
					} else {
						this.maxDate = uni.$u.props.datetimePicker.maxDate
						this.minDate = uni.$u.props.datetimePicker.minDate
					}
					if (this.from.end == this.$t('user.capital_flow.i9')) {
						this.show = false;
						this.timeShow = true;
						this.timeFlag = false;
					} else {
						this.show = false;
						this.timeShow = true;
						this.timeFlag = false;
						this.timeValue = this.from.end+":59";
					}

				}
			},
			// 关闭时间选择器
			closeTime() {
				this.show = true;
				this.timeShow = false;
			},
			// 确定时间
			confirmTime(val) {
				if (this.timeFlag) {
					this.from.begin = uni.$u.timeFormat(val.value, 'yyyy-mm-dd hh:MM')+":00"
					this.show = true;
					this.timeShow = false;
					this.timeValue = Number(new Date());
				} else {
					this.from.end = uni.$u.timeFormat(val.value, 'yyyy-mm-dd hh:MM')+":59"
					this.show = true;
					this.timeShow = false;
					this.timeValue = Number(new Date());
				}
			},
			// 重置
			reset() {
				this.from = {
					begin: "",
					end: "",
				}
				this.timeValue = Number(new Date())
			},
			// 确定
			determine() {
				let that=this
				if (this.from.begin == this.from.end&&this.from.begin) {
					that.$refs.uToast.show({
						message:that.$t('user.con_detail.i83'),
						position:"top"
					})
				} else {
					this.show = false;
					this.timeShow = false;
					this.from.pageNum = 1;
					this.getCapitalFlow();
				}
			},
			// 获取提现记录
			getCapitalFlow() {
				uni.request({
					url: `/hongbaoLog/list`,
					method: "POST",
					data: this.from,
					success: (res) => {
						this.contentList = res.data.rows;
						this.PageCount = Math.ceil(res.data.total / 10);
						if (this.PageCount <= this.contentList.length) {
							this.status = "nomore"
						}
						console.log(res);
					}
				});
			},
			// 上划加载
			loadMore() {
				if (this.from.pageNum < this.PageCount) {
					this.status = "loading"
					this.from.pageNum++;
					uni.request({
						url: `/hongbaoLog/list`,
						method: "POST",
						data: this.from,
						success: (res) => {
							this.contentList.push(...res.data.rows);

						}
					});
				} else {
					this.status = "nomore"
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.capital_flow {
		width: 100%;
		height: 100%;
		box-sizing: border-box;

		.u-navbar {
			height: 51px;

			.u-navbar__content {
				height: 51px !important;

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

				.u-nav-slot {
					font-size: 12px;
					font-weight: 500;
					color: #2fa2e3;
					line-height: 14px;
					white-space: nowrap;
					width: 54px;
					display: flex;
					justify-content: flex-end;
					height: 20px;
				}

			}
		}

		.container_nei {
			padding: 0 20px;

			.content {
				margin-top: 20px;
				font-size: 15px;
				word-break: break-word;
				word-wrap: break-word;

				.list-body {
					margin-bottom: 15px;

					.capital {
						padding: 20px 16px;
						border-radius: 25px;
						color: #000;
						-webkit-backdrop-filter: blur(40px);
						backdrop-filter: blur(40px);
						background: #f5f6fa;

						.capital_top {
							font-size: 14px;
							font-weight: 600;
							color: #000;
							margin-bottom: 20px;
							display: flex;
							justify-content: space-between;

							.title {
								font-size: 14px;
								font-weight: 400;
								color: #333;
							}
						}

						.orderhao {
							font-size: 14px;
							font-weight: 400;
							color: #333;
							display: flex;
							justify-content: space-between;
							margin-top: 20px;

							.title {
								font-size: 14px;
								font-weight: 400;
								color: #333;
							}

							.reds {
								font-size: 14px;
								font-weight: 500;
								color: #ff1d47 !important;
							}

							.greens {
								font-size: 14px;
								font-weight: 500;
								color: #1ee7a0 !important;
							}
						}
					}
				}
			}
		}

		.popup_content_center {
			.u-popup__content {
				width: 86.33%;
				border-radius: 20px;
				padding: 20px;
				box-sizing: border-box;

				.mainpopup {
					.every_list {
						margin-bottom: 20px;
						display: flex;
						flex-direction: column;

						.titles {
							font-size: 18px;
							font-weight: 600;
							color: #333;
							text-align: center;
						}

						.intro {
							padding: 0 15px;
							font-size: 12px;
							font-weight: 400;
							text-align: center;
							color: #a0a0a0;
							margin-top: 10px;
						}

						.start_time {
							background: rgb(245, 246, 250);
							border: 1px solid rgb(255, 255, 255);
							border-radius: 20px;
							padding: 20px 15px;
							margin-top: 22px;

							.u-line {
								display: none;
							}

							.u-cell__body {
								padding: 0 !important;
							}
						}

						.end_time {
							background: rgb(245, 246, 250);
							border: 1px solid rgb(255, 255, 255);
							border-radius: 20px;
							padding: 20px 15px;
							margin-top: 8px;

							.u-line {
								display: none;
							}

							.u-cell__body {
								padding: 0 !important;
							}
						}
					}

					.anniubtn {
						display: flex;
						align-items: center;
						justify-content: space-between;

						.chongzhi {
							width: calc(50% - 4px - 2px);
							height: 44px;
							border-radius: 54px;
							border: 1px solid #2fa2e3;
							color: #fff;
							font-size: 14px;
							font-weight: 500;
							color: #2fa2e3;
							display: flex;
							align-items: center;
							justify-content: center;
						}

						.queding {
							width: calc(50% - 4px);
							height: 46px;
							background: #333;
							border-radius: 54px;
							opacity: 1;
							display: flex;
							align-items: center;
							justify-content: center;
							font-size: 14px;
							font-weight: 500;
							color: #fff;
						}
					}
				}
			}
		}

	}
</style>