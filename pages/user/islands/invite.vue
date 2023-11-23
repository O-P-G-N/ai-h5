<template>
	<view class="invite">
		<u-navbar @leftClick="goBackUser" :title="$t('user.islands.ivt.share')" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="container_nei">
			<view class="invitemain">
				<view class="invitemain_nei">
					<view class="invitetop">
						<view class="invitetitle">{{$t('user.asset.islands.idj.Share_with_friends')}}</view>
						<view class="inviteintro">{{$t('user.asset.islands.idj.exgpt_opens_up_new_worlds_for_you')}}
						</view>
					</view>
					<view class="invitein">
						<canvas canvas-id="qrcode" :style="{width: `100%`, height: `100%`}" />
					</view>
					<view class="invitebottom">
						<!-- <view class="inviteleft">{{$t('login.activity_code')}}</view>
						<view class="inviteright">{{invitationCode}}
							<image @click="copyInvite" class="inviteright_img" src="@/static/islands/copywhite.png" mode=""></image>
						</view> -->
						{{onlineUrl}}#/pages/loginReg/reg_account?code={{invitationCode}}
					</view>
				</view>
			</view>
			<button class="editpassbtn" @click="copyInvite">
				<view class="bothsides"></view>
				<view class="">{{$t('user.asset.islands.idj.copy_the_link')}}</view>
				<image class="bothsides" src="@/static/islands/invitecopy.png" mode=""></image>
			</button>
		</view>
	</view>
</template>

<script>
	import app_config from '../../../common/config.js';
	import uQRCode from '@/uni_modules/cc-defineQRCode/components/cc-defineQRCode/common/uqrcode.js'
	export default {
		data() {
			return {
				invitationCode: "", //邀请码
				onlineUrl: ""
			};
		},
		onShow() {
			this.onlineUrl = app_config.onlineUrl
			this.getInvitationCode();
		},
		methods: {
			// 返回我的岛屿
			goBackUser() {
				uni.navigateTo({
					url: `/pages/user/islands/identity_judge`
				});
			},
			// 获取邀请码
			getInvitationCode() {
				uni.request({
					url: `/island/invite-code`,
					method: "GET",
					success: (res) => {
						this.invitationCode = res.data;
						this.make(res.data)
					}
				});
			},
			// 生成二维码
			make(data) {
				let that = this
				uni.showLoading({
					title: that.$t('user.islands.ivt.qr_gen'),
					mask: true
				})

				uQRCode.make({
					canvasId: 'qrcode',
					text: data,
					size: 160,
					margin: 10,
					success: res => {

					},
					complete: () => {
						uni.hideLoading()
					}
				})
			},
			// 复制链接
			copyInvite() {
				let that = this
				uni.setClipboardData({
					data: app_config.onlineUrl + `#/pages/loginReg/reg_account?code=${that.invitationCode}`,
					success: () => {
						uni.showToast({
							title: that.$t('user.islands.ivt.copy_suc'),
							success: function(res) {}
						})
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.invite {
		width: 100%;
		height: 100vh;
		overflow: hidden;
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

		.container_nei {
			padding: 21px 21px;
			box-sizing: border-box;

			.invitemain {
				width: 100%;
				height: 65vh;
				background-image: url("@/static/islands/invitebg.png");
				background-size: cover;
				background-position: 50%;
				background-repeat: no-repeat;
				border-radius: 21px;
				box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .5);
				margin-top: 16px;

				.invitemain_nei {
					padding: 32px 26px 26px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					height: 100%;
					width: 100%;
					box-sizing: border-box;

					.invitetop {
						text-align: center;

						.invitetitle {
							font-size: 16px;
							color: #fff;
						}

						.inviteintro {
							font-size: 12px;
							color: hsla(0, 0%, 100%, .8);
							margin-top: 10px;
						}
					}

					.invitein {
						padding: 13px;
						border-radius: 16px;
						background: #fff;
						box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .5);
						width: 160px;
						height: 160px;
					}

					.invitebottom {
						max-width: 100%;
						// display: flex;
						// align-items: center;
						// justify-content: center;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						color: #fff;

						.inviteleft {
							font-size: 16px;
						}

						.inviteright {
							display: flex;
							align-items: center;
							font-size: 17px;

							.inviteright_img {
								width: 19px;
								height: 19px;
								margin-left: 5px;
							}
						}
					}
				}
			}

			.editpassbtn {
				background: #333;
				height: 58px;
				line-height: 58px;
				color: #fff;
				letter-spacing: 1px;
				border-radius: 56px;
				margin-top: 42px;
				display: flex !important;
				align-items: center;
				justify-content: space-between;

				.bothsides {
					width: 21px;
					height: 21px;
				}
			}
		}
	}
</style>