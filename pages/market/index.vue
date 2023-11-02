<template>
	<view class="market">
		<view class="container_nei">
			<view class="navbers">
				<view class="navbers_headers">
					<view class="mailright">
						<image class="mailright_img" src="@/static/user/small_bell.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="main">
				<u-navbar :fixed="false" height="53px" :safeAreaInsetTop="false">
					<view class="u-nav-slot" slot="left">
						<image class="head_back_img" src="@/static/market/marketlogo.png" mode=""></image>
					</view>
				</u-navbar>
				<view class="justcard">
					<view class="justcard_left">
						<view class="blancetext">
							可用余额<image class="homecs" @click="lockBtn" :src="eyeShow?'../../static/market/lock.png':'../../static/market/nolock.png'" mode=""></image>
						</view>
						<view class="blancenum">
							<u--text mode="name" text="481.96" :format="eyeShow?'encrypt':''"></u--text><text class="blancenum_text">USDT</text>
						</view>
					</view>
					<view class="justcard_right">
						<button class="justcard_right_btn" @click="activCode">
							<view class="justcard_icon">
								<image class="justcard_icon_img" src="@/static/market/code.png" mode=""></image>
							</view>
							<view class="justcard_text">激活码</view>
						</button>
						<button class="justcard_right_btn" @click="viewContract">
							<view class="justcard_icon">
								<image class="justcard_icon_img" src="@/static/market/marketheyue.png" mode=""></image>
							</view>
							<view class="justcard_text">我的合约</view>
						</button>
					</view>
				</view>
				<view class="marketeverytitle">AI智能+量化交易</view>
				<view class="modellist">
					<view class="modellist_every" @click="createContract">
						<view class="modeltop">
							<image class="modeltop_img" src="../../static/user/up.png" mode=""></image>
							<view class="titles">证券</view>
						</view>
						<view class="intro">
							22天工作日交易
							<br>
							高精度毫秒级数据
							<br>
							多维度行情监测
							<br>
							冰山委托大引擎
						</view>
						<button class="creatmodel">创建合约</button>
					</view>
					<view class="modellist_every" @click="createContract">
						<view class="modeltop">
							<image class="modeltop_img" src="../../static/user/up.png" mode=""></image>
							<view class="titles">加密货币</view>
						</view>
						<view class="intro">
							7*24小时智能交易
							<br>
							高精度毫秒级数据
							<br>
							多维度行情监测
							<br>
							灯塔风控决策
						</view>
						<button class="creatmodel">创建合约</button>
					</view>
				</view>
				<view class="widgtthree">
					<view class="newwidgtthree">
						<view class="shouyilv">实时累计收益率:</view>
						<view class="redbfb">525.43% <image class="redbfb_img" src="@/static/market/marketqushi.png">
							</image>
						</view>
					</view>
					<view class="flexcenter">
						<view class="pages">
							<view class="box">
								<view class="title">
									<view class="">
										<view class="fir">INDIW</view>
										<view class="sub">US100 CFD</view>
									</view>
									<view class="title_right">
										<text class="red">+221.71&nbsp;&nbsp;&nbsp;+0.67%</text>
									</view>
								</view>
								<qiun-data-charts type="line" :opts="opts" :chartData="chartData" />
							</view>
						</view>
					</view>
				</view>
				<view class="marketeverytitle">
					<image class="marketeverytitle" src="@/static/market/marketexgpt.png" mode=""></image>行情监测
				</view>
				<view class="widgttwo">
					<view class="flexcenter">
						<view class="pages">
							<view class="fivetabs">
								<view class="ftabs_item" :class="i==ftabsIndex?'factive':''" @click="ftabsBtn(i)"
									v-for="(v,i) in ftabsList" :key="i">{{v.name}}</view>
							</view>
							<qiun-data-charts height="240px" type="line" :opts="opts" :chartData="chartData" />
							<view class="tabs">
								<view class="tabs_item" :class="i==tabsIndex?'active':''" @click="tabsBtn(i)"
									v-for="(v,i) in tabsList" :key="i">{{v.name}}</view>
							</view>
							<view class="listdata">
								<view class="listdata_item" :class="i==listIndex?'listdataactive':''" @click="listBtn(i)" v-for="(v,i) in listData" :key="i" >
									<view class="first">{{v.title}}</view>
									<view class="end">
										<text class="end_top">{{v.num}}</text>
										<text class="red">{{v.percentage}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<Footer pageName='market'></Footer>
	</view>
</template>


<script>
	export default {
		components: {
			Footer: () => import('@/components/footer.vue')
		},
		data() {
			return {
				chartData: {},
				opts: {
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [15, 10, 0, 15],
					enableScroll: false,
					legend: {
						show: false,
						position: "top"
					},
					xAxis: {
						disableGrid: true,
						disabled: true,
						axisLine: false,
						titleOffsetY: -100
					},
					yAxis: {
						gridType: "dash",
						dashLength: 2,
						splitNumber: 20,
						disabled: true,
						disableGrid: true,
						data: [{
							max: 50
						}]
					},
					extra: {
						line: {
							type: "straight",
							width: 2,
							activeType: "hollow"
						}
					}
				},
				ftabsList: [{
						name: "Cryptocurrency"
					},
					{
						name: "Futeres"
					},
					{
						name: "Bonds"
					},
					{
						name: "Forex"
					},
				],
				ftabsIndex: 0,
				tabsIndex: 0,
				listIndex:0,
				tabsList: [{
						name: "1D"
					},
					{
						name: "5D"
					},
					{
						name: "1M"
					},
					{
						name: "3M"
					},
					{
						name: "3M"
					},
					{
						name: "6M"
					},
					{
						name: "1Y"
					},
					{
						name: "ALL"
					},
				],
				listData:[
					{
						title:"DJIA",
						num:"33274.58",
						percentage:"221.71 0.67%"
					},
					{
						title:"S＆P500",
						num:"4237.86",
						percentage:"44.06 1.05%"
					},
					{
						title:"DJIA",
						num:"33274.58",
						percentage:"221.71 0.67%"
					},{
						title:"DJIA",
						num:"33274.58",
						percentage:"221.71 0.67%"
					},{
						title:"DJIA",
						num:"33274.58",
						percentage:"221.71 0.67%"
					},
				],
				eyeShow:false,//隐藏
				
			}
		},
		onReady() {
			this.getServerData();
		},
		created() {},
		methods: {
			getServerData() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
					let res = {
						categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
						series: [{
							name: "成交量A",
							data: [10, 8, 10, 10, 4, 10]
						}, ]
					};
					this.chartData = JSON.parse(JSON.stringify(res));
				}, 500);
			},
			ftabsBtn(i) {
				this.ftabsIndex = i
			},
			tabsBtn(i) {
				this.tabsIndex = i
			},
			listBtn(i) {
				this.listIndex = i
			},
			// 隐藏
			lockBtn(){
				this.eyeShow=!this.eyeShow
			},
			// 激活码
			activCode(){
				uni.navigateTo({
					url: `/pages/market/activationcode`
				});
			},
			// 查看合约金额
			viewContract() {
				uni.navigateTo({
					url: `/pages/user/contract_amount`
				});
			},
			// 创建合约
			createContract(){
				uni.navigateTo({
					url: `/pages/market/startcreat`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/uni_modules/uview-ui/index.scss";

	.market {
		width: 100% !important;

		.container_nei {
			padding: 0 21px;
			min-height: 100vh;
			background-color: #fff;

			.navbers {
				display: flex;
				justify-content: flex-end;
				position: absolute;
				right: 21px;
				top: 16px;
				z-index: 99;
				width: 37px;
				height: 37px;

				.navbers_headers {
					background: #333;
					border-radius: 21px;

					.mailright {
						width: 37px;
						height: 37px;
						position: relative;
						display: flex;
						align-items: center;
						justify-content: center;

						.mailright_img {
							width: 16px;
							height: 16px;
						}
					}
				}
			}

			.main {
				.u-navbar {
					height: 53px;

					.u-navbar__content {
						height: 53px !important;

						.u-navbar__content__left {
							padding-left: 18px;

							.u-nav-slot {
								width: 96px;
								height: 32px;
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

				.justcard {
					padding: 16px 19px;
					height: 101px;
					background-image: url("@/static/market/markettopcard.png");
					background-size: cover;
					background-position: 50%;
					background-repeat: no-repeat;
					border-radius: 21px;
					margin-top: 21px;
					display: flex !important;
					justify-content: space-between;
					align-items: center;

					.justcard_left {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						height: 100%;

						.blancetext {
							font-weight: 500;
							color: #1b1b1b;
							font-size: 20px;
							display: flex;
							align-items: center;
							letter-spacing: 1px;
							margin-top: 16px;

							.homecs {
								width: 21px;
								height: 17px;
								margin: 0 5px;
							}
						}

						.blancenum {
							font-size: 24px;
							font-weight: 600;
							color: #000;
							display: flex;
							align-items: center;
							justify-content: center;
							margin-bottom: 16px;

							.blancenum_text {
								font-size: 17px;
								margin-left: 5px;
							}
						}
					}

					.justcard_right {
						display: flex;
						flex-direction: column;

						.justcard_right_btn {
							height: 37px;
							display: flex !important;
							align-items: center;
							width: -webkit-max-content;
							width: max-content;
							justify-content: center;
							padding: 4px 16px;
							width: 112px;
							margin-bottom: 5px;
							background: #333;
							border-radius: 26px;
							margin-right: 0;

							.justcard_icon {
								width: 21px;
								height: 21px;
								display: flex;

								.justcard_icon_img {
									width: 21px;
									height: 21px;
								}
							}

							.justcard_text {
								color: #fff;
								font-size: 12px;
								line-height: 1;
							}
						}
					}
				}

				.marketeverytitle {
					color: #000;
					font-size: 21px;
					margin-top: 26px;
					margin-bottom: 16px;
					font-weight: 600;
					display: flex;
					align-items: center;
				}

				.modellist {
					display: flex;
					justify-content: space-between;
					align-items: stretch;

					.modellist_every {
						background-image: url("@/static/market/marketusdtbg.png");
						background-size: cover;
						background-position: 50%;
						background-repeat: no-repeat;
						padding: 32px 16px;
						border-radius: 16px;
						width: 40%;

						.modeltop {
							display: flex;
							align-items: center;
							border: 1px solid #fff;
							padding: 5px;
							border-radius: 26px;

							.modeltop_img {
								width: 21px;
								height: 21px;
							}

							.titles {
								color: #fff;
								font-size: 16px;
								font-weight: 700;
								margin-left: 10px;
							}
						}

						.intro {
							margin-top: 10px;
							color: hsla(0, 0%, 100%, .7);
							font-size: 13px;
							line-height: 1.6;
							margin-top: 16px;
						}

						.creatmodel {
							width: 100%;
							height: 37px;
							display: flex !important;
							align-items: center;
							justify-content: center;
							padding: 4px 0;
							background: #fff;
							border-radius: 56px;
							margin-right: 0;
							margin-top: 16px;
						}
					}
				}

				.widgtthree {
					padding-top: 10px;
					border-radius: 26px;
					background: #fff;
					padding-bottom: 8px;
					margin-top: 32px;

					.newwidgtthree {
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 21px;
						border-radius: 21px;
						margin: 0;
						background: #eceef3;

						.shouyilv {
							color: rgba(51, 51, 51, .6);
						}

						.redbfb {
							color: #e85858;
							font-size: 19px;
							font-weight: 600;
							display: flex;
							align-items: center;

							.redbfb_img {
								width: 21px;
								height: 21px;
								margin-left: 10px;
							}
						}
					}

					.flexcenter {
						display: flex;
						justify-content: center;
						align-items: center;
						height: 160px;

						.pages {
							position: relative;
							box-sizing: border-box;
							width: 100%;
							height: 160px;

							.box {
								width: 100%;
								height: 100%;
								box-sizing: border-box;

								background: #fff;
								padding-bottom: 16px;
								box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .2);
								border-radius: 21px;
								margin: 16px auto 0;

								.title {
									position: absolute;
									top: 12%;
									left: 5px;
									padding-left: 37px;
									font-size: 10px;
									display: flex;
									align-items: center;

									.fir {
										font-weight: 800;
										font-size: 19px;
									}

									.sub {
										color: #ccc;
									}

									.title_right {
										margin-left: 26px;

										.red {
											color: red;
											font-size: 19px;
											font-weight: 700;
										}
									}
								}
							}
						}
					}
				}

				.marketeverytitle {
					color: #000;
					font-size: 21px;
					margin-top: 26px;
					font-weight: 600;
					display: flex;
					align-items: center;

					.marketeverytitle {
						width: 74px;
						height: 19px;
						margin-right: 5px;
					}
				}

				.widgttwo {
					width: 100%;
					margin: 0 auto;
					background: #fff;
					border-radius: 21px;
					padding-bottom: 16px;

					.flexcenter {
						display: flex;
						justify-content: center;
						align-items: center;

						.pages {
							position: relative;
							box-sizing: border-box;
							min-width: 100vw;
							height: 16;
							z-index: 1;

							.fivetabs {
								padding-left: 42px;
								display: flex;
								font-size: 10px;
								color: #ccc;
								position: absolute;
								top: 26px;
								z-index: 99;

								.ftabs_item {
									margin-right: 16px;
								}

								.factive {
									transition: all .3s;
									background-color: #f0f3fa;
									border-radius: 5px;
									color: #333;
									font-weight: 800;
									padding: 2px 5px;
								}
							}

							.tabs {
								display: flex;
								justify-content: space-around;
								font-size: 10px;
								color: #ccc;

								.tabs_item {
									text-align: center;
								}

								.active {
									transition: all .3s;
									background-color: #f0f3fa;
									border-radius: 5px;
									color: #333;
									font-weight: 800;
									padding: 2px 5px;
								}
							}

							.listdata {
								height: 266px;
								margin-top: 10px;
								padding: 0 18px;

								.listdata_item {
									padding: 0 10px;
									display: flex;
									justify-content: space-between;
									align-items: center;
									border-bottom: 1px solid #f5f5f5;
									height: 53px;

									.first {
										font-size: 16px;
										color: #333;
									}

									.end {
										font-size: 10px;
										color: #ccc;
										display: flex;
										flex-direction: column;
										align-items: flex-end;
										justify-content: space-between;
										.end_top{
											font-size: 16px;
											    color: #333;
										}
										.red{
											color: red;
										}
									}
								}
								.listdataactive{
									background-color: #e5ecff;
									    transition: all .3s;
									    border-radius: 5px;
								}
							}
						}
					}
				}
			}
		}
	}
</style>