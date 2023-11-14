<template>
	<view class="asset_details">
		<view class="navTow">
			<u-navbar @leftClick="goBackUser" :title="$t('user.islands.sc.idx.i1')" :safeAreaInsetTop="false">
				<view class="u-nav-slot" slot="left">
					<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
				</view>
			</u-navbar>
		</view>
		<view class="container_nei">
			<view class="main">
				<view class="cellgroup">
					<u-cell-group :border="false">
						<u-cell :title="$t('user.islands.sc.idx.i4')" :value="statusInfo.password?$t('user.islands.sc.idx.i2'):$t('user.islands.sc.idx.i3')" :is-link="true" @click="loginPassword">
						</u-cell>
						<u-cell :title="$t('user.islands.sc.idx.i5')" :value="statusInfo.withdrawPassword?$t('user.islands.sc.idx.i2'):$t('user.islands.sc.idx.i3')" :is-link="true" @click="tradePassword">
						</u-cell>
						<u-cell :title="$t('user.islands.sc.idx.i6')" :value="statusInfo.question?$t('user.islands.sc.idx.i2'):$t('user.islands.sc.idx.i3')" :is-link="true" @click="securitySet">
						</u-cell>
						<u-cell :title="$t('user.islands.sc.idx.i7')" :value="statusInfo.nickName?$t('user.islands.sc.idx.i2'):$t('user.islands.sc.idx.i3')" :is-link="true" @click="setNickName">
						</u-cell>
					</u-cell-group>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			statusInfo:{},//状态
			};
		},
		onShow() {
			this.getstatus();
		},
		methods: {
			// 返回积分查看
			goBackUser() {
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			// 登录密码
			loginPassword(){
				uni.navigateTo({
					url: `/pages/user/securitycenter/editpass`
				});
			},
			// 交易密码
			tradePassword(){
				uni.navigateTo({
					url: `/pages/user/securitycenter/fundeditpass`
				});
			},
			// 获取状态
			getstatus(){
				uni.request({
					url: `/member/getAccountIsComplete`,
					method: "GET",
					success: (res) => {
						this.statusInfo=res.data;
					},
				})
			},
			//密保设置
			securitySet(){
				if(this.statusInfo.question){
					uni.$u.toast(this.$t('user.islands.sc.idx.i8'))
				}else{
					uni.navigateTo({
						url: `/pages/user/securitycenter/Confidentiality`
					});
				}
				
			},
			// 设置昵称
			setNickName(){
				if(this.statusInfo.nickName){
					uni.$u.toast(this.$t('user.islands.sc.idx.i9'))
				}else{
					uni.navigateTo({
						url: `/pages/user/securitycenter/settingName`
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.asset_details {
		min-height: 90vh;
		padding-top: 53px !important;
		overflow: hidden;
		box-sizing: border-box;

		.navTow {
			width: 100%;
			position: absolute;
			top: 0;
			z-index: 999;

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
		}

		.container_nei {
			box-sizing: border-box;
			width: 100%;
			position: absolute;
			top: 53px;
			padding: 21px 21px;

			.cellgroup {
				.u-cell {
					background: #f5f6fa;
					border-radius: 18px;
					margin-bottom: 16px;
					font-weight: bold;

					.u-line {
						display: none;
					}

					.u-cell__body {
						padding: 21px 16px;
					}

					.u-icon__icon--info {
						color: #000;
					}
				}
			}
		}

	}
</style>