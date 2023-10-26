<template>
	<view class="user_index">
		<view class="user_head">
			<view class="user_head_left">
				<view class="name">Ks</view>
				<view class="account_level">
					
				</view>
			</view>
			<image class="user_head_right" :mode="item.mode" :src="src"
			                        @error="imageError"></image>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.user_index {
		width: 100vw;
		height: 100vh;
		padding: 16px;

		.user_head {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 59px;

			.user_head_left {
				.name {
					font-size: 26px;
					color: rgb(0, 0, 0);
				}
			}
			.user_head_right{
				
			}
		}

		
	}
</style>