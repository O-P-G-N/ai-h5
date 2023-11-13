<template>
	<view class="starpay">
		<u-navbar @leftClick="goBackUser" leftText="返回" title="充值" :safeAreaInsetTop="false">
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
				<view class="rc_title">充值地址</view>
				<view class="address">{{to}}</view>
				<view class="copy_address" @click="copyAdd">复制地址</view>
				<view class="rc_details">
					<view class="rc_de_title">温馨提示</view>
					<view class="rc_de">
						尊敬的客户:
						<br/>
						为了一直致力于为您提供安全、高效的服务，在您进行储值时，请务必注意以下事项:
						<br/>
						① 区块链交易存在不可预测的市场波动和风险。充值资金的价值可能受市场因素的影响而波动，用户应自行承担由此可能引起的盈亏。
						<br/>
						② 由于区块链网络拥堵、交易确认时间等原因，充值可能会面临延迟。我们将尽最大努力确保资金及时到账，但不能保证无延迟。
						<br/>
						③用户在充值过程中应仔细核对充值金额、币种等信息，平台不对因用户提供的错误信息导致的损失负责。
						<br/>
						④用户可通过提供的交易哈希值在区块链浏览器上查询交易状态。平台不对用户未能查询或查证交易详情导致的损失负责。
						<br/>
						⑤如因不可抗力、政策法规变化等原因导致的充值问题，平台不承担责任。用户理解并接受，在这些情况下，平台可能无法提供满足用户期望的服务。
						<br/>
						⑥用户有责任保管好个人账户及登录信息，平台不对用户因未妥善保管账户信息而导致的损失负责。
						<br/>
						⑦平台保留随时修改和更新本免责协议的权利。用户在使用服务前应仔细阅读最新版本的免责协议。
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
					title: '二维码生成中',
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
				uni.setClipboardData({
					data: this.to,
					success: function() {
						uni.showToast({
							title: "复制成功!",
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