<template>
	<view class="set_name">
		<u-navbar @leftClick="goBackUser" :title="$t('user.islands.sc.idx.i7')" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main">
			<view class="cell">
				<input class="uni-input" v-model="nickName" maxlength="20" :placeholder="$t('user.islands.sc.sn.i4')" />
			</view>
			<view class="tip">
				<view class="">{{$t('user.islands.sc.sn.i1')}}：</view>
				<view class="">{{$t('user.islands.sc.sn.i2')}}</view>
			</view>
			<ai-button :btnHeight="'53px'" :bg="'#333'" class="next-btn editpassbtn"
				@click="ConfirmSet">{{$t('user.islands.sc.sn.i3')}}</ai-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickName: "", //昵称
			};
		},
		methods: {
			// 返回
			goBackUser() {
				uni.redirectTo({
					url: `/pages/user/securitycenter/index`
				});
			},
			// 确认设置
			ConfirmSet() {
				uni.request({
					url: '/member/setNickName',
					method: "POST",
					data:{nickName:this.nickName},
					success: (res) => {
							if(res.code==200){
								uni.showToast({
									title: this.$t('user.islands.sc.sn.i5'),
									success: function(res) {
										let time = setTimeout(() => {
											clearTimeout(time)
											uni.redirectTo({
												url: `/pages/user/securitycenter/index`
											});
										}, 1000)
									},
								})
							}
						
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.set_name {
		min-height: 100vh;
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

		.main {
			padding: 20px;
			box-sizing: border-box;

			.cell {
				background: #f5f6fa;
				border-radius: 18px;
				margin-bottom: 16px;
				height: 42px;
				padding-left: 10px;
				display: flex;
				align-items: center;

				.uni-input {
					width: 100%;
				}

				.uni-input-placeholder {
					color: rgb(192, 196, 204);
					font-size: 16px;
				}
			}

			.tip {
				color: #000;
				font-size: 16px;
				text-align: center;
			}

			.editpassbtn {
				height: 53px;
				line-height: 53px;
				color: #fff;
				letter-spacing: 1px;
				border-radius: 56px;
				margin-top: 26px;
			}
		}

	}
</style>