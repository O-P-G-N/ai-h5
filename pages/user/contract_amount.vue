<template>
	<view class="contract_amount">
		<u-navbar @leftClick="goBackUser" :leftText="$t('user.con_detail.i1')" :title="$t('user.con_detail.i23')"
			:safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>

		<view class="main" v-if="contractList.length>0&&!loadShow">
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
										<view class="title">
											{{v.type==1?$t('user.con_detail.i12'):$t('user.con_detail.i13')}}
										</view>
									</view>
								</view>
								<view class="modelshouyi">
									<view class="modelshouyi_every">
										<view class="leijiprice">${{v.incomeHongbao}}</view>
										<view class="">{{$t('user.con_detail.i14')}}</view>
									</view>
									<view class="modelshouyi_every">
										<view class="shouyilvprice"><text>{{Number(v.bili)*100}}%</text></view>
										<view class="">{{$t('user.con_detail.i15')}}</view>
									</view>
								</view>
							</view>
							<view class="contractthree">
								<view class="contract_every">
									<view class="intro">{{v.payNum}}{{$t('ac.prc4')}}</view>
									<view class="titles">{{$t('user.con_detail.i16')}}</view>
								</view>
								<view class="contract_every">
									<view class="intro">{{v.payedDays}}{{$t('user.con_detail.i18')}}</view>
									<view class="titles">{{$t('user.con_detail.i22')}}</view>
								</view>
								<view class="contract_every">
									<view class="intro">0{{$t('user.con_detail.i19')}}</view>
									<view class="titles">{{$t('user.con_detail.i20')}}</view>
								</view>
							</view>
							<!-- <view class="order_sn">
								Order ID：{{v.orderSn}}
							</view>
							<view class="order_sn">
								{{$t('user.con_detail.i24')}}：{{v.createTime}}
							</view>
							<view class="order_sn" v-if="v.status==0">
								{{$t('user.con_detail.i25')}}：{{v.endTime}}
							</view>
							<view class="order_sn" v-if="v.status==2||v.status==1">
								{{$t('user.con_detail.i26')}}：{{v.updateTime}}
							</view> -->
							<view class="paogress_line" v-if="v.status!=2&&v.status!=1">
								<u-line-progress :percentage="v.paogress" activeColor="#000"
									:showText="false"></u-line-progress>
							</view>
							<view class="paogress_tips" v-if="v.status!=2&&v.status!=1">
								<view style="display: flex;" v-if="v.count > 0">
									{{$t("user.con_detail.i40")}}（{{$t("user.con_detail.i41")}}:{{v.day}}{{$t("user.con_detail.i42")}}{{v.hour}}{{$t("user.con_detail.i43")}}{{v.minu}}{{$t("user.con_detail.i44")}}）
								</view>
								<view v-else>收益结算中</view>
								<view class="">{{v.paogress}}%</view>
							</view>
							<view class="modelbtns" v-if="v.status!=2&&v.status!=1">
								<button class="zhongzhibtn" @click="contractSet(v.id,v.status)">
									{{v.status==0?$t('user.con_detail.i27'):v.status==4 ? $t('user.con_detail.i28') :""}}{{$t('user.con_detail.i29')}}
								</button>
							</view>
							<view class="modelendtime" v-if="v.status==4">
								<text>{{$t('user.con_detail.i30')}}:</text>
								<u-count-down :time="v.countdown" format="HH:mm:ss"></u-count-down>
							</view>
							<button class="lookmore" @click="seeMore(v.id)" v-if="v.status!=2&&v.status!=1">
								{{$t('user.con_detail.i31')}}
								<image class="lookmore_img" src="@/static/user/rightjt.png" mode=""></image>
							</button>
						</view>
					</u-list-item>
				</u-list>

				<u-loadmore :loading-text="$t('index.tips23')" :loadmore-text="$t('index.tips22')" :nomore-text="$t('index.tips24')" :status="status" />
				<u-modal showCancelButton @cancel="cancel" @confirm="confirm" :show="show" :title="tips"
					:content='modalContent'></u-modal>
			</view>
		</view>
		<view class="default_page" v-else-if="contractList.length==0&&!loadShow">
			<image class="default_page_img" src="@/static/user/defaultPage.png" mode=""></image>
			<view class="default_page_text">{{$t('user.con_detail.i32')}}~</view>
		</view>
		<u-loading-page icon-size="36" :loading="loadShow" :loading-text="load"></u-loading-page>
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
					pageNum: 1, //页数
				}, //请求数据
				loadShow: true, //加载页状态
				contractList: [], //合约列表
				total: 0, //总条数
				status: "", //状态
				show: false, //暂停弹窗
				modalContent: "", //模态框提示语
				id: "", //选择暂停的合约id
				status: "", //选择暂停的合约状态
				tips: this.$t("user.islands.sc.sn.i1"), //温馨提示国际化
				load: this.$t("user.con_detail.i37"), //加載国际化
			};
		},
		onShow() {
			this.getContractList();

		},
		onLoad() {
			const pages = getCurrentPages();
			console.log(pages);
			if (pages.length > 1) {
				uni.setStorageSync('router', pages[0].route);
			}
			console.log(uni.getStorageSync("router"));
		},
		onHide() {
			this.from.pageNum = 1;
			this.contractList = [];
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
					uni.switchTab({
						url: `/${uni.getStorageSync("router")}`
					});
				}
			},

			// 获取合约列表
			getContractList() {
				uni.request({
					url: `/island/contracts/${this.from.pageNum}`,
					method: "GET",
					success: (res) => {
						res.data.rows.map((v) => {
							if(v.status==4){
								v.countdown=(new Date(v.updateTime).getTime()+24*60*60*1000)-new Date().getTime()
							}
							if(v.status==0){
								let setTime = new Date(v.endTime);
								let nowTime = new Date();
								let restSec = setTime.getTime() - nowTime.getTime() + (-480 - nowTime.getTimezoneOffset())*60*1000;
								let count = nowTime.getTime() - new Date(v.createTime).getTime() 
								v.count = restSec
								
								v.day = parseInt(restSec / (60 * 60 * 24 * 1000));
								v.hour = parseInt(restSec / (60 * 60 * 1000) % 24);
								v.minu = parseInt(restSec / (60 * 1000) % 60);
								v.paogress = ((count / (Number(v.payDays) * 24 * 60 * 60 * 1000)) * 100)
									.toFixed(2);
							}else if(v.status==4){
								let setTime = new Date(v.endTime);
								let nowTime = new Date(v.updateTime);
								let restSec = setTime.getTime() - nowTime.getTime() + (-480 - nowTime.getTimezoneOffset())*60*1000;
								let count = nowTime.getTime() - new Date(v.createTime).getTime() 
								v.count = restSec
								
								v.day = parseInt(restSec / (60 * 60 * 24 * 1000));
								v.hour = parseInt(restSec / (60 * 60 * 1000) % 24);
								v.minu = parseInt(restSec / (60 * 1000) % 60);
								v.paogress = ((count / (Number(v.payDays) * 24 * 60 * 60 * 1000)) * 100)
									.toFixed(2);
							}
							
						})
						this.contractList = res.data.rows;

						let time = setTimeout(() => {
							this.loadShow = false;
							clearTimeout(time)

						}, 1500)
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
					this.modalContent = this.$t('user.con_detail.i33')
				} else {
					this.modalContent = this.$t('user.con_detail.i34')
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
				if (this.from.pageNum < Math.ceil((this.total / 10))) {
					this.from.pageNum++;
					uni.request({
						url: `/island/contracts/${this.from.pageNum}`,
						method: "GET",
						success: (res) => {
							res.data.rows.map((v) => {
								let setTime = new Date(v.endTime);
								let nowTime = new Date();
								let restSec = setTime.getTime() - nowTime.getTime();
								let count = nowTime.getTime() - new Date(v.createTime).getTime();
								v.day = parseInt(restSec / (60 * 60 * 24 * 1000));
								v.hour = parseInt(restSec / (60 * 60 * 1000) % 24);
								v.minu = parseInt(restSec / (60 * 1000) % 60);
								v.paogress = ((count / (Number(v.payDays) * 24 * 60 * 60 * 1000)) *
									100).toFixed(2);
							})
							this.contractList.push(...res.data.rows);
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
								title: that.$t('user.con_detail.i35'),
								success: function(res) {
									that.from.page = 1;
									that.getContractList();
								}

							})
						} else {
							uni.showToast({
								title: that.$t('user.con_detail.i36'),
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

					.paogress_line {
						margin-top: 68rpx;
					}

					.paogress_tips {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-top: 10px;

						.time {
							@include flex;
							align-items: center;

							&__item {
								color: #000;
								font-size: 12px;
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