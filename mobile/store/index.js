import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import modules from './modules/index.js'

let dateLife = {};

try{
	// 尝试获取本地是否存在dateLife变量，第一次启动APP时是不存在的
	dateLife = uni.getStorageSync('dateLife');
}catch(e){
	
}

// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
let stateSaveKeys = ['token', 'uid'];
// 保存变量到本地存储中
const dateLifeSave = function(key, value){
	// 判断变量名是否在需要存储的数组中
	if(stateSaveKeys.indexOf(key) != -1) {
		
		// 获取本地存储的dateLife对象，将变量添加到对象中
		let tmp = uni.getStorageSync('dateLife');
		// 第一次打开APP，不存在dateLife变量，故放一个{}空对象
		
		tmp = tmp ? tmp : {};
		tmp[key] = value;
		
		// 执行这一步后，所有需要存储的变量，都挂载在本地的dateLife对象中
		uni.setStorageSync('dateLife', tmp);
	}
}
const store = new Vuex.Store({
	state: {
		token: dateLife.token || null,
		uid: dateLife.uid || null,
		themeColor: '#FF1268',
		fileNames: modules.fileNames,
		appName: 'watasi'
	},
	
	mutations: {
		$uStore(state, payload) {
			// 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
			let stateArr = payload.name.split('.');
			let saveKey = '';
			let len = stateArr.length;
			if(len >= 2) {
				let obj = state[stateArr[0]];
				for(let i = 1; i < len - 1; i ++) {
					obj = obj[stateArr[i]];
				}
				obj[stateArr[len - 1]] = payload.value;
				saveKey = stateArr[0];
			} else {
				// 单层级变量，在state就是一个普通变量的情况
				state[payload.name] = payload.value;
				saveKey = payload.name;
			}
			// 保存变量到本地，见顶部函数定义
			dateLifeSave(saveKey, state[saveKey])
		}
	},
	modules: modules.modules
})

export default store
