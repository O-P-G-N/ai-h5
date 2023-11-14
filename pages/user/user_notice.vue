<template>
	<view class="user_notice">
		<u-navbar @leftClick="goBackUser" leftText="返回" title="通知" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view style="padding:0 20px;box-sizing: border-box; margin-top: 20px;" v-if="noticeList.length>0">
			<u-collapse @open="openNotice" accordion>
				<u-collapse-item v-for="(v,i) in noticeList" :key="i" :border="false" :title="v.title" :name="v.id">
					<text class="u-collapse-content">{{v.content}}</text>
					<u-badge slot="value" :offset="[10, 12]" :absolute="true" v-if="v.status==0" :isDot="true"
						type="error"></u-badge>
				</u-collapse-item>
			</u-collapse>
			<u-loadmore :status="status" />
		</view>
		<view class="container_nei" v-else>
			<view class="content">
				<view class="nothing_box">
					<image class="nothing" src="@/static/user/tongzhinothing.png" mode=""></image>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				from: {
					pageNum: 1,
					pageSize: 10
				}, //表单
				noticeList: [], //通知消息
				PageCount: 0, //总页数
				status: "loadmore",
			}
		},
		onShow() {
			this.getNotice();
		},
		onReachBottom() {
			this.loadMore();
		},
		onHide() {
			this.from.pageNum = 1;
		},
		methods: {
			// 返回个人中心
			goBackUser() {
				uni.switchTab({
					url: `/pages/user/index`
				});
			},
			getNotice() {
				// 0:维度
				uni.request({
					url: '/member/messages/1',
					method: 'GET',
					data: this.from,
					success: (res) => {
						this.noticeList = res.data.rows;
						this.PageCount = Math.ceil(res.data.total / 10);
						if (this.PageCount <= this.noticeList.length) {
							this.status = "nomore"
						}
					}
				})
			},
			// 消息已读
			openNotice(val) {
				console.log(val);
				uni.request({
					url: `/member/message/${val}`,
					method: 'GET',
					success: (res) => {
						
					}
				})
				this.noticeList.map((v)=>{
					if(v.id==val){
						v.status=1
					}
				})
			},
			loadMore() {
				if (this.from.pageNum < this.PageCount) {
					this.status = "loading"
					this.from.pageNum++;
					uni.request({
						url: '/member/messages/1',
						method: 'GET',
						data: this.from,
						success: (res) => {
							this.noticeList.push(...res.data.rows);

						}
					})
				} else {
					this.status = "nomore"
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.user_notice {
		width: 100%;
		height: 100%;

		.u-navbar {
			height: 51px;

			.u-navbar__content {
				height: 51px !important;

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
			padding: 20px 20px;

			.content {
				margin-top: 15px;
				font-size: 15px;
				word-break: break-word;
				word-wrap: break-word;

				.nothing_box {
					width: 346px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 87px;

					.nothing {
						width: 221px;
						height: 215px;
						margin: auto;
					}
				}
			}
		}

		.u-line {
			display: none;
		}

		.u-collapse-item {
			color: rgb(51, 51, 51);
			font-weight: 400;
			border-radius: 16px;
			margin-bottom: 16px;
			background: #f5f6fa;

			.u-cell {
				border-radius: 16px;

				.u-cell__body {
					padding: 21px 16px !important;
					display: flex;
					flex-direction: row;
					box-sizing: border-box;
					padding: 10px 15px;
					font-size: 15px;
					color: #303133;
					align-items: center;
					position: relative;
				}
			}
		}
	}
</style>