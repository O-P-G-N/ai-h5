<template>
	<view class="container">
		<view>user</view>
		<Footer pageName='user'></Footer>
	</view>
</template>


<script>
	export default {
		components:{
			Footer:()=>import('@/components/footer.vue')
		},
		data() {
			return {

			}
		},
		created() {
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";

	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}

	.mian {
		width: 750rpx;
		height: 300rpx;
		background-color: red;
	}
</style>