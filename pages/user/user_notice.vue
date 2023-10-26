<template>
	<view class="user_notice">
		<u-navbar @leftClick="goBackUser" leftText="返回" title="通知" :safeAreaInsetTop="false">
			<view class="u-nav-slot" slot="left">
				<image class="head_back_img" src="@/static/user/round_back.png" mode=""></image>
			</view>
		</u-navbar>
		<view class="container_nei">
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
	
			}
		},
		created() {},
		methods: {
			// 返回个人中心
			goBackUser(){
				uni.switchTab({
					url: `/pages/user/index`
				});
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
		.u-navbar{
			height: 51px;
			.u-navbar__content{
				height: 51px !important;
				.u-navbar__content__left{
					padding-left: 18px;
					.u-nav-slot{
						width: 17px;
						height: 15px;
					}
					.head_back_img{
						width: 100%;
						height: 100%;
					}
				}
				.u-navbar__content__title{
					font-weight: 600;
					font-size: 17px;
				}
				
			}
		}
		
		.container_nei{
			padding: 20px 20px;
			.content{
				margin-top: 15px;
				    font-size: 15px;
				    word-break: break-word;
				    word-wrap: break-word;
					.nothing_box{
						width: 346px;
						    display: flex;
						    justify-content: center;
						    align-items: center;
						    margin-top: 87px;
							.nothing{
								width: 221px;
								    height: 215px;
								    margin: auto;
							}
					}
			}
		}
	}
</style>