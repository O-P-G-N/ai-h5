<template>
	<view class="container">
		<view>index</view>

		<u-icon name="photo" color="#2979ff" size="28"></u-icon>
		<u-button type="success" :ripple="true">test</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
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
</style>
