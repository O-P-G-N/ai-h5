<template>
	<view class="identity_judge">
		<u-navbar @leftClick="goBackUser" title="" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
			<image v-if="rechargeAmount&&$store.getters.languageType==1" slot="center" class="head_center_img" src="@/static/user/HTXE1.png"
				mode=""></image>
				<image v-if="rechargeAmount&&$store.getters.languageType==0" slot="center" class="head_center_imgs" src="@/static/user/HTXE1_1.png"
					mode=""></image>
		</u-navbar>
		<view class="banana_bg">
			<view class="banana_bg_first">{{ $t('user.asset.islands.idj.Share_with_friends') }}</view>
			<view class="banana_bg_last">{{$t('user.asset.islands.idj.exgpt_opens_up_new_worlds_for_you')}}</view>
		</view>
		<view class="copy_box">
			<button class="copy_btn" @click="copyBtn">{{$t('user.asset.islands.idj.copy_the_link')}}</button>
		</view>
		<view class="dyselect">
			<view class="nd" :class="dyShow==1?'dyactive':''" @click="dyShowBtn(1)">
				{{$t('user.asset.islands.idj.my_inviter')}}
			</view>
			<view class="wd" :class="dyShow==0?'dyactive':''" @click="dyShowBtn(0)">
				{{$t('user.asset.islands.idj.invite_by_me')}}
			</view>
		</view>
		<view class="info_box" v-if="dyShow==1">
			<view class="info_body" v-if="SupSub.above[0].memberName">
				<view class="info_body_item">
					<view class="info_body_item_left">{{ $t('user.asset.islands.idj.account_name') }}</view>
					<view class="info_body_item_right">
						<text class="bluephone">{{SupSub.above[0].memberName}}</text>
					</view>
				</view>
				<view class="info_body_item">
					<view class="info_body_item_left">{{ $t('user.asset.islands.idj.nickname') }}</view>
					<view class="info_body_item_right">
						<text>{{SupSub.above[0].nickName}}</text>
					</view>
				</view>
				<view class="info_body_item">
					<view class="info_body_item_left">{{ $t('user.asset.islands.idj.rankname') }}</view>
					<view class="info_body_item_right">
						<text>{{SupSub.above[0].vip==1?"E":SupSub.above[0].vip==2?"D":SupSub.above[0].vip==3?"C":SupSub.above[0].vip==4?"B":SupSub.above[0].vip==5?"A":SupSub.above[0].vip==6?"S":""}}</text>
					</view>
				</view>
				<view class="info_body_item">
					<view class="info_body_item_left">{{$t('user.asset.islands.idj.act_status')}}</view>
					<view class="info_body_item_right">
						<text>{{SupSub.above[0].isActive==1?$t('user.asset.islands.idj.unactivated'): $t('user.asset.islands.idj.activated')}}</text>
					</view>
				</view>
				<view class="info_body_item">
					<view class="info_body_item_left">{{$t('user.asset.islands.idj.contract_amount')}}</view>
					<view class="info_body_item_right">
						<text>{{SupSub.above[0].contractCount?SupSub.above[0].contractCount:0}}</text>
					</view>
				</view>
				<view class="info_body_item">
					<view class="info_body_item_left">{{$t('user.asset.islands.idj.activity_time')}}</view>
					<view class="info_body_item_right">
						<text>{{SupSub.above[0].createTime}}</text>
					</view>
				</view>
			</view>
			<view class="info_body_img" v-else>
				<image class="info_body_img_htxe" src="@/static/user/HTXE2.png" mode=""></image>
			</view>
		</view>
		<view class="share_box" v-else-if="dyShow==0">
			<!-- <view class="share_info">
				<view class="share_info-left">
					人数：XXXX
				</view>
				<view class="share_info_right">
					今日收益：<text class="share_info_right_text">XXXX</text>
				</view>
			</view> -->
			<view class="" v-if="SupSub.below.length>0">
			<view class="info_body" v-for="(v,i) in SupSub.below" :key="i">
				<view class="info_body_item">
					<view class="info_body_item_left">{{ $t('user.asset.islands.idj.account_name') }}</view>
					<view class="info_body_item_right">
						<text class="bluephone">{{v.memberName}}</text>
					</view>
				</view>
				<view class="info_body_item">
					<view class="info_body_item_left">{{ $t('user.asset.islands.idj.nickname') }}</view>
					<view class="info_body_item_right">
						<text>{{v.nickName}}</text>
					</view>
				</view>
				<view class="info_body_item">
					<view class="info_body_item_left">{{ $t('user.asset.islands.idj.rankname') }}</view>
					<view class="info_body_item_right">
						<text>{{v.vip==1?"E":v.vip==2?"D":v.vip==3?"C":v.vip==4?"B":v.vip==5?"A":v.vip==6?"S":""}}</text>
					</view>
				</view>
				<view class="info_body_item">
					<view class="info_body_item_left">{{$t('user.asset.islands.idj.act_status')}}</view>
					<view class="info_body_item_right">
						<text>{{v.isActive==1?$t('user.asset.islands.idj.unactivated'): $t('user.asset.islands.idj.activated')}}</text>
					</view>
				</view>
				<view class="info_body_item">
					<view class="info_body_item_left">{{$t('user.asset.islands.idj.contract_amount')}}</view>
					<view class="info_body_item_right">
						<text>{{v.contractCount}}</text>
					</view>
				</view>
				<view class="info_body_item">
					<view class="info_body_item_left">{{$t('user.asset.islands.idj.activity_time')}}</view>
					<view class="info_body_item_right">
						<text>{{v.createTime}}</text>
					</view>
				</view>
			
			</view>
			</view>
			
			<view class="info_body_img" v-else>

				<image class="info_body_img_htxe" src="@/static/user/HTXE2.png" mode=""></image>
			</view>
		</view>
		<!-- <view class="activate_popup" v-if="!activateShow&&$store.getters.languageType==1">
			<view class="activate_popup_box">

				<image class="activate_popup_box_open" @click="rechargeActive" src="@/static/user/openBtn.png" mode="">
				</image>
				<image class="activate_popup_box_del" @click.stop="activateShow=true" src="@/static/user/del.png"
					mode=""></image>
			</view>
		</view> -->
		<!-- <view class="activate_popups" v-if="!activateShow&&$store.getters.languageType==0">
			<view class="activate_popup_box">
		
				<image class="activate_popup_box_open" @click="rechargeActive" src="@/static/user/openBtn_1.png" mode="">
				</image>
				<image class="activate_popup_box_del" @click.stop="activateShow=true" src="@/static/user/del.png"
					mode=""></image>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dyShow: 1, //索引
				aa: false,
				activateShow: true,
				rechargeAmount: false, //充值总额>500
				SupSub:{
					above:[{memberName:""}],//上级
					below:[],//上级
				},//上下级
			};
		},
		onShow() {
			this.getTotalRechargeAmount();
			this.getSupSub();
			if(uni.getStorageSync("UNI_LOCALE")=="zh-Hant"){
				this.$store.commit('app/judgLanguage',1)
			}else if(uni.getStorageSync("UNI_LOCALE")=="en"){
				this.$store.commit('app/judgLanguage',0)
			}
		},
		methods: {
			dyShowBtn(val) {
				this.dyShow = val
			},
			// 返回
			goBackUser() {
				// uni.navigateTo({
				// 	url: `/pages/user/islands/index`
				// });
				uni.switchTab({
					url: `/pages/community/index`
				});
			},
			//获取上下级
			getSupSub() {
				uni.request({
					url: `/island/relations`,
					method: "GET",
					success: (res) => {
						this.SupSub=res.data;
						// console.log(res);
					}
				});
			},
			// 获取总的充值金额
			getTotalRechargeAmount() {
				uni.request({
					url: `/island/rechargeRecord`,
					method: "GET",
					success: (res) => {
						this.activateShow = res.data;
						this.rechargeAmount=res.data;
						// if (res.data < 500) {
						// 	this.activateShow = true;
						// }
						console.log(res);
					}
				});
			},
			// 复制链接
			copyBtn() {
				uni.navigateTo({
					url: `/pages/user/islands/invite`
				});
			},
			// 充值激活
			rechargeActive() {
				uni.navigateTo({
					url: `/pages/user/recharge`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.identity_judge {
		min-height: 100vh;
		background-color: #fff;
		box-sizing: border-box;

		.u-navbar {
			height: 53px;

			.u-navbar__content {
				height: 53px !important;
				display: flex;
				align-items: center;
				background: linear-gradient(97deg, #DAE9FD 0%, #DBDCFE 100%);

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

				.head_center_img {
					width: 230px;
					height: 38px;
				}
				.head_center_imgs{
					width: 250px;
					height: 38px;
				}

			}
		}

		.banana_bg {
			background: url("@/static/user/HTXE3.png") no-repeat;
			background-size: 100% 100%;
			width: 100%;
			height: 346px;
			padding-top: 275px;
			box-sizing: border-box;

			.banana_bg_first {
				text-align: center;
				font-size: 14px;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #0D0050;
			}

			.banana_bg_last {
				margin-top: 5px;
				text-align: center;
				font-size: 14px;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
				color: #0D0050;
			}
		}

		.copy_box {
			width: 100%;
			height: 50px;
			margin-top: 15px;

			.copy_btn {
				width: 144px;
				height: 50px;
				line-height: 50px;
				background: #6B58E5;
				border-radius: 25px 25px 25px 25px;
				color: #fff;
				font-size: 16px;
				font-family: PingFang SC-Bold, PingFang SC;
				font-weight: bold;
			}
		}

		.dyselect {
			margin: 10px auto;
			width: 85%;
			height: 40px;
			border-radius: 42px;
			background: #E6E2FF;
			color: #07002A;
			display: flex;
			align-items: center;
			justify-content: space-around;
			transition: all .3s;
			padding: 0 3px;

			.nd {
				width: 48%;
				text-align: center;


			}

			.wd {
				width: 48%;
				text-align: center;

			}

			.dyactive {
				width: 55%;
				height: 36px;
				line-height: 36px;
				background: #FFFFFF;
				box-shadow: 0px 0px 6px 1px rgba(68, 54, 160, 0.18);
				border-radius: 18px 18px 18px 18px;
				color: #4537A0;
			}
		}

		.info_box {
			padding: 20px;
			box-sizing: border-box;
			.info_body_img {
				display: flex;
				align-items: center;
				justify-content: center;
			
				.info_body_img_htxe {
					width: 268px;
					height: 200px;
				}
			}

			.info_body {
				width: 100%;
				padding: 16px 21px;
				border-radius: 21px;
				color: #000;
				background: #f5f6fa;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;

				.info_body_item {
					display: flex;
					justify-content: space-between;
					align-items: center;
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

		.share_box {
			padding: 0 20px;
			box-sizing: border-box;

			.share_info {
				display: flex;
				align-items: center;
				justify-content: space-around;

				.share_info-left {}

				.share_info_right {
					.share_info_right_text {}
				}
			}

			.info_body {
				margin-top: 10px;
				width: 100%;
				padding: 16px 21px;
				border-radius: 21px;
				color: #000;
				background: #f5f6fa;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;

				.info_body_item {
					display: flex;
					justify-content: space-between;
					align-items: center;
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

			.info_body_img {
				display: flex;
				align-items: center;
				justify-content: center;

				.info_body_img_htxe {
					width: 268px;
					height: 200px;
				}
			}
		}

		.activate_popup {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 999999;
			background-color: rgba(0, 0, 0, 0.6);
			padding-top: 70px;

			.activate_popup_box {
				margin: 0 auto;
				width: 312px;
				height: 408px;
				background: url("@/static/user/HTXE4.png") no-repeat;
				background-size: 100% 100%;
				position: relative;

				.activate_popup_box_open {
					width: 210px;
					height: 80px;
					position: absolute;
					bottom: 22px;
					left: 16%;
				}

				.activate_popup_box_del {
					width: 30px;
					height: 30px;
					position: absolute;
					bottom: -55px;
					left: 44%;
				}
			}
		}
		.activate_popups {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 999999;
			background-color: rgba(0, 0, 0, 0.6);
			padding-top: 70px;
		
			.activate_popup_box {
				margin: 0 auto;
				width: 312px;
				height: 408px;
				background: url("@/static/user/HTXE4_1.png") no-repeat;
				background-size: 100% 100%;
				position: relative;
		
				.activate_popup_box_open {
					width: 210px;
					height: 80px;
					position: absolute;
					bottom: 22px;
					left: 16%;
				}
		
				.activate_popup_box_del {
					width: 30px;
					height: 30px;
					position: absolute;
					bottom: -55px;
					left: 44%;
				}
			}
		}
	}
</style>