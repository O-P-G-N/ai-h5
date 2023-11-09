<template>
	<view class="container">
		<view class="community">
			<view class="tips_box">
				<image class="community_img" src="@/static/user/community.png" mode=""></image>
				<view class="community_text">社区暂未开放，敬请期待~</view>
			</view>
		</view>
		<Footer pageName='community'></Footer>
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

<style lang="scss" scoped>
	@import "@/uni_modules/uview-ui/index.scss";
page{
	// background-color: #fff;
}
	.community{
		width: 100%;
		min-height: 100vh;
		background-color: #fff;
		padding-top:80px ;
		box-sizing: border-box;
		
		.tips_box{
			
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			margin: 0 auto;
			.community_img{
				width: 280px;
				height: 280px;
			}
			.community_text{
				font-size: 12px;
				font-family: PingFang SC-Regular, PingFang SC;
				font-weight: 400;
				color: #535353;
			}
		}
		
	}
</style>