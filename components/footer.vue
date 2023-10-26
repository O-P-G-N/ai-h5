<template>
	<view class="footerMain">
		<view class="footer_every">
			<image class="icon" src="~@/static/tabbar/one.png"></image>
		</view>
		<view class="footer_every">
			<image class="icon" src="~@/static/tabbar/two.png"></image>
		</view>
		<view class="footer_every" style="width: 28%;">
			<image class="icon" src="~@/static/tabbar/one.png"></image>
		</view>
		<view class="footer_every">
			<image class="icon" src="~@/static/tabbar/four.png"></image>
		</view>
		<view class="footer_every">
			<image class="icon" src="~@/static/tabbar/five.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
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
	.footerMain {
		position: fixed;
		z-index: 99;
		height: 124rpx;
		bottom: 42rpx;
		left: 15rpx;
		right: 0;
		width: 720rpx;
		border-radius: 32px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #ededed;
		.footer_every{
			    width: 18%;
				height: 100%;
			    display: flex;
				flex-direction: column;
				justify-content: center;
			    align-items: center;
			    font-size: 17px;
			    position: relative;
				.icon{
					width: 84rpx;
					height: 84rpx;
				}
		}
	}
</style>