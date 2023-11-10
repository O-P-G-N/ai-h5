<template>
	<view class="capital_flow">
		<u-navbar @leftClick="goBackUser" @rightClick="viewHistory" leftText="返回" title="资金流水"
			:safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
			<view class="u-nav-slot" slot="right">
				筛选
			</view>
		</u-navbar>
		<view class="container_nei">
			<view class="content">
				<view class="list-body" v-for="(v,i) in contentList" :key="i">
					<view class="capital">
						<view class="capital_top">
							<text class="title">类型</text>
							<text>{{v.typeStr}}</text>
						</view>
						<view class="orderhao">
							<text class="title">金额</text>
							<text :class="v.type==6||v.type==1?'greens':'reds'">{{v.type==6||v.type==1?'':'+'}}{{v.useHongbao}}</text>
						</view>
						<view class="orderhao">
							<text class="title">时间</text>
							<text>{{v.updateTime}}</text>
						</view>
					</view>
				</view>
				<view class="list-body">
					<view class="capital">
						<view class="capital_top">
							<text class="title">类型</text>
							<text>邀请分佣</text>
						</view>
						<view class="orderhao">
							<text class="title">金额</text>
							<text class="greens">+6.0000</text>
						</view>
						<view class="orderhao">
							<text class="title">时间</text>
							<text>2023-10-26 23:23:28</text>
						</view>
					</view>
				</view>
				<u-loadmore :status="status" />
			</view>
		</view>
		<u-popup :show="show" mode="center" class="popup_content_center">
			<view class="mainpopup">
				<view class="every_list">
					<text class="titles">起止时间</text>
					<text class="intro">起止时间为创建订单时间</text>
					<u-cell-group class="start_time">
						<u-cell :title="from.begin?from.begin:'选择开始时间'" @click="startEndTime('start')" :isLink="true"></u-cell>
					</u-cell-group>
					<u-cell-group class="end_time">
						<u-cell :title="from.end?from.end:'选择结束时间'" @click="startEndTime('end')" :isLink="true"></u-cell>
					</u-cell-group>
				</view>
				<view class="anniubtn">
					<view class="chongzhi" @click="reset">重置</view>
					<view class="queding" @click="determine">确定</view>
				</view>
			</view>
		</u-popup>
		<u-datetime-picker closeOnClickOverlay @close="closeTime" @cancel="closeTime" @confirm="confirmTime"
			:show="timeShow" v-model="timeValue" mode="datetime"></u-datetime-picker>
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
		methods: {
			// 返回个人中心
			goBackUser() {
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			// 筛选
			viewHistory() {
				this.show = true;
			},
			// 选择开始和结束时间
			startEndTime(val) {
				if (val == "start") {
					if(this.from.begin=="选择开始时间"){
						this.show = false;
						this.timeShow = true;
						this.timeFlag = true;
					}else{
						this.show = false;
						this.timeShow = true;
						this.timeFlag = true;
						this.timeValue=this.from.begin
					}
				} else {
					if(this.from.end=="选择结束时间"){
						this.show = false;
						this.timeShow = true;
						this.timeFlag = false;
					}else{
						this.show = false;
						this.timeShow = true;
						this.timeFlag = false;
						this.timeValue=this.from.end;
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
					this.from.begin = uni.$u.timeFormat(val.value, 'yyyy-mm-dd hh:MM:ss')
					this.show = true;
					this.timeShow = false;
					this.timeValue=Number(new Date());
				} else {
					this.from.end = uni.$u.timeFormat(val.value, 'yyyy-mm-dd hh:MM:ss')
					this.show = true;
					this.timeShow = false;
					this.timeValue=Number(new Date());
				}
			},
			// 重置
			reset(){
				this.from={
					begin: "",
					end: "",
				}
			},
			// 确定
			determine(){
				this.show = false;
				this.timeShow = false;
				this.from.pageNum = 1;
				this.getCapitalFlow();
				this.from.begin="";
				this.from.end="";
					
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