const install = (Vue, vm) => {
	let getMemberInfo = () => {
		return new Promise((resolve, reject) => {
			if(vm.uid) {
				vm.$u.post('/user/user/getMemberInfo', {
					member_id: vm.uid
				}).then(res => {
					vm.$u.vuex('memberInfo', res.data.member_info)
					resolve()
				})
			}
		})
	}
	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {
		getMemberInfo
	};
}

export default {
	install
}
