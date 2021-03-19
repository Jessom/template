<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import './static/iconfont/iconfont.css';
	/*每个页面公共css */
	.theme-color { color: $u-type-primary; }
</style>
