module.exports = {
	data() {
		return {
			pageIndex: 1
		}
	},
	
	onReachBottom(e) {
		if(this.$refs.refresh.status == 'loadmore') {
			this.$refs.refresh.status = 'loading'
			this.pageIndex += 1
			
			this.$refs.refresh.infinite(done => {
				if(!done) {
					this.$refs.refresh.status = 'nomore'
				} else {
					this.$refs.refresh.status = 'loadmore'
				}
			})
		}
	},
	
	onLoad() {
		uni.startPullDownRefresh();
	},
	
	async onPullDownRefresh() {
		this.pageIndex = 1
		
		this.$refs.refresh.refresh(done => {
			uni.stopPullDownRefresh()
			if(done && this.pageIndex == 1) {
				this.$refs.refresh.nothing = true
			} else if(done) {
				this.$refs.refresh.status = 'loadmore'
			}
		})
	}
}
