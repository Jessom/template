<template>
	<view>
		
		<login :footer="false">
			<u-form :model="form" ref="form" class="login-form">
				<u-form-item :border-bottom="false" prop="tel">
					<u-icon name="shouji1" custom-prefix="wa" size="40"></u-icon>
					<u-input v-model="form.tel" placeholder="请输入手机号" :clearable="false" />
				</u-form-item>
				
				<u-form-item :border-bottom="false" prop="code">
					<u-icon name="yanzhengma" size="40" custom-prefix="wa"></u-icon>
					<u-input type="number" maxlength="6" v-model="form.code" placeholder="请输入验证码" :clearable="false" />
					
					<template slot="right">
						<u-button slot="right" type="success" size="mini" @click="getCode">{{codeTips}}</u-button>
					</template>
				</u-form-item>
			</u-form>
			
			<view class="u-m-t-30">
				<u-button type="primary" shape="circle" @click="onSubmit">登录</u-button>
			</view>
		</login>
		
		<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
	</view>
</template>

<script>
	import Login from './components/login.vue'
	export default {
		components: { Login },
		
		data() {
			return {
				form: {
					tel: '',
					code: ''
				},
				codeTips: '',
				rules: {
					tel: [{ required: true, message: '请输入姓名', trigger: ['blur', 'change'] }]
				}
			};
		},
		
		onReady() {
			this.$refs.form.setRules(this.rules)
		},
		
		methods: {
			onSubmit() {
				this.$refs.form.validate(valid => {
					console.log(valid)
					if(valid) {
						
					} else {
						
					}
				})
			},
			
			// 获取验证码
			getCode() {
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码',
						mask: true
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			
			codeChange(text) {
				this.codeTips = text;
			},
		}
	}
</script>

<style lang="scss">
@import './login.scss';
</style>
