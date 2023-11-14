<template>
	<view class="Confidentiality">
		<u-navbar @leftClick="goBackUser" :title="$t('user.islands.sc.cd.sc')" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="main">
			<view class="cell">
				<view v-if="!problem" @click="selectProblem" class="placeholderClass">{{$t('user.islands.sc.cd.cfcq')}}</view>
				<view v-else class="confvalue" @click="selectProblem">{{problem}}</view>
			</view>
			<view class="cell">
				<input v-model="from.content" class="uni-input" maxlength="20" :placeholder="$t('user.islands.sc.cd.pima')" />
			</view>
			<view class="tip">{{$t('user.islands.sc.cd.kim')}}</view>
			<ai-button :btnHeight="'53px'" :bg="'#333'" class="next-btn editpassbtn"
				@click="ConfirmSet">{{$t('user.islands.sc.cd.cs')}}</ai-button>
		</view>
		<u-picker closeOnClickOverlay @close="closeShow" @cancel="closeShow" @confirm="confirmBtn" :show="show"
			:columns="columns" keyName="value"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				problem: "", //页面展示问题
				from: {
					key: "", //问题的key
					content: "", //答案
				},
				show: false, //问题弹窗
				columns: [],
			};
		},
		onShow() {
			this.getSecurityQuestion()
		},
		methods: {
			// 返回
			goBackUser() {
				uni.redirectTo({
					url: `/pages/user/securitycenter/index`
				});
			},
			// 获取所有问题
			getSecurityQuestion() {
				this.columns = []
				uni.request({
					url: '/member/getSecurityQuestionList',
					method: "GET",
					success: (res) => {
						this.columns.push(res.data);
					}
				});
			},
			// 确认绑定
			ConfirmSet() {
				if (this.from.key == "") {
					uni.$u.toast(this.$t('user.islands.sc.cd.scq'));
					return
				} else if (this.from.content == "") {
					uni.$u.toast(this.$t('user.islands.sc.cd.cbe'));
					return
				} else {
					uni.request({
						url: '/member/saveSecurityQuestion',
						method: "POST",
						data: [this.from],
						success: (res) => {
							if (res.code == 200) {
								uni.showToast({
									title: this.$t('user.islands.sc.cd.sttscc'),
									success: function() {
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
				}
			},
			// 选择问题
			selectProblem() {
				this.show = true;
			},
			// 关闭问题选择器
			closeShow() {
				this.show = false;
			},
			// 确定问题选择
			confirmBtn(val) {
				this.show = false;
				this.problem = val.value[0].value;
				this.from.key = val.value[0].key;
			}
		}

	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.Confidentiality {
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
					color: #ccc;
					font-size: 16px;
				}

				.placeholderClass {
					color: #ccc;
					width: 100%;
					font-size: 16px;
				}

				.confvalue {
					color: #000;
					width: 100%;
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