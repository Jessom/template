<template>
	<view>
		
		<login :footer="false">
			<u-form :model="form" ref="form" class="login-form">
				<u-form-item :border-bottom="false" prop="name">
					<u-icon name="user" size="40" custom-prefix="wa"></u-icon>
					<u-input v-model="form.name" placeholder="请输入用户名" :clearable="false" />
				</u-form-item>
				
				<u-form-item :border-bottom="false" prop="password">
					<u-icon name="lock" size="40" custom-prefix="wa"></u-icon>
					<u-input type="password" v-model="form.password" placeholder="请输入密码" :clearable="false" />
				</u-form-item>
				
				<u-form-item :border-bottom="false" prop="password2">
					<u-icon name="lock" size="40" custom-prefix="wa"></u-icon>
					<u-input type="password" v-model="form.password2" placeholder="请再次输入密码" :clearable="false" />
				</u-form-item>
			</u-form>
			
			<view class="u-m-t-30">
				<u-button type="primary" shape="circle" @click="onSubmit">登录</u-button>
				<view class="u-font-26 u-text-center u-m-t-20">
					<text class="u-tips-color">已有账号？</text>
					<navigator class="theme-color" open-type="navigateBack" style="display: inline-block;">立即登录</navigator>
				</view>
			</view>
		</login>
		
	</view>
</template>

<script>
	import Login from './components/login.vue'
	export default {
		components: { Login },
		
		data() {
			return {
				form: {
					name: '',
					password: '',
					password2: ''
				},
				rules: {
					name: [{ required: true, message: '请输入姓名', trigger: ['blur', 'change'] }]
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
			}
		}
	}
</script>

<style lang="scss">
@import './login.scss';
</style>
