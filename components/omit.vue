<template>
	<view class="omit_box">
		<view class="omit omit_one"></view>
		<view class="omit omit_two"></view>
		<view class="omit omit_three"></view>
	</view>
</template>

<script>
	export default {
		name:"omit",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.omit_box{
	display: flex;
	align-items: center;
	.omit{
		background-color: #fff; //声波颜色
		width: 6px;
		height: 6px;
		margin: 0 4px;
		border-radius: 50%;
		border: none;
		animation: note 0.4s ease-in-out;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}
	.omit_one{
		animation-delay: -1s;
	}
	.omit_two{
		animation-delay: -0.9s;
	}
	.omit_three{
		animation-delay: -0.8s;
	}
	@keyframes note {
		from {
			opacity: 1;
		}
	
		to {
			opacity: 0.1;
		}
	}
}
</style>