import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

import store from '@/store';

// 引入uView提供的对vuex的简写法文件
let vuexMixin = require('@/store/$u.mixin.js');
Vue.mixin(vuexMixin);

const app = new Vue({
	store,
    ...App
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpRequest from '@/common/lib/http.request.js';
import httpApi from '@/common/lib/http.api.js';
Vue.use(httpRequest, app);
Vue.use(httpApi, app);

app.$mount()
