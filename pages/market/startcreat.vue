<template>
	<view class="startcreat">
		<u-navbar :fixed="false" @leftClick="goBackUser" title="创建合约" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main">
			<view class="mymodelmain">
				<view class="touming">
					<view class="chuangjian_top" v-if="pageData.dictSort">
						<view class="left">
							<image class="left_img"
								:src="pageData.dictSort==1?'../../static/user/up.png':'../../static/user/encryption.png'"
								mode=""></image>
							<view class="in">{{pageData.dictSort==1?'证券':'加密货币'}}</view>
						</view>
						<view class="right">
							<view class="right_first">{{pageData.dictValue}}</view>
							<view class="right_last">平均日收益率</view>
						</view>
					</view>
					<view v-else class="yuecardskeleton">
						<u-skeleton :title="false" :rows="1" loading rowsWidth="100%"></u-skeleton>
					</view>
					<view class="jiaoyimubiao">
						<text>交易目标</text>
						<text class="jiaoyimubiao_text">{{pageData.cssClass}}</text>
					</view>
					<view class="tuoguan">托管金额</view>
					<view class="transactionList">
						<view class="every" @click="selectCopies(1)" :class="from.payNum==1?'everyactive':''">1份
						</view>
						<view class="every" @click="selectCopies(10)" :class="from.payNum==10?'everyactive':''">10份
						</view>
						<view class="every" @click="selectCopies(100)" :class="from.payNum==100?'everyactive':''">
							100份</view>
						<view class="every" @click="selectCopies(500)" :class="from.payNum==500?'everyactive':''">
							500份</view>
						<view class="mairu">
							<input class="uni-input" v-model="from.payNum"
								placeholder-style="color:rgb(192, 196, 204)" @input="customAmount" type="number"
								placeholder="自定义买入份额" />
						</view>
					</view>
					<view class="meifen">每份等于{{pageData.remark}}美元</view>
				</view>
				<view class="yujimain" v-if="pageData.dictSort">
					<view class="buymoney">
						<view class="">买入金额</view>
						<text class="buymoney_num">{{from.payHongbao}} 美元</text>
					</view>
					<view class="buymoney">
						<view class="">当前余额最大可购买份数</view>
						<text class="buymoney_text">{{Number(balanceMax)/Number(pageData.remark)}}份</text>
					</view>
					<view class="buymoney">
						<view class="">当前等级最大可购买份数</view>
						<text class="buymoney_text">{{gradeMax}}份</text>
					</view>
				</view>
				<view v-else class="yuecardskeletons">
					<u-skeleton :title="false" :rows="1" loading rowsWidth="100%"></u-skeleton>
				</view>
			</view>
			<u-row customStyle="margin-bottom: 10px">
				<u-col span="4">
					<view class="bg-purple-light">合约运行天数</view>
				</u-col>
				<u-col span="4">
					<view class="bg-purple-light">信用等级要求</view>
				</u-col>
				<u-col span="4">
					<view class="bg-purple-light">最大日收益</view>
				</u-col>
			</u-row>
			<u-row customStyle="margin-bottom: 10px" v-for="(v,i) in revenueList" :key="i"
				@click="selectDays(v.id,v.vip,v.days,v.bili)">
				<u-col span="4">
					<view class="bg-purple purple_first" :class="v.days==from.payDays?'active':''">{{v.days}}</view>
				</u-col>
				<u-col span="4">
					<view class="bg-purple" :class="v.days==from.payDays?'active':''">{{v.vip}}</view>
				</u-col>
				<u-col span="4">
					<view class="bg-purple purple_last" :class="v.days==from.payDays?'active':''">{{Number(v.bili)*100}}%
					</view>
				</u-col>
			</u-row>

		</view>
		<view class="createbtn">
			<button class="chuangjian" @click="createContract">创建合约</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from: {
					payNum: 1,//购买分数
					payDays: "",//购买天数
					bili:"",//每天收益
					type:null,//购买类型
					payHongbao:"",//购买红包数量
				},

				revenueList: [], //每日收益显示
				userVip: "", //用户等级
				pageData: {}, //页面展示数据
				balanceMax:"",//余额最大购买份数
				gradeMax:"",//等级最大购买份数
			};
		},
		onLoad(option) {
			this.from.type=option.type;
			this.getDayRevenue(option.type)
		},
		methods: {
			// 获取每日收益
			getDayRevenue(val) {
				uni.request({
					url: `/island/benefit/${val}`,
					method: "GET",
					success: (res) => {
						this.revenueList = res.data.list;
						this.userVip = res.data.uvip;
						this.pageData=res.data.info;
						this.balanceMax=res.data.hongbao;
						this.gradeMax=res.data.max;
						this.from.payDays = res.data.list[0].days;
						this.from.bili = res.data.list[0].bili;
						this.from.payHongbao=Number(this.from.payNum)*Number(this.pageData.remark);
					}
				});
			},
			// 返回
			goBackUser() {
				uni.switchTab({
					url: `/pages/market/index`
				});
			},
			// 自定义份数
			customAmount(val) {
				this.from.payNum = val.detail.value;
				this.from.payHongbao=Number(val.detail.value)*Number(this.pageData.remark)
			},
			// 选择份数
			selectCopies(val) {
				this.from.payNum = val;
				this.from.payHongbao=Number(val)*Number(this.pageData.remark)
			},
			// 选择天数
			selectDays(id, vip,days,bili) {
				if (this.userVip >= vip) {
					this.from.payDays = days;
					this.from.bili = bili;
				} else {
					uni.$u.toast('您的等级不足！');
				}
			},
			// 创建合约
			createContract(){
				console.log(this.from);
				if(this.from.payNum==""){
					uni.$u.toast('请输入买入份额');
					return
				}else if(this.from.payNum>(Number(this.balanceMax)/Number(this.pageData.remark))){
					uni.$u.toast(`当前余额最大可购买份数${Number(this.balanceMax)/Number(this.pageData.remark)}份`);
					return
				}else if(this.from.payNum>this.gradeMax){
					uni.$u.toast(`当前等级最大可购买份数${this.gradeMax}份`);
					return
				}else if(this.from.payDays==""){
					uni.$u.toast(`请选择需要购买的合约运行天数`);
					return
				}else{
					uni.request({
						url: '/island/contract',
						method: "POST",
						data: this.from,
						success: (res) => {
							uni.showToast({
								title: "购买成功",
								success: function() {
									 let time=setTimeout(()=>{
										 clearTimeout(time)
										 console.log(res);
										uni.navigateTo({
											url: `/pages/user/contract_amount`
										});
									},1000)
								},
							})
							
						}
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.startcreat {
		min-width: 100vw;
		min-height: 100vh;
		box-sizing: border-box;
		background-color: #fff;
		padding: 0 21px;

		.u-navbar {
			height: 53px;

			.u-navbar__content {
				height: 53px !important;

				.u-navbar__content__left {
					padding-left: 0;

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
					font-weight: 700;
					font-size: 17px;
				}
			}
		}

		.main {
			position: relative;
			padding-bottom: 76px;
			padding-top: 10px;
			width: 100%;
			transition: all .3s;

			.mymodelmain {
				margin-bottom: 26px;

				.touming {
					background: #fff;
					padding: 21px;
					border-radius: 26px;

					.chuangjian_top {
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 16px;
						background: #111;
						color: #fff;
						border-radius: 21px;

						.left {
							display: flex;
							align-items: center;
							margin-right: 16px;

							.left_img {
								width: 26px;
								height: 26px;
								margin-right: 16px;
								border-radius: 50%;
								background-color: #fff;
							}

							.in {
								width: calc(100% - 42px);
							}
						}

						.right {
							.right_first {
								color: #fff;
								font-size: 21px;
								font-weight: 600;
								text-align: right;
							}

							.right_last {
								font-size: 10px;
								color: hsla(0, 0%, 100%, .6);
							}
						}
					}

					.yuecardskeleton {
						height: 80px;
						width: 100%;
						border-radius: 21px;

						.u-skeleton__wrapper__content__rows {
							width: 100% !important;
							height: 80px !important;
							margin-top: 0px !important;
							border-radius: 21px;
						}
					}

					.jiaoyimubiao {
						display: flex;
						align-items: center;
						margin-top: 16px;
						justify-content: flex-end;

						.jiaoyimubiao_text {
							font-weight: 600;
							margin-left: 5px;
							color: #2fa2e3;
						}
					}

					.tuoguan {
						font-weight: 300;
						font-size: 17px;
						margin-top: 16px;
					}

					.transactionList {
						display: flex;
						align-items: center;
						flex-wrap: wrap;
						justify-content: space-between;
						margin-top: 16px;

						.every {
							width: 31%;
							padding: 16px 0;
							text-align: center;
							background: #f5f6fa;
							border-radius: 21px;
							margin-bottom: 12px;
							font-weight: 300;
							font-size: 17px;
						}

						.mairu {
							width: 65%;
							margin-bottom: 12px;

							.uni-input {
								background: #f5f6fa;
								height: 53px;
								line-height: 53px;
								border-radius: 16px;

								.uni-input-wrapper {
									font-size: 17px !important;
									text-align: center;
								}
							}
						}

						.everyactive {
							background: #333;
							color: #fff;
							font-weight: 500;
							transition-duration: .3s;
							transition-timing-function: ease-in-out;
						}
					}

					.meifen {
						font-weight: 300;
						font-size: 14px;
						text-align: right;
						color: #999;
					}
				}

				.yujimain {
					margin-top: 26px;
					padding: 16px;
					border: 1px solid rgba(51, 51, 51, .2);
					border-radius: 26px;

					.buymoney {
						color: rgba(51, 51, 51, .6);
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 16px;
						max-width: 100%;

						.buymoney_num {
							color: #2fa2e3;
							font-weight: 600;
							font-size: 16px;
							margin-left: 10px;
						}

						.buymoney_text {
							color: #111;
							margin-left: 10px;
						}
					}
				}

				.yuecardskeletons {
					height: 170px;
					width: 100%;
					border-radius: 21px;
					margin-top: 26px;

					.u-skeleton__wrapper__content__rows {
						width: 100% !important;
						height: 170px !important;
						margin-top: 0px !important;
						border-radius: 21px;
					}
				}
			}

			.bg-purple-light {
				text-align: center;
				font-weight: bold;
				color: #000;
			}

			.bg-purple {
				text-align: center;
				font-size: 14px;
				height: 40px;
				color: #606266;
				line-height: 40px;
				border-bottom: 1px solid #f5f5f5 !important;
			}

			.purple_first {
				border-top-left-radius: 20px;
				border-bottom-left-radius: 20px;
			}

			.purple_last {
				border-top-right-radius: 20px;
				border-bottom-right-radius: 20px;
			}

			.active {
				background-color: #606266;
				color: #fff;
			}
		}

		.createbtn {
			width: calc(100% - 40px);
			position: fixed;
			bottom: 25px;

			.chuangjian {
				background: #333;
				height: 50px;
				line-height: 50px;
				color: #fff;
				letter-spacing: 1px;
				border-radius: 53px;

			}
		}
	}
</style>