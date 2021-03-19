<template>
	<view class="w-login">
		
		<view class="w-login_header">
			<image src="/static/logo.png" mode="widthFix" class="w-login_header-logo"></image>
		</view>
		
		<view class="w-login_body">
			<slot></slot>
		</view>
		
		<view class="w-login_footer" v-if="footer">
			<u-divider>第三方账号登录</u-divider>
			<view class="w-login_footer-btns">
				<u-icon name="weixin-fill" size="70" color="#00cd12"></u-icon>
				<u-icon name="qq-fill" size="70" color="#2f83ff"></u-icon>
				<navigator url="tellogin">
					<u-icon name="shouji" custom-prefix="wa" size="66" color="rgb(29,161,242)"></u-icon>
				</navigator>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props: {
			footer: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style lang="scss">
.w-login {
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background: #fff url('/static/image/login_bg.png') center / cover no-repeat;
	
	&_header {
		$logo: 160rpx;
		text-align: center;
		padding-top: calc(var(--status-bar-height) + 200rpx);
		padding-bottom: 100rpx;
		&-logo {
			width: $logo;
			vertical-align: middle;
		}
	}
	
	&_body {
		padding: 0 120rpx;
	}
	
	&_footer {
		padding: 40rpx 120rpx;
		margin-top: 160rpx;
		&-btns {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 40rpx;
		}
	}
}
</style>
