<template>
	<view class="myteam">
		<u-navbar :title="$t('comm.prc1')" @rightClick="capitalFlow" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="" mode=""></image>
			</view>
			<!-- <view class="u-nav-slot" slot="right">
				{{$t("comm.prc2")}}
			</view> -->
		</u-navbar>
		<view class="">
			<view class="pyzsOut">
				<button class="pyzsOut_btn" @click="inviteFriends">{{$t("comm.prc3")}}</button>
				<view class="title">
					<image class="title_img" src="@/static/islands/people_num.png" mode=""></image>
					{{$t("comm.prc4")}}
				</view>
				<view class="content">{{myTeamInfo.sum?myTeamInfo.sum:0}}</view>
				<view class="dy">
					<view class="gx">
						{{$t("comm.prc5")}}
						<text class="gx_text">{{myTeamInfo.contribution}}</text>
					</view>
					<!-- <view class="xh">{{$t("comm.prc6")}}
						<text class="xh_text">0</text>
					</view> -->
				</view>
			</view>
			<u-tabs :list="tabList" keyName="name" current="0" :scrollable="false" @click="tabClick"></u-tabs>
			<view class="dyselect">
				<view class="nd" :class="dyShow==1?'dyactive':''" @click="dyShowBtn(1)">
					{{$t("comm.prc7")}}
					<text class="nd_text">{{myTeamInfo.in}}</text>{{$t("comm.prc25")}}
				</view>
				<view class="wd" :class="dyShow==0?'dyactive':''" @click="dyShowBtn(0)">{{$t("comm.prc8")}}
					<text class="wd_text">{{myTeamInfo.out}}</text>{{$t("comm.prc25")}}
				</view>
			</view>
			<view class="people">
				<view class="people_item">
					<view class=""><text>{{dyShow==1?$t("comm.prc9"):$t("comm.prc10")}}</text></view>
					<view class="num">{{effectivePeople}}{{$t("comm.prc25")}}</view>
				</view>
			</view>
			<view class="tabs">
				<view class="listmain">
					<view class="" v-if="myTeamInfo.data.length>0">
						<view class="list-body" v-for="(v,i) in myTeamInfo.data" :key="i">
							<view class="capital">
								<view class="orderhao">
									<text>{{$t("comm.prc11")}}</text>
									<text class="bluephone">{{v.memberName}}</text>
								</view>
								<view class="orderhao">
									<text>{{$t("comm.prc12")}}</text>
									<text>{{v.nickName}}</text>
								</view>
								<view class="orderhao">
									<text>{{$t("comm.prc13")}}</text>
									<text>{{v.vip==1?"E":v.vip==2?"D":v.vip==3?"C":v.vip==4?"B":v.vip==5?"A":v.vip==6?"S":""}}</text>
								</view>
								<view class="orderhao">
									<text>{{$t("comm.prc14")}}</text>
									<text>{{v.isActive==1?$t("comm.prc15"):$t("comm.prc16")}}</text>
								</view>
								<view class="orderhao">
									<text>{{$t("comm.prc17")}}</text>
									<text>{{v.contractCount}}</text>
								</view>
								<view class="orderhao">
									<text>{{dyShow==1?$t("comm.prc19"):$t("comm.prc20")}}</text>
									<text>{{v.createTime}}</text>
								</view>
							</view>
						</view>
					</view>

					<view class="tips_box" v-else>
						<image class="community_img" src="@/static/user/nofriends.png" mode=""></image>
						<view class="community_text">{{$t("comm.prc18")}}~</view>
						<button class="community_btn" @click="inviteFriends">{{$t("comm.prc3")}}</button>
						<view style="height: 90px;"></view>
					</view>
				</view>
				<view style="height: 300px; width: 100%;"></view>
			</view>
		</view>
		<Footer pageName='community'></Footer>
		<u-modal showCancelButton @confirm="setConfirm" @cancel="show=false" :show="show" :title="tips"
			:content='content'></u-modal>
	</view>
</template>

<script>
	export default {
		components: {
			Footer: () => import('@/components/footer.vue')
		},
		data() {
			return {
				// tabList:[] , //tab标签
				dyShow: 1, //内外岛索引
				recordList: [], //记录
				selectDate: "all", //选择的日期
				myTeamInfo: {
					data: []
				}, //我的岛屿信息
				show: false, //温馨提示模态框
				content: "", //提示框内容
				setIndex: null, //设置索引
				effectivePeople: 0, //有效人数
				tips: this.$t("user.islands.sc.sn.i1"), //温馨提示国际化
				prc1: this.$t("comm.prc1"), //我的岛屿国际化
			};
		},
		computed: {
			tabList() {
				return [{
					name: this.$t("comm.prc21"),
					value: 'all'
				}, {
					name: this.$t("comm.prc22"),
					value: 'today'
				}, {
					name: this.$t("comm.prc23"),
					value: 'week'
				}, {
					name: this.$t("comm.prc24"),
					value: 'month'
				}]
			},
			selectDate() {
				return "all"
			}
		},
		onShow() {
			this.getIslandData();
			// this.getAccountIsComplete()

		},
		methods: {
			// 返回我的岛屿
			goBackUser() {
				uni.navigateTo({
					url: `/pages/user/islands/index`
				});
			},
			// 获取岛屿数据
			getIslandData() {
				uni.request({
					url: `/island/resident/${this.dyShow}/${this.selectDate}`,
					method: "GET",
					success: (res) => {
						this.myTeamInfo = res.data;
						if (this.myTeamInfo.data.length > 0) {
							let num = this.myTeamInfo.data.filter((v) => {
								return v.isActive != 1
							})
							this.effectivePeople = num.length;
						}
					}
				});
			},
			// 我的卡券
			capitalFlow() {
				uni.navigateTo({
					url: `/pages/user/islands/certificate`
				});
			},
			// 标签切换
			tabClick(val) {
				this.selectDate = val.value;
				this.getIslandData()
				console.log(val.value);
			},
			// 切换内外岛
			dyShowBtn(val) {
				this.dyShow = val;
				this.getIslandData()
			},
			// 邀请社区
			inviteFriends() {
				uni.navigateTo({
					url: `/pages/user/islands/identity_judge`
				});
			},

			// 获取用户资料完整度
			getAccountIsComplete() {
				uni.request({
					url: `/member/getAccountIsComplete`,
					method: "GET",
					success: (res) => {
						if (res.code == 200) {
							if (!res.data.withdrawPassword) {
								this.show = true;
								this.setIndex = 2;
								this.content = this.$t("model.tips1")
							} else if (!res.data.question) {
								this.show = true;
								this.setIndex = 1;
								this.content = this.$t("model.tips2")
							} else if (!res.data.nickName) {
								this.show = true;
								this.setIndex = 0;
								this.content = this.$t("model.tips3")
							}
						}
					}
				});
			},
			// 设置完整性判断
			setConfirm() {
				if (this.setIndex == 0) {
					this.show = false;
					uni.navigateTo({
						url: `/pages/user/securitycenter/settingName`
					});
				} else if (this.setIndex == 1) {
					this.show = false;
					uni.navigateTo({
						url: `/pages/user/securitycenter/Confidentiality`
					});
				} else if (this.setIndex == 2) {
					this.show = false;
					uni.navigateTo({
						url: `/pages/user/securitycenter/fundeditpass`
					});
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.myteam {
		width: 100%;
		min-height: 100vh;
		background-color: #FFFFFF;
		padding: 0 21px;
		background-color: #fff;
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

		.pyzsOut {
			box-sizing: border-box;
			margin: 16px 0;
			width: 100%;
			height: 154px;
			background-image: url("@/static/islands/islandsbg1.png");
			background-size: 100% 154px;
			padding: 18px;
			background-repeat: no-repeat;
			color: #fff;
			position: relative;

			.pyzsOut_btn {
				position: absolute;
				top: 20px;
				right: 20px;
				margin-top: 20px;
				width: 92px;
				height: 34px;
				background: #517EFF;
				border-radius: 25px 25px 25px 25px;
				font-size: 12px;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.title {
				font-size: 12px;
				font-weight: 400;
				color: #fff;
				line-height: 18px;

				.title_img {
					width: 16px;
					height: 16px;
					margin-right: 8px;
				}
			}

			.content {
				font-size: 25px;
				font-weight: 900;
				line-height: 29px;
				margin-top: 11px;
			}

			.dy {
				margin-top: 18px;
				display: flex;
				justify-content: space-between;

				.gx {
					.gx_text {
						margin-left: 10px;
						font-weight: 800;
						color: #30aaeb;
					}
				}

				.xh {
					.xh_text {
						margin-left: 10px;
						font-weight: 800;
						color: #30aaeb;
					}
				}
			}
		}

		.dyselect {
			margin: 10px 0;
			width: 100%;
			height: 58px;
			border-radius: 42px;
			background: #f5f6fa;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: space-around;
			transition: all .3s;

			.nd {
				width: 48%;
				text-align: center;

				.nd_text {
					margin: 0 10px;
				}
			}

			.wd {
				width: 48%;
				text-align: center;

				.wd_text {
					margin: 0 10px;
				}
			}

			.dyactive {
				width: 55%;
				height: 48px;
				line-height: 48px;
				border-radius: 42px;
				background: #333;
				color: #fff;
			}
		}

		.people {
			padding: 15px 20px;
			border-radius: 20px;
			background: #f5f6fa;

			.people_item {
				display: flex;
				color: #000;
				justify-content: space-between;

				.num {
					font-weight: 800;
					color: #30aaeb;
				}
			}
		}

		.tabs {
			margin-bottom: 120px;
			

			.listmain {
				margin: 0;
				padding: 16px 0;

				.list-body:last-child {
					padding-bottom: 26px;
				}

				.list-body {
					margin-bottom: 16px;

					.capital {
						padding: 16px 21px;
						border-radius: 21px;
						color: #000;
						background: #f5f6fa;

						.orderhao {
							font-size: 16px;
							color: #000;
							display: flex;
							justify-content: space-between;
							line-height: 2;

							.bluephone {
								color: #2fa2e3;
								letter-spacing: 1px;
							}
						}
					}
				}
			}

			.tips_box {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;


				.community_img {
					width: 138px;
					height: 105px;
				}

				.community_text {
					margin-top: 12px;
					font-size: 15px;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #535353;
				}

				.community_btn {
					margin-top: 20px;
					width: 110px;
					height: 36px;
					background: #517EFF;
					border-radius: 25px 25px 25px 25px;
					font-size: 15px;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
</style>