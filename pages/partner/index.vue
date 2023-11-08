<template>
	<view class="partner">
		<u-navbar @leftClick="goBackUser" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="avatar_card">
			<view class="t_bor_r">
				<image class="t_bor_r_img" src="~@/static/tabbar/tx.webp" mode=""></image>
			</view>
			<view class="right_avatar">
				<text class="right_avatar_top">nike</text>
				<ai-button @click="upTrain" :btnHeight="'26px'" :fontSize="'12px'" :bg="'#333'"
					class="next-btn btn-view">升级训练</ai-button>
			</view>
		</view>
		<view class="chat-view">
			<view class="chat">
				<view class="chat_show">
					<view class="css-7feio9">
						<view class="css-18ak0yj">
							<image class="css-18ak0yj_img" src="@/static/market/6527edd6282c8.webp" mode=""></image>
						</view>
						<view class="chakra-card">455555555555湖广会馆规划化工辉煌国际个会很尴尬哈哈哈55555hjkhjkhjkhjkjhkjhkjhkjkh</view>
					</view>
					<view class="css-p92e7h">
						<view class="css-v5t6b3">
							<view class="css-f2diyg">
								<image class="css-f2diyg_img" src="@/static/market/human.png" mode=""></image>
							</view>
						</view>
						<view class="css-1b3trlo">
							<view class="chakra-card">hjhjhhhhkl即可拉伸动环监控拉德季考拉很大合计登记好啦黄金卡手动滑稽卡仕达酱好卡啊四大皆空哈手动滑稽快回家k</view>
						</view>
					</view>
					<view class="css-7feio9">
						<view class="css-18ak0yj">
							<image class="css-18ak0yj_img" src="@/static/market/6527edd6282c8.webp" mode=""></image>
						</view>
						<view class="chakra-card">455555555555湖广会馆规划化工辉煌国际个会很尴尬哈哈哈55555hjkhjkhjkhjkjhkjhkjhkjkh</view>
					</view>
					<view class="css-p92e7h">
						<view class="css-v5t6b3">
							<view class="css-f2diyg">
								<image class="css-f2diyg_img" src="@/static/market/human.png" mode=""></image>
							</view>
						</view>
						<view class="css-1b3trlo">
							<view class="chakra-card">hjhjhhhhkl即可拉伸动环监控拉德季考拉很大合计登记好啦黄金卡手动滑稽卡仕达酱好卡啊四大皆空哈手动滑稽快回家k</view>
						</view>
					</view>
					<view class="css-7feio9">
						<view class="css-18ak0yj">
							<image class="css-18ak0yj_img" src="@/static/market/6527edd6282c8.webp" mode=""></image>
						</view>
						<view class="chakra-card">455555555555湖广会馆规划化工辉煌国际个会很尴尬哈哈哈55555hjkhjkhjkhjkjhkjhkjhkjkh</view>
					</view>
					<view class="css-p92e7h">
						<view class="css-v5t6b3">
							<view class="css-f2diyg">
								<image class="css-f2diyg_img" src="@/static/market/human.png" mode=""></image>
							</view>
						</view>
						<view class="css-1b3trlo">
							<view class="chakra-card">hjhjhhhhkl即可拉伸动环监控拉德季考拉很大合计登记好啦黄金卡手动滑稽卡仕达酱好卡啊四大皆空哈手动滑稽快回家k</view>
						</view>
					</view>
					<view class="css-7feio9">
						<view class="css-18ak0yj">
							<image class="css-18ak0yj_img" src="@/static/market/6527edd6282c8.webp" mode=""></image>
						</view>
						<view class="chakra-card">455555555555湖广会馆规划化工辉煌国际个会很尴尬哈哈哈55555hjkhjkhjkhjkjhkjhkjhkjkh</view>
					</view>
					<view class="css-p92e7h">
						<view class="css-v5t6b3">
							<view class="css-f2diyg">
								<image class="css-f2diyg_img" src="@/static/market/human.png" mode=""></image>
							</view>
						</view>
						<view class="css-1b3trlo">
							<view class="chakra-card">hjhjhhhhkl即可拉伸动环监控拉德季考拉很大合计登记好啦黄金卡手动滑稽卡仕达酱好卡啊四大皆空哈手动滑稽快回家k</view>
						</view>
					</view>
				</view>
				<view class="chat_text">
					<textarea class="chat_text_trea" placeholder-style="color:#24282C" placeholder="Enter..."/>
					<image class="chat_text_btn" src="@/static/market/PaperAirplane.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {

			};
		},
		methods: {
			// 返回
			goBackUser() {
				uni.switchTab({
					url: `/pages/index/index`
				});
			},
			// 升级训练
			upTrain() {
				let time = setTimeout(() => {
					clearTimeout(time)
					uni.navigateTo({
						url: `/pages/partner/upgrade_train`
					});
				}, 500)
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.partner {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		background-color: #fff;

		.u-navbar {
			height: 44px;

			.u-navbar__content {
				height: 44px !important;

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

		.avatar_card {
			width: 60%;
			display: flex;
			margin: 10px 0;
			height: 80px;
			margin: 10px auto;
			justify-content: center;
			box-sizing: border-box;

			.t_bor_r {
				width: 80px;
				height: 80px;
				border-radius: 50%;
				overflow: hidden;

				.t_bor_r_img {
					width: 100%;
					height: 100%;
				}
			}

			.right_avatar {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 10px 0;
				margin-left: 10px;
				text-align: center;
				box-sizing: border-box;

				.right_avatar_top {
					color: #000;
					font-size: 19px;
				}

				.btn-view {
					width: 100%;
					text-align: center;
					line-height: 26px;
					font-size: 12px;
					color: #fff;
					border-radius: 32px;
				}
			}
		}

		.chat-view {
			// flex: 1;
			height: calc(100% - 44px - 80px);
			width: 100%;
			background: #fff;
			overflow-y: auto;

			.chat {
				height: 100%;
				font-size: 50px;
				box-sizing: border-box;

				.chat_show {
					height: 80%;
					padding: 10px;
					box-sizing: border-box;
					overflow-y: auto;

					.css-7feio9 {
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						padding: 1.25rem 0;

						.css-18ak0yj {
							width: 28px;
							height: 28px;
							padding: 2px;
							border-radius: 0.5rem;
							border: 1px solid rgb(222, 224, 226);
							box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;
							background: #f0f7ff;

							.css-18ak0yj_img {
								object-fit: cover;
								border-radius: 50%;
								width: 100%;
								height: 100%;
							}
						}

						.chakra-card {
							border-radius: 0px 8px 8px;
							box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 8px;
							background: #fff;
							max-width: calc(100% - 65px);
							font-size: 14px;
							margin-top: 0.5rem;
							padding: 0.75rem;
						}
					}

					.css-p92e7h {
						display: flex;
						flex-direction: column;
						align-items: flex-end;
						padding: 1.25rem 0;

						.css-v5t6b3 {
							display: flex;
							width: 100%;
							-webkit-box-align: center;
							align-items: center;
							-webkit-box-pack: end;
							justify-content: flex-end;

							.css-f2diyg {
								width: 28px;
								height: 28px;
								padding: 2px;
								border-radius: 0.5rem;
								border: 1px solid rgb(222, 224, 226);
								box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;
								background: #fff;

								.css-f2diyg_img {
									border-radius: 50%;
									width: 100%;
									height: 100%;
								}
							}
						}

						.css-1b3trlo {
							max-width: calc(100% - 65px);
							margin-top: 6px;

							.chakra-card {
								border-radius: 8px 0px 8px 8px;
								box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 8px;
								background: #d6e8ff;
								max-width: calc(100% - 25px);
								font-size: 14px;
								margin-top: 0.5rem;
								padding: 0.75rem;
							}
						}
					}
				}

				.chat_text {
					height: 20%;
					box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
					padding: 18px 20px;
					padding-right: 55px;
					box-sizing: border-box;
					position: relative;
					.chat_text_trea{
						width: 100%;
						height: 100%;
					}
					.chat_text_btn{
						width: 25px;
						height: 25px;
						position: absolute;
						right: 20px;
						top: 20px;
					}
				}
			}
		}
	}
</style>