<template>
	<view class="phone_login">
		<u-navbar @leftClick="goBackUser" left-text="返回" title="手机号" :safeAreaInsetTop="false"
			titleStyle="fontWeight: 600"></u-navbar>
		<view class="container_nei">
			<view class="title_h1">EXGPT</view>
			<view class="title_h3">欢迎来到EXGPT</view>
			<view class="inputmain">
				<view class="inputevery">
					<view class="inputevery_content">
						<vue-country-intl type="phone" @onChange="onChange" v-model="from.countryCode"></vue-country-intl>
					</view>
				</view>
				<view class="inputevery">
					<u-input v-model="from.username" placeholder="手机号">
						<u--text class="phone_tip" :text="countryCode" slot="prefix"></u--text>
					</u-input>
				</view>
				<view class="inputevery">
					<u-input v-model="from.password" placeholder="密码" :password="eyeShow">
						<image @click="showHidden" slot="suffix" class="eye"
							:src="eyeShow?'../../static/login/close.png':'../../static/login/open.png'" mode=""></image>
					</u-input>
				</view>
				<view class="jzmm">
					<u-checkbox-group v-model="checkboxValue" placement="column" @change="checkboxChange">
						<u-checkbox label="记住密码" :name="1">
						</u-checkbox>
					</u-checkbox-group>
				</view>
				<view class="privacy">
					登录即表示您同意我们的<text class="blur">《使用条款》</text>以及我们的<text class="blur">《隐私和政策》</text>
				</view>
				<view class="btns">
					<view class="rightforget" @click="forgotPassword">忘记密码？</view>
					<ai-button :disabled="from.username&&from.password?false:true" class="next-btn loginbtn"
						@click="loginBtn">登录</ai-button>
					<view class="register">
						还没有账户？
						<text class="blur" @click="regAccount">立即注册</text>
					</view>
				</view>
			</view>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				countryCode: "+", //国家代码
				eyeShow: true, //密码显示
				checkboxValue: [], //是否记住密码
				from: {
					username: "", //手机号码
					password: "", //密码
					countryCode: "", //国家编码
					type:1,//类型
				}
			};
		},
		onShow() {
			if(uni.getStorageSync("phoneCheck")==1){
				this.checkboxValue.push(1)
				this.from=uni.getStorageSync("phone")
				this.countryCode= `+${this.from.countryCode}`
			}
		},
		created() {},
		methods: {
			// 返回登录首页
			goBackUser() {
				uni.navigateTo({
					url: `/pages/loginReg/login`
				});
			},
			// 选择国家
			onChange(selected) {
				console.log(selected);
				this.countryCode = `+${selected.dialCode}`
				this.from.countryCode = selected.dialCode;
			},
			// 显示隐藏
			showHidden() {
				this.eyeShow = !this.eyeShow
			},
			// 忘记密码
			forgotPassword(){
				uni.navigateTo({
					url: `/pages/loginReg/phone_asswordRet`
				});
			},
			// 登录
			loginBtn() {
				let that=this
				let patrn =
					/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”ABCDEFGHIJKLMNOPQRSTUVWXYZ【】、；‘'，。、]/im
				if (this.from.countryCode == "") {
					uni.showToast({
						title: "请正确选择国家",
						icon: "none",
						success: function(res) {},
					})
					return
				} else if (this.from.username == "") {
					uni.showToast({
						title: "请输入正确的手机号",
						icon: "none",
						success: function(res) {},
					})
					return
				} else if (this.from.password == "") {
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
				} else if (!patrn.test(this.from.password)) {
					uni.showToast({
						title: "有一个大写字母或字符",
						icon: "none",
						success: function(res) {},
					})
					return
				} else {
					uni.request({
						url: '/nt/login',
						method: "POST",
						data: this.from,
						success: (res) => {
							if(that.checkboxValue[0]==1){
								uni.setStorageSync("phoneCheck",that.checkboxValue[0])
								uni.setStorageSync("phone",that.from)
							}
							uni.showToast({
								title: "登陆成功",
								success: function() {
									 let time=setTimeout(()=>{
										 clearTimeout(time)
										 console.log(res);
										uni.setStorageSync("user",res.data)
										uni.switchTab({
											url: `/pages/index/index`
										});
									},1000)
								},
							})
							
						}
					});
				}
			},
			// 注册账号
			regAccount(){
				uni.navigateTo({
					url: `/pages/loginReg/reg_account`
				});
			},
			// 勾选记住密码
			checkboxChange(val) {
			if(val[0]==1){
			}else{
				uni.removeStorageSync("phoneCheck")
				uni.removeStorageSync("phone")
			}
			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	::v-deep.phone_login {
		width: 100%;
		height: 100%;

		box-sizing: border-box;

		.container_nei {
			padding: 21px;
			padding-top: 96px;
			width: 100%;
			box-sizing: border-box;

			.title_h1 {
				width: 100%;
				font-size: 32px;
				font-family: Alibaba PuHuiTi -113 Black, Alibaba PuHuiTi 20;
				font-weight: 1000;
				color: #000;
				display: flex;
				justify-content: center;
			}

			.title_h3 {
				margin-top: 10px;
				width: 100%;
				height: 21px;
				font-size: 19px;
				font-family: Alibaba PuHuiTi -53 Regular, Alibaba PuHuiTi 20;
				font-weight: 400;
				color: #000;
				line-height: 21px;
				margin-bottom: 57px;
				display: flex;
				justify-content: center;
			}

			.inputmain {
				idth: 100%;
				margin-top: 21px;

				.inputevery {
					margin-top: 18px;
					width: 100%;
					height: 53px;
					background: #eff3fa;
					border-radius: 12px 12px 12px 12px;
					display: flex;
					align-items: center;

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
							border-right: 1px solid #ccc;
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

				.jzmm {
					font-size: 16px !important;
					padding: 13px 0;
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
					margin-top: 198px;

					.rightforget {
						text-align: center;
						color: #2961ff;
						display: flex;
						justify-content: center;
					}

					.loginbtn {
						width: 357px;
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