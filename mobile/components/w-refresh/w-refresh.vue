<template>
	<view>
		<slot></slot>
		
		<u-empty :text="text" :mode="mode" v-if="nothing"></u-empty>
		<u-loadmore :status="status" class="u-p-30" v-if="!nothing" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 'loading',
				nothing: false
			};
		},
		
		props: {
			refresh: {
				type: Function,
				required: true,
				default: () => {}
			},
			
			infinite: {
				type: Function,
				required: true,
				default: () => {}
			},
			
			mode: {
				type: String,
				default: 'list'
			},
			
			text: {
				type: String,
				default: '没有任何内容'
			}
		}
	}
</script>

<style lang="scss">

</style>
