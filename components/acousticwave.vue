<template>
	<view class="acousticwave_box">
		<view class="acousticwave line1"></view>
		<view class="acousticwave line2"></view>
		<view class="acousticwave line3"></view>
		<view class="acousticwave line4"></view>
		<view class="acousticwave line5"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.acousticwave_box{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.acousticwave {
		background-color: #7AFAD8; //声波颜色
		width: 2px;
		height: 4px;
		margin: 0 1px;
		border-radius: 1px;
		border: none;
		animation: note 0.4s ease-in-out;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}
	.line1{
		animation-delay: -1s;
	}
	.line2{
		animation-delay: -0.8s;
	}
	.line3{
		animation-delay: -0.6s;
	}
	.line4{
		animation-delay: -0.4s;
	}
	.line5{
		animation-delay: -0.1s;
	}
	@keyframes note {
		from {
			transform: scaleY(1);
		}

		to {
			transform: scaleY(4);
		}
	}
</style>