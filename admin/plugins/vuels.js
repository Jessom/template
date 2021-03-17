/*
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-09 17:18:19
 * @LastEditTime: 2021-03-09 17:25:46
 * @LastEditors: watasi
 */
import Vue from 'vue'
import Storage from 'vue-ls'

Vue.use(Storage, {
  namespace: 'vuels_',
  name: 'ls',
  storage: 'local'
})
