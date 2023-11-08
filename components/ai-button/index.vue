<!-- <ai-button  class="next-btn" >下一步</ai-button> -->
<template>
	<view :ref='refName' :id='refName' class="button-main" :style="{'--width':`${widthPx}px`,'--waterColor':waterColor}"
		@click="butonClick">
		<button :disabled="disabled" :style="{backgroundColor:bg,height:btnHeight,fontSize:fontSize,color:color}" :loading="loading" class="button-content">
			<slot></slot>
		</button>
		<view class="waterView" v-if='showWater' :style="{left:XY.left,top:XY.top}">
			<view class="point"></view>
			<view class="wave1" @animationend='animationendFn'></view>
			<view class="wave2" @animationend='animationendFn'></view>
			<view class="wave3" @animationend='animationendFn'></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			waterColor: {
				type: String,
				default: 'rgb(89, 89, 89)'
			},
			disabled: {
				type: Boolean,
				default: false
			},
			bg: {
				type: String,
				default: "#2979ff"
			},
			btnHeight: {
				type: String,
				default: "46px"
			},
			fontSize: {
				type: String,
				default: ""
			},
			color:{
				type: String,
				default: "#fff"
			},
			loading:{
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				refName: 'buttonMain_' + new Date().getTime() + '_' + parseInt(Math.random() * 10000),
				widthPx: 0,
				showWater: false,
				XY: {},
			}
		},
		methods: {
			animationendFn() {
				this.showWater = false
			},
			butonClick(e) {
				if (!this.disabled) {
					const query = uni.createSelectorQuery().in(this);
					query.select('#' + this.refName).boundingClientRect()
					query.exec((res) => {
						const dataInfo = res[0]
						// 计算需要显示的水波纹在button内的位置
						const clickX = Math.abs(e.detail.x - dataInfo.left)
						const clickY = Math.abs(e.detail.y - dataInfo.top)
						this.XY = {
							left: clickX + 'px',
							top: clickY + 'px'
						}
						const widthPx = dataInfo.width
						const heightPX = dataInfo.height
						const arrayPx = [clickX, widthPx - clickX, clickY, heightPX - clickY]
						// 获取生成圆最大的宽度
						const maxPx = Math.max(...arrayPx)
						this.widthPx = maxPx * 2
						this.showWater = true
						this.$emit('click', e)
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.button-main {
		position: relative;
		overflow: hidden;
	}

	uni-button[disabled]:not([type]),
	uni-button[disabled][type=default] {
		color: #fff;
		background-color: hsla(0,0%,100%,.35);
	}

	.button-content {
		position: relative;
		z-index: 9;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		color: #fff;
	}

	// 水波纹外层
	.waterView {
		width: 100%;
		height: 100%;
		z-index: 4444;
		transform: translate(-50%, -50%);
		position: absolute;
	}

	// 中心点
	.point {
		width: 10px;
		height: 10px;
		border-radius: 100px;
		background-color: var(--waterColor);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0.1;
	}

	// 波纹
	.wave1,
	.wave2,
	.wave3 {
		width: 0px;
		height: 0px;
		border-radius: 100px;
		background-color: var(--waterColor);
		/*居中*/
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation: wave 0.5s;
		transform-origin: center center;

	}

	@keyframes wave {
		0% {
			width: 0;
			height: 0;
			opacity: 1;
		}

		100% {
			width: var(--width);
			height: var(--width);
			opacity: 0;
		}
	}
</style>