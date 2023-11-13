<template>
	<view class="certificate">
		<u-navbar @leftClick="goBackUser" title="卡券" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<u-tabs :list="tabList" :activeStyle="{color: '#408ab7',fontWeight: '700'}" lineColor="#408ab7" :inactiveStyle="{color:'#000',fontWeight: '700',}" :scrollable="false" @click="tabClick"></u-tabs>
		<view class="list">
			<view class="main_desc">
				<view class="title">新手礼包券</view>
			</view>
			<view class="used"></view>
			<view class="multiple_box">
				<view class="multiple">1.5倍</view>
				<view class="card_active" @click="activeBtn">
					<view class="active_btn">激活</view>
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
					name: '我的卡券',
				}, {
					name: '使用记录',
				}]
			};
		},
		methods: {
			// 返回我的岛屿
			goBackUser() {
				uni.switchTab({
					url: `/pages/community/index`
				});
				// uni.navigateTo({
				// 	url: `/pages/user/islands/index`
				// });
			},
			// 标签切换
			tabClick(val) {
				console.log(val.index);
			},
			activeBtn(){
				uni.$u.toast("暂未开放")
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.certificate {
		width: 100vw;
		height: 100vh;
		// overflow: hidden;
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
		.list{
			margin-top: 13px;
			    display: flex;
			    align-items: center;
			    width: 100%;
			    height: 85px;
			    background: #eff3fa;
			    border-radius: 21px;
			    opacity: 1;
			    border: 1px dashed #2fa2e3;
				.main_desc{
					display: flex;
					    flex-direction: column;
					    justify-content: space-evenly;
					    padding-left: 25px;
					    width: 160px;
						.title{
							text-align: left;
							    font-size: 17px;
							    font-family: Alibaba PuHuiTi -93 ExtraBold,Alibaba PuHuiTi 20;
							    font-weight: 800;
							    color: #333;
						}
				}
				.used{
					width: 69px;
					    height: 57px;
					    margin: 0 10px 0 0;
				}
				.multiple_box{
					display: flex;
					    flex: 1;
					    flex-direction: column;
					    justify-content: center;
					    align-items: center;
						.multiple{
							font-size: 17px;
							    font-family: Alibaba PuHuiTi -93 ExtraBold,Alibaba PuHuiTi 20;
							    font-weight: 800;
							    color: #2fa2e3;
						}
						.card_active{
							width: 53px;
							    height: 25px;
								.active_btn{
									background: #333;
									    margin-top: 3px;
									    border-radius: 12px;
									    width: 53px;
									    height: 25px;
									    line-height: 25px;
									    text-align: center;
									    font-size: 12px;
									    font-weight: 400;
									    color: #fff;
								}
						}
				}
		}
	}
</style>