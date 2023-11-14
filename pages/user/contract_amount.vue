<template>
	<view class="contract_amount">
		<u-navbar @leftClick="goBackUser" leftText="返回" title="我的合约" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main" v-if="contractList.length>0">
			<view class="mymodelmain">
				<u-list @scrolltolower="scrolltolower" lowerThreshold="70">
					<u-list-item v-for="(v, i) in contractList" :key="i">
						<view class="mymodellist">
							<view class="modeltop">
								<view class="modeltitle">
									<image class="modeltitle_img"
										:src="v.type==1?'../../static/user/up.png':'../../static/user/encryption.png'"
										mode=""></image>
									<view class="in">
										<view class="title">{{v.type==1?'证券':'加密货币'}}</view>
									</view>
								</view>
								<view class="modelshouyi">
									<view class="modelshouyi_every">
										<view class="leijiprice">${{v.incomeHongbao}}</view>
										<view class="">累计收益</view>
									</view>
									<view class="modelshouyi_every">
										<view class="shouyilvprice"><text>{{Number(v.bili)*100}}%</text></view>
										<view class="">收益率</view>
									</view>
								</view>
							</view>
							<view class="contractthree">
								<view class="contract_every">
									<view class="intro">{{v.payNum}}份</view>
									<view class="titles">合约份数</view>
								</view>
								<view class="contract_every">
									<view class="intro">{{v.runday}}天</view>
									<view class="titles">已运行</view>
								</view>
								<view class="contract_every">
									<view class="intro">0次</view>
									<view class="titles">交易次数</view>
								</view>
							</view>
							<view class="order_sn">
								Order ID：{{v.orderSn}}
							</view>
							<view class="order_sn">
								创建时间：{{v.createTime}}
							</view>
							<view class="order_sn" v-if="v.status==0">
								到期时间：{{v.endTime}}
							</view>
							<view class="order_sn" v-if="v.status==2||v.status==1">
								结束时间：{{v.updateTime}}
							</view>
							<view class="modelbtns" v-if="v.status!=2&&v.status!=1">
								<button class="zhongzhibtn"
									@click="contractSet(v.id,v.status)">{{v.status==0?"终止":v.status==4?"取消终止":""}}合约</button>
							</view>
							<view class="modelendtime" v-if="v.status==4">
								<text>终止合约后将不再有任何收益 倒计时:</text>
								<u-count-down :time="v.countdown" format="HH:mm:ss"></u-count-down>
							</view>
							<button class="lookmore" @click="seeMore(v.id)" v-if="v.status!=2&&v.status!=1">
								查看更多交易详情
								<image class="lookmore_img" src="@/static/user/rightjt.png" mode=""></image>
							</button>
						</view>
					</u-list-item>
				</u-list>

				<u-loadmore :status="status" />
				<u-modal showCancelButton @cancel="cancel" @confirm="confirm" :show="show" title="温馨提示"
					:content='modalContent'></u-modal>
			</view>
		</view>
		<view class="default_page" v-else>
			<image class="default_page_img" src="@/static/user/defaultPage.png" mode=""></image>
			<view class="default_page_text">还没有合约，快去创建合约吧~</view>
		</view>
	</view>
</template>

<script>
	import dayjs from 'dayjs'
	import {
		data
	} from '../../uni_modules/uview-ui/libs/mixin/mixin';
	export default {
		data() {
			return {
				from: {
					page: 1, //页数
				}, //请求数据
				contractList: [], //合约列表
				total: 0, //总条数
				status: "", //状态
				show: false, //暂停弹窗
				modalContent: "", //模态框提示语
				id: "", //选择暂停的合约id
				status: "", //选择暂停的合约状态
			};
		},
		onShow() {
			this.getContractList();
			
		},
		onHide() {
			this.from.page = 1;
			this.contractList = [];
		},
		methods: {
			// 返回个人中心
			goBackUser() {
				const pages = getCurrentPages();
				if(pages.length>1){
					uni.navigateBack({
						delta: 1
					});
				}else{
					uni.switchTab({
						url: `/pages/market/index`
					});
				}
			},
			getaa(){
				
			},
			// 获取合约列表
			getContractList() {
				uni.request({
					url: `/island/contracts/${this.from.page}`,
					method: "GET",
					success: (res) => {
						res.data.rows.map((v) => {
							v.runday = this.getDaysDiff(v.createTime, Date.now())
							v.endTime=dayjs(v.createTime).add(v.payDays,'day').format('YYYY-MM-DD HH:mm:ss')
							if (v.status == 4) {
								v.countdown = this.getCountDown(v.updateTime)
							}
						})
						this.contractList = res.data.rows;
						this.status = "loadmore";
						this.total = res.data.total;
					}
				});
			},
			// 设置合约
			contractSet(id, status) {
				this.show = true
				this.id = id;
				if (status == 0) {
					this.modalContent = "您确定要终止该合约吗？"
				} else {
					this.modalContent = "您确定要取消终止该合约吗？"
				}
				this.status = status;

			},
			// 倒计时
			getCountDown(startDate) {
				const oneDay = 24 * 60 * 60 * 1000;
				let start = new Date(startDate).getTime() + oneDay;
				const diffDays = start - Date.now();
				return diffDays;
			},
			// 计算天数
			getDaysDiff(startDate, endDate) {
				const oneDay = 24 * 60 * 60 * 1000; // 一天的毫秒数
				const start = new Date(startDate);
				const end = new Date(endDate);
				const diffDays = Math.round(Math.abs((end - start) / oneDay));
				return diffDays;
			},
			// 查看更多
			seeMore(id) {
				uni.navigateTo({
					url: `/pages/user/contract_details?id=${id}`
				});
			},
			// 上划加载
			scrolltolower() {
				this.status = "loading"
				if (this.from.page < (this.total / 10)) {
					this.from.page++;
					uni.request({
						url: `/island/contracts/${this.from.page}`,
						method: "GET",
						success: (res) => {
							res.data.rows.map((v) => {
								v.runday = this.getDaysDiff(v.createTime, Date.now())
								v.endTime=dayjs(v.createTime).add(v.payDays,'day').format('YYYY-MM-DD HH:mm:ss')
								if (v.status == 1) {
									v.countdown = this.getCountDown(v.updateTime)
								}
							})
							this.contractList.push(res.data.rows);
						}
					});
				} else {
					this.status = "nomore"
				}

			},
			// 模态框取消
			cancel() {
				this.show = false
			},
			// 模态框确认按钮
			confirm() {
				let that = this
				let expectOver = null
				that.show = false;
				if (that.status == 0) {
					expectOver = 4
				} else {
					expectOver = 0
				}
				uni.request({
					url: `/island/contract/${that.id}`,
					method: "GET",
					data: {
						over: expectOver
					},
					success: (res) => {
						if (that.status == 0) {
							uni.showToast({
								title: "合约已终止",
								success: function(res) {
									that.from.page = 1;
									that.getContractList();
								}

							})
						} else {
							uni.showToast({
								title: "合约已取消终止",
								success: function(res) {
									that.from.page = 1;
									that.getContractList();
								}

							})
						}
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

	::v-deep.contract_amount {
		width: 100%;
		min-height: 100vh;
		padding: 0 20px;
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
			}
		}

		.main {
			padding-bottom: 40px;
			padding-top: 15px;

			.mymodelmain {
				.mymodellist {
					border: 1px solid #efefef;
					background: #fff;
					padding: 10px;
					border-radius: 25px;
					margin-bottom: 20px;

					.modeltop {
						padding: 20px 15px;
						background: #111;
						border-radius: 20px;

						.modeltitle {
							display: flex;
							align-items: center;
							margin-right: 15px;
							width: 80%;

							.modeltitle_img {
								width: 25px;
								height: 25px;
								margin-right: 15px;
								border-radius: 50%;
							}

							.in {
								width: calc(100% - 60px);

								.title {
									font-size: 16px;
									font-weight: 600;
									color: #fff;
								}
							}
						}

						.modelshouyi {
							display: flex;
							align-items: center;
							justify-content: space-between;
							margin-top: 15px;

							.modelshouyi_every {
								width: 50%;

								uni-view:first-child {
									font-size: 18px;
									font-weight: 600;
									margin-top: 5px;
									text-align: center;
								}

								uni-view:last-child {
									font-size: 14px;
									color: hsla(0, 0%, 100%, .6);
									font-weight: 300;
									text-align: center;
								}

								.leijiprice {
									color: #2fa2e3;
									text-align: center;
								}

								.shouyilvprice {
									color: #1ee7a0;
								}
							}
						}
					}

					.contractthree {
						display: flex;
						justify-content: space-between;
						margin: 20px 0 0 0;

						.contract_every {
							width: 32%;

							.intro {
								font-size: 15px;
								color: #000;
								font-weight: 600;
								text-align: center;
							}

							.titles {
								font-size: 15px;
								color: #000;
								font-weight: 300;
								margin-top: 3px;
								text-align: center;
							}
						}
					}

					.order_sn {
						idth: 100%;
						margin-top: 10px;
						text-indent: 1.5em;
					}

					.modelbtns {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-top: 25px;

						.zhongzhibtn {
							width: 46%;
							height: 50px;
							line-height: 46px;
							text-align: center;
							color: #333;
							font-size: 15px;
							background: #fff;
							border: 2px solid #333 !important;
							border-radius: 53px;
						}
					}

					.modelendtime {
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 13px;
						letter-spacing: 1px;
						margin-top: 16px;
					}

					.lookmore {
						width: 100%;
						height: 50px;
						line-height: 50px;
						text-align: center;
						color: #333;
						font-size: 14px;
						background: #eceef3;
						border-radius: 53px;
						margin-top: 15px;
						display: flex !important;
						align-items: center;
						justify-content: center;

						.lookmore_img {
							width: 8px;
							height: 10px;
							margin-left: 5px;
						}
					}

					.lookmore::after {
						border: none !important;
					}
				}
			}
		}

		.default_page {
			width: 100%;
			min-height: calc(100% - 51px);
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			// height: 100%;
			padding: 20px;
			box-sizing: border-box;

			.default_page_img {
				width: 304px;
				height: 304px;
			}

			.default_page_text {
				font-size: 15px;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #535353;

			}
		}

		.u-popup__content {
			border-radius: 21px !important;

			.u-modal__content {
				text-align: center;
				font-size: 16px;
				color: #000;
			}

			.u-modal__button-group__wrapper__text {
				color: rgb(0, 0, 0) !important;
			}
		}

	}
</style>