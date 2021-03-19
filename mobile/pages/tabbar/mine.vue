<template>
	<view>
		<u-button type="primary" @click="onClick('/mine/login')">登录</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		
		methods: {
			onClick(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss">
.w-login-wrap {
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background: #fff url('/static/image/login_bg.png') center / cover no-repeat;
}

</style>
