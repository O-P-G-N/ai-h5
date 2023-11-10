<template>
	<view class="phone_reg">
		<u-navbar @leftClick="goBackUser" left-text="返回" title="注册" :safeAreaInsetTop="false"
			titleStyle="fontWeight: 600"></u-navbar>
		<view class="container_nei">
			<view class="title_h1">邮箱注册</view>
			<view class="inputmain">
				<view class="inputevery">
					<u-input v-model="from.email" placeholder="请输入邮箱">
						<button @click="getCode" slot="suffix" class="email_content_btn">获取验证码</button>
					</u-input>
				</view>
				<view class="inputevery">
					<u-input class="email_content_text" type="number" placeholder="请输入验证码" v-model="from.code"></u-input>
				</view>
				<view class="inputevery">
					<u-input v-model="from.password" placeholder="请输入密码" :password="eyeShow">
						<image @click="showHidden" slot="suffix" class="eye"
							:src="eyeShow?'../../static/login/close.png':'../../static/login/open.png'" mode=""></image>
					</u-input>
				</view>
				<view class="inputevery">
					<u-input v-model="from.invitationCode" placeholder="请输入邀请码">
					</u-input>
				</view>
				<view class="privacy">
					注册即表示您同意我们的<text class="blur">《使用条款》</text>以及我们的<text class="blur">《隐私和政策》</text>
				</view>
				<view class="btns">
					<view class="rightforget">忘记密码？</view>
					<ai-button :disabled="forbidden" :loading="loading" class="next-btn loginbtn" @click="regBtn">注册</ai-button>
					<view class="register">
						已有账户？
						<text class="blur" @click="loginNow">立即登录</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				from: {
					email: "", //邮箱号
					password: "", //密码
					code:"",//验证码
					invitationCode: "", //邀请码
				},
				eyeShow: true, //密码显示
				forbidden:false,//是否禁用
				loading:false,//等待状态
			};
		},
		onLoad(option) {
			if(option.invitationCode){
				this.from.invitationCode=option.invitationCode;
			}
		},
		methods: {
			// 返回登录首页
			goBackUser() {
				uni.navigateTo({
					url: `/pages/loginReg/reg_account`
				});
			},
			// 显示隐藏
			showHidden() {
				this.eyeShow = !this.eyeShow
			},
			// 获取验证码
			getCode() {
				if(this.from.email==""){
					uni.$u.toast('请输入邮箱号');
					return
				}else{
					uni.request({
						url: `/aicommon/sendCode`,
						method: "GET",
						data: {
							to:this.from.email,
							type: 2
						},
						success: (res) => {
							if (res.res.code == 200) {
								uni.$u.toast('验证码发送成功');
							}
						}
					});
				}
			},
			// 邮箱注册
			regBtn() {
				let passwordPatrn =
					/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”ABCDEFGHIJKLMNOPQRSTUVWXYZ【】、；‘'，。、]/im
				let emailPattern  = /^[A-Za-z0-9]+([-._][A-Za-z0-9]+)*@[A-Za-z0-9]+(-[A-Za-z0-9]+)*(\.[A-Za-z]{2,6}|[A-Za-z]{2,4}\.[A-Za-z]{2,3})$/
				if (!emailPattern.test(this.from.email)) {
					uni.showToast({
						title: "请输入正确的邮箱",
						icon: "none",
						success: function(res) {},
					})
					return
				}else if (this.from.code == "") {
					uni.showToast({
						title: "请输入验证码",
						icon: "none",
						success: function(res) {},
					})
					return
				}else if (this.from.password == "") {
					uni.showToast({
						title: "请输入密码",
						icon: "none",
						success: function(res) {},
					})
					return
				} else if (this.from.password.length < 8) {
					uni.showToast({
						title: "至少有8个字符",
						icon: "none",
						success: function(res) {},
					})
					return
				} else if (!passwordPatrn.test(this.from.password)) {
					uni.showToast({
						title: "有一个大写字母或字符",
						icon: "none",
						success: function(res) {},
					})
					return
				}else{
					this.forbidden=true;
					this.loading=true
					uni.request({
						url: '/nt/registerEmail',
						method:"POST",
						data: this.from,
						success: (res) => {
							// uni.$u.toast('注册成功');
							this.forbidden=false;
							this.loading=false;
							uni.showToast({
								title: "注册成功",
								success: function(res1) {
									let time = setTimeout(() => {
										clearTimeout(time)
										uni.setStorageSync("user", res.data)
										uni.switchTab({
											url: `/pages/index/index`
										});
									}, 1000)
								},
							})
						}
					});
				}
			},
			// 立即登录
			loginNow() {
				uni.navigateTo({
					url: `/pages/loginReg/login`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.phone_reg {
		width: 100wh;
		height: 100vh;
		display: flex;
		align-items: center;

		box-sizing: border-box;

		.container_nei {
			padding: 53px 42px;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			box-sizing: border-box;

			.title_h1 {
				width: 100%;
				font-size: 32px;
				font-family: Alibaba PuHuiTi -113 Black, Alibaba PuHuiTi 20;
				font-weight: 1000;
				color: #000;
				text-align: center;
				display: flex;
				justify-content: center;
			}

			.inputmain {
				width: 100%;
				margin-top: 21px;

				.inputevery {
					margin-top: 18px;
					width: 100%;
					height: 53px;
					background: #eff3fa;
					border-radius: 12px 12px 12px 12px;
					display: flex;
					align-items: center;
					.email_content_btn {
						padding: 2px 5px;
						border-radius: 10px;
						font-size: 12px;
						height: 32px;
						box-sizing: border-box;
						background: #00bfff;
						color: #fff;
					}
					uni-button:after {
						border: none;
					}

					.u-input {
						background: #eff3fa;
						padding: 0px 16px !important;
					}

					.inputevery_content {
						background-color: rgb(239, 243, 250);
						width: 100%;
						box-sizing: border-box;

						.country-intl-input-wrap {

							border: 0 !important;
							border-radius: 0 !important;

							.country-intl-input {
								box-sizing: border-box;
								border-bottom-left-radius: 0 !important;
								border-bottom-right-radius: 0 !important;
								background: #eff3fa !important;
							}

							.country-intl-label {
								background: #eff3fa !important;
							}
						}

						.country-intl-label {
							box-sizing: border-box;
						}

						.vue-country-list {
							width: 100%;
							margin: 0;
							padding: 0;
							list-style: none;
							font-size: 16px;
						}
					}

					.phone_tip {
						.u-text__value {
							display: inline-block;
							width: 42px;
							font-size: 17px !important;
							font-family: PingFang SC-Medium, PingFang SC;
							font-weight: 700 !important;
							color: #000 !important;
						}

					}

					.eye {
						width: 21px;
						height: 21px;
					}
				}

				.privacy {
					font-size: 14px;
					font-family: PingFang SC-Regular, PingFang SC;
					font-weight: 400;
					color: rgba(0, 0, 0, .5);

					.blur {
						color: #2961ff !important;
					}
				}

				.btns {
					margin-top: 53px;

					.rightforget {
						text-align: center;
						color: #2961ff;
						display: flex;
						justify-content: center;
					}

					.loginbtn {
						width: 100%;
						background: #94b0ff;
						border-radius: 12px 12px 12px 12px;
						color: #fff;
						height: 42px;
						display: flex;
						justify-content: center;
						align-items: center;
						margin: 16px 0;
					}

					.register {
						width: 100%;
						text-align: center;
						height: 21px;
						font-size: 14px;
						font-family: PingFang SC-Regular, PingFang SC;
						font-weight: 400;
						color: #000;
						display: flex;
						justify-content: center;

						.blur {
							color: #2961ff !important;
						}
					}
				}
			}
		}
	}
</style>