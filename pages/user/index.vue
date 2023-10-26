<template>
	<view class="user_index">
		<view class="user_head">
			<view class="user_head_left">
				<view class="name">Ks</view>
				<view class="account_level">
					<u--text mode="name" text="张三三" format="encrypt"></u--text>
					<image ></image>
					<image ></image>
				</view>
			</view>
			
		</view>
		<view class="user_head_right">
			
		<image class="user_head_right" ></image>
		</view>
		<Footer pageName='user'></Footer>
	</view>
</template>


<script>
	export default {
		components: {
			Footer: () => import('@/components/footer.vue')
		},
		data() {
			return {

			}
		},
		created() {},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.user_index {
		width: 100vw;
		height: 100vh;
		padding: 16px;
		box-sizing: border-box;

		.user_head {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 59px;

			.user_head_left {
				width: 100%;
				height: 100%;
				.name {
					font-size: 26px;
					color: rgb(0, 0, 0);
				}
				.account_level{
					display: flex;
					align-items: center;
				}
				
			}

			.user_head_right {}
		}
	}
</style>