## 下拉刷新、上拉加载
- **w-refresh**组件，必须有`ref="refresh"`属性
- **page.json**中，必须设置页面`enablePullDownRefresh: true`

```
<template>
	<w-refresh ref="refresh" :refresh="onRefresh" :infinite="onInfinite">
		<!-- .... -->
	</w-refresh>
</template>

<script>
	import WRefreshMixin from '@/components/w-refresh/w-refresh-mixin.js'
	export default {
		mixins: [WRefreshMixin],
		
		methods: {
			async onRefresh(done) {
				const res = await this.getData()
				// 结束下拉刷新
				done()
			},
			
			async onInfinite(done) {
				const hasNext = await this.getData()
				if(hasNext) {
					// 还有数据，继续加载下一页
					done(true)
				} else {
					// 没有更多数据了，结束上拉加载
					done(false)
				}
			},
			
			getData() {
				return new Promise(async(resolve, reject) => {
					const res = await this.$u.post('https://wwww.xxx.com/api/list', {
						"count":"20",
						"page": this.pageIndex, 	// 在 WRefreshMixin 有定义 pageIndex
					})
					if(this.pageIndex == 1) {
						this.list = []
					}
					this.list = this.list.concat(res.data)
					resolve(res.data.hasNext)
				})
			}
		}
	}
</script>
```