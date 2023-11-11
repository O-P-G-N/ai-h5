<template>
	<view class="container">
		<view class="community">
			<view class="tips_box">
				<image class="community_img" src="@/static/user/community.png" mode=""></image>
				<view class="community_text">社区暂未开放，敬请期待~</view>
			</view>
		</view>
		<Footer pageName='community'></Footer>
		<u-modal showCancelButton @confirm="setConfirm" @cancel="show=false" :show="show" title="温馨提示"
			:content='content'></u-modal>
	</view>
</template>


<script>
	export default {
		components: {
			Footer: () => import('@/components/footer.vue')
		},
		data() {
			return {
				show: false, //温馨提示模态框
				content: "", //提示框内容
				setIndex: null, //设置索引
			}
		},
		onShow() {
			this.getAccountIsComplete()
		},
		methods: {
			// 获取用户资料完整度
			getAccountIsComplete() {
				uni.request({
					url: `/member/getAccountIsComplete`,
					method: "GET",
					success: (res) => {
						if (!res.data.nickName) {
							this.show = true;
							this.setIndex = 0;
							this.content = "您的昵称未设置,请设置您的昵称"
						} else if (!res.data.question) {
							this.show = true;
							this.setIndex = 1;
							this.content = "您的密保问题未设置,请设置您的密保问题"
						} else if (!res.data.withdrawPassword) {
							this.show = true;
							this.setIndex = 2;
							this.content = "您的交易密码未设置,请设置您的交易密码"
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

	.community {
		width: 100%;
		min-height: 100vh;
		background-color: #fff;
		padding-top: 80px;
		box-sizing: border-box;

		.tips_box {

			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			margin: 0 auto;

			.community_img {
				width: 282px;
				height: 282px;
			}

			.community_text {
				font-size: 15px;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #535353;
			}
		}

	}
</style>