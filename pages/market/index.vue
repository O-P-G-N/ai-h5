<template>
	<view class="market">
		<view class="container_nei">
			<view class="navbers">
				<view class="navbers_headers">
					<view class="mailright" @click="viewNotices">
						<u-badge class="badge" :offset="[0, -3]" :absolute="true" v-if="$store.getters.unr>0"
							:isDot="true" type="error"></u-badge>
						<image class="mailright_img" src="@/static/user/small_bell.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="main">
				<u-navbar :fixed="false" height="53px" :safeAreaInsetTop="false">
					<view class="u-nav-slot" slot="left">
						<image class="head_back_img" src="@/static/market/market_logo.png" mode=""></image>
					</view>
					<view class="center_title" slot="center">Defi Vault</view>
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
						<!-- <button class="justcard_right_btn" @click="activCode">
							<view class="justcard_icon">
								<image class="justcard_icon_img" src="@/static/market/code.png" mode=""></image>
							</view>
							<view class="justcard_text">{{$t('ac.actc')}}</view>
						</button> -->
						<button class="justcard_right_btn" @click="viewContract">
							<view class="justcard_icon">
								<image class="justcard_icon_img" src="@/static/market/marketheyue.png" mode=""></image>
							</view>
							<view class="justcard_text">{{$t('ac.myac')}}</view>
						</button>
					</view>
				</view>
				<view class="marketeverytitles">{{$t('ac.int')}} AI + Defi Vault</view>
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
				<view class="market_monitor">{{$t("ac.prc28")}}</view>
				<u-row class="row_one" justify="space-between">
					<u-col class="col_one" span="6" textAlign="center" justify="flex-start">
						<view class="title">{{$t("ac.prc29")}}
							<!-- <image class="title_img" src="@/static/user/sort.png"></image> -->
						</view>
						<view class="title">/{{$t("ac.prc30")}}
						</view>
					</u-col>
					<u-col span="3" textAlign="right" justify="flex-end">
						<view class="title_one">{{$t("ac.prc31")}}
							<!-- <image class="title_img" src="@/static/user/sort.png"></image> -->
						</view>
					</u-col>
					<u-col span="3" textAlign="right" justify="flex-end">
						<view class="title_one">{{$t("ac.prc32")}}(%)
						</view>
					</u-col>
				</u-row>
				<u-row class="row_one" justify="space-between" v-for="(v,i) in exponentList" :key="i">
					<u-col span="3" textAlign="center" justify="flex-start">
						<view class="title"><text
								class="currency">{{v.symbol}}</text><text
								class="usdt">/USDT</text></view>
						<!-- <view class="transaction_volume">{{$t("ac.prc33")}}{{v.quoteVolume.value}}{{v.quoteVolume.unit}}
						</view> -->
					</u-col>
					<u-col span="6" textAlign="right" justify="flex-end">
						<view class="price_one">${{v.lastPrice}}</view>
					</u-col>
					<u-col class="col_last" span="3" textAlign="right" justify="flex-end">
						<view :class="v.priceChangePercent>0?'chgg':'chg'">{{Number(v.priceChangePercent).toFixed(2)}}%
						</view>
					</u-col>
				</u-row>
				<view style="height: 300px; width: 100%;"></view>

				<!-- <view class="widgtthree">
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
								<qiun-data-charts type="area" :opts="opt" :chartData="chartDatas" />
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
							<qiun-data-charts height="240px" type="area" :opts="opts" :chartData="chartData" />
							<view class="tabs">
								<view class="tabs_item" :class="i==tabsIndex?'active':''" @click="tabsBtn(v.type,i)"
									v-for="(v,i) in tabsList" :key="i">{{v.name}}</view>
							</view>
							<view class="listdata">
								<view class="listdata_item" :class="i==listIndex?'listdataactive':''"
									@click="listBtn(v.id,v.symbol,i)" v-for="(v,i) in listData" :key="i">
									<view class="first">{{v.symbol}}</view>
									<view class="end">
										<text class="end_top">{{Number(v.priceUsd).toFixed(2)}}</text>
										<text class="red">{{(Number(v.priceUsd)-Number(v.vwap24Hr)).toFixed(2)}}&ensp;&ensp;{{Number(v.changePercent24Hr).toFixed(2)}}%</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view> -->
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
					color: ["#3F65FD"],
					padding: [15, 10, 0, 15],
					enableScroll: false,
					dataLabel: false,
					dataPointShape: false,
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
						area: {
							type: "curve",
							opacity: 0.2,
							addLine: true,
							width: 2,
							gradient: true,
							activeType: "hollow"
						}
					}
				},
				opt: {
					color: ["#4EAD9B"],
					padding: [15, 10, 0, 15],
					enableScroll: false,
					dataLabel: false,
					dataPointShape: false,
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
						area: {
							type: "curve",
							opacity: 0.2,
							addLine: true,
							width: 2,
							gradient: true,
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
				listIndex: 0,
				tabsList: [{
						name: "1D",
						type: 1
					},
					{
						name: "2W",
						type: 2
					},
					{
						name: "1M",
						type: 3
					},
					{
						name: "3M",
						type: 4
					},
					{
						name: "6M",
						type: 5
					},
					{
						name: "1Y",
						type: 6
					},
					{
						name: "ALL",
						type: 7
					},
				],
				listData: [],
				eyeShow: false, //隐藏
				accountBalance: "", //红包余额
				show: false, //温馨提示模态框
				content: "", //提示框内容
				setIndex: null, //设置索引
				timeType: 1, //时间
				currencyName: "", //货币名称
				tips: this.$t("user.islands.sc.sn.i1"), //温馨提示国际化
				exponentList: [], //指数列表
				textHeight:""
			}
		},
		onReady() {
			
		},
		onShow() {
			this.$store.dispatch('app/getUnread')
			this.getAccount();
			// this.getAccountIsComplete();
			// this.getListData()
			this.getExponentData();
			if (uni.getStorageSync("UNI_LOCALE") == "zh-Hant") {
				this.textHeight="0px"
			} else if (uni.getStorageSync("UNI_LOCALE") == "en") {
				this.textHeight="166px"
			}
		},
		created() {},
		methods: {
			// 获取指数列表数据
			getExponentData() {
				// url: `https://data-api.binance.vision/api/v3/ticker/24hr?symbols=${JSON.stringify(["BTCUSDT","ETHUSDT", "BNBUSDT","XRPUSDT","SOLUSDT","ADAUSDT","DOGEUSDT","TRXUSDT","LINKUSDT","MATICUSDT"])}`,
				uni.request({
					url: `https://data-api.binance.vision/api/v3/ticker/24hr?symbols=${JSON.stringify(["BTCUSDT","ETHUSDT",])}`,
					method: "GET",
					success: (res) => {
						uni.request({
							url: `/marketDetail/collections`,
							method: "GET",
							success: (res1) => {
								res.data.map((v) => {
									v.quoteVolume = this.bigNumberTransform(v.quoteVolume)
									v.symbol=v.symbol.slice(0,v.symbol.indexOf("U"))
									v.lastPrice=Number(v.lastPrice).toFixed(2)
								})
								
								res1.data.map((v,i) => {
									v.symbol =v.slug;
									v.lastPrice=Number(v.floorPriceUsd).toFixed(8);
									console.log(Number(v.floorPriceUsd).toFixed(12));
									v.priceChangePercent=0
									
								})
								res1.data.map((v,i) => {
									if(v.slug=="ETH"){
										res1.data.splice(i,1)
									}
								})
								this.exponentList = res.data;
								this.exponentList.push(...res1.data)
							},
						})
						// console.log(this.exponentList);
					},
				})
				
			},
			bigNumberTransform(value) {
				let param = {};
				let k = 10000,
					sizes = ['', this.$t("ac.prc34"), this.$t("ac.prc35"), this.$t("ac.prc36")],
					i;
				if (value < k) {
					param.value = value.toFixed(2)
					param.unit = ''
				} else {
					i = Math.floor(Math.log(value) / Math.log(k));
					param.value = ((value / Math.pow(k, i))).toFixed(2);
					param.unit = sizes[i];
				}
				return param;


			},

			// 获取列表数据
			getListData() {
				uni.request({
					url: `https://api.coincap.io/v2/assets`,
					method: "GET",
					data: {
						limit: 10
					},
					success: (res) => {
						this.listData = res.data.data;
						this.currencyName = res.data.data[0].id;
						uni.request({
							url: `https://api.coincap.io/v2/assets/${res.data.data[0].id}/history?interval=m1`,
							method: "GET",
							data: {
								start: new Date(dayjs().startOf('date').subtract(1, 'day')).getTime(),
								end: new Date(dayjs().startOf('date')).getTime()
							},
							success: (res1) => {
								console.log(res1);
								let parmas = {
									categories: [],
									series: []
								}
								let arr = []
								res1.data.data.map((v) => {
									parmas.categories.push(dayjs(v.date).format(
										"YYYY-MM-DD HH:mm:ss"))
									arr.push(Number(v.priceUsd).toFixed(2))
								})
								parmas.series = [{
									name: res.data.data[0].symbol,
									data: arr,
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
							url: `https://api.coincap.io/v2/assets/${res.data.data[1].id}/history?interval=d1`,
							method: "GET",
							data: {
								start: new Date(dayjs().startOf('date').subtract(6, 'month'))
									.getTime(),
								end: new Date(dayjs().startOf('date')).getTime()
							},
							success: (res2) => {
								let parmas = {
									categories: [],
									series: []
								}
								let arr = []
								res2.data.data.map((v) => {
									parmas.categories.push(dayjs(v.date).format(
										"YYYY-MM-DD HH:mm:ss"))
									arr.push(Number(v.priceUsd).toFixed(2))
								})
								parmas.series = [{
									name: res.data.data[1].symbol,
									data: arr,
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
			tabsBtn(type, i) {
				this.tabsIndex = i;
				this.timeType = type;
				let interval = null;
				let unit = null;
				let time = null;
				switch (type) {
					case 1:
						time = 1;
						unit = "day";
						interval = "m1";
						break;
					case 2:
						time = 2;
						unit = "week";
						interval = "m30";
						break;
					case 3:
						time = 1;
						unit = "month";
						interval = "h2";
						break;
					case 4:
						time = 3;
						unit = "month";
						interval = "h6";
						break;
					case 5:
						time = 6;
						unit = "month";
						interval = "h12";
						break;
					case 6:
						time = 1;
						unit = "year";
						interval = "d1";
						break;
					case 7:
						time = 2;
						unit = "year";
						interval = "d1";
						break;
				}
				uni.request({
					url: `https://api.coincap.io/v2/assets/${this.currencyName}/history?interval=${interval}`,
					method: "GET",
					data: {
						start: new Date(dayjs().startOf('date').subtract(time, unit)).getTime(),
						end: new Date(dayjs().startOf('date')).getTime()
					},
					success: (res2) => {
						let parmas = {
							categories: [],
							series: []
						}
						let arr = []
						res2.data.data.map((v) => {
							parmas.categories.push(dayjs(v.date).format("YYYY-MM-DD HH:mm:ss"))
							arr.push(Number(v.priceUsd).toFixed(2))
						})
						parmas.series = [{
							name: this.listData[this.listIndex].symbol,
							data: arr,
						}]
						this.chartData = JSON.parse(JSON.stringify(parmas));

					}
				});
			},
			listBtn(id, symbol, i) {
				this.listIndex = i;
				this.currencyName = id;
				let interval = null;
				let unit = null;
				let time = null;
				switch (this.timeType) {
					case 1:
						time = 1;
						unit = "day";
						interval = "m1";
						break;
					case 2:
						time = 2;
						unit = "week";
						interval = "m30";
						break;
					case 3:
						time = 1;
						unit = "month";
						interval = "h2";
						break;
					case 4:
						time = 3;
						unit = "month";
						interval = "h6";
						break;
					case 5:
						time = 6;
						unit = "month";
						interval = "h12";
						break;
					case 6:
						time = 1;
						unit = "year";
						interval = "d1";
						break;
					case 7:
						time = 2;
						unit = "year";
						interval = "d1";
						break;
				}
				uni.request({
					url: `https://api.coincap.io/v2/assets/${id}/history?interval=${interval}`,
					method: "GET",
					data: {
						start: new Date(dayjs().startOf('date').subtract(time, unit)).getTime(),
						end: new Date(dayjs().startOf('date')).getTime()
					},
					success: (res2) => {
						let parmas = {
							categories: [],
							series: []
						}
						let arr = []
						res2.data.data.map((v) => {
							parmas.categories.push(dayjs(v.date).format("YYYY-MM-DD HH:mm:ss"))
							arr.push(Number(v.priceUsd).toFixed(2))
						})
						parmas.series = [{
							name: symbol,
							data: arr,
						}]
						this.chartData = JSON.parse(JSON.stringify(parmas));

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
		background-color: #fff;

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
				width: 20px;
				height: 20px;

				.navbers_headers {
					border-radius: 21px;

					.mailright {
						width: 60rpx;
						height: 60rpx;
						position: relative;
						display: flex;
						align-items: center;
						justify-content: center;

						.badge {
							z-index: 111;
						}

						.mailright_img {
							width: 60rpx;
							height: 60rpx;
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
							padding-left: 0px;

							.u-nav-slot {
								width: 108px;
								height: 34px;
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
						.center_title{
							font-weight: 800;
							font-size: 20px;
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
							max-height: v-bind(textHeight);
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

				.market_monitor {
					margin-top: 16px;
					margin-bottom: 13px;
					font-size: 22px;
					font-family: PingFang SC, PingFang SC;
					font-weight: bold;
					color: #00070F;
				}

				.row_one {
					margin-bottom: 16px;

					.col_one {
						display: flex;
						flex-direction: row;
					}

					.title {
						font-size: 12px;
						font-family: PingFang SC, PingFang SC;
						font-weight: 400;
						color: #949494;
						display: flex;
						align-items: center;

						.title_img {
							width: 14px;
							height: 14px;
						}
					}

					.title_one {
						font-size: 12px;
						font-family: PingFang SC, PingFang SC;
						font-weight: 400;
						color: #949494;
						display: flex;
						align-items: center;
						justify-content: flex-end;

						.title_img {
							width: 14px;
							height: 14px;
						}
					}

					.currency {
						font-size: 14px;
						font-family: PingFang SC, PingFang SC;
						font-weight: 500;
						color: #00070F;
					}

					.usdt {
						font-size: 11px;
						font-family: PingFang SC, PingFang SC;
						font-weight: 400;
						color: #9FA19F;
					}

					.multiple {
						display: inline-block;
						width: 24px;
						height: 16px;
						background: #F7F7F7;
						border-radius: 1px 1px 1px 1px;
						font-size: 10px;
						font-family: PingFang SC, PingFang SC;
						font-weight: 400;
						color: #FFD220;
						line-height: 16px;
						text-align: center;
						margin-left: 8px;
					}

					.transaction_volume {
						font-size: 11px;
						font-family: PingFang SC, PingFang SC;
						font-weight: 400;
						color: #9FA19F;
						text-align: left;
					}

					.price_one {
						font-size: 14px;
						font-family: PingFang SC, PingFang SC;
						font-weight: bold;
						color: #9FA19F;
					}

					.price_two {
						font-size: 10px;
						font-family: PingFang SC, PingFang SC;
						font-weight: 400;
						color: #9FA19F;
					}

					.col_last {
						display: flex;
						flex-direction: row;
					}

					.chg {
						width: 78px;
						height: 35px;
						background: #2EBD85;
						color: #fff;
						border-radius: 3px 3px 3px 3px;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					.chgg {
						width: 78px;
						height: 35px;
						background: #F6455F;
						color: #fff;
						border-radius: 3px 3px 3px 3px;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}

				.row_one:last-child {
					margin-bottom: 130px;
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