<template>
	<view class="upgrade_train">
		<u-navbar @leftClick="goBackUser" title="升级训练" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="avatar_card">
			<view class="left_avatar">
				<view class="t_bor_r">
					<image class="t_bor_r_img" src="~@/static/tabbar/tx.webp" mode=""></image>
				</view>
			</view>
			<view class="right_avatar">
				<view class="avatar_name">
					<view class="a_name">
						<text>nike</text>
						<image class="levelIcon" :src="pointsBalance.vip==1?'../../static/user/e2.png':pointsBalance.vip==2?'../../static/user/d2.png':pointsBalance.vip==3?'../../static/user/c2.png':pointsBalance.vip==4?'../../static/user/b2.png':pointsBalance.vip==5?'../../static/user/a2.png':pointsBalance.vip==6?'../../static/user/s2.png':''" mode=""></image>
					</view>
					<view class="a_balance_title">积分余额</view>
					<view class="a_balance">{{pointsBalance.point}}</view>
				</view>
			</view>
		</view>
		<view class="autonomous_btn">
			<u-button type="info" @click="autonomousBtn" text="自主训练"></u-button>
			<!-- <button type="default" ></button> -->
		</view>
		<view class="menu-title">可选技能包:</view>
		<view class="menu_content">
			<view class="menu_item waves" v-for="(v,i) in contentList" :key="i"
				@click="e => butonClick(e,'buttonMain_'+i,i)" :ref='refName' :id=" 'buttonMain_'+i"
				:style="{'--width':`${widthPx}px`,'--waterColor':waterColor}">
				<view class="menu_item_detail">{{v.content}}</view>
				<view class="menu_item_menus">
					<text class="menu_item_menus_text" v-for="(item,index) in v.word" :key="index">{{item}}</text>
				</view>
				<view class="menu_item_points">{{v.price}}技能点</view>
				<u-button type="info" text="兑换" @click="exchange(v.id)"></u-button>
				<view class="waterView" v-if='showWater&&clickIndex == i' :style="{left:XY.left,top:XY.top}">
					<view class="point"></view>
					<view class="wave1" @animationend='animationendFn'></view>
					<view class="wave2" @animationend='animationendFn'></view>
					<view class="wave3" @animationend='animationendFn'></view>
				</view>
			</view>
		</view>
		<u-loadmore :status="status" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				refName: 'buttonMain_' + new Date().getTime() + '_' + parseInt(Math.random() * 10000),
				widthPx: 0,
				showWater: false,
				XY: {},
				waterColor: "rgb(89, 89, 89)",
				from: {
					pageNum: 1,
					pageSize: 10
				},
				pointsBalance: {}, //积分余额
				PageCount: 0, //总页数
				contentList: [], //记录列表
				status: "loadmore",
				clickIndex: null,
			};
		},
		onShow() {
			this.getSkillPack()
		},
		onReachBottom() {
			this.loadMore()
		},
		onHide() {
			this.from.pageNum = 1;
		},
		methods: {
			// 返回积分查看
			goBackUser() {
				uni.navigateTo({
					url: `/pages/partner/index`
				});
			},
			animationendFn() {
				this.showWater = false
			},
			butonClick(e, i, index) {
				this.clickIndex = index
				const query = uni.createSelectorQuery().in(this);
				query.select('#' + i).boundingClientRect();
				query.exec((res) => {
					const dataInfo = res[0]
					// 计算需要显示的水波纹在button内的位置
					const clickX = Math.abs(e.detail.x - dataInfo.left)
					const clickY = Math.abs(e.detail.y - dataInfo.top)
					this.XY = {
						left: clickX + 'px',
						top: clickY + 'px'
					}
					const widthPx = dataInfo.width
					const heightPX = dataInfo.height
					const arrayPx = [clickX, widthPx - clickX, clickY, heightPX - clickY]
					// 获取生成圆最大的宽度
					const maxPx = Math.max(...arrayPx)
					this.widthPx = maxPx * 2;
					this.showWater = true;
				});
			},
			// 自主训练
			autonomousBtn() {
				uni.$u.toast('暂未开放!');
			},
			// 获取技能包及积分余额
			getSkillPack() {
				uni.request({
					url: '/member/getAccount',
					method: "GET",
					success: (res) => {
						this.pointsBalance = res.data;
						console.log(res);
					}
				});
				uni.request({
					url: `/skill/list`,
					method: "POST",
					data: this.from,
					success: (res) => {
						res.data.rows.map((v) => {
							v.word = v.word.split(",")
						})
						this.contentList = res.data.rows
						this.PageCount = Math.ceil(res.data.total / 10);
						if (this.PageCount <= this.contentList.length) {
							this.status = "nomore"
						}
					}
				});
			},
			// 上划加载
			loadMore() {
				if (this.from.pageNum < this.PageCount) {
					this.status = "loading"
					this.from.pageNum++;
					uni.request({
						url: `/skill/list`,
						method: "POST",
						data: this.from,
						success: (res) => {
							res.data.rows.map((v) => {
								v.word = v.word.split(",")
							})
							this.contentList.push(...res.data.rows);
						}
					});
				} else {
					this.status = "nomore"
				}
			},
			// 兑换
			exchange(id) {
				uni.$u.toast('积分余额不足!');
				console.log(id);
			},
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.upgrade_train {
		width: 100%;
		height: 100vh;
		background-color: #fff;
		padding: 12px 21px 68px;
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
					font-size: 18px;
				}

			}
		}

		.avatar_card {
			width: 100%;
			display: flex;
			justify-content: space-between;
			background: #f5f5f5;
			padding: 10px;
			margin-bottom: 10px;
			box-sizing: border-box;
			border-radius: 20px;

			.left_avatar {
				width: 35%;
				height: 100%;
				display: flex;
				justify-content: center;

				.t_bor_r {
					width: 96px;
					height: 96px;
					border-radius: 50%;
					overflow: hidden;

					.t_bor_r_img {
						width: 100%;
						height: 100%;
					}
				}
			}

			.right_avatar {
				display: flex;
				width: 50%;
				justify-content: right;
				align-items: center;
				position: relative;

				.avatar_name {
					width: 100%;
					font-size: 18px;

					.a_name {
						font-weight: 600;
						display: flex;
						align-items: flex-end;

						.levelIcon {
							width: 76px;
							height: 42px;
							position: absolute;
							right: 0;
							top: 0;
						}
					}

					.a_balance_title {
						margin: 2px 0;
						color: #ccc;
					}

					.a_balance {
						font-weight: 600;
					}
				}
			}
		}

		.autonomous_btn {
			display: flex;
			justify-content: space-around;
			margin-bottom: 10px;

			.u-button {
				border-radius: 20px !important;
			}

			.u-reset-button::after {
				border: none;
			}
		}

		.menu-title {
			width: 100%;
			font-size: 18px;
			color: #333;
			font-weight: 600;
		}

		.menu_content {
			margin-top: 10px;
			width: 100%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.menu_item {
				width: 43%;
				background: #f8f8f8;
				padding: 10px 10px;
				border-radius: 10px;
				margin-bottom: 10px;
				display: flex;
				position: relative;
				overflow: hidden;
				flex-direction: column;
				justify-content: space-between;

				.menu_item_title {
					font-size: 16px;
				}

				.menu_item_detail {
					min-height: 58px;
					font-size: 13px;
					line-height: 1.5;
					margin-top: 2px;
					color: #787878;
				}

				.menu_item_menus {
					display: flex;
					justify-content: space-between;
					font-size: 8px;
					margin-top: 8px;

					.menu_item_menus_text {
						display: inline-block;
						width: 45%;
						height: 16px;
						line-height: 16px;
						text-align: center;
						background: #edf0ff;
						color: #2a6e83;
						border-radius: 5px;
						font-size: 14px;
					}
				}

				.menu_item_points {
					margin-top: 5px;
					color: #a3690f;
					font-weight: 600;
				}

				.u-button {
					border-radius: 20px !important;
				}

				.u-reset-button::after {
					border: none;
				}

				// 水波纹外层
				.waterView {
					width: 100%;
					height: 100%;
					z-index: 4444;
					transform: translate(-50%, -50%);
					position: absolute;
				}

				// 中心点
				.point {
					width: 10px;
					height: 10px;
					border-radius: 100px;
					background-color: var(--waterColor);
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					opacity: 0.1;
				}

				// 波纹
				.wave1,
				.wave2,
				.wave3 {
					width: 0px;
					height: 0px;
					border-radius: 100px;
					background-color: var(--waterColor);
					/*居中*/
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					animation: wave 0.5s;
					transform-origin: center center;

				}

				@keyframes wave {
					0% {
						width: 0;
						height: 0;
						opacity: 1;
					}

					100% {
						width: var(--width);
						height: var(--width);
						opacity: 0;
					}
				}
			}

			.waves {
				osition: relative;
				overflow: hidden;
				padding: 4px 10px;
				outline: none;
			}

		}
	}
</style>