<template>
	<view class="myteam">
		<u-navbar @leftClick="goBackUser" title="我的岛屿" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="">
			<view class="pyzsOut">
				<view class="title">
					<image class="title_img" src="@/static/islands/people_num.png" mode=""></image>
					岛民总数
				</view>
				<view class="content">3</view>
				<view class="dy">
					<view class="gx">
						岛屿贡献值
						<text class="gx_text">0</text>
					</view>
					<view class="xh">岛屿消耗
						<text class="xh_text">0</text>
					</view>
				</view>
			</view>
			<u-tabs :list="tabList" keyName="name" :scrollable="false" @click="tabClick"></u-tabs>
			<view class="dyselect">
				<view class="nd" :class="dyShow==1?'dyactive':''" @click="dyShowBtn(1)">
					内岛
					<text class="nd_text">{{myTeamInfo.in}}</text>人
				</view>
				<view class="wd" :class="dyShow==0?'dyactive':''" @click="dyShowBtn(0)">外岛
					<text class="wd_text">{{myTeamInfo.out}}</text>人
				</view>
			</view>
			<view class="people">
				<view class="people_item">
					<view class=""><text>{{dyShow==1?'内':'外'}}岛有效人数</text></view>
					<view class="num">0人</view>
				</view>
			</view>
			<view class="tabs">
				<view class="listmain">
					<view class="" v-if="myTeamInfo.data.length>0">
						<view class="list-body" v-for="(v,i) in myTeamInfo.data" :key="i">
							<view class="capital">
								<view class="orderhao">
									<text>账号</text>
									<text class="bluephone">{{v.memberName}}</text>
								</view>
								<view class="orderhao">
									<text>昵称</text>
									<text>{{v.nickName}}</text>
								</view>
								<view class="orderhao">
									<text>等级名称</text>
									<text>{{v.vip}}</text>
								</view>
								<view class="orderhao">
									<text>激活状态</text>
									<text>{{v.isActive==1?"未激活":"已激活"}}</text>
								</view>
								<view class="orderhao">
									<text>合约份数</text>
									<text>0</text>
								</view>
								<view class="orderhao">
									<text>{{dyShow==1?'邀请':'注册'}}时间</text>
									<text>2023-10-26 10:27:29</text>
								</view>
							</view>
						</view>
					</view>
					<view v-else>
					<u-empty text="暂无内容" mode="history" icon="http://cdn.uviewui.com/uview/empty/history.png">
					</u-empty>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
					name: '全部',
					value:'all'
				}, {
					name: '今日',
					value:'today'
				}, {
					name: '本周',
					value:'week'
				}, {
					name: '本月',
					value:'month'
				}], //tab标签
				dyShow: 1, //内外岛索引
				recordList:[],//记录
				selectDate:"all",//选择的日期
				myTeamInfo:{
					data:[]
				},//我的岛屿信息
			};
		},
		onShow() {
			this.getIslandData()
		},
		methods: {
			// 返回我的岛屿
			goBackUser() {
				uni.navigateTo({
					url: `/pages/user/islands/index`
				});
			},
			// 获取岛屿数据
			getIslandData(){
				uni.request({
					url: `/island/resident/${this.dyShow}/${this.selectDate}`,
					method: "GET",
					success: (res) => {
						this.myTeamInfo=res.data;
					}
				});
			},
			// 标签切换
			tabClick(val) {
				this.selectDate=val.value;
				this.getIslandData()
				console.log(val.value);
			},
			// 切换内外岛
			dyShowBtn(val) {
				this.dyShow = val;
				this.getIslandData()
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.myteam {
		width: 100%;
		height: 100vh;
		overflow: hidden;
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
			background-image: url("@/static/islands/islandsbg.png");
			background-size: 100% 154px;
			padding: 18px;
			background-repeat: no-repeat;
			color: #fff;

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
		}
	}
</style>