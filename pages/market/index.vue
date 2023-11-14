<template>
	<view class="market">
		<view class="container_nei">
			<view class="navbers">
				<view class="navbers_headers">
					<view class="mailright" @click="viewNotices">
						<u-badge :offset="[2, -4]" :absolute="true" v-if="$store.getters.unr>0" :isDot="true"
							type="error"></u-badge>
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
							{{$t('ac.avb')}}
							<image class="homecs" @click="lockBtn"
								:src="eyeShow?'../../static/market/lock.png':'../../static/market/nolock.png'" mode="">
							</image>
						</view>
						<view class="blancenum">
							<text v-if="eyeShow">{{accountBalance}}</text><text v-else>******</text><text
								class="blancenum_text">{{$t('ac.hongbao')}}</text>
						</view>
					</view>
					<view class="justcard_right">
						<button class="justcard_right_btn" @click="activCode">
							<view class="justcard_icon">
								<image class="justcard_icon_img" src="@/static/market/code.png" mode=""></image>
							</view>
							<view class="justcard_text">{{$t('ac.actc')}}</view>
						</button>
						<button class="justcard_right_btn" @click="viewContract">
							<view class="justcard_icon">
								<image class="justcard_icon_img" src="@/static/market/marketheyue.png" mode=""></image>
							</view>
							<view class="justcard_text">{{$t('ac.myac')}}</view>
						</button>
					</view>
				</view>
				<view class="marketeverytitles">AI{{$t('ac.int')}}+{{$t('ac.lht')}}</view>
				<view class="modellist">
					<view class="modellist_every" @click="createContract(1)">
						<view class="modeltop">
							<image class="modeltop_img" src="../../static/user/up.png" mode=""></image>
							<view class="titles">{{$t('ac.share')}}</view>
						</view>
						<view class="intro">
							{{$t('ac.s1')}}
							<br>
							{{$t('ac.s2')}}
							<br>
							{{$t('ac.s3')}}
							<br>
							{{$t('ac.s4')}}
						</view>
						<button class="creatmodel">{{$t('ac.cac')}}</button>
					</view>
					<view class="modellist_every" @click="createContract(2)">
						<view class="modeltop">
							<image class="modeltop_img" src="../../static/user/encryption.png" mode=""></image>
							<view class="titles">{{$t('ac.crypt')}}</view>
						</view>
						<view class="intro">
							{{$t('ac.c1')}}
							<br>
							{{$t('ac.c2')}}
							<br>
							{{$t('ac.c3')}}
							<br>
							{{$t('ac.c4')}}
						</view>
						<button class="creatmodel">{{$t('ac.cac')}}</button>
					</view>
				</view>
				<view class="widgtthree">
					<view class="newwidgtthree">
						<view class="shouyilv">{{$t('ac.pic1')}}:</view>
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
								<qiun-data-charts type="line" :opts="opts" :chartData="chartDatas" />
							</view>
						</view>
					</view>
				</view>
				<view class="marketeverytitle">
					<image class="marketeverytitle_img" src="@/static/market/marketexgpt.png" mode=""></image>
					{{$t('ac.pic2')}}
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
								<view class="tabs_item" :class="i==tabsIndex?'active':''" @click="tabsBtn(v.type,i)"
									v-for="(v,i) in tabsList" :key="i">{{v.name}}</view>
							</view>
							<view class="listdata">
								<view class="listdata_item" :class="i==listIndex?'listdataactive':''"
									@click="listBtn(v.pairs,i)" v-for="(v,i) in listData" :key="i">
									<view class="first">{{v.pairs}}</view>
									<view class="end">
										<text class="end_top">{{v.bid}}</text>
										<text class="red">{{v.ask}} {{v.change24h}}%</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<Footer pageName='market'></Footer>
		<u-modal showCancelButton @confirm="setConfirm" @cancel="show=false" :show="show" :title="tips"
			:content='content'></u-modal>
	</view>
</template>


<script>
	import dayjs from 'dayjs'
	export default {
		components: {
			Footer: () => import('@/components/footer.vue')
		},
		data() {
			return {
				chartData: {},
				chartDatas: {},
				opts: {
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [15, 10, 0, 15],
					enableScroll: false,
					// dataLabel:false,
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
						disabled: true,
						disableGrid: true,

					},
					extra: {
						line: {
							type: "curve",
							width: 2,
							activeType: "hollow",
							linearType: "custom",
							onShadow: true,
							animation: "horizontal"
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
				listIndex: 0,
				tabsList: [{
						name: "1W",
						type:1
					},
					{
						name: "2W",
						type:2
					},
					{
						name: "3W",
						type:3
					},
					{
						name: "4W",
						type:4
					},
				],
				listData: [],
				eyeShow: false, //隐藏
				accountBalance: "", //红包余额
				show: false, //温馨提示模态框
				content: "", //提示框内容
				setIndex: null, //设置索引
				timeType:1,//时间
				currencyName:"",//货币名称
				tips:this.$t("user.islands.sc.sn.i1"),//温馨提示国际化
			}
		},
		onReady() {
			this.getAccount();
		},
		onShow() {
			this.$store.dispatch('app/getUnread')
			this.getAccountIsComplete();
			this.getListData()
		},
		created() {},
		methods: {
			getServerData() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接

				}, 500);
			},
			// 获取列表数据
			getListData() {
				uni.request({
					url: `/aicommon/getMarket`,
					method: "GET",
					success: (res) => {
						this.listData = res.data;
						this.currencyName=res.data[0].pairs;
						uni.request({
							url: `https://tokenlon-core-market.tokenlon.im/rest/get_ticker_history?pairs=${res.data[0].pairs}&beginTimestamp=${new Date(dayjs().startOf('date').subtract(1,'week')).getTime()/1000}&endTimestamp=${new Date(dayjs().startOf('date')).getTime()/1000}`,
							method: "GET",
							filter: false,
							success: (res1) => {
								let parmas = {
									categories: [],
									series: []
								}
								let arr = []
								res1.data.data.map((v) => {
									parmas.categories.push(v.date)
									arr.push(v.last.toFixed(2))
								})
								parmas.series = [{
									name: res.data[0].pairs,
									data: arr,
									linearColor: [
										[
											0,
											"#1890FF"
										],
										[
											0.25,
											"#00B5FF"
										],
										[
											0.5,
											"#00D1ED"
										],
										[
											0.75,
											"#00E6BB"
										],
										[
											1,
											"#90F489"
										]
									],
									setShadow: [
										3,
										8,
										10,
										"#1890FF"
									],
								}]
								this.chartData = JSON.parse(JSON.stringify(parmas));
								// 	let res = {
								// 		categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
								// 		series: [{
								// 			name: "成交量A",
								// 			data: [10, 8, 10, 10, 4, 10]
								// 		}, ]
								// 	};
								// 	this.chartData = JSON.parse(JSON.stringify(res));
							}
						});
						uni.request({
							url: `https://tokenlon-core-market.tokenlon.im/rest/get_ticker_history?pairs=${res.data[0].pairs}&beginTimestamp=${new Date(dayjs().startOf('date').subtract(3,'week')).getTime()/1000}&endTimestamp=${new Date(dayjs().startOf('date')).getTime()/1000}`,
							method: "GET",
							filter: false,
							success: (res1) => {
								let parmas = {
									categories: [],
									series: []
								}
								let arr = []
								res1.data.data.map((v) => {
									parmas.categories.push(v.date)
									arr.push(v.last.toFixed(2))
								})
								parmas.series = [{
									name: res.data[0].pairs,
									data: arr,
									linearColor: [
										[
											0,
											"#1890FF"
										],
										[
											0.25,
											"#00B5FF"
										],
										[
											0.5,
											"#00D1ED"
										],
										[
											0.75,
											"#00E6BB"
										],
										[
											1,
											"#90F489"
										]
									],
									setShadow: [
										3,
										8,
										10,
										"#1890FF"
									],
								}]
								this.chartDatas = JSON.parse(JSON.stringify(parmas));
							}
						});
					}
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
			ftabsBtn(i) {
				this.ftabsIndex = i
			},
			tabsBtn(type,i) {
				this.tabsIndex = i;
				this.timeType=type;
				uni.request({
					url: `https://tokenlon-core-market.tokenlon.im/rest/get_ticker_history?pairs=${this.currencyName}&beginTimestamp=${new Date(dayjs().startOf('date').subtract(type,'week')).getTime()/1000}&endTimestamp=${new Date(dayjs().startOf('date')).getTime()/1000}`,
					method: "GET",
					filter: false,
					success: (res1) => {
						let parmas = {
							categories: [],
							series: []
						}
						let arr = []
						res1.data.data.map((v) => {
							parmas.categories.push(v.date)
							arr.push(v.last.toFixed(2))
						})
						parmas.series = [{
							name: this.currencyName,
							data: arr,
							linearColor: [
								[
									0,
									"#1890FF"
								],
								[
									0.25,
									"#00B5FF"
								],
								[
									0.5,
									"#00D1ED"
								],
								[
									0.75,
									"#00E6BB"
								],
								[
									1,
									"#90F489"
								]
							],
							setShadow: [
								3,
								8,
								10,
								"#1890FF"
							],
						}]
						this.chartData = JSON.parse(JSON.stringify(parmas));
						// 	let res = {
						// 		categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
						// 		series: [{
						// 			name: "成交量A",
						// 			data: [10, 8, 10, 10, 4, 10]
						// 		}, ]
						// 	};
						// 	this.chartData = JSON.parse(JSON.stringify(res));
					}
				});
			},
			listBtn(pairs,i) {
				this.listIndex = i;
				this.currencyName=pairs;
				uni.request({
					url: `https://tokenlon-core-market.tokenlon.im/rest/get_ticker_history?pairs=${pairs}&beginTimestamp=${new Date(dayjs().startOf('date').subtract(this.timeType,'week')).getTime()/1000}&endTimestamp=${new Date(dayjs().startOf('date')).getTime()/1000}`,
					method: "GET",
					filter: false,
					success: (res1) => {
						let parmas = {
							categories: [],
							series: []
						}
						let arr = []
						console.log("res1",res1);
						res1.data.data.map((v) => {
							parmas.categories.push(v.date)
							arr.push(v.last.toFixed(2))
						})
						parmas.series = [{
							name: pairs,
							data: arr,
							linearColor: [
								[
									0,
									"#1890FF"
								],
								[
									0.25,
									"#00B5FF"
								],
								[
									0.5,
									"#00D1ED"
								],
								[
									0.75,
									"#00E6BB"
								],
								[
									1,
									"#90F489"
								]
							],
							setShadow: [
								3,
								8,
								10,
								"#1890FF"
							],
						}]
						this.chartData = JSON.parse(JSON.stringify(parmas));
						// 	let res = {
						// 		categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
						// 		series: [{
						// 			name: "成交量A",
						// 			data: [10, 8, 10, 10, 4, 10]
						// 		}, ]
						// 	};
						// 	this.chartData = JSON.parse(JSON.stringify(res));
					}
				});
			},
			// 获取红包余额
			getAccount() {
				uni.request({
					url: `/member/getAccount`,
					method: "GET",
					success: (res) => {
						this.accountBalance = res.data.hongbao.toString();
					}
				});
			},
			// 隐藏
			lockBtn() {
				this.eyeShow = !this.eyeShow
			},
			// 激活码
			activCode() {
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
			// 查看通知
			viewNotices() {
				uni.navigateTo({
					url: `/pages/user/user_notice`
				});
			},
			// 创建合约
			createContract(val) {
				uni.navigateTo({
					url: `/pages/market/startcreat?type=${val}`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/uni_modules/uview-ui/index.scss";

	::v-deep .u-modal__content {
		.u-modal__content__text {

			text-align: center;
		}
	}

	::v-deep.market {
		width: 100% !important;
		min-height: 100vh;


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
								width: 188rpx;
								height: 60rpx;
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

				.marketeverytitles {
					color: #000;
					font-size: 21px;
					margin-top: 26px;
					font-weight: 600;
					display: flex;
					align-items: center;

					
				}

				.modellist {
					display: flex;
					justify-content: space-between;
					align-items: stretch;
					margin-top: 12px;

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

						.pages {
							position: relative;
							box-sizing: border-box;
							width: 100%;
							

							.box {
								width: 100%;
								height: 100%;
								box-sizing: border-box;

								background: #fff;
								padding-bottom: 16px;
								// box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .2);
								border-radius: 21px;
								margin: 16px auto 0;

								.title {
									// position: absolute;
									// top: 18%;
									// left: 5px;
									margin-top: 10px;
									margin-bottom: 20px;
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
					margin-top: 0px;
					font-weight: 600;
					display: flex;
					align-items: center;
					.marketeverytitle_img {
						width: 102px;
						height: 56rpx;
					}

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
								margin-top: 20px;
								margin-bottom: 20px;

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
								margin-top: 10px;
								padding: 0 18px;
								margin-bottom: 100px;

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

										.end_top {
											font-size: 16px;
											color: #333;
										}

										.red {
											color: red;
										}
									}
								}

								.listdataactive {
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