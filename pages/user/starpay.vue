<template>
	<view class="starpay">
		<u-navbar @leftClick="goBackUser" :leftText="$t('user.about.i1')" :title="$t('user.capital_flow.i33')" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="VirtualcurrencyRecharge_page">
			<view class="rc_content">
				<h3 align="center"><u-count-down :time=" 60 * 60 * 1000" format="mm:ss"></u-count-down></h3>
				<h3 align="center">{{type}}</h3>
				<view class="rc_img_code">
					<view class="">
						<view class="qrcode">
							<canvas canvas-id="qrcode" :style="{width: `200px`, height: `200px`}" />
						</view>
					</view>
				</view>
				<view class="rc_title">{{$t('user.capital_flow.i39')}}</view>
				<view class="address">{{to}}</view>
				<view class="copy_address" @click="copyAdd">{{$t('user.capital_flow.i40')}}</view>
				<view class="rc_details">
					<view class="rc_de_title">{{$t('user.islands.sc.sn.i1')}}</view>
					<view class="rc_de">
						{{$t('user.capital_flow.i800')}}:
						<br/>
						{{$t('user.capital_flow.i80')}}
						<br/>
						① {{$t('user.capital_flow.i81')}}
						<br/>
						② {{$t('user.capital_flow.i82')}}
						<br/>
						③{{$t('user.capital_flow.i83')}}
						<br/>
						④{{$t('user.capital_flow.i84')}}
						<br/>
						⑤{{$t('user.capital_flow.i85')}}
						<br/>
						⑥{{$t('user.capital_flow.i86')}}
						<br/>
						⑦{{$t('user.capital_flow.i87')}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uQRCode from '@/uni_modules/cc-defineQRCode/components/cc-defineQRCode/common/uqrcode.js'
	export default {
		data() {
			return {
				type: "", //钱包类型
				to: "", //充值地址
			};
		},
		onLoad(option) {
			this.type = option.type;
			this.to = option.to;
			console.log(option);
			this.make()
		},
		methods: {
			// 返回积分查看
			goBackUser() {
				uni.navigateTo({
					url: `/pages/user/recharge?show=1`
				});
			},
			// 生成二维码
			make() {
				uni.showLoading({
					title: this.$t('user.islands.ivt.qr_gen'),
					mask: true
				})

				uQRCode.make({
					canvasId: 'qrcode',
					text: this.to,
					size: 200,
					margin: 10,
					success: res => {

					},
					complete: () => {
						uni.hideLoading()
					}
				})
			},
			// 复制地址
			copyAdd() {
				let that = this
				console.log(that.to);
				uni.setClipboardData({
					data: that.to,
					success: function() {
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
	::v-deep.starpay {
		padding: 21px 21px;
		background-color: #fff;
		width: 100wh;
		min-height: 100vh;

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

		.VirtualcurrencyRecharge_page {
			.rc_content {
				padding: 16px;
				box-sizing: border-box;

				.u-count-down__text {
					color: black;
					font-size: 16px;
				}

				.rc_img_code {
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 16px;

					.qrcode {
						padding: 12px;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}

				.rc_title {
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 16px;
				}

				.address {
					margin-top: 16px;
					text-align: center;
					padding: 0 26px;
					margin-bottom: 26px;
					word-break: break-all;
				}

				.copy_address {
					width: 90%;
					height: 53px;
					font-size: 13px;
					border-radius: 26px;
					display: flex;
					justify-content: center;
					align-items: center;
					border: 1px solid #000;
					margin: 0 auto;
				}

				.rc_details {
					padding: 21px;

					.rc_de_title {
						font-size: 10px;
						font-weight: 600;
						margin-bottom: 10px;
					}

					.rc_de {
						font-size: 12px;
					}
				}
			}

		}
	}
</style>