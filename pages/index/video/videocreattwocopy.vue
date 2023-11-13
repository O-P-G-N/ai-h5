<template>
	<view class="videocreattwo">
		<u-navbar title="创作中心" :fixed='false' :safeAreaInsetTop="false" :height='50'>
			<view class="u-nav-slot" slot="left">
				<image mode="aspectFit" @click="back" class="head_back_img" src="~@/static/index/round-back.png">
				</image>
			</view>
			<view class="u-nav-slot" slot="right">
				<image mode="aspectFit" @click="toWorks" class="davincupload" src="~@/static/index/davincupload.png">
				</image>
			</view>
		</u-navbar>
		<view class="main">
			<view class="videoeverytitle">
				<view class="videoeverytitle_left">请输入数字人演讲稿</view>
				<view class="videoeverytitle_right">2/3</view>
			</view>
			<view class="topcard">
				<textarea maxlength="300" v-model="from.content" @input="inputTextarea" class="text_area"
					placeholder-style="color:grey"
					placeholder="例如:开心牌有机苹果，精选自优质的有机果园，以纯净的土地和天然的阳光培育而成。我们坚持不使用任何化学合成物，让每一颗苹果都天然无添加，无农药残留，确保您和您的家人能够品尝到最纯正的自然滋味。" />
				<view class="topcard_bottom">
					<view class="verybottom_left" @click="layoutCopy">
						使用AI编排文案
						<image class="verybottom_left_img" src="@/static/index/buzhou2icon.png" mode=""></image>
					</view>
					<view class="verybottom_right">
						{{textareaLength}}<text class="verybottom_right_text">/300</text>
						<view class="clearbtn" @click="from.content='',textareaLength=0">清空</view>
					</view>
				</view>
			</view>
			<view class="videoeverytitle" style="margin-top: 26px;">
				<view class="videoeverytitle_left">请选择数字人音色</view>
				<view class="videoeverytitle_right"></view>
			</view>
			<view class="yinsedetail">
				<template v-if="timbreList.length==0">
					<u-skeleton :title="false" :rows="1" class="yuecardskeleton" loading rowsWidth="100%"></u-skeleton>

				</template>
				<template v-else>
					<view style="display: flex; width: calc(100% - 32px);" @click="timbreShow=true">
						<view class="yinse_img">
							<image class="yinse_img" :src="displayedTimbre.imageUrl" mode=""></image>
						</view>
						<view class="yinse_content">
							<view class="yinsetitle">{{displayedTimbre.name}}</view>
							<view class="yinseintro">{{displayedTimbre.lang}}</view>
						</view>
					</view>
					<view class="rightjt">
						<image class="rightjt_img" src="@/static/index/rightjt.png" mode=""></image>
					</view>
				</template>
			</view>
			<view class="verybottom_btn">
				<ai-button :btnHeight="'53px'" :bg="'#333'" class="zhuiaddbtn" @click="nextStepThree">下一步
					2/3</ai-button>
			</view>
		</view>
		<u-popup :show="timbreShow" @close="timbreShow=false" mode="center"
			customStyle="{'background-color':'transparent'}">
			<view class="popupcontent3">
				<view class="popupcontent3_nei">
					<view class="voiceevery" @click="selectedVoices(v,i)" :class="voiceIndex==i?'voiceevery_active':''"
						v-for="(v, i) in timbreList" :key="i">
						<view class="everyone">
							<image class="guoqi" :src="v.imageUrl" mode=""></image>
							<view @click.stop="playAudio(v.soundUrl,i)">
								<u-icon :name="playFlag&&audioIndex==i?'pause':'play-right-fill'"
									color="rgb(41, 121, 255)" size="14"></u-icon>
							</view>
						</view>
						<view class="everyone_bottom">
							<view class="labels">{{v.lang}}</view>
						</view>
					</view>
				</view>
				<view class="verybottom_btn">
					<ai-button :btnHeight="'53px'" @click="timbreShow=false" :bg="'#333'"
						class="zhuiaddbtn">取消</ai-button>
					<ai-button :btnHeight="'53px'" :bg="'#fff'" :color="'#333'" class="zhongzhibtn"
						@click="determineUse">确定</ai-button>
				</view>
			</view>
		</u-popup>
		<u-popup :show="copywritingShow" @close="copywritingShow=false" mode="center"
			customStyle="{'background-color':'transparent'}">
			<view class="popupcontent" v-if="!aiModelText">
				<view class="popuptitle">
					<text class="popuptitle_left">AI生成</text>
					<image @click="copywritingShow=false" class="popuptitle_right" src="@/static/index/closeicon.png"
						mode=""></image>
				</view>
				<view class="everytitles">
					简单描述您的产品详情
				</view>
				<view class="topcard">
					<textarea v-model="modelText" maxlength="1000" @input="modelInputTextarea" class="text_area"
						placeholder-style="color:grey"
						placeholder="例如:请帮我生成一段30秒的口播内容，内容主题是关于卖苹果的，产品特色为有机苹果苹果的品牌为开心牌。" />
					<view class="topcard_bottom">
						{{modelTextareaLength}}<text class="topcard_bottom_text">/1000</text>
						<view class="clearbtn" @click="modelText='',modelTextareaLength=0">清空</view>
					</view>
				</view>
				<ai-button :btnHeight="'58px'" :bg="'#333'" :disabled="btnDisabled" class="quicklycreate"
					:loading="loading" @click="startGeneration">开始生成</ai-button>
			</view>
			<view class="popupcontent" v-else>
				<view class="popuptitle">
					<text class="popuptitle_left"></text>
					<image @click="copywritingShow=false" class="popuptitle_right" src="@/static/index/closeicon.png"
						mode=""></image>
				</view>
				<view class="everytitles">
					文案内容
				</view>
				<view class="topcards">
					<textarea v-model="aiModelText" class="text_area" placeholder-style="color:grey" />
				</view>
				<ai-button :btnHeight="'53px'" :bg="'#333'" class="zhuiaddbtn" @click="usingCopy">使用</ai-button>
				<ai-button :btnHeight="'53px'" :bg="'#fff'" :color="'#333'" class="zhongzhibtn"
					@click="aiModelText=''">重新生成</ai-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import app_config from '../../../common/config.js';
	const innerAudioContext = uni.createInnerAudioContext();
	export default {
		data() {
			return {
				from: {
					content: "", //文本域
					voiceId: "", //音色id
				}, //表单
				textareaLength: 0, //文本域字数
				copywritingShow: false, //编排文案模态框
				timbreShow: false,
				modelText: "", //模态框文字
				modelTextareaLength: 0, //模态框文本域字数
				aiModelText: "", //ai态框文字
				loading: false, //模态框按钮等待状态
				btnDisabled: false, //模态框是否禁用按钮
				timbreList: [], //音色列表
				playFlag: false, //音乐播放判断
				audioIndex: 0, //播放索引
				voiceIndex: null, //选中索引
				selectedVoice: {}, //选中的音色
				displayedTimbre: {}, //展示的音色
			};
		},
		onShow() {

		},
		onLoad(option) {
			if(option.text){
				this.from.content=JSON.parse(option.text).content;
			};
			this.displayedTimbre=JSON.parse(option.from);
			this.from.voiceId=this.displayedTimbre.voiceId;
			this.gettimbre(JSON.parse(option.from).sex)
		},
		methods: {
			back() {
				uni.navigateTo({
					url: `/pages/index/video/indexIntr`
				});
			},
			// 获取音色
			gettimbre(gender) {
				uni.request({
					url: '/video/voices',
					method: "GET",
					data: {
						sex: gender
					},
					success: (res) => {
						res.data.map((v)=>{
							v.imageUrl=app_config.apiUrl+"/"+v.imageUrl
						})
						this.timbreList = res.data;
					}
				});
			},
			// 播放语音
			playAudio(src, i) {
				if (innerAudioContext.src != src) {
					innerAudioContext.stop();
					innerAudioContext.src = src;
					innerAudioContext.play();
					this.playFlag = true
				} else {
					if (innerAudioContext.paused) {
						innerAudioContext.src = src;
						innerAudioContext.play();
						this.playFlag = true
					} else {
						innerAudioContext.stop();
						this.playFlag = false;
					}
				}
				this.audioIndex = i;
				innerAudioContext.onEnded(() => {
					this.playFlag = false
				})
			},
			// 选中音色
			selectedVoices(v, i) {
				this.voiceIndex = i;
				this.selectedVoice = v;
			},
			toWorks() {
				uni.navigateTo({
					url: `/pages/index/video/videorecord`
				});
			},
			// 文本域字数
			inputTextarea(val) {
				this.textareaLength = val.detail.cursor;
			},
			// 模态框文本域字数
			modelInputTextarea(val) {
				this.modelTextareaLength = val.detail.cursor;
			},
			// 编排文案
			layoutCopy() {
				this.copywritingShow = true
			},
			// 模态框ai生成文字
			startGeneration() {
				if (this.modelText == '') {
					return
				} else {
					this.btnDisabled = true
					this.loading = true
					uni.request({
						url: '/video/generateText',
						method: "GET",
						data: {
							text: this.modelText
						},
						success: (res) => {
							this.aiModelText = res.data;
							this.btnDisabled = false
							this.loading = false
						},
						fail: (err) => {
							this.btnDisabled = false
							this.loading = false
						}
					});
					let time=setTimeout(()=>{
						clearTimeout(time)
						uni.$u.toast('网络超时，请重试!');
						this.btnDisabled = false
						this.loading = false
					},30000)
				}
			},
			// 使用ai文案
			usingCopy() {
				this.from.content = this.aiModelText;
				this.textareaLength = this.aiModelText.length;
				this.copywritingShow = false;
			},
			// 确定使用音色
			determineUse() {
				this.displayedTimbre = this.selectedVoice;
				this.from.voiceId = this.selectedVoice.voiceId;
				this.timbreShow = false;
			},
			//tab按钮
			tabsClick() {

			},
			nextStepThree() {
				if (this.from.content == "") {
					uni.$u.toast('请输入演讲稿');
					return
				}else if (this.from.voiceId == "") {
					uni.$u.toast('请选择数字人音色');
					return
				}else {
					uni.navigateTo({
						url: `/pages/index/video/fundrecords?from=${JSON.stringify(this.from)}&displayedTimbre=${JSON.stringify(this.displayedTimbre)}`
					});

				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep.videocreattwo {
		width: 100%;
		background-color: #fff;
		min-height: 100vh;
		box-sizing: border-box;

		.u-navbar {
			height: 53px;

			.u-navbar__content {
				height: 53px !important;

				.u-navbar__content__left {
					padding-left: 18px;

					.u-nav-slot {
						width: 17px;
						height: 15px;
					}

					.head_back_img {
						width: 100%;
						height: 100%;
					}
				}

				.u-navbar__content__title {
					font-weight: 600;
					font-size: 17px;
				}

				.davincupload {
					width: 20px;
					height: 20px;
				}
			}
		}

		.main {
			padding: 0 20px;
			box-sizing: border-box;
			padding-top: 20px;

			.videoeverytitle {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 21px;

				.videoeverytitle_left {
					display: flex;
					align-items: center;
					color: #333;
					font-size: 17px;
					font-weight: 600;
				}

				.videoeverytitle_right {
					display: flex;
					align-items: center;
					color: #999;
					font-size: 14px;
					font-weight: 500;
				}
			}

			.topcard {
				padding: 16px 16px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				background: #f5f6fa;
				border-radius: 21px;
				margin-top: 16px;

				.text_area {
					height: 149px;
					width: 100% !important;
					font-size: 16px !important;
				}

				.topcard_bottom {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 10px;

					.verybottom_left {
						display: flex;
						align-items: center;
						font-size: 12px;
						color: #2fa2e3;
						padding: 5px 16px;
						background: #e1edf8;
						border-radius: 21px;

						.verybottom_left_img {
							width: 12px;
							height: 12px;
							margin-left: 10px;
						}
					}

					.verybottom_right {
						display: flex;
						align-items: center;

						.verybottom_right_text {
							color: #999;
						}

						.clearbtn {
							font-size: 12px;
							color: #989898;
							padding: 2px 10px;
							background: #e7e7e7;
							border-radius: 16px;
							margin-left: 10px;
						}
					}
				}
			}



			.yinsedetail {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 19px;

				.yinse_img {
					width: 90px;
					height: 58px;
					border-radius: 5px;
				}

				.yinse_content {
					margin: 5px 0 5px 16px;
					width: calc(100% - 106px);

					.yinsetitle {
						font-size: 17px;
						color: #333;
						font-weight: 600;
						text-transform: uppercase;
						margin-bottom: 5px;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						overflow: hidden;
						text-overflow: ellipsis;
					}

					.yinseintro {
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						overflow: hidden;
						text-overflow: ellipsis;
						color: #999;
						font-size: 14px;
					}
				}

				.rightjt {
					width: 20px;
					height: 16px;
					margin-left: 10px;

					.rightjt_img {
						width: 16px;
						height: 16px;
					}
				}

				.yuecardskeleton {
					height: 85px;
					width: 100%;

					.u-skeleton__wrapper__content__rows {
						border-radius: 16px;
						width: 100% !important;
						height: 85px !important;
						margin-top: 0px;
					}
				}


			}

			.verybottom_btn {
				margin-top: 42px;

				.zhuiaddbtn {
					width: 100%;

					text-align: center;
					color: #fff;
					font-size: 16px;

					border-radius: 56px;
					border: unset !important;
				}
			}
		}

		.u-popup__content {
			width: 90%;
			border-radius: 16px;
			padding: 21px 16px;
			box-sizing: border-box;

			.popupcontent {
				.popuptitle {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 12px;

					.popuptitle_left {
						font-size: 14px;
						color: #4c4c4c;
					}

					.popuptitle_right {
						width: 11px;
						height: 11px;
					}
				}

				.everytitles {
					font-size: 17px;
					color: #333;
					font-weight: 600;
				}

				.topcard {
					padding: 16px 16px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					background: #f5f6fa;
					border-radius: 21px;
					margin-top: 16px;
					margin-bottom: 58px;

					.text_area {
						height: 74px;
						width: 100% !important;
					}

					.topcard_bottom {
						width: 100%;
						display: flex;
						justify-content: flex-end;
						margin-top: 10px;
						align-items: center;

						.topcard_bottom_text {
							color: #999;
						}

						.clearbtn {
							font-size: 12px;
							color: #989898;
							padding: 2px 10px;
							background: #e7e7e7;
							border-radius: 16px;
							margin-left: 10px;
						}
					}
				}

				.topcards {
					overflow-y: auto;
					height: 320px;
					padding: 16px 16px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-between;
					background: #f5f6fa;
					border-radius: 21px;
					margin-top: 16px;
					margin-bottom: 25px;

					.text_area {
						width: 100%;
						height: 100%;
					}
				}

				.zhuiaddbtn {
					width: 100%;
					height: 53px;
					line-height: 53px;
					text-align: center;
					color: #fff;
					font-size: 16px;
					background: #333;
					border-radius: 56px;
					border: unset !important;
					margin-bottom: 22px;
				}

				.zhongzhibtn {
					width: 100%;
					height: 53px;
					line-height: 49px;
					text-align: center;
					color: #333;
					box-sizing: border-box;
					font-size: 16px;
					background: #fff;
					border: 2px solid #333 !important;
					border-radius: 56px;
				}

				.quicklycreate {
					width: 100%;
					background: #333;
					border-radius: 56px;
					margin-top: 25px;
					line-height: 58px;
					font-size: 17px;
					font-weight: 600;
					color: #fff;
				}
			}

			.popupcontent3 {
				.popupcontent3_nei {
					display: flex;
					align-items: center;
					justify-content: space-between;
					flex-wrap: wrap;
					height: 60vh;
					overflow-y: auto;

					.voiceevery {
						width: 42%;
						margin-bottom: 16px;
						padding: 10px;
						border-radius: 16px;
						border: 1px solid #e8e8e8;
						min-height: 85px;

						.everyone {
							display: flex;
							align-items: center;
							justify-content: space-between;

							.guoqi {
								width: 24px;
								height: 17px;
							}
						}

						.everyone_bottom {
							display: flex;
							align-items: center;
							flex-wrap: wrap;
							margin-top: 10px;

							.labels {
								margin-right: 5px;
							}
						}
					}

					.voiceevery_active {
						border: 2px solid #2979ff;
						width: 41.5%;
					}
				}

				.verybottom_btn {
					margin-top: 16px;
					display: flex;
					height: 53px;

					.zhuiaddbtn {
						width: 48%;
						height: 53px;
						line-height: 53px;
						text-align: center;
						color: #fff;
						font-size: 16px;
						background: #333;
						border-radius: 56px;
						border: unset !important;
						margin-bottom: 22px;
					}

					.zhongzhibtn {
						width: 48%;
						height: 53px;
						line-height: 49px;
						text-align: center;
						color: #333;
						font-size: 16px;
						background: #fff;
						border: 2px solid #333 !important;
						border-radius: 56px;
						margin-left: 3px;
					}
				}
			}
		}


	}
</style>