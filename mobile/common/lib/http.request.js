/**
 * 这个地方的vm，其实就是我们在vue文件里面的this对象，所以，我们能在这里获取vuex的变量，比如存放在里面的uid啊，token啊之类的
 * 同时呢，我们也是可以在这里使用getApp().globalData方法，如果你把token放在getApp().globalData的话，也是可以使用的
 */

const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig({
		
		// #ifdef H5
		baseUrl: '',
		// #endif
		
		// #ifndef H5
		baseUrl: '',
		// #endif
		
		/**
		 * 如果将此值设置为true，拦截回调中将会返回服务端返回的所有数据response，而不是response.data
		 * 设置为true后，就需要在this.$u.http.interceptor.response进行多一次的判断，请打印查看具体值
		 */
		originalData: true,
		
		/**
		 * 自定义请求头
		 */
		header: {
			'content-type': 'application/json',
		}
	});
	
	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// config.header.Token = 'xxxxxx';
		
		/**
		 * 方式一，存放在vuex的token，假设使用了uView封装的vuex方式，见：https://uviewui.com/components/globalVariable.html
		 * config.header.token = vm.token;
		 */
		
		/**
		 * 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取
		 * config.header.token = vm.$store.state.token;
		 */
		
		/**
		 * 方式三，如果token放在了globalData，通过getApp().globalData获取
		 * config.header.token = getApp().globalData.username;
		 */
		
		/**
		 * 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的，所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
		 * const token = uni.getStorageSync('token');
		 * config.header.token = token;
		 */
		
		vm.token && (config.header['token'] = vm.token);
		
		return config; 
	}
	
	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
		
		/**
		 * 如果把originalData设置为了true，这里得到将会是服务器返回的所有的原始数据
		 * 判断可能变成了res.statueCode，或者res.data.code之类的，请打印查看结果
		 */
		if(res.statusCode == 200) {
			return res.data
		} else {
			uni.showToast({
				title: '网络异常',
				icon: 'none'
			})
		}
	}
}

export default {
	install
}
