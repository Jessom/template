<template>
	<w-refresh ref="refresh" :refresh="onRefresh" :infinite="onInfinite">
		
	</w-refresh>
</template>

<script>
	import WRefreshMixin from '@/components/w-refresh/w-refresh-mixin.js'
	export default {
		mixins: [WRefreshMixin],
		
		data() {
			return {
				
			};
		},
		
		methods: {
			onRefresh(done) {
				setTimeout(() => {
					done(true)
				}, 1000)
			},
			
			onInfinite(done) {
				done(true)
			}
		}
	}
</script>

<style lang="scss">

</style>
